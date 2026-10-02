# TESTI-GT-CAPITOLI — riscrittura delle tre soste

Consegna Cowork → Code, 07/08/2026. **Sostituisce integralmente i tre capitoli
oggi in pagina** (`laboratorio-di-comunita`, `geometria-variabile`,
`incubatore`) e annulla l'istruzione «[LAVORATO] — trascrivere invariati» del
§3–5 di `TESTI-GT.md`. Titoli e `id` delle sezioni restano identici: cambia solo
il testo dentro i `<p data-reveal>`.

## Perché si riscrive (decisione di Paolo, 07/08)

Due ragioni, e la seconda è la più importante.

La prima è di opportunità. I testi attuali citavano per nome eventi, borghi e
manifestazioni. Ma un elenco di esempi, su una pagina che parla a
settantatré comuni e a chissà quanti operatori, fa un danno silenzioso: chi non
è citato legge il proprio nome mancante. In una landing che vuole essere un
posizionamento e non un portfolio, gli esempi tolgono più di quanto diano.

La seconda è di sostanza. I tre capitoli raccontavano *cosa* è successo; ora
dicono *qual è il metodo* e *a cosa serve*. Il filo è la tesi di Paolo sul
destination management: oggi tutti parlano di DMO, ma una destinazione non si
gestisce prima di esistere come soggetto — e concertazione, ascolto e
coinvolgimento non sono la premessa gentile di quel lavoro, ne sono la
condizione. Un evento, in questo, non è (solo) uno strumento di promozione: è
uno strumento di costruzione della destinazione. È l'argomento che rende questa
pagina leggibile da un'amministrazione, da un'unione montana o da un assessorato
— e non solo da un turista.

L'arco delle tre soste diventa quindi: **il metodo** (l'ascolto che viene prima)
→ **la forma** (la geometria che cambia perché l'ascolto impedisce di
standardizzare) → **l'esito** (ciò che resta, e cioè un territorio capace di
reggere una gestione strutturata della propria destinazione).

Regola di scrittura applicata, la stessa già usata per il TIB: si dice quello che
è, non quello che si potrebbe fare. E nessun nome proprio: le tipologie al posto
degli esempi — un borgo di poche centinaia di abitanti, un intero areale, una
manifestazione nata prima di noi. Concreto senza essere nominativo.

---

## 1. Laboratorio di comunità

```html
<h2 id="h-lab" data-reveal>Laboratorio di comunità</h2>
<p data-reveal>Prima di ogni programma vengono i mesi che nessuno vede: la mappatura di chi in un territorio produce, coltiva, cucina, ospita, racconta; gli incontri uno a uno con chi ci vive tutto l'anno; il lavoro paziente di mettere allo stesso tavolo persone che nello stesso paese non si erano mai sedute insieme. Quello che arriva al pubblico è la punta. Il resto resta in dote alla comunità che ospita, e non compare in nessuna comunicazione — se non qui, perché qui parliamo del metodo e non di un'edizione.</p>
<p data-reveal>Oggi si parla molto di destination management, e quasi sempre si comincia dal fondo: il piano, il marchio, la governance. Ma una destinazione non si gestisce prima di esistere come soggetto — prima cioè che chi la abita si riconosca in un racconto comune e accetti di starci dentro. Concertazione, ascolto e coinvolgimento non sono la premessa gentile di quel lavoro: ne sono la condizione. E un evento, in questo, è uno strumento formidabile, perché mette a disposizione ciò che manca sempre: una data, un'occasione e un oggetto concreto attorno a cui trovare un accordo. Non promuove soltanto una destinazione. La costruisce.</p>
```

## 2. Geometria variabile

```html
<h2 id="h-geo" data-reveal>Geometria variabile</h2>
<p data-reveal>Un borgo di poche centinaia di abitanti e una città capoluogo non hanno bisogno della stessa cosa. Così in tredici edizioni il formato ha cambiato forma ogni volta: dove non c'era niente il Grand Tour ha inventato da zero un appuntamento che prima non esisteva; dove il tema non stava in un solo paese ha costruito un'esperienza estesa a un intero areale; dove esisteva già una manifestazione radicata è entrato da ospite, senza nessuna intenzione di annettersela.</p>
<p data-reveal>Non è lo stesso evento replicato: è lo stesso principio in forme diverse. E non è flessibilità per vocazione — è la conseguenza dell'ascolto, perché chi ascolta davvero non può standardizzare. Vale anche per il perimetro: una destinazione non coincide quasi mai con un confine amministrativo. Si tiene insieme per affinità e per vocazione — una valle, un paesaggio, una filiera — e la geometria dell'itinerario segue quella, non la carta.</p>
```

## 3. Incubatore

```html
<h2 id="h-inc" data-reveal>Incubatore</h2>
<p data-reveal>Non tutto quello che nasce dentro il formato resta legato al suo calendario. Alcune cose imparano a camminare da sole: tornano ogni anno anche quando l'itinerario è altrove, con la propria organizzazione e il proprio pubblico, e a un certo punto non hanno più bisogno di noi. Sono la prova che il laboratorio ha funzionato.</p>
<p data-reveal>Il segno non è mai quanto dura la festa. È cosa resta quando il Grand Tour è già ripartito: operatori che prima non si conoscevano e adesso si telefonano, un appuntamento che qualcun altro ha preso in mano, una comunità che si è accorta di essere una destinazione. È da qui che un territorio può incamminarsi verso una DMO — non da un organigramma, ma da un gruppo che ha già imparato a decidere insieme.</p>
```

---

## Note per Code

Nessuna modifica strutturale: restano le stesse tre `<section class="sosta">`,
gli stessi `id` e `aria-labelledby`, l'alternanza `sosta--alt`, i `data-reveal`.
Cambia solo il contenuto dei paragrafi, e due sezioni passano da uno a due
paragrafi (Geometria variabile e Incubatore): verificare che il ritmo verticale
tenga, in particolare la lunghezza della riga sui 1440 px — negli screenshot di
Paolo il testo arrivava a filo del bordo destro senza respiro, e con due paragrafi
il problema si vede di più. Se la misura supera i 75 caratteri, stringere la
`max-width` del `.wrap` dei capitoli.

Aggiornare anche il commento in testa al file (riga 17: «i tre capitoli sono
[LAVORATO] e si trascrivono invariati») e il §3–5 di `TESTI-GT.md`, che ora
rimandano a questo documento.

Commit suggerito: `contenuti: GT — riscrittura delle tre soste (metodo, non
esempi; tesi DMO)`.
