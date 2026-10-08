# Tipicità in Blu — seconda tornata di correzioni

Consegna Cowork → Code, 2 ottobre 2026, dopo la seconda lettura in anteprima.
**Sostituisce la versione precedente di questo file.** Della prima tornata restano
aperte due cose; la terza è stata superata da una decisione di Paolo; e la lettura
a schermo ne ha fatte emergere altre due.

---

## Quello che è stato fatto, e va bene

**La tabella di marcia** è esattamente quello che serviva, e in un punto è meglio
della specifica: sette giorni con le iniziali dei giorni della settimana invece di
«g1…g8» — si legge senza spiegazioni, e corrisponde al programma vero (sabato →
venerdì). Le tre barre con il circuito a tratteggio, la riga di lettura sotto e i
tre paragrafi su tre colonne: tutto a posto.

**La gabbia dei blocchi** è risolta ovunque: la scheda laterale in `.Rotta`, quella
di `.Cantiere` (NASCE DA · ATENEI · IN RETE), la cronologia su due campi con
l'intestazione in monospazio a sinistra, la lastra dell'hackathon che riempie il
campo di destra. Il bianco non sembra più un errore.

**Il frammento di carta** è stato ricalcato da coordinate reali, con il Conero al
centro e la nota che lo dichiara. Molto meglio della curva a mano libera del mockup.

---

## 1. Lo zero esce di pagina — decisione di Paolo

Il blocco «**0** · i contributi pubblici ricevuti», con la frase che lo accompagna
(«Tipicità in Blu non riceve contributi pubblici: è sostenuta dalle imprese del
territorio…»), **va tolto interamente** dal pannello delle letture.

La ragione non è grafica: il dato è vero, ma vantarlo in pagina rischia di suonare
come una stoccata proprio verso gli enti che sono partner istituzionali della
manifestazione — Comune di Ancona, Regione Marche, Camera di Commercio. Un fatto che
in una relazione interna è un merito, su una vetrina pubblica diventa un messaggio
che non vogliamo mandare.

Resta il pannello con le tre letture: `2014`, `oltre 30`, `oltre 25`. **Ribilanciale
su quattro colonne ciascuna**, così occupano le dodici e il pannello non resta con
un quarto vuoto a destra. Cade anche la regola «una sola rottura della regolarità»:
non c'è più niente da rompere.

(Di conseguenza decade la correzione n. 2 della tornata precedente, che chiedeva di
ingrandire quel numero.)

## 2. «La quattordicesima edizione» è ancora lì

Nella scheda laterale di `.Rotta`, voce `PROSSIMA`. La correzione precedente chiedeva
di toglierla e non è stata applicata. **Va tolta**: quel numero è dedotto da una base
che nessuno ha confermato — il reportage ufficiale 2025 dice «dodicesima» in
copertina e «undicesima» nella pagina dei numeri, nell'analisi e nell'organigramma.

La voce `DURATA · sette giorni, dal sabato al venerdì` invece **resta**: quella ha una
fonte, è il programma reale, ed è la stessa su cui è costruita la tabella di marcia.

## 3. La banda non fa più il suo lavoro

L'immagine della banda è cambiata fra la prima e la seconda lettura: adesso è un
gruppo di persone **di spalle** davanti al porto. La didascalia dice «la linea blu del
waterfront» e il testo accanto parla del porto che va da Marina Dorica all'arco di
Traiano — ma una folla di schiene non mostra né il porto né la linea.

Nella prima versione c'era una veduta del porto con le gru e il duomo sullo sfondo:
**quella faceva esattamente il lavoro che la banda deve fare**. Se è ancora nel
bacino, rimettila; altrimenti scegli dal bacino `public/tib/foto/` una veduta ampia
del fronte mare, non un primo piano di pubblico.

Ricorda che la banda è l'unica immagine a colori pieni di tutta la pagina: è la
cerniera fra «che cos'è» e «com'è fatto», e vale per dieci lastre.

## 4. Un marchio leggibile nella lastra «La tavola»

Nella lastra `04 · LA TAVOLA` il logo **Coop** è leggibile in alto nell'inquadratura.
È la regola che ci siamo dati su `.Trama` e che vale per tutte le lastre: niente
marchi leggibili, perché una lastra deve dire il capitolo, non promuovere qualcuno —
tanto più un marchio che nella pagina compare già, correttamente, fra i partner.

Sostituiscila con un'altra immagine del bacino. Il soggetto giusto per quello slot è
un tavolo, un locale, il pesce in tavola: non un ricevimento.

---

## Verifica

Dopo queste quattro, le misure che non sono ancora state prese: **390 / 768** e
laptop basso. Alla finestra stretta vanno controllati soprattutto la tabella di
marcia (le barre non devono diventare illeggibili: sotto i 700px collassa a elenco,
come da specifica) e le schede laterali, che a colonna singola devono finire **dopo**
il testo a cui si riferiscono, non prima.

Commit suggerito: `fix: TIB — via il dato sui contributi pubblici e il numero di
edizione non confermato, banda e lastra 04 sostituite`.
