# Bilingue — passo 2: l'inglese della home

Consegna Cowork → Code, 2 ottobre 2026. Primo blocco di testi inglesi, da
aggiungere come oggetto `en` in `src/i18n/home.js` accanto a `it`.

---

## 0. Tre cose prima del testo

**① La riga di visione è stata scelta — e va messa anche in italiano.** Fino a oggi
`it.visione` valeva `'Placeholder per una frase di opening'`, e quel segnaposto si
leggeva a schermo: era la prima frase del sito. Paolo ha scelto il 02/10, scartando
le tre candidate del brief originale e dettando il concetto da cui ricavarla —
*«per comprendere davvero l'unicità va messa in relazione alle realtà che da essa
differiscono»*, senza usare la parola «territorio».

Due righe da cambiare, una per lingua:

```js
it: { … visione: 'Niente è unico da solo.', … }
en: { … visione: 'Nothing is unique on its own.', … }
```

**Il punto fermo fa parte della frase e non si toglie**: è quello che la rende
un'affermazione invece di uno slogan. Nessun corsivo, nessuno spezzamento in due
righe, nessuna maiuscola di troppo: è una riga sola e va lasciata respirare. In
inglese la tensione fra *unique* e *on its own* è la stessa che in italiano c'è fra
*unico* e *solo* — la frase viaggia, ed è il motivo per cui regge in tutte e due le
lingue.

**② I quattro link puntano alle pagine italiane, e non è una svista.** Nell'oggetto
`en` gli `href` dei quattro progetti restano `/tipicita/`, `/grand-tour-delle-marche/`,
`/tipicita-in-blu/`, `/evo/` — tranne Tipicità, che l'inglese ce l'ha già e quindi
punta a `/en/tipicita/`. Mandare un lettore inglese su `/en/evo/` prima che esista
sarebbe un 404; mandarlo sulla pagina italiana è onesto. **Ogni volta che una
landing diventa bilingue, il suo `href` nell'oggetto `en` della home passa a
`/en/…`:** segnatelo come una riga di manutenzione, perché è il genere di dettaglio
che resta indietro.

**③ Manca una pagina.** Nel brief precedente ho elencato sei pagine e ho dimenticato
`/relazione-di-impatto/`, che è pubblica, è linkata dalla home ed è quella che per
una società benefit **deve** stare sul sito per obbligo di legge. Va estratta in
`src/i18n/relazione-di-impatto.js` come le altre, con il solo `it`: l'inglese arriva
con gli altri blocchi.

**Sulla lingua:** inglese britannico (`en-GB`). È un'impresa italiana che parla
all'Europa — all'Adriatico, a Interreg, agli atenei delle due sponde — e l'ortografia
britannica è quella in cui quel mondo scrive. Vale per tutte le pagine, non solo per
questa.

**Una scelta di traduzione che vale la pena dichiarare:** *territorio* non diventa
quasi mai *territory*. In inglese «territory» suona amministrativo o coloniale; dove
l'italiano usa la parola in senso pieno si rende con **place**, e si tiene
*territorial* solo dove è termine tecnico europeo — *territorial marketing*, che nei
bandi si scrive così. **società benefit** invece **non si traduce**: è una forma
giuridica italiana, e il blocco che la spiega perde senso se diventa *benefit
corporation*. Resta in italiano, in corsivo la prima volta.

---

## 1. L'oggetto `en` da aggiungere a `src/i18n/home.js`

```js
  en: {
    meta: {
      title: 'Imagina Srl Società Benefit',
      description:
        'Imagina Srl Società Benefit, Camerino, Italy: territorial marketing and integrated communication since 1991. You don\'t promote a place — you put it in a position to tell its own story.',
    },

    titolo: 'Imagina Srl Società Benefit',

    cornice: {
      societa: 'Imagina Srl Società Benefit',
      chiSiamo: 'Who we are',
      luogo: 'Camerino, Marche · since 1991',
    },

    // La riga di visione, scelta da Paolo il 02/10. In italiano:
    // «Niente è unico da solo.» — va aggiornata anche lì, dove oggi
    // c'è ancora il segnaposto. Il punto fermo fa parte della frase.
    visione: 'Nothing is unique on its own.',

    segni: {
      etichetta: 'the projects',
      ariaLabel: 'The projects',
      voci: [
        { id: 'tipicita', simbolo: 'mk-tipicita', nome: 'Tipicità', href: '/en/tipicita/', acceso: '#05606a' },
        { id: 'grand-tour', simbolo: 'mk-grand-tour', nome: 'Grand Tour delle Marche', href: '/grand-tour-delle-marche/', acceso: '#d1544c' },
        { id: 'tipicita-in-blu', simbolo: 'mk-tipicita-in-blu', nome: 'Tipicità in Blu', href: '/tipicita-in-blu/', acceso: '#209fb6' },
        { id: 'evo', simbolo: 'mk-evo', nome: 'EVO', href: '/evo/', acceso: '#b8497a' },
      ],
    },

    dispacci: { ariaLabel: 'Dispatches', locale: 'en-GB' },

    sipario: {
      titolo: 'Imagina Srl Società Benefit',
      chiudi: 'Close',
      blocchi: [
        {
          titolo: 'Who we are',
          par: [
            'Imagina is a <i>società benefit</i> based in Camerino, in the Marche. Since 1991 it has worked in territorial marketing and integrated communication, with a clear specialisation in two sectors: agri-food, and tourism and territorial development.',
            'It is a micro-enterprise working on an international scale, and that holds together for a precise reason: Imagina is the lead organisation of a public–private partnership that today counts around three hundred bodies, public and private, which share a belief in the value of place. It is not a network of endorsements: it is the structure we work with all year round.',
            'Out of these three decades comes the body of work that lives under the umbrella brand Tipicità and its offshoots — the <a href="/en/tipicita/">festival in Fermo</a>, the <a href="/grand-tour-delle-marche/">Grand Tour delle Marche</a>, <a href="/tipicita-in-blu/">Tipicità in Blu</a> and <a href="/evo/">EVO</a>. Four independent projects, four languages, one network.',
          ],
        },
        {
          titolo: 'How we work',
          par: [
            'Contamination, osmosis, cross-fertilisation: this is the fuel Imagina uses to set networking in motion between supply chains and between places. Long networks and short ones, producing new accounts and new openings, using global crossmedia to carry local specificity.',
            'The method has an order, and it costs time. First you listen to what a place has to say, and that takes months. Then you meet different communities and compare their differences instead of smoothing them over. Then you bring the positioning into focus — local in substance, global in outlook. Only at the end do you build tailor-made actions, because no two communities resemble each other closely enough to deserve the same format.',
            'The work arrives turnkey: feasibility analysis, design, coordination, general organisation. And it arrives from a team of professionals with years of experience in Italy and abroad in planning, design and integrated communication.',
          ],
        },
        {
          titolo: 'What we do',
          par: [
            '<b>Territorial marketing and development</b> — marketing projects, coaching and territorial networking; creating and developing umbrella brands; cross-fertilisation between supply chains; bottom-up routes to tourism development; co-creation of a place\'s assets; general and thematic tourist itineraries; transnational cooperation projects.',
            '<b>Events and formats</b> — turnkey design, organisation and management of festivals, congresses, conferences, trade fairs and exhibitions; hackathons; professional training courses; press tours and educational tours.',
            '<b>Communication</b> — crossmedia campaigns on the web, on social platforms and through tailored direct mailing; press office and relations with local, national and trade media; public relations plans; image consultancy; video production; publishing, from guides to monographs.',
          ],
        },
        {
          titolo: 'Where',
          par: [
            'Imagina works in almost every Italian region. Beyond the border, a network of relationships built up over time has taken it to Germany, France, Spain, the United Kingdom, Slovenia, Croatia, Montenegro and Albania, and further afield to the United States, Canada, Argentina, the United Arab Emirates, Norway and Japan.',
          ],
        },
        {
          // ⚠️ VALE ANCHE QUI: questo blocco SPIEGA L'ISTITUTO GIURIDICO,
          // non celebra l'azienda. Non accorciare, non alleggerire, non
          // sostituire «società benefit» con «benefit corporation»: è una
          // forma giuridica italiana e il paragone americano la falserebbe.
          titolo: 'What it means to be a società benefit',
          par: [
            'A <i>società benefit</i> is not a certification and it is not an award. It is a legal form, introduced in Italy by the 2016 budget law — law 208/2015, paragraphs 376 to 384 — which made Italy the first country in Europe to write it into its statute book.',
            'Nor is it the non-profit sector. A <i>società benefit</i> remains a company that makes profits and distributes them. What changes is the corporate purpose: alongside the aim of profit, one or more common-benefit purposes are written into the articles of association. From that moment they are no longer intentions. They are obligations, and they bind the directors, who have to balance three interests instead of one: that of the shareholders, that of the stated purposes, and that of the people the company\'s activity has an effect on.',
            'Three concrete duties follow. An impact officer has to be appointed. An impact report has to be drawn up every year, attached to the financial statements and published on the company\'s website. And that report cannot be a piece of storytelling: impact has to be measured against an external, independent assessment standard covering four areas — governance, workers, other stakeholders, and the environment.',
            'There is a penalty as well, and it is the part that makes this serious. A company that calls itself a <i>società benefit</i> without genuinely pursuing the purposes it has written down falls under the rules on misleading advertising, supervised by the Italian competition and market authority. It is not a label you hang on the door: it is a commitment that costs something, and one that somebody can come and check.',
            '<b>For Imagina</b> this means one thing, and it fits in a single line: looking after the places we work in is not what surrounds the job, it is the job. Bringing out a region\'s talents across the whole range — the artisans and the researchers, the producers and the students, the person keeping a shop open in a hill village and the one studying the sea in a laboratory. Profit keeps the structure standing; the purpose is that the places we work in are better off than we found them.',
          ],
        },
      ],
      accessiAria: 'More, and how to reach us',
      accessi: [
        { label: 'Production notes', href: '/note-di-produzione/' },
        { label: 'Impact report', href: '/relazione-di-impatto/' },
        { label: 'Take the stage', href: '/entra-in-scena/' },
        { label: 'info@anigami.it', href: 'mailto:info@anigami.it' },
      ],
      piede: 'Viale Giacomo Leopardi, 14 – Camerino (MC), Italy · VAT/Tax code IT 01115460436',
    },

    sd: {
      name: 'Imagina Srl Società Benefit',
      streetAddress: 'Viale Giacomo Leopardi, 14',
      addressLocality: 'Camerino',
      addressRegion: 'Marche',
    },
  },
```

## 2. Le scelte che non sono ovvie

**«Entra in scena» → «Take the stage».** La home vive su un lessico di teatro —
sipario, pellicola, quadro, moviola — e in inglese quel registro va tenuto: *take the
stage* è un invito, non una descrizione, ed è quello che la pagina è.

**«Note di produzione» → «Production notes»**, che in inglese è esattamente il
termine di scena. **«Relazione di impatto» → «Impact report»**: è la formula con cui
quel documento viene chiamato in tutta la letteratura europea, e chi la cerca cerca
quella.

**«racconti nuovi» → «new accounts», non «new stories».** *Story* in inglese
commerciale è ormai la parola del marketing di sé; *account* tiene il senso di
racconto senza la patina.

**«circa trecento entità» → «around three hundred bodies».** *Entities* è freddo e
legale; *bodies* è il termine che si usa per enti pubblici e privati insieme.

**«Autorità Garante della Concorrenza e del Mercato» → «the Italian competition and
market authority».** La sigla AGCM non dice niente a un lettore straniero; la
perifrasi sì, e resta esatta.

## 3. Che cosa serve dopo

La rotta `/en/` della home va creata e il selettore di lingua si accende sulla home,
con gli `hreflang` come li ha già Tipicità: `it` sulla radice, `en` sotto `/en/`,
`x-default` sull'italiano.

Prossimo blocco che consegno: **Tipicità in Blu**, che è il più lungo e quello il cui
pubblico sta dichiaratamente dall'altra parte dell'Adriatico.

Commit suggerito: `i18n: la home parla inglese`.
