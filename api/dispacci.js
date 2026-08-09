// I DISPACCI — il feed di tipicita.it, servito come JSON (BRIEF-HOME §6).
//
// Perché una funzione e non una fetch dal browser: il feed sta su
// tipicita.it e la pagina su anigami.it. Il server del feed non dichiara
// `Access-Control-Allow-Origin`, quindi una fetch dal browser viene
// bloccata dal CORS. Questa funzione fa da ponte: scarica, converte,
// serve. Niente CORS, e nessun carico aggiuntivo su tipicita.it perché
// la risposta viene messa in cache sul bordo di Vercel.
//
// ⚠️ L'host è `tipicita.it` SENZA www: `www.tipicita.it` risponde 301 e
// la redirezione perde la query string.
//
// Categorie (verificate il 09/08/2026 su selezione_feed_rss.php):
//   0 tutti · 27 mostre · 28 sagre · 29 eventi · 30 incontri
//   31 terre del tartufo · 32 TIPICITÀ FESTIVAL · 33 territorio
//   34 bandi e opportunità · 35 prodotti · 36 sostenibilità
//   37 dalla vigna alla tavola · 38 TIPICITÀ IN BLU · 39 personaggi
//   41 GRAND TOUR DELLE MARCHE · 42 TIPICITÀ EVO

const FEED = 'https://tipicita.it/rss.php?idCategoria=';
const CATEGORIE_VALIDE = new Set([0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42]);
const QUANTI = 12;
const CACHE_SECONDI = 900; // quindici minuti

// Le entità del feed sono numeriche esadecimali (&#x2019;) più le cinque
// classiche. Nessuna libreria: sono quelle e basta.
function decodifica(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

const dentro = (blocco, tag) => {
  const m = blocco.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`));
  return m ? decodifica(m[1]) : '';
};

export default async function handler(req, res) {
  const chiesta = Number.parseInt(req.query?.categoria ?? '0', 10);
  const categoria = CATEGORIE_VALIDE.has(chiesta) ? chiesta : 0;

  try {
    const risposta = await fetch(FEED + categoria, {
      headers: { 'User-Agent': 'anigami.it/1.0 (+https://anigami.it)' },
      signal: AbortSignal.timeout(8000),
    });
    if (!risposta.ok) throw new Error('feed ' + risposta.status);

    const xml = await risposta.text();
    const dispacci = xml
      .split('<item>')
      .slice(1)
      .map((blocco) => {
        const foto = blocco.match(/<enclosure[^>]*\surl="([^"]+)"/);
        return {
          titolo: dentro(blocco, 'title'),
          link: dentro(blocco, 'link'),
          data: dentro(blocco, 'pubDate'),
          // l'attributo `length` dell'enclosure vale sempre 123456: è un
          // segnaposto del generatore e non va usato per niente
          foto: foto ? foto[1].replace(/\/[^/]+\/\.\.\//, '/') : null,
        };
      })
      // il titolo è l'unica cosa che serve al ticker: senza, la voce si scarta
      .filter((d) => d.titolo && d.link)
      .slice(0, QUANTI);

    // Cache sul bordo: la funzione viene eseguita al massimo una volta ogni
    // quindici minuti, il resto lo serve la CDN. stale-while-revalidate
    // tiene la riga viva anche mentre il feed si aggiorna.
    res.setHeader('Cache-Control', `public, s-maxage=${CACHE_SECONDI}, stale-while-revalidate=3600`);
    res.status(200).json({ categoria, dispacci });
  } catch (errore) {
    // FALLBACK SILENZIOSO (§6): se il feed non risponde si restituisce una
    // lista vuota con 200, non un errore. La pagina, trovando zero
    // dispacci, non disegna la riga — meglio niente che uno scheletro.
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    res.status(200).json({ categoria, dispacci: [], errore: String(errore.message || errore) });
  }
}
