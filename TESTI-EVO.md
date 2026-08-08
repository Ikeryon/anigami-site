# TESTI-EVO — la landing di EVO

Consegna Cowork → Code, 07/08/2026 (**v2**, riscrittura integrale dopo la
revisione di Paolo). Sostituisce i testi oggi in `src/pages/evo/index.astro`.
Come sempre: Cowork non tocca il codice, Code trascrive da qui.

Fonti: la cartella `evo/` collegata da Paolo — Vision di progetto, relazione
conclusiva 2021, linee della 2ª edizione, sei comunicati 2022–2023, reportage
2024, rassegna 2025 — più `evo.ooo` e la stampa locale.

## Cosa è cambiato dalla v1

Paolo ha chiesto tre riletture: linguista, esperto SEO, redattore da magazine.
Ecco cosa hanno cambiato, perché serve saperlo per non farlo ricrescere.

**Fuori i riferimenti all'olio.** EVO è evoluzione, EVO è il tempo che viviamo,
EVO è mutamento. La battuta sull'extravergine indebolisce il nome invece di
spiegarlo, e in una pagina che parla di potere delle parole è un autogol.

**Fuori il registro elegiaco e paternalista.** La v1 diceva cose come «nessuno
si è mai seduto a decidere questo elenco, è il sedimento di quello che la città
ha chiesto» e «il festival diventa un'entità autonoma». Sono figure che
sembrano modeste e sono il contrario: mettono chi organizza in posizione di
sacerdote che ascolta il popolo. Sostituite da affermazioni dirette. Dove
c'era «abbiamo ascoltato la città» ora c'è, semplicemente, cosa è successo.

**Fuori l'autoreferenzialità.** Via le frasi che si complimentano da sole («la
definizione più esatta, e non l'abbiamo scritta noi», «dice della propria
serietà più di qualunque dichiarazione»). I fatti si citano e basta: il lettore
la conclusione la tira da sé, e se la tira da sé se la ricorda.

**Correzione di merito.** Le voci del lessico non sono «i temi del cartellone»:
sono alcuni dei punti di vista da cui EVO ha guardato la realtà. Alcuni, non
tutti, e l'elenco non è chiuso. Riscritta la riga d'apertura del capitolo.

**Struttura per il web.** Il testo cresce ma si legge a scansione: ogni capitolo
ha un titolo che dice qualcosa da solo, un occhiello in grassetto che regge il
messaggio anche per chi legge solo quello, sottotitoli interni e paragrafi da
tre o quattro righe. Vedi il §2 per le implicazioni SEO, che sono concrete e
vanno implementate, non solo lette.

---

## 1. La fabula: il vocabolario che si scrive

Ogni marchio ha un gesto che non presta a nessun altro: Tipicità ha i quadri e
la moviola, il Grand Tour la strada coi waypoint, il TIB la plancia. **EVO ha il
vocabolario.**

I quattro capitoli sono **lemmi** — `assunto`, `muta`, `lessico`, `mossa` — e
ognuno porta la propria riga di dizionario. Le definizioni non sono decorative:
sono l'argomento della pagina detto in una riga invece che in tre paragrafi, e
come il menù bifronte di Tipicità **non vanno spiegate da nessuna parte**.

```
assunto  s.m.  ciò che si dà per vero prima di cominciare.
muta     s.f.  il cambio di pelle; anche il silenzio che lo precede.
lessico  s.m.  l'insieme delle parole di cui una comunità dispone.
               Ciò che non vi compare, per quella comunità, quasi non esiste.
mossa    s.f.  l'unità minima del gioco: una scelta che sposta tutti.
```

Il gesto vivo sta nel terzo capitolo: **il lessico si scrive mentre lo leggi**.
Le voci si aprono una per volta nella propria definizione. Chi arriva in fondo
ha in mano un vocabolario che prima non aveva — la tesi della pagina dimostrata
invece che dichiarata. La tassonomia non è inventata: il programma 2024 era
indicizzato esattamente così.

⚠️ **Il lemma è la navigazione, non il titolo.** In barra e nella riga di
dizionario compare il lemma in minuscolo; il titolo della sezione (`<h2>`) è una
frase vera. La v1 sbagliava qui: quattro `<h2>` che dicono «assunto», «muta»,
«lessico», «mossa» non significano niente né per un lettore che scorre né per un
motore di ricerca.

## 2. SEO e leggibilità — istruzioni operative

**Gerarchia.** Un solo `<h1>`. Oggi `BrandLayout` lo genera come
`<h1 class="sr-only">{brandName}</h1>`, cioè la sola parola «EVO»: troppo magro.
Va passato un testo pieno — **EVO — i linguaggi del terzo millennio** — restando
pure `sr-only` se il disegno lo richiede. Poi quattro `<h2>` (i titoli del §4–7)
e i pochi `<h3>` indicati nei testi. Le voci del lessico **non** sono heading:
sono bottoni, e il loro testo è già indicizzabile.

**Il testo deve esistere nell'HTML.** Le definizioni del lessico vanno servite
nel markup e nascoste in CSS, mai iniettate da JavaScript: sono il contenuto più
denso e distintivo della pagina, ed è quello che i motori e gli assistenti
leggono per capire di cosa parla EVO.

**Parole che devono comparire nel testo**, perché sono quelle con cui EVO viene
cercato e nominato: *EVO*, *Macerata*, *festival*, *linguaggi del terzo
millennio*, *linguaggi del cibo*, *linguaggi del gioco*, *Tipicità Evo*, *Grand
Tour delle Marche*, *Università di Macerata*. Sono tutte nei testi che seguono,
in posizione naturale: non aggiungerne altre e non infittirle.

**Collegamenti interni.** Nel capitolo `muta`, «Tipicità» e «Grand Tour delle
Marche» vanno linkati alle rispettive landing. Sono i due link che raccontano la
genealogia e tengono insieme il sito.

**Dati strutturati.** La pagina è un manifesto senza date, quindi uno schema
`Event` sarebbe invalido (richiede `startDate`). Usare un `WebPage` con
`about` di tipo `Festival`, nome EVO, `location` Macerata, `organizer` Comune di
Macerata. Niente date finché la pagina non ne dichiara.

**Ritmo di lettura.** Occhiello in grassetto sotto ogni `<h2>`; paragrafi di tre
o quattro righe, un'idea per paragrafo; misura della riga fra i 62 e i 72
caratteri. La pagina può essere lunga: deve essere scansionabile.

---

## 3. Testata

- `title`: **EVO — i linguaggi del terzo millennio, Macerata**
- `description`: **EVO è il festival dei linguaggi del terzo millennio, a
  Macerata. Dai linguaggi del cibo a quelli del gioco: perché le parole che
  usiamo non descrivono il mondo, lo costruiscono.**
- `h1` (anche `sr-only`): **EVO — i linguaggi del terzo millennio**
- `kicker`: **Macerata · i linguaggi del terzo millennio**
- `heroLine`: **È il tempo a dare forma al linguaggio, o il linguaggio a dare
  forma al tempo?**
- `practical`: solo **Dove · Macerata**.

Manifesto puro: nessuna data, nessun numero d'edizione (le fonti sono
discordanti e non numerare risolve il problema alla radice — la nota in testa al
file si può togliere). In fondo alla pagina, `evo.ooo` come unica riga di
servizio: è un indirizzo, non una data, e non invecchia.

---

## 4. Capitolo · **assunto**

`<h2>` **EVO è evoluzione, è il tempo che viviamo, è mutamento**

> **assunto** *s.m.* — ciò che si dà per vero prima di cominciare.

**Occhiello:** Il festival nasce da una domanda: le parole raccontano il tempo,
o lo fabbricano?

Le parole che scegliamo, i segni, le immagini, i gesti — tutto l'insieme di cose
che chiamiamo linguaggio — descrivono la realtà o la costruiscono? È una domanda
che il Novecento ha messo al centro e non ha chiuso.

EVO parte da lì e lavora su un'ipotesi precisa: che il rapporto vada nei due
sensi, e che la parte interessante sia il ritorno. Un festival è un buon posto
per osservarlo, perché è uno dei pochi luoghi in cui una comunità prova parole
nuove in pubblico e vede subito l'effetto che fanno.

`<h3>` **Una parola che sparisce si porta via la cosa**

Quando smette di circolare il nome di un mestiere, il mestiere sparisce poco
dopo: prima dal discorso, poi dal mercato, poi dalle mani di chi lo sapeva fare.
Funziona anche al contrario. Un prodotto che trova il proprio nome smette di
essere merce. Un quartiere chiamato in un modo da chi ci abita e in un altro da
chi ci passa soltanto è, di fatto, due quartieri diversi.

L'Università di Macerata è partner scientifico del festival fin dalla prima
edizione, e il suo motto — *umanesimo che innova* — dice bene il perimetro. Il
Ministero del Turismo, inserendo EVO tra gli eventi da non perdere, l'ha
definito «un esperimento che studia, racconta e cerca di interpretare i fenomeni
moderni analizzandoli dal punto di vista umanistico».

---

## 5. Capitolo · **muta**

`<h2>` **Da Tipicità Evo a EVO: come un festival ha cambiato pelle**

> **muta** *s.f.* — il cambio di pelle; anche il silenzio che lo precede.

**Occhiello:** Nel 2021 era uno spin-off di [Tipicità](/tipicita/), tappa del
[Grand Tour delle Marche](/grand-tour-delle-marche/), nato in piena pandemia.
Tre anni dopo era un'altra cosa.

Le prime due edizioni vivono sospese tra fisico e digitale: dirette lunghe, clip
girate nei ristoranti, Macerata raccontata a distanza perché attraversarla non
si poteva. Il tema si stringe su accoglienza e territorialità, con una
coincidenza che vale la pena notare: si lavora sull'ospitalità nell'unico
momento storico in cui ospitare è vietato.

`<h3>` **Il momento in cui il cibo diventa un linguaggio**

La formula compare alla seconda edizione quasi come un titolo di sezione — *i
nuovi linguaggi del cibo*, in un panel di semiotica e filosofia condotto dal
rettore dell'ateneo. Alla terza si prende l'intero programma.

Ed è lì che il festival scopre di aver detto più di quanto intendesse. Il cibo è
il primo vettore di cultura: chiamarlo linguaggio apre una porta che non si
richiude. Nello stesso cartellone entrano la musica, l'arte, il teatro di
figura, le storie per bambini, una civiltà intera invitata a raccontarsi. La
parola era più grande della cosa che doveva descrivere.

Il nome cambia per conseguenza. «Tipicità Evo» descriveva un'appendice, e quello
che stava succedendo non lo era più. Nasce EVO — i linguaggi del terzo
millennio: un festival che prende il linguaggio come oggetto, non come
strumento. E che, come tutti i festival di città, non è mai soltanto il
programma di chi lo organizza: lo fanno anche i locali che aderiscono, le
associazioni che portano un laboratorio, chi sale su un palco per un pomeriggio.

**Vale la pena fermarsi un secondo: è la tesi del festival applicata al festival
stesso. Una parola nuova ha cambiato la cosa che doveva descrivere.**

---

## 6. Capitolo · **lessico**

`<h2>` **Il vocabolario di EVO: i linguaggi per guardare la realtà**

> **lessico** *s.m.* — l'insieme delle parole di cui una comunità dispone.
> Ciò che non vi compare, per quella comunità, quasi non esiste.

**Occhiello:** Non sono i temi di un cartellone. Sono alcuni dei punti di vista
da cui EVO ha guardato la realtà — e ognuno restituisce un pezzo diverso.

Alcuni: l'elenco non è chiuso e non ha nessuna intenzione di esserlo.

Voci del vocabolario — **[BOZZA, da validare]**, le definizioni sono scritte da
Cowork nel registro di EVO:

- **i linguaggi del cibo** — Si impara prima di saper parlare. Dice da dove
  vieni anche quando preferiresti tacerlo.
- **i linguaggi dell'accoglienza** — Una grammatica: si possono conoscere tutte
  le regole e restare scortesi, o sbagliarle tutte e far sentire qualcuno a casa.
- **i linguaggi della tipicità** — Un prodotto senza nome è merce. Con un nome, e
  con la storia che lo regge, è un luogo che si può mangiare.
- **i linguaggi d'impresa** — Le parole con cui un'azienda si descrive decidono
  che azienda diventerà. Cambiare il piano industriale è facile. Cambiare il
  vocabolario, no.
- **i linguaggi del digitale** — Non un canale in più: un modo di pensare, che si
  è preso le nostre frasi prima dei nostri schermi.
- **i linguaggi artificiali** — Parliamo con qualcosa che ha imparato a parlare
  leggendoci. Quello che risponde è fatto delle nostre parole.
- **i linguaggi dell'arte** — Dice ciò che non entra in nessuna frase. Chi smette
  di praticarlo perde pezzi di sé senza accorgersene.
- **i linguaggi dell'odio** — Le parole che feriscono non sono un effetto
  collaterale del discorso: sono un progetto. Nominarle è il primo modo di
  disinnescarle.
- **i linguaggi del benessere** — Il corpo parla per primo e quasi sempre ha
  ragione. Ascoltarlo è una forma di alfabetizzazione.
- **i linguaggi del contemporaneo** — Dire *adesso* mentre adesso sta ancora
  succedendo: la cosa più difficile che il linguaggio sappia fare.
- **i linguaggi del gioco** — Li contiene tutti. Si simula qualsiasi cosa, poi se
  ne esce per parlarne.

Riga di chiusura del capitolo, composta come nota:

**Nel programma del 2024, uno degli incontri sui linguaggi dell'odio si
intitolava «Quando le parole incidono sulla realtà». Lo firmavano l'Università
di Macerata e un liceo classico.**

---

## 7. Capitolo · **mossa**

`<h2>` **Il gioco è il linguaggio che permette di parlarli tutti**

> **mossa** *s.f.* — l'unità minima del gioco: una scelta che sposta tutti.

**Occhiello:** L'ultimo linguaggio entrato nel vocabolario è anche quello che li
contiene.

`<h3>` **Un laboratorio dove si può simulare tutto**

Dentro un gioco si montano un mercato, una città, una carestia, una guerra — e
poi se ne esce per parlarne. Le cose troppo grandi o troppo dolorose per essere
affrontate di petto, giocate diventano maneggiabili. È il motivo per cui
eserciti, scuole e bambini usano lo stesso strumento per ragioni opposte.

`<h3>` **Regole che tengono insieme persone lontanissime**

A un tavolo da gioco un ottantenne, un trentenne e un bambino di dieci anni
stanno alla pari, e idee distanti convivono per un'ora senza scontrarsi. Quasi
tutti gli altri linguaggi fanno il contrario: servono a segnalare chi sta dentro
e chi sta fuori.

E il gioco va oltre la nostra specie. Si gioca con un cane, si gioca con un
gatto: chi addestra un animale sta giocando, e lo sanno tutti e due. È
probabilmente l'unico linguaggio interspecifico che abbiamo — l'unico che
nessuno ha dovuto insegnare.

Il capitolo è appena cominciato.

---

## 8. Chiusura della pagina

**Una parola nuova, messa in circolo in una città, dopo un po' la si sente per
strada. Da lì in avanti non è più una parola: è un pezzo di mondo.**

Sotto, in piccolo, l'unica riga di servizio: **evo.ooo**.

---

## 9. Nota su una discordanza (per Paolo)

Nel tuo racconto la prima volta che si parla esplicitamente di *linguaggi del
cibo* è la terza edizione; i documenti in cartella la anticipano di un anno (il
comunicato della seconda apre proprio con quella formula, e c'è già il panel di
semiotica col rettore). Nel testo la formula «compare quasi come un titolo di
sezione» alla seconda e «si prende l'intero programma» alla terza. Se preferisci
una versione secca, dimmelo.

## 10. Cosa manca

Le fotografie: la pagina ha bisogno di poche immagini e molto forti — la piazza
trasformata in spazio di gioco, il tavolo con le tre generazioni, il temporary
restaurant. Sono nei reportage 2024 e 2025, i due PDF più pesanti della cartella,
che non sono riuscito a portare qui: se me ne estrai una decina in JPG te le
seleziono e le preparo.

## 11. La cromia resta quella di EVO

Nessun passaggio alla carta chiara: la pagina resta sul vinaccia profondo
derivato dal `#7f1144` ufficiale, con `#b8497a` come tono acceso. `theme`
invariato: `--bg-void #190712`, `--bg-deep #240b1a`, `--bg-mid #301023`,
`--brand-accent #b8497a`.

Il fondo scuro cambia il registro del vocabolario, e in meglio: non un dizionario
**stampato** ma un dizionario che **si illumina** — più giusto della carta per un
festival sui linguaggi del terzo millennio.

Le righe di dizionario vanno in Cormorant: lemma in `--brand-accent`, categoria
grammaticale in corsivo su `--text-faint`, definizione in `--text-dim`. Sopra e
sotto un filetto `--hairline` corto, a misura del testo e non a tutta larghezza:
è il gesto tipografico della voce di dizionario senza doverla imitare.

Nel lessico la voce chiusa è inchiostro spento; **aprendosi si accende** — il
lemma passa all'accento, la definizione entra in dissolvenza sotto. È l'unico
punto della pagina in cui il colore si muove e va tenuto tale: nessun bagliore,
nessuna ombra colorata, solo il passaggio di tono in 200 ms.

Contrasto: `--text-faint` su `#190712` va verificato a schermo, non a occhio —
stessa verifica già fatta per il TIB, dove la soglia utile si era fermata a 0.58.
Le definizioni sono testo piccolo: se non tengono il 4.5:1 si alza il tono,
non si ingrandisce il corpo.

## 12. Indicazioni per Code

**Struttura.** Quattro capitoli al posto dei due attuali, `id` `assunto`, `muta`,
`lessico`, `mossa`; nella barra dei capitoli le etichette in minuscolo — è la
forma del lemma, non un vezzo, e va rispettata anche se stona con le altre
landing. Ogni sezione: `<h2>` col titolo del §4–7, subito sotto la riga di
dizionario, poi l'occhiello in grassetto, poi il corpo con i suoi `<h3>`.

**La riga di dizionario** è l'elemento nuovo: si disegna una volta e si riusa
quattro. Non è un titolo ma una definizione —
`<p class="lemma"><b>muta</b> <i>s.f.</i> — il cambio di pelle; anche il silenzio
che lo precede.</p>`. Le quattro definizioni non vanno spiegate in nessun punto
della pagina.

**Il lessico** è il gesto proprio di EVO e va fatto bene, perché è l'unica cosa
che questa landing ha e le altre no. Undici voci; ognuna è un
`<button aria-expanded>` col lemma e un pannello con la definizione. Le voci
**non si chiudono a vicenda**: chi vuole apre tutto il vocabolario e se lo legge
di fila. Apertura in 200 ms con la definizione in dissolvenza; sotto
`prefers-reduced-motion: reduce` resta solo la comparsa. Tastiera completa, con
`Home`/`End` alla prima e all'ultima voce. **Senza JavaScript le definizioni
devono essere già visibili** — progressive enhancement, e vedi il §2: quel testo
deve stare nell'HTML.

**Testata, SEO e pulizie.** Aggiornare `title`, `description`, `kicker` e
`heroLine` come al §3; passare al layout un `<h1>` pieno al posto del solo «EVO»;
`practical` tiene solo «Dove · Macerata»; togliere la nota in testa al file sul
numero d'edizione. Linkare Tipicità e Grand Tour nel capitolo `muta`. Dati
strutturati come al §2. In chiusura il testo del §8 e `evo.ooo` come link.

**Fuori perimetro.** Niente moviola, niente quadri, niente mappe, niente plancia:
sono di Tipicità, del Grand Tour e del TIB. Qui il gesto è il vocabolario.

**Verifica.** Screenshot a 390 / 768 / 1440 con autocritica scritta; giro di
tastiera completo sul lessico; controllo del contrasto come al §11; e una
verifica di struttura — un solo `<h1>`, quattro `<h2>`, nessun salto di livello.

Commit suggerito: `contenuti: EVO — landing (assunto, muta, lessico, mossa)`.
