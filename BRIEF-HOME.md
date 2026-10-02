# BRIEF-HOME v4 — la casa

Cowork, 09/08/2026. Terza e ultima riscrittura dell'impianto, dopo la scelta di
Paolo. Sostituisce le versioni precedenti (manifesto, vetrina a quattro ante).
Il profilo Imagina — sezione 7 — resta invariato: quello va bene.

## 0. Come ci siamo arrivati, in tre righe

La v2 era un manifesto e risultava spoglia. La v3, la vetrina a quattro ante,
riempiva lo schermo ma dava ai marchi una centralità che sulla home della casa
non devono avere: chi atterra qui deve ricevere la visione di **Imagina**, non
quella dei singoli progetti. Da qui la v4: il campo è della casa, i quattro
progetti stanno in un angolo come timbri.

## 1. Il concept

Un campo scuro a piena pagina dentro una cornice. Al centro il logotipo Imagina
che **si compone una volta sola** e resta. Sotto, una riga di visione. Dietro,
molto attenuata, una fotografia in movimento che respira. Sul filetto in basso,
i dispacci dal feed. In basso a destra, dopo la scritta «i progetti», i quattro
segni di marchio piccoli.

Niente scroll, niente overlay di marchio, niente Mutamenti. Un'inquadratura sola
che dice chi è la casa, e quattro porte discrete per chi vuole andare oltre.

## 2. La cornice

Filetto da 1 px inset di 20 px con le quattro tacche d'angolo marcate: è un
fotogramma, coerente con il linguaggio della casa e con la pellicola del menù.
Dentro la cornice, le uniche righe di testo: in alto a sinistra
`Imagina Srl Società Benefit`, in alto a destra `Chi siamo` (apre il profilo) e
`EN`, in basso a sinistra `Camerino, Marche · dal 1991`.

## 3. Il logotipo e il fondale — asset già in `public/home/`

Sono pronti e verificati. Il master alpha di Paolo è ProRes 4444 `yuva444p12le`
e la trasparenza è corretta; da lì ho ricavato quello che serve al web.

| file | cosa è | peso |
|---|---|---|
| `imagina-logo.mp4` | logotipo bianco su nero, 7,9 s, 1280×720, muto | 517 KB |
| `imagina-logo-poster.png` | ultimo fotogramma, **con alpha** | 217 KB |
| `imagina-fondo.mp4` | fondale di prova, 15,8 s, 1600 px, muto | 1,4 MB |
| `imagina-fondo-poster.jpg` | posa del fondale | 44 KB |

**Il logotipo va montato con `mix-blend-mode: screen`.** È bianco su nero: il
blend mangia il nero e lascia passare solo il segno luminoso, che galleggia
sopra il fondale senza rettangoli. Attenzione a un dettaglio che mi ha fatto
perdere tempo: il blend agisce sul contesto di impilamento più vicino, quindi
**nessun antenato del video deve avere `z-index`, `opacity` < 1, `transform` o
`filter`**, altrimenti il logo si fonde con il vuoto e il nero riappare. Se
serve ordinare i livelli, si usa l'ordine nel DOM, non lo z-index.

Ho provato anche la strada del WebM VP9 con alfa vera: l'encoder qui a
disposizione non conserva il canale, e non vale la pena insistere perché la
soluzione screen funziona su tutti i browser e pesa meno. Il master alpha resta
in archivio se un domani servisse il logotipo su fondo chiaro.

Il fondale è **una prova**, non il definitivo, e va detto a chiare lettere: l'ho
ricavato dal montaggio promozionale di Tipicità scegliendo i soli quattro
spezzoni che non dichiarano di che festival si tratti — le mani con i fuselli
del tombolo, il vino versato nei calici, la focaccia tagliata, la fila di
bottiglie — rallentati, sfocati e scuriti, con dissolvenze e nero in entrata e
in uscita perché il loop non si veda. Serve a far vedere la pagina viva. Paolo
sta preparando quello vero.

## 4. Comportamento

Al caricamento il campo è nero, il fondale parte in dissolvenza e il logotipo si
compone. Finita l'animazione (7,9 s) resta l'ultimo fotogramma: in pratica si
mette in pausa sull'ultimo frame, non si ripete. La riga di visione entra in
dissolvenza a logo completo. Il fondale continua a girare in loop, muto.

Alla seconda visita il logo non si ricompone: si parte dal poster
(`sessionStorage`). Con `prefers-reduced-motion: reduce` o risparmio dati
attivo, niente video: poster del logo e poster del fondale, fermi.

Il fondale sta al **25–30 % di opacità** sotto una vignetta radiale scura, che è
ciò che tiene leggibile il testo. Sono i due numeri da tarare a occhio in fase
di montaggio: se la frase di visione fatica, si scende di opacità, non si
ingrandisce il testo.

## 5. La riga di visione

Sostituisce «otto mesi di lavoro per tre giorni di festival», che era falsa —
si lavora tutto l'anno — e soprattutto era una frase di Tipicità travestita da
frase di Imagina. Qui si parla della casa.

> **Un territorio non si promuove. Si mette in condizione di raccontarsi.**

In Cormorant, corpo grande, la prima frase in corsivo e la seconda in tondo.
[Alternative in campo, decisione di Paolo: «Il valore di un territorio non è
quello che possiede: è quello che riesce a mettere in relazione» · «Locale nella
sostanza, globale nello sguardo».]

## 6. I dispacci — il feed, verificato il 09/08

**Il feed è vivo.** L'ho navigato: `lastBuildDate` di oggi, trenta voci, la più
recente del 5 agosto. Quello che sembrava vecchio era probabilmente una cache.

Ancora meglio, esistono i feed **per categoria**, quindi ogni landing può
mostrare le proprie notizie invece di tutte. La pagina di selezione è
`selezione_feed_rss.php`; l'endpoint è `rss.php?idCategoria=N`:

```
0  tutti                    33 territorio
27 mostre                   34 bandi e opportunità
28 sagre                    35 prodotti
29 eventi                   36 sostenibilità
30 incontri                 37 dalla vigna alla tavola
31 terre del tartufo        38 TIPICITÀ IN BLU
32 TIPICITÀ FESTIVAL        39 personaggi
                            41 GRAND TOUR DELLE MARCHE
                            42 TIPICITÀ EVO
```

Struttura di ogni `item`: `title`, `description`, `pubDate`, `guid`, `link`,
`enclosure`. Le descrizioni sono lunghe (oltre duemila caratteri) e in testo
piano, senza HTML: per il ticker vanno troncate al titolo. L'`enclosure` è una
`image/jpeg` — c'è una fotografia per ogni notizia, e questo apre la possibilità
di usarle nelle landing. Nota: l'attributo `length` vale sempre `123456`, è un
segnaposto del generatore e non va usato per niente.

**Il punto tecnico che decide l'implementazione: il CORS.** Il feed sta su
`tipicita.it`, la pagina su un altro dominio: una `fetch` dal browser viene
bloccata a meno che il server non dichiari `Access-Control-Allow-Origin`, cosa
che non fa. Due strade, e la seconda è quella giusta:

1. Lettura **al build**, dentro Astro. Zero CORS, zero JavaScript in pagina,
   velocissima — ma le notizie si aggiornano solo quando il sito viene
   ricostruito. Servirebbe un rebuild programmato su Vercel.
2. Una piccola **funzione serverless su Vercel** che scarica il feed, lo
   converte in JSON e lo tiene in cache per una quindicina di minuti. La pagina
   chiama quella. Niente CORS, niente carico su tipicita.it, e le notizie sono
   sempre fresche. È la strada da prendere.

In entrambi i casi serve un comportamento di fallback: **se il feed non risponde
o è vuoto, la riga dei dispacci non compare** — non deve mai restare uno
scheletro vuoto in basso.


## 7. Profilo Imagina [ampliato il 07/08, invariato in questa v4]

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


## 9. I quattro segni

In basso a destra, preceduti dalla scritta `i progetti` in maiuscoletto piccolo:
i quattro simboli dello sprite `public/logos/menu/brand-marks.svg`, a 27 px,
inchiostro bianco al 52 %. Al passaggio si accende la piastrella nel colore del
marchio e l'inchiostro passa al colore del fondo, come nella pellicola. Un clic
porta alla landing.

Non c'è la capsula della pellicola in home, e la ragione resta quella di sempre:
la home *è* il menù, non lo contiene.

## 10. Mobile

Sotto i 760 px il campo resta, il logotipo si stringe al 78 % della larghezza,
la riga di visione va a due o tre righe, i quattro segni si spostano in basso al
centro e i dispacci diventano **una sola notizia alla volta**, che ruota ogni
sei secondi in dissolvenza: un ticker che scorre orizzontalmente su un telefono
è illeggibile e consuma batteria. Il fondale su mobile può essere sostituito dal
solo poster, se il peso lo consiglia.

## 11. Accessibilità e resa

Un solo `<h1>` (anche `sr-only`) con «Imagina Srl Società Benefit». I video sono
decorativi: `aria-hidden`, `muted`, `playsinline`, `preload="metadata"` sul
fondale e `preload="auto"` sul logo, che è quello che deve partire subito. I
dispacci sono link veri in una lista, non testo animato: chi naviga da tastiera
deve poterli raggiungere e fermare. Anello di focus visibile su tutto. Il
contrasto della riga di visione e delle scritte in cornice va verificato **con
il fondale acceso nel fotogramma più chiaro**, non su nero pieno.

Prestazioni: la home ha due video per circa 1,9 MB in tutto, che è poco. Il
logotipo va caricato per primo, il fondale può aspettare. Obiettivo Lighthouse
≥ 92 su mobile.

## 12. Indicazioni per Code

Ricostruire `src/pages/index.astro` su questo impianto. Rimuovere i quattro
`<dialog>` di marchio e il `<dialog>` Mutamenti: resta solo l'overlay del
profilo, con le regole di sempre (focus trap, ESC, click fuori, `pushState`).
Aggiornare il testo del profilo con la sezione 7, che è cresciuta a cinque
blocchi.

Gli asset sono già in `public/home/` (§3). Attenzione alla regola del
`mix-blend-mode: screen` e dei contesti di impilamento: è il punto in cui è
facile sbagliare e accorgersene tardi.

Per i dispacci, implementare la funzione serverless su Vercel descritta al §6,
con cache di quindici minuti e fallback silenzioso. Verificare tu stesso gli
endpoint per categoria: dalla macchina di Paolo il feed è raggiungibile.

Verifica finale con screenshot a 390 / 768 / 1440, autocritica scritta, giro di
tastiera completo, e una prova con `prefers-reduced-motion: reduce` attivo.

Commit suggerito: `feat: home — la casa (campo scuro, logotipo, dispacci)`.

## 13. Cosa resta aperto

Il fondale definitivo, che Paolo sta montando: quando arriva si sostituisce il
file e basta, il codice non cambia. La riga di visione, fra le tre del §5. E le
finalità di beneficio comune dello statuto, per completare il profilo (§8).
