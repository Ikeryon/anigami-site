# TESTI-TRACCE — consegna Cowork → Code (06/08/2026)

> **Patto di metodologia (richiesta della sessione Code, 06/08):** Cowork non
> edita più `index.astro` nella working copy. Le proposte viaggiano in file
> separati come questo; Code le trascrive in commit puliti.
> I testi qui dentro sono BOZZE Cowork validate nell'impianto da Paolo
> (sintesi delle due fonti timeline, 06/08) — le singole frasi restano da
> validare parola per parola con lui.

## 1. Cosa cambia (decisioni di Paolo, 06/08)

Timeline delle Tracce unificata: brochure TF27 + storico missioni.
- ENTRANO: Castiglia e León 1997–2006 (Spagna), Isole Lofoten 2006–09
  (Norvegia), EXPO Milano 2015.
- SI UNIFICANO: Dubai 2015–16 + Abu Dhabi 2017 → una tappa "2015–17"
  (scelta UX per liberare spazio in barra).
- SI SDOPPIA il 2018: New York (Taste Marche Experience) e Tirana/Valona
  (III Settimana) sono DUE tappe distinte, ciascuna con la sua frase
  (richiesta esplicita di Paolo).
- RESTANO FUORI: Ciuvascia 2016, Creta 2018, Londra 2023.
- CORRETTO il testo Dubai: non è più "la prima tappa" (la prima è la Spagna).
- Totale: 14 tappe. Rubini (key) invariati: 1993, 2011, 2022, 2027.

## 2. Asset GIÀ aggiornati nel repo (generati da Cowork, non toccarli a mano)

- `src/assets/tipicita-map.svg` — rigenerata con Spagna (724) e Norvegia
  (578) tra i paesi-bersaglio (data-c).
- `src/assets/tipicita-map-boxes.json` — bbox "mainland only" (Francia senza
  Guyana, Spagna senza Canarie, Norvegia senza Svalbard, Giappone = 4 isole
  maggiori).
- Proiezione: geoNaturalEarth1 fitSize [1600, 820] su world-atlas
  countries-110m. I `px/py` delle tappe sono coordinate città proiettate con
  la STESSA proiezione (nuove: Valladolid 780.8/188.5 · Lofoten 846.3/60.5 ·
  Milano 836.7/169.1 · New York 497.3/193.4).

## 3. Da trascrivere in `index.astro` — l'array `stages` completo

Sostituisce integralmente l'attuale `const stages = [...]`:

```js
const stages = [
  { y: '1993', c: '380', px: 855.5, py: 180.8, key: true, t: 'Festival dei prodotti tipici delle Marche', p: 'Fermo',
    // slideshow 1993: scansioni dall'archivio (cartella tracce/slideshow93, 06/08). Caption = BOZZA.
    photos: ['/tipicita/tracce/1993-1.jpg','/tipicita/tracce/1993-2.jpg','/tipicita/tracce/1993-3.jpg','/tipicita/tracce/1993-4.jpg','/tipicita/tracce/1993-5.jpg','/tipicita/tracce/1993-6.jpg','/tipicita/tracce/1993-7.jpg','/tipicita/tracce/1993-8.jpg','/tipicita/tracce/1993-9.jpg'],
    caption: 'Fermo, 1993 — dall’archivio della prima edizione.',
    d: 'Nasce a Fermo l’evento pionieristico che porta le eccellenze gastronomiche marchigiane su un palcoscenico unico nel suo genere. Il primo lavoro non è raccontare le Marche al mondo: è convincere i marchigiani che ciò che si produce sotto casa vale.' },
  // ── timeline unificata brochure TF27 + storico missioni (sintesi validata da Paolo, 06/08) ──
  { y: '1998–2006', c: '724', px: 780.8, py: 188.5, t: 'Castiglia e León', p: 'Spagna',
    d: 'Valladolid, 1998: una stretta di mano tra due entroterra. Poi gli educational per la stampa, il forum sulle aree montane e, nel 2003, il patto di cooperazione con le istituzioni di Castilla y León firmato nella cornice del festival: Tipicità scopre di essere anche un tavolo diplomatico.' },
  { y: '2006–09', c: '578', px: 846.3, py: 60.5, t: 'Isole Lofoten', p: 'Norvegia',
    video: '/tipicita/tracce/2006-norvegia.mp4', caption: 'Isole Lofoten — dal video della missione. [BOZZA]',
    d: 'A Svolvær lo stoccafisso all’anconitana torna nel porto da cui parte da cinque secoli, cucinato dai marchigiani. Ma il segno più profondo lo lascia il metodo: sulle isole nasce un festival costruito sul modello di Tipicità. Il prodotto viaggia — il format mette radici.' },
  { y: '2011', c: '380', px: 855.5, py: 180.8, key: true, t: 'Made in Marche Festival', p: 'Fermo',
    photos: ['/tipicita/tracce/2011-1.jpg','/tipicita/tracce/2011-2.jpg','/tipicita/tracce/2011-3.jpg','/tipicita/tracce/2011-4.jpg','/tipicita/tracce/2011-5.jpg'],
    caption: 'Fermo — il festival diventa Made in Marche. [BOZZA]',
    d: 'Il festival si evolve: accanto alle specialità enogastronomiche entrano il turismo, la moda e l’artigianato d’eccellenza. Una visione integrata del valore territoriale, prima che diventi una formula di moda.' },
  { y: '2015', c: '380', px: 836.7, py: 169.1, t: 'EXPO Milano', p: 'Milano',
    d: '«Nutrire il pianeta»: Tipicità arriva a Milano con una risposta concreta — il Paniere di lunga vita, costruito con l’Università di Camerino e i produttori di uno dei territori più longevi d’Europa. Non uno slogan: una dieta che funziona da secoli.' },
  { y: '2015–17', c: '784', px: 1037, py: 275.5, t: 'Italian Cuisine World Summit', p: 'Dubai e Abu Dhabi, EAU',
    d: 'Al summit che porta nel Golfo decine di stelle Michelin, Tipicità aggiunge l’anello che manca: non i piatti, i produttori. La cucina italiana raccontata da chi ne coltiva le materie prime.' },
  { y: '2018', tag: 'NY', c: '840', px: 497.3, py: 193.4, t: 'Taste Marche Experience', p: 'New York, USA',
    photos: ['/tipicita/tracce/2018ny-1.jpg','/tipicita/tracce/2018ny-2.jpg','/tipicita/tracce/2018ny-3.jpg','/tipicita/tracce/2018ny-4.jpg','/tipicita/tracce/2018ny-5.jpg'],
    caption: 'New York — Taste Marche Experience da Lucciola. [BOZZA]',
    d: 'Food, fashion ed eco design dalle Marche alla Grande Mela: i tre codici del made in Italy, portati insieme nella città che li consacra.' },
  { y: '2018', tag: 'AL', c: '008', px: 880.8, py: 190.2, t: 'III Settimana della Cucina Italiana nel Mondo', p: 'Tirana e Valona, Albania',
    photos: ['/tipicita/tracce/2018al-1.jpg','/tipicita/tracce/2018al-2.jpg','/tipicita/tracce/2018al-3.jpg','/tipicita/tracce/2018al-4.jpg'],
    caption: 'Tirana — la Settimana della Cucina Italiana. [BOZZA]',
    d: 'Nello stesso anno, la sponda di fronte: Tirana e Valona per la III Settimana della Cucina Italiana nel Mondo. L’Adriatico come ponte, non come confine.' },
  { y: '2019', c: '124', px: 497.3, py: 169.3, t: 'IV Settimana della Cucina Italiana nel Mondo', p: 'Ottawa e Montréal',
    d: 'Ottawa e Montréal, nel paese dove l’Italian Sounding vale più dell’originale: due serate per far assaggiare la differenza tra ciò che suona italiano e ciò che lo è. La Taste Marche Experience attraversa l’Atlantico verso nord.' },
  { y: '2022', c: '834', px: 974.4, py: 438.6, key: true, t: 'Semplicemente “Festival”', p: 'EXPO2020 Dubai · Dar Es Salaam e Zanzibar',
    video: '/tipicita/tracce/2022-festival.mp4', caption: 'Semplicemente “Festival” — il motion poster. [BOZZA]',
    d: 'Tipicità diventa semplicemente “Festival”: ecosistema nazionale delle micro-Italie più autentiche. Nello stesso anno, EXPO2020 Dubai e la VII Settimana della Cucina Italiana in Tanzania.' },
  { y: '2023', c: '250', px: 809.2, py: 152.0, t: 'VIII Settimana della Cucina Italiana nel Mondo', p: 'Parigi',
    d: 'Parigi: la presentazione ufficiale della candidatura della cucina italiana a patrimonio immateriale dell’Unesco. Il locale che ha attraversato il mondo chiede il riconoscimento del viaggio.' },
  { y: '2024', c: '392', px: 1383.4, py: 219.2, t: 'IX Settimana della Cucina Italiana nel Mondo', p: 'Tokyo e Osaka',
    photos: ['/tipicita/tracce/2024-1.jpg','/tipicita/tracce/2024-2.jpg','/tipicita/tracce/2024-3.jpg','/tipicita/tracce/2024-4.jpg'],
    caption: 'Tokyo e Osaka — la IX Settimana. [BOZZA]',
    d: 'Tokyo e Osaka: il Giappone, ospite storico del festival, ricambia la visita. Le rotte funzionano quando si percorrono nei due sensi.' },
  { y: '2025', c: '032', px: 555.2, py: 582.4, t: 'X Settimana della Cucina Italiana nel Mondo', p: 'EXPO2025 Osaka · Bahia Blanca, Buenos Aires, Ushuaia',
    photos: ['/tipicita/tracce/2025-1.jpg','/tipicita/tracce/2025-2.jpg','/tipicita/tracce/2025-3.jpg','/tipicita/tracce/2025-4.jpg','/tipicita/tracce/2025-5.jpg','/tipicita/tracce/2025-6.jpg','/tipicita/tracce-argentina.jpg'],
    caption: 'Da Osaka alla fine del mondo — e ritorno a Fermo. [BOZZA]',
    d: 'EXPO2025 Osaka, poi la rotta più lunga mai percorsa: Bahia Blanca, Buenos Aires e Ushuaia, fino alla fine del mondo. E l’anno dopo, l’Argentina sale sui banchi di Fermo.' },
  { y: '2027', c: '380', px: 855.5, py: 180.8, key: true, t: '35ª edizione', p: 'Fermo, 12–14 marzo',
    d: 'La rotta torna a casa: Fermo, 12–14 marzo 2027. Non per fermarsi — per ripartire.' },
];
```

Nota: il campo nuovo `tag` ('NY'/'AL') serve alla barra degli anni per
distinguere le due tappe 2018.

## 4. Da trascrivere — il bottone della barra anni (markup)

In `.anni`, il render dei bottoni diventa:

```astro
{stages.map((s, i) => (
  <button class={s.key ? 'anno key' : 'anno'} data-i={i} role="tab" aria-selected={i === 0 ? 'true' : 'false'}>{s.y}{s.tag && <small> · {s.tag}</small>}</button>
))}
```

## 5. Da trascrivere — una riga di CSS

Dopo la regola `.anno { ... }`:

```css
.anno small { font-size: 0.82em; opacity: 0.75; letter-spacing: 0.06em; } /* sigla di bobina per anni doppi (2018 · NY / · AL) */
```

## 6. Aggiornamento 06/08 pomeriggio — frasi da ricerca (validate da Paolo)

- Castiglia e León: date corrette in **1998–2006** (fonte: CV Angelo Serri,
  Unicam — 1998 meeting SOTUR a Valladolid; 2002 educational stampa/TO +
  forum aree montane + dichiarazione d'intenti; 2003 firma accordo di
  cooperazione; 2004 progetto VIATORES; 2005 protocollo Colombo; 2006
  Camerino→Segovia). Frase nuova col patto di cooperazione.
- Lofoten: arco 2006–09 CONFERMATO dal CV (ott 2006 prima delegazione;
  set 2007 visita norvegese di ritorno; ago 2009 festival — stoccafisso
  all'anconitana a Svolvær, fonte Accademia dello Stoccafisso). Frase nuova.
- Expo 2015 e Dubai/Abu Dhabi 2015–17: frasi riscritte (contesto ICWS:
  ~34 chef, 45 stelle Michelin, patrocinio Ambasciata/Consolato).
- Expo 2015: frase col **Paniere di lunga vita** (Unicam + 9 aziende,
  supporto operativo Tipicità, presentato a Milano per Expo — fonte unicam.it;
  indicazione di Paolo, 06/08).
- Le frasi in `d:` qui sopra sono la versione VALIDATA — trascrivere tali e quali.

## 7. Verificato da Cowork in build locale (Playwright, 06/08)

Barra a 14 tappe su una riga a 1500px; zoom+pin corretti su Spagna
(Valladolid), Norvegia (Lofoten), Milano, New York; nessun errore JS;
slideshow 1993 e foto Argentina 2025 invariati e funzionanti.

## 8. MEDIA D'ARCHIVIO (06/08 sera) — 7 tappe coperte + supporto VIDEO nel MON 04

Cowork ha selezionato e ottimizzato il materiale caricato da Paolo in
`tracce/` (cartelle sorgente, in .gitignore). I file web sono GIÀ in
`public/tipicita/tracce/`: slideshow 1993 (9), 2011 (5), 2018ny (5),
2018al (4), 2024 (4), 2025 (6 + tracce-argentina.jpg come chiusura), e
DUE VIDEO: `2006-norvegia.mp4` (missione Lofoten, 5MB) e
`2022-festival.mp4` (motion poster, 0.9MB). I campi `photos`/`video`/
`caption` sono già nell'array `stages` qui sopra (caption = BOZZE).

Il MON 04 deve imparare a proiettare anche video. Tre trascrizioni:

a) Markup — nel monitor ARCHIVIO, dopo i due `<img>`:

```html
<video id="mv-video" class="off" muted loop playsinline preload="none" aria-hidden="true"></video>
```

b) CSS — estendere le regole del doppio buffer a `video`:

```css
.mon-photo img, .mon-photo video { position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; opacity: 1; transition: opacity 0.9s ease; }
.mon-photo img.off, .mon-photo video.off { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .mon-photo img, .mon-photo video { transition: none; } }
```

c) JS — `const vid = document.getElementById('mv-video');` accanto a `imgs`;
in testa a `showPhotos(list, s)` (prima del ramo foto):

```js
clearInterval(slideTimer); slideTimer = null;
vid.classList.add('off'); vid.pause(); vid.removeAttribute('src');
if (s && s.video) {
  imgs.forEach((im) => { im.classList.add('off'); im.onload = null; });
  vid.src = s.video;
  vid.classList.remove('off');
  if (!REDUCED) vid.play().catch(() => {});
  capEl.textContent = s.caption || '';
  return;
}
```

più un IntersectionObserver su `#tracce` (root: deck, threshold 0.3) che
mette in pausa `vid` quando il quadro esce di scena e riprende il play
(se `!REDUCED`) quando rientra — identico al pattern di `essbg`.

⚠️ Nota di verifica: nel sandbox Cowork il Chromium headless è senza
codec H.264, quindi i video non renderizzano lì — l'encoding è h264
yuv420p standard, su Chrome/Safari reali funziona. Verificare sulla
preview Vercel dopo il push.

## 9. Testo 2019 Canada — riscritto da ricerca (06/08)

Fonte Ambasciata d'Italia Ottawa: IV Settimana con 20+ iniziative,
focus IGP contro l'Italian Sounding, il Consorzio Tipicità Marche
protagonista di due serate a Ottawa e Montréal. La frase è già
nell'array (tappa 2019).
