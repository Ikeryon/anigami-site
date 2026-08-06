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
  { y: '1997–2006', c: '724', px: 780.8, py: 188.5, t: 'Castiglia e León', p: 'Spagna',
    d: 'La prima traiettoria fuori dall’Italia: quasi dieci anni di scambi con la Castiglia e León, comunità locali che si riconoscono prima ancora di conoscersi. Il metodo Tipicità impara a viaggiare.' },
  { y: '2006–09', c: '578', px: 846.3, py: 60.5, t: 'Isole Lofoten', p: 'Norvegia',
    d: 'Un ponte di saperi e sapori tra l’Artico e il Mediterraneo. Lo stoccafisso che da secoli scende da queste isole verso l’Adriatico lo dimostra: le traiettorie esistevano già — ora hanno un racconto.' },
  { y: '2011', c: '380', px: 855.5, py: 180.8, key: true, t: 'Made in Marche Festival', p: 'Fermo',
    d: 'Il festival si evolve: accanto alle specialità enogastronomiche entrano il turismo, la moda e l’artigianato d’eccellenza. Una visione integrata del valore territoriale, prima che diventi una formula di moda.' },
  { y: '2015', c: '380', px: 836.7, py: 169.1, t: 'EXPO Milano', p: 'Milano',
    d: '«Nutrire il pianeta, energia per la vita»: all’esposizione universale Tipicità interpreta un tema di casa propria, con partner italiani ed esteri. Il festival scopre di parlare una lingua che il mondo capisce.' },
  { y: '2015–17', c: '784', px: 1037, py: 275.5, t: 'Italian Cuisine World Summit', p: 'Dubai e Abu Dhabi, EAU',
    d: 'Tipicità è chiamata a interpretare l’italian style nel Golfo: Dubai, poi Abu Dhabi, tre stagioni di Italian Cuisine World Summit. I produttori come interpreti, la cucina come linguaggio di relazione.' },
  { y: '2018', tag: 'NY', c: '840', px: 497.3, py: 193.4, t: 'Taste Marche Experience', p: 'New York, USA',
    d: 'Food, fashion ed eco design dalle Marche alla Grande Mela: i tre codici del made in Italy, portati insieme nella città che li consacra.' },
  { y: '2018', tag: 'AL', c: '008', px: 880.8, py: 190.2, t: 'III Settimana della Cucina Italiana nel Mondo', p: 'Tirana e Valona, Albania',
    d: 'Nello stesso anno, la sponda di fronte: Tirana e Valona per la III Settimana della Cucina Italiana nel Mondo. L’Adriatico come ponte, non come confine.' },
  { y: '2019', c: '124', px: 497.3, py: 169.3, t: 'IV Settimana della Cucina Italiana nel Mondo', p: 'Ottawa e Montréal',
    d: 'Il Canada entra nella rete: Ottawa e Montréal per la IV Settimana della Cucina Italiana nel Mondo.' },
  { y: '2022', c: '834', px: 974.4, py: 438.6, key: true, t: 'Semplicemente “Festival”', p: 'EXPO2020 Dubai · Dar Es Salaam e Zanzibar',
    d: 'Tipicità diventa semplicemente “Festival”: ecosistema nazionale delle micro-Italie più autentiche. Nello stesso anno, EXPO2020 Dubai e la VII Settimana della Cucina Italiana in Tanzania.' },
  { y: '2023', c: '250', px: 809.2, py: 152.0, t: 'VIII Settimana della Cucina Italiana nel Mondo', p: 'Parigi',
    d: 'Parigi: la presentazione ufficiale della candidatura della cucina italiana a patrimonio immateriale dell’Unesco. Il locale che ha attraversato il mondo chiede il riconoscimento del viaggio.' },
  { y: '2024', c: '392', px: 1383.4, py: 219.2, t: 'IX Settimana della Cucina Italiana nel Mondo', p: 'Tokyo e Osaka',
    d: 'Tokyo e Osaka: il Giappone, ospite storico del festival, ricambia la visita. Le rotte funzionano quando si percorrono nei due sensi.' },
  { y: '2025', c: '032', px: 555.2, py: 582.4, t: 'X Settimana della Cucina Italiana nel Mondo', p: 'EXPO2025 Osaka · Bahia Blanca, Buenos Aires, Ushuaia', photo: '/tipicita/tracce-argentina.jpg',
    caption: 'Lo stand di Bahía Blanca a Tipicità 2026: il viaggio che ricambia.',
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

## 6. Verificato da Cowork in build locale (Playwright, 06/08)

Barra a 14 tappe su una riga a 1500px; zoom+pin corretti su Spagna
(Valladolid), Norvegia (Lofoten), Milano, New York; nessun errore JS;
slideshow 1993 e foto Argentina 2025 invariati e funzionanti.
