# Tipicità — le fotografie estratte a sorte

Consegna Cowork → Code. **Versione 2 del 19/08/2026: sostituisce integralmente la
precedente.** Cambia una cosa sola ma cambia la portata del lavoro: le fotografie
a sorte non sono più due ma **tre**, e non stanno più in un capitolo solo.

- `.Trama` — le due fotografie sotto le tre card
- `.Essenza` — la fotografia dentro il carosello orizzontale

## Perché si cambia

Le immagini fisse non andavano. Su una di `.Trama` c'era un marchio leggibile a
tutta larghezza, sull'altra il primo piano di una persona al microfono. Quella di
`.Essenza` — `essenza-1.jpg`, il banco di salumi e formaggi — ha lo stesso
problema all'ennesima potenza: decine di cartellini con nomi di produttori,
leggibili uno per uno. Nessuna delle tre dice il capitolo in cui sta, e tutte e
tre promuovono qualcuno.

Decisione di Paolo: **non fotografie scelte, ma estratte a sorte da un insieme
ampio, diverse a ogni accesso.** Il bacino è volutamente non curato — *«mi
piacciono tutte quelle foto e hanno tutte uno scope diverso»* — ed è quella
varietà a fare il lavoro.

## Il bacino — già pronto

`public/tipicita/trama/tf-001.jpg` … `tf-189.jpg`

Centottantanove fotografie dall'archivio del festival, tutte già ritagliate a
**1400×788** (16:9 esatto), 143 KB di media, 28 MB in tutto. Il numero nel nome
corrisponde all'ordine alfabetico della cartella sorgente `TF`, così se una singola
immagine risulta tagliata male basta segnalarne il numero e si rifà solo quella.

Il bacino resta uno solo e serve entrambi i capitoli: nessuna cartella nuova,
nessun secondo ritaglio. Sul peso: 28 MB entrano nel repository, ma **il visitatore
ne scarica tre**, circa 430 KB.

## Un solo sorteggio per l'intera pagina

`.Trama` e `.Essenza` stanno nella stessa pagina, quindi il sorteggio è **uno**:
si estraggono **tre indici distinti** fra 1 e 189 e si assegnano nell'ordine —
i primi due alle immagini di `.Trama`, il terzo a quella di `.Essenza`.

Distinti sul serio: la stessa fotografia non deve comparire due volte nella stessa
pagina, nemmeno a due capitoli di distanza. Tre estrazioni indipendenti la farebbero
uscire doppia circa una volta ogni sessanta visite, che è abbastanza spesso da
farsi notare e da sembrare un errore.

**Il sorteggio avviene nel browser, non al build.** Il sito è statico: un sorteggio
in fase di generazione produrrebbe tre foto fisse fino al deploy successivo, che è
esattamente ciò che non vogliamo.

Regole comuni a tutte e tre:

- l'assegnazione delle sorgenti avviene **prima del disegno** — uno script in linea
  subito dopo il markup delle immagini, non in `onload` — così non c'è nessun lampo
  e si scaricano solo le tre estratte;
- i tre `<img>` hanno `width` e `height` dichiarati e il contenitore ha il proprio
  rapporto d'aspetto fissato: nessuno spostamento di layout;
- niente `loading="lazy"`: sono poche immagini ed è il runtime a sceglierle;
- **la terna dell'accesso precedente non si ripete**: si conservano i tre indici in
  `sessionStorage` e, se il nuovo sorteggio li ripropone tutti e tre, si ripesca.
  Costa tre righe e rende vera la promessa di «sempre diverse».

**Senza JavaScript** i capitoli non devono restare vuoti: un blocco `<noscript>`
con tre `tf-*.jpg` fissi risolve, e non pesa nulla perché il browser che esegue lo
script non lo scarica.

**Testo alternativo**: una formula generica e onesta, uguale per tutte —
`Tipicità Festival, immagine d'archivio` e `Tipicità Festival, archive image`.
Con centottantanove fotografie una descrizione puntuale non è possibile, e una
falsa sarebbe peggio di una generica. Vale anche per `.Essenza`, dove l'attuale
`alt` — «Salumi e formaggi del territorio sui banchi del festival» — descrive una
fotografia che dopo questa modifica non c'è più: se resta com'è, mente.

## La parte specifica di `.Essenza`

La fotografia è dichiarata nei dati, non nel markup: `src/i18n/tipicita.js`,
**riga 81** per l'italiano e **riga 176** per l'inglese, dentro il carosello, nella
forma

```js
{ cls: 'photo-card', img: { src: '/tipicita/essenza-1.jpg', alt: '…' } }
```

Perché lo script possa raggiungerla, quel nodo ha bisogno di un appiglio stabile —
un `data-` sull'`<img>` è sufficiente, per esempio `data-tf` — invece di essere
cercato per `src`, che dopo il sorteggio non è più quello. Vale la pena tenere lo
stesso appiglio anche per le due di `.Trama`: un solo selettore, uno script solo,
e il giorno in cui la fotografia a sorte serve in un quarto punto non si riscrive
niente.

**Sul ritaglio.** Il riquadro di `.Essenza` non è 16:9: `essenza-1.jpg` è 1600×1200,
cioè 4:3, e la regola è `.photo-card img { width: 100%; height: 100%; object-fit:
cover }` (`TipicitaPage.astro`, righe 449-450). Una foto 16:9 messa lì viene
ritagliata ai fianchi dal browser — resta circa il 75% centrale della larghezza.
Va bene così: `cover` fa esattamente il suo mestiere, le foto del bacino sono già
inquadrature ampie e non serve una seconda serie di file. **Non modificare la
regola CSS**, e non introdurre un secondo bacino ritagliato a 4:3: raddoppierebbe
il peso del repository per un guadagno che a schermo non si vede.

Da controllare a occhio dopo la modifica: che il carosello mantenga la stessa
altezza di riga con l'immagine nuova e che le frecce restino allineate.

## Verifica

Ricaricare la pagina cinque o sei volte e controllare che tutte e tre le
fotografie cambino davvero, che non escano mai due volte la stessa immagine nella
stessa pagina, che il layout non si muova di un pixel né in `.Trama` né dentro il
carosello di `.Essenza`, e che con JavaScript disattivato le tre fotografie di
riserva compaiano comunque. Poi le solite misure a 390 / 768 / 1440.

## Coda

`trama-1.jpg`, `trama-2.jpg` ed `essenza-1.jpg` restano in `public/tipicita/` senza
che nessuno li richiami più: 1,3 MB da togliere con calma, non ora.

Commit suggerito: `feat: Tipicità — le fotografie di .Trama e .Essenza si estraggono
a sorte dall'archivio`.
