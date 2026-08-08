# TESTI-GT — La landing del Grand Tour delle Marche (scheda completa)
> Cowork → Code, 07/08/2026. Fabula: L'ITINERARIO (metanarrativa §GT):
> la barra dei capitoli è un percorso con waypoint, lo scroll è strada
> fatta, i capitoli sono soste, la chiusura è ciò che resta. Lessico
> odeporico, mai da brochure. Palette carta calda (CLAUDE.md). I testi
> marcati [LAVORATO] si trascrivono TALI E QUALI; i [BOZZA] sono di
> Cowork, validati nell'impianto da Paolo, da rileggere in preview.
> La parola "anigami" non compare mai.

## 0. Struttura della pagina (le soste dell'itinerario)

Hero → Exergo → 1. Laboratorio di comunità → 2. Geometria variabile →
3. Incubatore → 4. Il filo del racconto → 5. Dove & Cosa → 6. Cartoline
dal viaggio → Chiusura. La barra-itinerario (waypoint) naviga le soste;
il progress è la strada percorsa.

## 1. Hero

VIDEO DI BACKGROUND (consegnato, 07/08): `public/gt/gt-hero.mp4`
(48s, muto, loop, 1600px, 8,6MB — i primi 48" del promo GT26: vigneti
dall'alto, vele, ciclisti sulla costa) + poster `gt-hero-poster.jpg`.
Resa come l'hero di Tipicità: autoplay muted loop playsinline, velo
scuro per leggibilità, `prefers-reduced-motion` → solo poster.
Sopra: logo GT (public/), righe-dato: `dal 2014 · 13ª edizione (2026) ·
itinerario diffuso tra borghi e comunità delle Marche`.
⚠️ CORREZIONE FATTUALE: la pagina attuale dice "Dal 2015" — la prima
edizione è il 2014 (flyer d'archivio + conferma Paolo). Correggere.
Claim di stagione (dai materiali 2022-26): "Oltre la destinazione…"
[BOZZA: da confermare con Paolo come payoff di pagina o solo di stagione]

## 2. Exergo — la lettera (dal PrimoFlyer 2014)

> «Non come una guida che ti fa fare il solito giro turistico,
> ma come un amico che ti porta a scoprire casa sua.»
> — dalla lettera di Gioacchino, 2014

[Resa: citazione sola su fondo carta, corpo grande, la fonte in
maiuscoletto. È il posizionamento della pagina intera.]

## 3–5. I tre capitoli → **RISCRITTI, vedi `TESTI-GT-CAPITOLI.md`**

⚠️ ANNULLATA l'istruzione precedente («[LAVORATO], trascrivere invariati»).
Decisione di Paolo del 07/08: i testi citavano eventi e borghi per nome, e su
una pagina che parla a settantatré comuni gli esempi scontentano chi non è
citato. I tre capitoli sono stati riscritti per tipologie invece che per nomi
propri, e attorno alla tesi sul destination management — l'ascolto come
condizione, non come premessa; l'evento come strumento di costruzione della
destinazione e non solo di promozione.

Titoli, `id` e struttura restano identici: cambia il contenuto dei paragrafi.
Testo definitivo in `TESTI-GT-CAPITOLI.md`.

I placeholder foto dei capitoli restano in attesa di selezione
dall'archivio (Cowork).

## 6. Il filo del racconto [BOZZA validata]

> Il Grand Tour non ha mai elencato tappe: le ha sempre affidate a
> qualcuno. È nato nel 2014 con una lettera — Gioacchino che scrive al
> nipote Francesco, emigrato e in procinto di tornare con la sua
> Heidi, per promettergli un viaggio autentico nelle Marche. Un
> itinerario nato come invito al ritorno. Sulla strada è arrivata
> Lavinia Atipica, viaggiatrice dissacrante, curiosa, pronta a
> mettersi in gioco davanti a ogni bellezza — e tornata anni dopo,
> come tornano i viaggiatori veri. Oggi il passo lo detta Martino:
> erede del Picchio leggendario che guidò i Piceni a fondare queste
> terre, picchio della generazione alpha, con un sano spirito
> d'avventura e la matita dell'artista ascolana Simona Pagano nelle
> piume. Da una lettera a un picchio: il racconto cambia voce, la
> strada resta. Chi segue il Grand Tour non consulta un calendario —
> tiene il passo di un personaggio.

[Il mito del picchio non si spiega oltre questa riga. Credit "Martino
è di Simona Pagano" in piccolo. VIDEO DI LAVINIA consegnato:
`public/gt/lavinia.mp4` (75s, CON AUDIO, 720p, 10,4MB) + poster
`lavinia-poster.jpg`. Resa: player click-to-play col poster (NON
autoplay: ha la voce), incastonato nella sezione racconto, didascalia
"Lavinia Atipica, in viaggio". Illustrazione di Martino dal pieghevole
2026 come figura della sezione, se Paolo fornisce il file pulito.]

⚠️ NOTA PER CODE — GITIGNORE: nella root del repo ci sono i master
`GT 26 - Promo (1920 X 1080).mp4` (346MB) e `Lavinia.mp4` (10MB),
caricati da Paolo come sorgenti. NON vanno su GitHub: aggiungere al
.gitignore (`GT 26 - Promo*`, `/Lavinia.mp4`) prima del prossimo
commit. Le versioni web sono già in `public/gt/`.

## 7. Dove & Cosa [spec in TESTI-GT-DATI.md §9 + mock consegnato]

Titolo: "La strada fatta" · sottotitolo: "73 comuni · 13 edizioni ·
un solo viaggio". Mappa a sinistra (asset `public/_incoming/
gt-map-comuni.svg` — <g> con path per ognuno dei 225 comuni,
`data-comune`, `data-dal` = anno prima tappa, classe `.toccato` sui
73), chip dei 10 nuclei a destra (SENZA percentuali), hover tema →
si accendono i comuni del tema (dati: `public/_incoming/gt-temi.json`)
+ riga di esempi. Esempi per riga [BOZZA]:
- saper fare & design: "il cappello a Montappone, la carta a Fabriano,
  la pelle a Tolentino, la fisarmonica a Castelfidardo…"
- mare & pesca: "il brodetto a Porto Recanati, le cozze a Pedaso, la
  piccola pesca a San Benedetto…"
- storia & rievocazioni: "i Templari a Castignano, la battaglia delle
  Nazioni a Sassoferrato, gli scavi di Monte Rinaldo…"
[le altre righe le compone Code dai dati di gt-temi.json, registro
identico: luogo + cosa, niente aggettivi]
Hover comune → tooltip nome + "dal ANNO". Tastiera: chip come radio
group, frecce per scorrere i temi. Reduced-motion: cambio fill senza
transizione. NIENTE cursore-anni: non è una moviola.

## 8. Cartoline dal viaggio [ASSET CONSEGNATI in public/gt/cartoline/]

13 cartoline ufficiali d'archivio, selezione Cowork (900px, ~45KB
l'una). Due serie: kraft 2016 (illustrazioni bianche su carta paglia)
e pastello 2017, più tre della serie 2015. Resa: teca orizzontale
sfogliabile (scroll-snap x), cartoline leggermente ruotate come su un
tavolo, anno in timbro. Didascalie [BOZZE], registro secco luogo+anno:

- 2015-capodarco → (esclusa: doppione con serie 2016, disponibile su richiesta)
- `2015-montecarotto.jpg` — "Verdicchio in Festa & Jazz — Montecarotto, 2015"
- `2015-fermo.jpg` — "Made in Marche Gallery — Fermo, 2015"
- `2015-pollenza.jpg` — "Antiquariato e artigianato artistico — Pollenza, 2015"
- `2016-sefro.jpg` — "La Trota e il Verdicchio — Sefro, 2016"
- `2016-fabriano.jpg` — "Fabriano Creative City, 2016"
- `2016-montedinove.jpg` — "Sibillini in Rosa — Montedinove, 2016"
- `2016-recanati.jpg` — "Recanati, città del buon vivere, 2016"
- `2016-senigallia.jpg` — "Pane Nostrum — Senigallia, 2016"
- `2016-venarotta.jpg` — "Le meraviglie del ricamo — Venarotta, 2016"
- `2017-montappone.jpg` → NB: il file 2017 di Montappone è il jpg
  fornito a bassa risoluzione; se serve qualità, Cowork riesporta dal
  pdf "Festa del Cappello". [DA RIFARE, non incluso per ora]
- `2017-acquasanta.jpg` — "Festa d'Autunno — Acquasanta Terme, 2017"
- `2017-apecchio.jpg` — "Tartufo e Alogastronomia — Apecchio, 2017"
- `2017-pesaro.jpg` — "Candele sotto le stelle — Pesaro, 2017"
- `2017-piobbico.jpg` — "Sagra del polentone alla carbonara — Piobbico, 2017"

Nota per il futuro: i RETRO delle cartoline 2015 hanno testi bilingui
d'epoca — materiale per un eventuale "gira la cartolina" (controcampo!)
in una v2 della gallery. La cartolina 2020 con Lavinia è in recupero
(file OneDrive instabile): quando arriva, entra in gallery come pezzo
del racconto.

## 9. Chiusura

> Il Grand Tour non finisce: riparte. La prossima sosta è già sulla
> mappa — e come ogni anno, qualcosa resterà anche dopo.
[BOZZA. Sotto: link al calendario stagione corrente su tipicita.it,
resa da definire con Paolo.]

## 10. Asset consegnati da Cowork (in public/_incoming/, Code li
sposta e committa)

- `gt-map-comuni.svg` (448KB — valutare minify/precisione in
  implementazione)
- `gt-temi.json` (tema → comuni)
- `gt-tappe.json` (anno → comuni + prima tappa per comune)
