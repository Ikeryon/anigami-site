# BRIEF-HOME v3 — la vetrina

Cowork, 07/08/2026. **Riscrittura completa dopo la bocciatura della v2 da parte
di Paolo.** Sostituisce l'impianto oggi in `src/pages/index.astro`. Il profilo Imagina (ora §7) resta com'era: quello va bene ed è già stato ampliato.

## 0. Perché la v2 non funzionava

Va detto con precisione, perché la diagnosi è metà del rimedio.

La v2 è un **manifesto**, non una vetrina. Tutto galleggia al centro di un
bianco senza bordi: il logo piccolo in mezzo allo schermo, quattro parole in
basso, e attorno il vuoto. Un impianto così regge solo quando c'è **una**
immagine che fa tutto il lavoro; qui l'immagine è un logo di pochi centimetri e
il resto è testo. Di conseguenza la pagina non è minimale — è spoglia, che è
un'altra cosa. Mancano tre cose insieme: **i bordi** (niente cornice, tutto
appeso nel nulla), **la materia** (nessuna fotografia: il sito racconta quattro
festival e non se ne vede uno), e **la promessa** (chi arriva non capisce in un
secondo che dietro ci sono quattro mondi).

Le frasi in sovrimpressione sui nomi erano il sintomo dello stesso problema:
servivano a riempire un vuoto che andava riempito con le immagini, non con
altre parole. Via.

Mutamenti: via anche quello. Era una voce senza contenuto stabile, che
prometteva un flusso di novità che nessuno si è impegnato a tenere aggiornato.
Una voce morta in home costa più di quanto renda.

## 1. Il concept: quattro ante di una vetrina

La home è **una vetrina divisa in quattro ante**, a tutta pagina, dentro una
cornice. Ogni anta è un progetto: una fotografia del suo mondo, velata dalla
cromia del marchio, con il suo segno in basso. Le quattro ante riempiono tutto
lo schermo — non c'è un pixel di vuoto, e questo risolve alla radice il
problema della v2.

Passando sopra un'anta, quella **si apre**: cresce fino a occupare metà
vetrina, la fotografia perde il velo e torna a colori, e sotto il segno
compare il logo del marchio con il suo luogo e il suo mese. Le altre tre si
stringono ma restano visibili — il gesto è quello di una tenda che si scosta,
non di una pagina che cambia. Un clic entra nella landing.

È esattamente il meccanismo che chiedeva Paolo — «icone che passando rivelano
il logo e si può cliccare» — ma con la fotografia dietro, che è la parte che
trasforma quattro pulsanti in una vetrina.

**Il rapporto con la pellicola.** La home continua a non avere il menù a
capsula, e ora si capisce perché: le quattro ante *sono* la pellicola,
proiettata a tutto schermo. Fuori dalla home i quattro segni si richiudono nella
capsula in alto a destra; qui si aprono e diventano il paesaggio. È la stessa
regola di prima — la home è il menù esploso — ma finalmente visibile.

## 2. La cornice

È la richiesta esplicita di Paolo, ed è la cosa che toglie l'effetto "appeso al
centro". Un filetto da 1 px inset di 20 px dal bordo dello schermo, con le
quattro tacche d'angolo marcate: è un **fotogramma**. Coerente col linguaggio
della casa (la moviola, il controcampo, la pellicola) e utile, perché dà alla
pagina dei bordi veri.

Dentro la cornice, sui due lati, vivono le uniche righe di testo della home, in
maiuscoletto piccolo su fondo scuro:

- **alto a sinistra** — il logotipo Imagina, piccolo, in bianco;
- **alto a destra** — `Chi siamo` (apre il profilo) e `EN`;
- **basso a destra** — `Camerino, Marche · dal 1991`.

Nient'altro. La parola «Imagina» compare una volta sola, ed è il logotipo.

## 3. L'ingresso: il sipario

Al caricamento la vetrina è chiusa: schermo di carta `#faf9f6`, e al centro il
video del logo che si compone — l'asset `public/home/hero-imagina.mp4` che c'è
già e pesa 150 KB. Finito il video (circa 16 secondi, ma si può tagliare a 6–8),
**le quattro ante si aprono** con un wipe dal centro verso i lati, 700 ms,
easing secco. Il logotipo si rimpicciolisce e va a parcheggiarsi nell'angolo
alto a sinistra della cornice, dove resta.

Questo è l'effetto wow, e costa pochissimo: un video già prodotto e una
transizione CSS. Chi torna una seconda volta se lo risparmia — `sessionStorage`,
ante già aperte, logotipo già in cornice. E chi ha `prefers-reduced-motion`
salta direttamente allo stato aperto.

## 4. Comportamento, in dettaglio

**Riposo.** Quattro ante uguali. Fotografie in grigio all'55 % di saturazione,
velo di cromia del marchio al 62 % in multiply, gradiente scuro sopra per
tenere leggibili i segni. In basso a sinistra di ogni anta, il segno del
marchio in bianco a 52 px.

**Sopra un'anta.** L'anta cresce (flex-grow da 1 a 2.6, le altre a 0.72), 550 ms
con easing `cubic-bezier(.55,.05,.18,1)`. La fotografia torna a colori e chiude
lo zoom da 1.04 a 1. Il velo scende al 34 %. Sotto il segno compaiono, sfalsati
di 60 ms, il logo del marchio (altezza 44 px) e la riga `luogo · mese`.

**Clic.** Si entra nella landing. Nessun overlay intermedio: i sipari di marchio
della v2 erano un passaggio in più che non aggiungeva niente — le landing sono
diventate buone, si va lì.

**Tastiera.** Le quattro ante sono link veri, in tab order. Il focus produce lo
stesso stato del passaggio del mouse. Anello di focus visibile.

**Touch.** Sotto i 900 px le ante diventano **quattro fasce orizzontali**
impilate, ognuna alta un quarto di schermo, tutte già "aperte": fotografia a
colori, segno e logo visibili, la riga del luogo sotto. Nessun hover da
simulare, nessun tap intermedio: si tocca e si entra. La cornice resta.

## 5. Le fotografie — è qui che la home vive o muore

Servono **quattro fotografie**, una per marchio, e sono il vero investimento di
questa pagina. Devono essere: orizzontali e ad alta risoluzione (almeno 2400 px
di lato lungo, perché una singola anta aperta arriva a metà schermo); con un
soggetto leggibile anche in una fascia stretta, quindi composizione centrale e
non dispersa; con spazio scuro o vuoto nel terzo inferiore sinistro, dove vanno
segno e logo; e devono contenere **persone**, perché quattro paesaggi vuoti
raccontano una regione, quattro folle raccontano quattro festival.

Da evitare in modo assoluto: locandine, cartoline, roll-up, slide, palchi
istituzionali con relatori seduti. Nel mock che allego ho dovuto usare quello
che c'era in `public/` e si vede — la locandina di Recanati come sfondo a tutta
pagina è la dimostrazione per assurdo di quanto conti la scelta.

Per EVO al momento non c'è nulla in repo: serve una foto della piazza in gioco.

Formato di consegna: JPG progressivo, ~2400 px, in `public/home/vetrina/`, con
una `-poster` a 40 px per il blur-up. Se Paolo le estrae dai reportage, gliele
seleziono e le preparo io.

## 6. Un asset da rifare

Il logotipo Imagina che va in cornice deve essere **su fondo trasparente e in
bianco**. Quello usato oggi nel mock è il poster del video, che ha il rettangolo
bianco attorno e sopra una fotografia fa il buco che si vede negli screenshot.
In repo c'è già `src/assets/imagina-logotype.svg` in `currentColor`: usare
quello, oppure — meglio ancora, viste le misure — il monogramma della pellicola
(`mk-imagina-mono`) accanto al logotipo.

## 7. Profilo Imagina [ampliato il 07/08, invariato in questa v3]

Il profilo cresce perché i soci vogliono metterci mano e perché deve reggere da
solo: è l'unico punto del sito in cui Imagina parla di sé, e chi lo apre
probabilmente sta valutando se lavorare con voi. Struttura a cinque blocchi,
titoletti brevi, così si scansiona invece di leggersi tutto d'un fiato.

Fonte: `Company Profile 2025` consegnato da Paolo il 07/08. Due segnalazioni
prima dei testi, al §4bis.

### 4.1 — Chi siamo

> Imagina è una società benefit con sede a Camerino, nelle Marche. Dal 1991
> lavora nel marketing territoriale e nella comunicazione integrata, con una
> specializzazione netta su due comparti: l'agroalimentare e il
> turistico-territoriale.
>
> È una microimpresa che opera su scala internazionale, e la cosa sta in piedi
> per una ragione precisa: Imagina è il referente di un partenariato
> pubblico-privato che oggi conta circa trecento entità, pubbliche e private,
> che si riconoscono nel valore territorio. Non è una rete di patrocini: è la
> struttura con cui si lavora tutto l'anno.
>
> Da questo trentennio nasce il patrimonio di progettualità che vive sotto il
> marchio ombrello Tipicità e nelle sue declinazioni — [Tipicità
> Festival](/tipicita/), il [Grand Tour delle
> Marche](/grand-tour-delle-marche/), [Tipicità in Blu](/tipicita-in-blu/) ed
> [EVO](/evo/). Quattro progetti autonomi, quattro linguaggi, una sola rete.

### 4.2 — Come lavoriamo

> Contaminazione, osmosi, cross fertilization: è il carburante con cui Imagina
> attiva processi di networking fra filiere e fra territori. Reti lunghe e reti
> corte che producono racconti nuovi e occasioni nuove, usando la crossmedialità
> globale per veicolare specificità locali.
>
> Il metodo ha un ordine e costa tempo. Prima si ascolta cosa dice il
> territorio, e ci vogliono mesi. Poi si incontrano comunità diverse e si
> confrontano le differenze invece di appianarle. Poi si mette a fuoco il
> posizionamento — locale nella sostanza, globale nello sguardo. Solo alla fine
> si costruiscono azioni su misura, perché nessuna comunità somiglia a
> un'altra abbastanza da meritare lo stesso formato.
>
> Il lavoro arriva chiavi in mano: analisi di fattibilità, progettazione,
> coordinamento, organizzazione generale. E arriva da un gruppo di professionisti
> con esperienza pluriennale in Italia e all'estero nella pianificazione, nella
> progettazione e nella comunicazione integrata.

### 4.3 — Cosa facciamo

> **Marketing e sviluppo territoriale** — progetti di marketing, coaching e
> networking territoriale; creazione e sviluppo di marchi ombrello; processi di
> cross-fertilization fra filiere; percorsi bottom-up per lo sviluppo turistico;
> co-creazione degli asset di un territorio; itinerari turistici generali e
> tematici; progetti di cooperazione transnazionale.
>
> **Eventi e format** — progettazione, organizzazione e gestione chiavi in mano
> di festival, congressi, convegni, fiere ed esposizioni; hackathon; corsi di
> formazione professionale; press tour ed educational tour.
>
> **Comunicazione** — campagne crossmediali su web, social e direct mailing
> customizzato; ufficio stampa e rapporti con i media locali, nazionali e di
> settore; piani di relazioni pubbliche; consulenza di immagine; produzione
> video; pubblicazioni, dalle guide alle monografie.

### 4.4 — Dove

> Imagina opera in quasi tutte le regioni italiane. Fuori dai confini, una rete
> di relazioni costruita nel tempo l'ha portata a lavorare in Germania, Francia,
> Spagna, Regno Unito, Slovenia, Croazia, Montenegro e Albania, e più lontano in
> Stati Uniti, Canada, Argentina, Emirati Arabi, Norvegia e Giappone.

### 4.5 — Che cosa significa essere società benefit

Questo è il blocco che Paolo ha chiesto esplicitamente: **spiegare l'istituto,
non celebrarsi**. La regola di scrittura è che il lettore, uscendo, deve aver
imparato qualcosa che non sapeva — non essersi fatto un'idea di quanto siamo
bravi. Per questo il blocco spiega prima la forma giuridica e solo dopo dice
cosa comporta per Imagina.

> Società benefit non è una certificazione e non è un premio. È una forma
> giuridica, introdotta in Italia dalla legge di stabilità 2016 — legge
> 208/2015, commi 376-384 — che ha fatto dell'Italia il primo Paese europeo ad
> averla nel proprio ordinamento.
>
> E non è nemmeno il non profit. Una società benefit resta un'impresa che fa
> utili e li distribuisce. Quello che cambia è l'oggetto sociale: accanto allo
> scopo di lucro, nello statuto vengono scritte una o più finalità di beneficio
> comune. Da quel momento non sono più intenzioni. Sono vincoli, e vincolano gli
> amministratori, che devono bilanciare tre interessi invece di uno solo: quello
> dei soci, quello delle finalità dichiarate e quello delle persone su cui
> l'attività dell'impresa ha effetto.
>
> Da qui discendono tre obblighi concreti. Va nominato un responsabile
> dell'impatto. Va redatta ogni anno una relazione di impatto, allegata al
> bilancio e pubblicata sul sito. E quella relazione non può essere un racconto:
> l'impatto va misurato con uno standard di valutazione esterno e indipendente,
> che copre quattro aree — governance, lavoratori, altri portatori d'interesse,
> ambiente.
>
> C'è anche una sanzione, ed è la parte che rende la cosa seria. Un'impresa che
> si dichiara società benefit senza perseguire davvero le finalità che ha scritto
> ricade nella disciplina della pubblicità ingannevole, sotto la vigilanza
> dell'Autorità Garante della Concorrenza e del Mercato. Non è un'etichetta che
> si appende: è un impegno che ha un costo e che qualcuno può venire a
> verificare.
>
> **Per Imagina** questo significa una cosa sola, e la si può dire in una riga:
> la cura del territorio non è il contorno del lavoro, è il lavoro. Valorizzare
> i talenti di una regione ad ampio spettro — gli artigiani e i ricercatori, i
> produttori e gli studenti, chi tiene aperta una bottega in un borgo e chi in un
> laboratorio studia il mare. Il profitto serve a tenere in piedi la struttura;
> lo scopo è che i territori dove lavoriamo stiano meglio di come li abbiamo
> trovati.

[Da qui i link di chiusura: Note di produzione · Entra in scena · Mutamenti ·
info@anigami.it — l'email è l'unico luogo del sito in cui quel dominio esiste.]

## 8. Due cose da sistemare prima di pubblicare

**Le finalità di beneficio comune.** Il blocco 4.5 spiega l'istituto ma non cita
quello che Imagina ha effettivamente scritto nel proprio statuto — è l'unica cosa
che non posso ricavare dai documenti, ed è anche la più forte da riportare
testualmente. Paolo: mandami quelle righe dello statuto e le innesto, perché una
finalità citata alla lettera vale dieci righe di spiegazione.

**Un obbligo che riguarda proprio questo sito.** La relazione annuale di impatto
va *pubblicata sul sito della società*, quando la società ne ha uno. Da quando
anigami.it è il sito di Imagina, la relazione va ospitata qui — anche solo come
PDF con un link dal profilo. Non è una scelta editoriale: è adempimento. Vale la
pena predisporre da subito la voce, magari accanto a Note di produzione.

**Due segnalazioni sul Company Profile 2025.** La denominazione in apertura è
ancora «Imagina di Francesca Serri & C.», che non corrisponde a Imagina Srl
Società Benefit: nei testi ho usato la denominazione attuale, ma il documento
andrebbe aggiornato. E nell'elenco dei Paesi compare la Federazione Russa:
l'ho omessa dal testo per il sito — su una pagina pubblica del 2026 apre una
conversazione che non è quella che volete fare. Se preferisci rimetterla, si fa.

## 9. Regole d'ingaggio (UX, invariate dove funzionavano)

Il profilo Imagina resta un `<dialog>` vero: focus trap, ESC chiude, click fuori
chiude, `aria-modal`, ritorno del focus alla voce d'origine, e `pushState` così
il back del browser chiude invece di uscire dal sito. È l'unico overlay rimasto
in home: i quattro sipari di marchio spariscono, Mutamenti sparisce.

Niente autoplay audio, niente parallax, niente cursore custom. Il video del
sipario è muto, `playsinline`, e non parte se il risparmio dati è attivo — in
quel caso si va diretti alla vetrina aperta.

Performance: quattro JPG a tutta pagina sono il carico principale, quindi
`fetchpriority="high"` sulla prima anta, `loading="eager"` su tutte e quattro
(sono above the fold per definizione), blur-up dal poster, `width`/`height`
dichiarati per non muovere niente. Obiettivo Lighthouse ≥ 90 su mobile, che con
quattro fotografie è un traguardo onesto — la home non è più quasi vuota, e va
bene così.

## 10. Cosa serve, da chi

**Da Paolo**: le quattro fotografie (§5) e le finalità di beneficio comune
dello statuto (§8). Sono le due cose che nessun altro può dare.

**Da Cowork**: selezione e preparazione delle immagini appena arrivano i
reportage; le didascalie `luogo · mese` se si vuole cambiarle rispetto a quelle
qui sotto.

**Da Code**: la costruzione. Le quattro righe di didascalia proposte sono
`Fermo · marzo`, `Marche · giugno–dicembre`, `Ancona · maggio`,
`Macerata · settembre`. Nota che EVO si è spostato a settembre: il dato è
confermato dal sito ufficiale e dalla presentazione istituzionale, quindi la
vecchia dicitura «dicembre» è da considerarsi superata ovunque compaia.

## 11. Il mock

Allegati a questa consegna quattro screenshot a 1440: lo stato di riposo con le
quattro ante, e l'apertura di ciascuna. Il file interattivo è `home-v2b.html`:
si apre nel browser e si passa il mouse. Serve a decidere l'impianto, non i
dettagli — le fotografie sono segnaposto e il logotipo in cornice ha ancora il
rettangolo bianco (vedi §6).

Nel pacchetto c'è anche `home-v2a.html`, una variante scartata: cornice e campo
unico che cambia mondo al passaggio sui quattro segni allineati in basso.
Funziona, ma a riposo resta bianca — cioè ricade nel difetto da cui siamo
partiti. La tengo agli atti solo per mostrare perché la vetrina a quattro ante
è la risposta giusta.
