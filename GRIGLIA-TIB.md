# Tipicità in Blu — la griglia e l'impatto visivo

Consegna Cowork → Code, 19/08/2026. Va letta insieme a `TESTI-TIB.md` v3: quello
dice *cosa* si scrive, questo dice *come sta in pagina*.
Il mockup navigabile è `tib-griglia.html` — il pulsante «griglia» in alto a destra
accende il reticolo di controllo.

---

## 1. La diagnosi visiva

Oggi la pagina è **una colonna centrata dall'inizio alla fine**, e non contiene
**nemmeno una fotografia**: ci sono il marchio, il video di fondo della plancia e
nient'altro. È questo, più dei testi, il motivo per cui sembra piatta.

Una plancia non è una colonna: è un pannello con campi di dimensioni diverse.
Finché ogni blocco è largo uguale e centrato uguale, nessuna gerarchia è
possibile e la pagina si legge come un documento, non come uno strumento.

## 2. La griglia

**Dodici colonne dentro 68rem**, gronda `1.6rem`, e un **modulo verticale di
64px** — che non è un numero scelto a caso: è esattamente il passo del reticolo di
carta nautica già disegnato in `.grigliato`. La pagina ha già la sua griglia
addosso; finora nessun contenuto la usava.

Regola unica e non negoziabile: **la plancia è l'unico blocco centrato della
pagina.** Tutto il resto dichiara il campo che occupa.

I campi in uso, e bastano questi cinque:

| campo | uso |
|---|---|
| `1–7` + `9–12` | testo lungo e scheda tecnica a lato (apertura .Rotta, apertura .Cantiere) |
| `1–5` + `7–12` | grafica e suo elenco (la ruota, la carta) |
| `1–8` + `9–12` | testo e lastra verticale (la squadra) |
| `1–12` | le griglie interne (le quattro lastre, le letture, gli specchi) |
| a piena pagina | la banda, l'unica cosa che esce dalla gabbia |

Sotto 820px tutto collassa a colonna singola. Non ci sono stati intermedi: due
punti di rottura sono più facili da tenere in ordine di quattro.

## 3. Le immagini — due famiglie, e solo due

### 3.1 La lastra

Tutte le fotografie della pagina, tranne una, sono **lastre**: inserti in cornice
a filo, virati nella cromia della pagina, con didascalia in monospazio e indice.

- cornice `1px solid var(--hairline)`, **nessun raggio d'angolo, nessuna ombra**;
- formato **3:2** — non 16:9. Il 16:9 è il formato dei monitor della moviola di
  Tipicità: usarlo qui sarebbe un prestito da un'altra fabula. Il 3:2 è il formato
  della fotografia documentaria, ed è quello giusto per una scheda tecnica.
  L'unica eccezione è la lastra verticale della squadra, che è **3:4**;
- la viratura, ricetta esatta:

```css
.lastra .img       { filter: saturate(.55) contrast(1.05); }
.lastra .img::after{ content:''; position:absolute; inset:0; mix-blend-mode: color;
                     background: linear-gradient(180deg,
                       rgba(32,159,182,.18), rgba(10,26,43,.30)); }
```

Il risultato è una fotografia ancora perfettamente leggibile, che però **appartiene
alla pagina** invece di sedercisi sopra. È il modo per usare materiale d'archivio
molto vario — luci diverse, anni diversi, fotografi diversi — senza che la pagina
diventi un collage;

- **didascalia sempre presente**, sotto la lastra, in monospazio, con indice
  progressivo: `01 · BLU VILLAGE · PIAZZA CAVOUR`. Mai sovrimpressa. Mai
  decorativa: se una didascalia non aggiunge un fatto, la lastra non serve.

### 3.2 La banda

**Una sola fotografia a colori pieni in tutta la pagina**, a piena larghezza,
altezza `56svh`, con la didascalia in basso a sinistra allineata alla gabbia.

Sta fra `.Rotta` e l'architettura, cioè nel punto in cui il lettore ha appena
capito *che cosa* è e sta per scoprire *com'è fatto*. È la cerniera, ed è l'unico
momento in cui il colore pieno è il contenuto.

Il soggetto giusto è uno solo: **il waterfront di Ancona dall'alto**, dal porto a
Marina Dorica. È la stessa immagine che apre la sezione «La struttura» del
reportage, e dice in un colpo la frase che il testo impiega tre righe a dire — il
festival vive nella linea blu del lungomare.

Una banda funziona perché è una. Due bande sono un carosello lento.

## 4. Le grafiche disegnate

Sono la parte che regge la pagina **anche prima che arrivino le fotografie**, e
sono tutte SVG o CSS: zero file, zero peso.

**La ruota dei sette ambiti.** È il pezzo forte. Sette settori su un anello, nella
scala del blu della pagina, con il quadrante vuoto al centro: legge come un
quadrante di strumento, non come un grafico a torta. Passando su un settore si
accende la voce corrispondente nell'elenco a fianco, e viceversa — una sola
intenzione, 250ms, la curva della pagina. È già disegnata nel mockup e il codice è
lì da prendere.

**La striscia delle tre matrici.** Otto giorni sull'asse, tre barre: il Weekend Blu
piena, le Giornate della Blue Economy piena, il circuito cittadino a tratteggio
perché è diffuso e non concentrato. Sotto ogni barra il luogo in monospazio. È una
tabella di marcia, che è esattamente il registro della plancia.

**Lo zero.** Nel pannello delle letture, «0 contributi pubblici» non è una lettura
come le altre: occupa sei colonne invece di tre, ha il filo verticale in ciano a
sinistra e il numero in Cormorant a corpo enorme, con la spiegazione accanto e non
sotto. **La rottura della regolarità è il modo di dare peso a un dato senza
scrivere che è importante.** Una sola rottura per pagina.

**Il frammento di carta.** Per il corridoio adriatico: due coste parallele a filo,
il reticolo, Ancona con il crocino, la rotta tratteggiata verso la sponda opposta.
⚠️ Quella del mockup è una curva a mano libera: nella versione definitiva il
profilo va ricalcato da una carta vera, perché una costa adriatica sbagliata la
nota chiunque abiti su quella costa — cioè il pubblico della pagina.

## 5. Che cosa non si fa

Niente caroselli. Niente parallasse. Niente onde animate, gradienti arcobaleno,
icone a tema marino — ancore, timoni, gabbiani, pesci stilizzati. Niente fotografie
ritagliate a cerchio, niente ombre morbide, niente angoli arrotondati, niente testo
grande sovrimpresso al centro di una foto. Niente contatori che salgono su numeri
che non lo meritano.

Il registro è **lo strumento, non il souvenir**. Ogni volta che un elemento
somiglia a un depliant di agenzia, è sbagliato — anche se è bello.

## 6. Il materiale che manca — e serve

⚠️ **In `public/tib/` ci sono due file soli: `fondo.mp4` e `fondo-poster.jpg`.
Fotografie di Tipicità in Blu non ce n'è nessuna**, né nel repository né nelle
cartelle collegate (l'archivio su Drive è quello del festival di Fermo).

Code può costruire tutto — griglia, grafiche, lastre vuote con il loro
trattamento — ma le lastre restano cieche finché non arriva il materiale. Serve
questo, e non serve altro:

| # | soggetto | formato | nota |
|---|---|---|---|
| banda | il waterfront di Ancona dall'alto, porto e Marina Dorica | orizzontale, ≥2400px di lato lungo | è l'unica a colori pieni: va scelta bene |
| 01 | il Blu Village in Piazza Cavour: i gazebo, il pubblico ai banchi della ricerca | 3:2 | meglio una veduta d'insieme che un primo piano |
| 02 | Sailing Chef: la barca in navigazione, o il piatto a bordo | 3:2 | evitare le foto di premiazione |
| 03 | Visita il Cantiere: lo scafo in bacino, i visitatori con l'elmetto | 3:2 | la più forte delle quattro, se c'è |
| 04 | Menù in Blu: un tavolo, un locale della città | 3:2 | |
| 05 | il tavolo di lavoro: un momento di confronto vero, non un panel con microfoni | 3:4 verticale | |

Regole di scelta, le stesse imparate su `.Trama`: **niente marchi leggibili a
tutta larghezza, niente primi piani riconoscibili di una singola persona al
microfono, niente fasce tricolori.** Una lastra deve dire il capitolo, non
promuovere qualcuno.

Finché il materiale non c'è, le lastre restano nel loro stato di riserva —
il campo virato con l'etichetta — che è dignitoso e non sembra un errore.
Meglio così che riempirle con foto sbagliate.

## 7. Note per Code

Il mockup è un documento di studio, non codice da incollare: la pagina vera è
`src/pages/tipicita-in-blu/index.astro` e mantiene i suoi token, il suo `--ease`,
la sua `.plancia`, la sua `.barra` e il `Pellicola` in testa. Da lì si prendono
la griglia, i campi, la ricetta della viratura e il codice della ruota.

Le cose da non perdere per strada: `text-wrap: pretty` è già in pagina e va esteso
alle didascalie e ai nuovi paragrafi; le lastre hanno `width`/`height` dichiarati e
`aspect-ratio` sul contenitore, così non si muove un pixel al caricamento; la ruota
ha un `role="img"` con `aria-label` e l'elenco a fianco è la sua versione
accessibile, quindi **l'informazione non deve vivere solo nel disegno**; il
`prefers-reduced-motion` spegne l'accensione dei settori, non l'interazione.

Verifica a 390 / 768 / 1440 e su laptop basso. La banda a 390 non deve mangiare
mezzo schermo: sotto 700px scende a `42svh`.

Commit suggerito: `feat: TIB — griglia a dodici campi, lastre virate, ruota degli
ambiti e striscia delle matrici`.
