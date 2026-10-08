# Tipicità — la porta d'ingresso: `.Soglia`

Consegna Cowork → Code, 19/08/2026.
Richiesta di Paolo: un pulsante per chi arriva sulla landing e vuole **partecipare
in qualche modo** a Tipicità, con doppia opzione — scrivere a
`segreteria@tipicita.it` oppure andare al minisito espositori — più un link
generico a `tipicita.it` in un altro punto della pagina.

File toccati: `src/components/TipicitaPage.astro` e `src/i18n/tipicita.js`.
Nient'altro.

---

## 1. Dove va, e perché lì

La landing è un mazzo di cinque quadri a scorrimento agganciato: hero, `.Trama`,
`.Essenza`, `.Motore`, `.Tracce`. Dopo la moviola **non c'è niente**: il mazzo
finisce, il footer di sito è spento apposta (`footer.site-footer { display: none }`,
riga 221) perché non entrava nel deck. Chi arriva in fondo trova un vicolo cieco.

Quindi non un pulsante appiccicato da qualche parte, ma **un sesto quadro che
chiude il mazzo**. Risolve la richiesta e tappa un buco che c'era già.

Nome del capitolo: **`.Soglia`** / **`.Threshold`**, in coerenza con la grammatica
degli altri cinque. È preferibile a `.Espositori` perché Paolo ha chiesto una porta
per chi vuole partecipare *in qualche modo*, non solo per chi vuole uno stand — e
il nome non deve chiudere quello che le due opzioni tengono aperto.
(Alternativa se `.Soglia` non convince: `.Banco` / `.Stand`, parola già di casa.)

## 2. Le due opzioni non sono due porte sulla stessa stanza

Questo è il punto che rende il blocco utile invece che decorativo, e va reso
esplicito nel testo: **il minisito è per chi espone, la mail è per tutto il resto.**
Se le due opzioni sembrano intercambiabili, la segreteria riceve richieste da
espositore via mail e il modulo del minisito riceve proposte che non c'entrano.

### Testo — italiano

`h2` → `.Soglia`

Occhiello (la riga sotto il titolo):

> Il festival si costruisce con chi lo attraversa: produttori, territori,
> istituzioni, scuole, chi porta un mestiere e chi porta un progetto. Da qui si
> entra in due modi.

**Opzione A — pulsante primario**
Etichetta: `Esporre al festival`
Destinazione: `https://tipicita.it/minisito_espositori.php`
Riga sotto: `Spazi, formati e condizioni per la prossima edizione, sul sito di Tipicità.`

**Opzione B — pulsante secondario**
Etichetta: `Scrivere alla segreteria`
Destinazione: `mailto:segreteria@tipicita.it?subject=Partecipare%20a%20Tipicit%C3%A0%20Festival`
Riga sotto: `Per tutto il resto: collaborazioni, progetti, eventi, proposte da valutare insieme.`

### Testo — inglese

`h2` → `.Threshold`

> The festival is built with those who cross it: producers, territories,
> institutions, schools, people bringing a craft and people bringing a project.
> There are two ways in.

**A** — `Exhibit at the festival` → stesso URL →
`Spaces, formats and terms for the next edition, on the Tipicità website.`
**B** — `Write to the secretariat` → stesso `mailto` con
`?subject=Taking%20part%20in%20Tipicit%C3%A0%20Festival` →
`For everything else: partnerships, projects, events, proposals to weigh together.`

**Nessuna annata nelle etichette.** Il minisito oggi dice «Tipicità Festival 2027»
e ogni anno cambia: se l'anno finisce nel pulsante, il pulsante invecchia da solo.

## 3. Le due regole tecniche che contano

**L'indirizzo va scritto in chiaro, non solo dentro il `mailto`.** Sotto il
pulsante B, `segreteria@tipicita.it` in testo selezionabile. Chi legge da un
computer senza client di posta configurato — cioè quasi chiunque usi solo webmail
sul telefono aziendale — su un `mailto` nudo non arriva da nessuna parte, e non
torna indietro a cercare l'indirizzo.

**Il link al minisito esce dal sito.** Va `target="_blank"` con
`rel="noopener noreferrer"`, e va **detto**: un `↗` accanto all'etichetta più un
testo per lo screen reader del tipo `si apre su tipicita.it, nuova scheda` /
`opens on tipicita.it, new tab`. Un link che cambia dominio e apre una scheda senza
preavviso è la cosa che più spesso fa perdere la pagina a chi ci era arrivato.

## 4. Il link generico a `tipicita.it`

Va **nella barra in alto, accanto al selettore di lingua**, come voce discreta:
`tipicita.it ↗`.

Il motivo è nel CSS, non nel gusto. La barra si assottiglia da sola: la regola
`.tbarra.js:not(.vista) .tbarra-marchio, .tbarra.js:not(.vista) nav { opacity: 0 }`
(righe 290-291) spegne marchio e navigazione, ma **non tocca `.to-lang`**, che
resta sempre visibile. Un link messo lì è disponibile da ogni quadro senza aggiungere
un solo elemento allo schermo negli altri stati. Ovunque altro sarebbe invisibile
per la maggior parte del tempo, oppure invadente.

Stesso trattamento tipografico di `.to-lang`, colore attenuato, stesse regole del §3
sull'uscita dal sito. Non toccare il marchio Tipicità della barra, che punta a
`#top` e deve continuare a farlo: è il ritorno in cima, non un secondo link esterno.

## 5. Il resto dell'innesto

Il quadro nuovo è l'ultimo figlio di `.deck`, dopo `</section>` di `#tracce`
(riga 206), con `class="quadro"` e `id="soglia"`. Da allineare di conseguenza:

- la voce nell'array `c.menu` di `tipicita.js`, in entrambe le lingue, così entra
  nella navigazione della barra e riceve `aria-current` dall'osservatore già in
  funzione;
- il pulsante `#deck-next` (riga 210), che sull'ultimo quadro non deve invitare a
  scendere ancora: o si nasconde, o riporta in cima cambiando etichetta. **Da
  verificare come si comporta oggi sull'ultimo quadro prima di decidere.**
- l'oggetto `soglia` in `tipicita.js` accanto agli altri capitoli, con occhiello,
  etichette, sottotitoli e testi per lo screen reader — niente stringhe nel markup;
- `footer.site-footer` resta spento: questo quadro non lo sostituisce e non lo
  riaccende.

Sul disegno: il quadro chiude una landing che finora non ha mai chiesto niente a
chi legge, quindi non deve arrivare come una pagina di vendita. Cromia del capitolo,
i due pulsanti sullo stesso piano tipografico degli `h3` degli altri quadri, il
primario pieno e il secondario in tratto — la gerarchia la fa il peso, non la
dimensione. E deve stare tutto dentro il quadro anche su laptop basso
(`max-height: 860px`), come gli altri.

## 6. Verifica

A 390 / 768 / 1440 e su laptop basso: il quadro entra intero, l'aggancio dello
scorrimento tiene, la barra segna `.Soglia` come capitolo corrente quando ci si
arriva. Giro di tastiera su entrambi i pulsanti e sul link della barra, con il
focus visibile. Il `mailto` apre il client con l'oggetto già scritto. Il link al
minisito apre `https://tipicita.it/minisito_espositori.php` in una scheda nuova.
Prova con JavaScript spento: il quadro e i due link devono funzionare comunque,
perché sono link, non comandi.

Commit suggerito: `feat: Tipicità — quadro .Soglia con doppia porta d'ingresso
(espositori · segreteria) e link a tipicita.it in barra`.

## 7. Una segnalazione per Paolo, non per Code

Ho aperto `https://tipicita.it/minisito_espositori.php` per controllare che fosse
la pagina giusta: lo è — titolo «Diventa espositore a Tipicità Festival 2027»,
trentacinquesima edizione. Però in fondo alla pagina c'è un blocco `SALES` che
risponde **«Funzionalità temporaneamente non disponibile»** con la rotella che
gira. Prima di mandarci traffico dalla landing converrebbe farlo sistemare da chi
tiene tipicita.it: è l'ultima cosa che vede chi arriva fin laggiù.
