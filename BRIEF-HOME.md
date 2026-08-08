# BRIEF-HOME — La home di Imagina: il palcoscenico
> Esito del tavolo webdesigner + UX (Cowork, 07/08/2026), su indicazioni
> di Paolo: niente scorrimento, hero col logo che si compone, bottone in
> alto per il profilo Imagina, preview dei 4 brand con la stessa logica.
> Reference: rollingstones.com (esperienza immersiva full-screen, il
> backstage come home) — con le dovute differenze: loro scuri e rock,
> noi bianco luminoso e teatro di produzione. Regole sovrane invariate:
> la parola "anigami" non esiste; niente "quattro festival"; i giochi di
> senso si agiscono, non si spiegano.

## 1. Il concept in una riga

**La home è un palcoscenico a sipario chiuso: una sola inquadratura,
nessuno scroll. Tutto il resto è un controcampo che si apre sopra.**

Il bianco #faf9f6 è il palco vuoto. Al centro, l'unico gesto: il logo
di Imagina che si compone (le lettere entrano e si assemblano — la
metamorfosi come gesto, UNA volta sola, poi resta il logo: il
non-ritorno). Niente da scorrere: solo cose da APRIRE. Ogni apertura è
un taglio di montaggio che copre lo schermo; ogni chiusura riporta al
palco. I due verbi della regia — taglio per il cambio di punto di
vista, dissolvenza per il non-ritorno — sono gli unici movimenti.

## 2. Anatomia (desktop)

- **Centro**: video del logo che si compone, su fondo identico al
  fondo pagina (si deve NOT vedere il rettangolo video: il logo nasce
  dal bianco). Gira una volta, si ferma sul logo composto. Reduced
  motion / replay visit: logo statico con dissolvenza.
  ✅ ASSET CONSEGNATO (07/08): `public/home/hero-imagina.mp4` — 16s,
  muto, 1080p, 8-bit, faststart, 150KB (!): il lockup scuro che si
  compone su fondo #FAF9F6, chiusura su "imagina società benefit" con
  la M magenta. Poster dell'ultimo frame: `hero-imagina-poster.jpg`.
  Il video gira UNA volta (no loop) e si ferma sull'ultimo frame; il
  fondo del video È il fondo pagina: nessun bordo visibile.
  NOTA GITIGNORE per Code: il master `Imagina_Hero_FAF9F6.mp4` è nella
  root del repo — aggiungerlo al .gitignore col prossimo commit.
- **Alto destra**: voce discreta `Imagina` → apre l'overlay-sipario
  del profilo (§4): chi è Imagina, ben scritto, + accessi a Note di
  produzione, Entra in scena, contatti. Il footer classico NON esiste
  in home: vive qui dentro.
- **Basso, centrato**: le quattro voci dei progetti, solo tipografia:
  `Tipicità · Grand Tour delle Marche · Tipicità in Blu · EVO`.
  - **Hover** = il controcampo del pannello (metanarrativa §2): la
    voce mostra il VERSO, il dato di metodo che il pubblico non vede
    (righe in §5). Micro-taglio, non flip da template.
  - **Click** = overlay a schermo pieno nella CROMIA del brand: logo
    grande, una riga, `Entra →` verso la landing. Il bianco del palco
    si accende del colore del progetto: è il momento wow, ottenuto con
    un colore pieno e un logo, non con effetti.
- **Voce minore** (accanto a Imagina o sotto le quattro): `Mutamenti`
  → overlay feed news (statico finché non arriva Directus).

## 3. UX — regole d'ingaggio del tavolo

- Gli overlay sono dialog veri: focus trap, ESC chiude, click fuori
  chiude, `aria-modal`, ritorno del focus alla voce d'origine.
- History: aprire un overlay fa pushState (il back del browser chiude
  il sipario invece di uscire dal sito).
- Nessun autoplay audio, nessun parallax, nessun cursore custom.
- Mobile: stessa inquadratura — logo al centro (poster + dissolvenza,
  niente video se il risparmio dati è attivo), le quattro voci
  impilate in basso, tap = overlay. Il "hover-verso" su touch diventa
  la prima riga dell'overlay.
- Performance: il video-logo su bianco comprime benissimo — target
  <2MB; poster preloaded; zero layout shift; Lighthouse ≥95 (la home
  è quasi vuota: deve volare).
- Il taglio: overlay che entra a copertura piena in 260–320ms con
  easing secco (no bounce); la dissolvenza solo per il logo e per
  Mutamenti.

## 4. Profilo Imagina [v2 — 07/08, ampliato su richiesta di Paolo]

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

## 4bis. Due cose da sistemare prima di pubblicare

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

## 5. Le quattro voci — recto/verso [BOZZE, dal quadro metanarrativo]

| Voce (recto) | Verso (hover) | Riga nell'overlay |
|---|---|---|
| Tipicità | otto mesi di produzione per tre giorni di festival | Il festival delle traiettorie indigene. Fermo, dal 1993. |
| Grand Tour delle Marche | ciò che resta quando è già ripartito | Un itinerario che dura una stagione: 73 comuni e la strada continua. |
| Tipicità in Blu | due sponde dell'Adriatico, un solo cantiere | Mare, laboratorio di futuro. Ancona, la Mole, la rotta. |
| EVO | si impara a cooperare giocando | I linguaggi del gioco. Macerata, ogni dicembre. |

[NB EVO: date/riga da verificare al momento del lavoro su EVO. I versi
NON si spiegano: appaiono e basta.]

## 6. Cosa serve, da chi

- Paolo: validazione del profilo (§4, incluso 'perché società benefit') e dei versi (§5). [Video: FATTO]
- Cowork: conversione web del video, eventuali micro-revisioni copy.
- Code: implementazione su questo brief. La home attuale (corridoio
  poster + scroll) viene sostituita; pagine interne e route esistenti
  restano raggiungibili dagli overlay.
