# Bilingue — passo 1: la rinomina e l'impianto

Consegna Cowork → Code, 2 ottobre 2026. Due lavori distinti, e vanno in
quest'ordine. **Questo documento è il primo: non contiene testi inglesi.** I testi
arrivano dopo, pagina per pagina, su questo impianto.

---

## 0. Perché prima la rinomina

Da quest'anno la manifestazione si chiama **«Tipicità»**, non più «Tipicità
Festival» (decisione di Paolo, 02/10). Se si traduce prima e si rinomina dopo, la
stessa stringa si tocca due volte e il rischio concreto è che l'inglese resti
indietro con il nome vecchio. Quindi: prima si rinomina l'italiano, poi si estrae,
poi arriva l'inglese.

**Il logo non va toccato:** `tipicita-wordmark.svg` e `-white.svg`, che sono gli
unici due che il sito usa, portano già soltanto «tipicità». (Esiste un
`public/logos/tipicita.svg` che probabilmente contiene anche la riga FESTIVAL, ma
nessuna pagina lo richiama: lasciatelo dov'è.)

**Il payoff disegnato resta com'è** — «il festival delle traiettorie indigene» /
«the festival of native trajectories»: lì «festival» è il nome comune e dice che
cosa è la cosa, non come si chiama. Decisione di Paolo.

**Restano com'erano anche tutte le altre sessanta occorrenze** della parola, che
sono nome comune: «il festival le mette nello stesso spazio», «il quartier generale
del festival», «un festival da mare a mare». Non si toccano.

---

## 1. Le otto stringhe da cambiare

Le ho cercate una per una. Sono queste e non ce ne sono altre.

**`src/components/Pellicola.astro`, riga 38** — l'etichetta nel menù, che compare
su **ogni pagina del sito**:
`nome: 'Tipicità Festival'` → `nome: 'Tipicità'`

**`src/components/TipicitaPage.astro`, riga 34** — il nome dentro i dati
strutturati, cioè quello che Google legge come nome ufficiale dell'evento:
`name: 'Tipicità Festival'` → `name: 'Tipicità'`

**`src/pages/index.astro`, riga 34** — l'etichetta del marchio in home:
`nome: 'Tipicità Festival'` → `nome: 'Tipicità'`

**`src/i18n/tipicita.js`, blocco `it.meta`:**
- `title: 'Tipicità Festival — Fermo, 12-14 marzo 2027'` → `'Tipicità — Fermo, 12-14 marzo 2027'`
- `description: 'Tipicità Festival, Fermo, …'` → `'Tipicità, Fermo, …'` (il resto invariato)

**`src/i18n/tipicita.js`, blocco `en.meta`:**
- `title: 'Tipicità Festival — Fermo, Italy · 12–14 March 2027'` → `'Tipicità — Fermo, Italy · 12–14 March 2027'`
- `description: 'Tipicità Festival, Fermo (Marche, Italy), …'` → `'Tipicità, Fermo (Marche, Italy), …'`

⚠️ **Una nota onesta sul titolo.** «Tipicità» da solo, come titolo di pagina, è una
parola comune e cerca male: a reggere il peso è la descrizione, che dice festival,
luogo, date e dal 1993. È il prezzo della decisione, non un errore — ma non
aggiungete parole al titolo per compensare: il nome è quello.

## 2. La frase della home si riscrive, non si sostituisce

`src/pages/index.astro`, **riga 173**. Oggi dice: «…sotto il marchio ombrello
Tipicità e nelle sue declinazioni — **Tipicità Festival**, il Grand Tour delle
Marche…». Togliere «Festival» qui produce un controsenso: l'ombrello e una delle sue
declinazioni avrebbero lo stesso nome nella stessa riga.

Quando il prodotto di punta prende il nome dell'ombrello, smetti di nominarlo e lo
indichi. Il testo nuovo, con i link invariati:

> Da questo trentennio nasce il patrimonio di progettualità che vive sotto il
> marchio ombrello Tipicità e nelle sue declinazioni — il
> [festival di Fermo](/tipicita/), il
> [Grand Tour delle Marche](/grand-tour-delle-marche/),
> [Tipicità in Blu](/tipicita-in-blu/) ed [EVO](/evo/). Quattro progetti autonomi,
> quattro linguaggi, una sola rete.

---

## 3. L'impianto bilingue: il modello è già in casa

Oggi **solo Tipicità è bilingue**, e il meccanismo funziona: `src/i18n/tipicita.js`
esporta `content = { it: {…}, en: {…} }`, il componente riceve `lang`, la rotta
italiana sta a `/tipicita/` e l'inglese a `/en/tipicita/`, e gli `hreflang` sono
dichiarati nel componente. **Non inventate niente: replicate questo.**

Per ciascuna delle altre pagine — **home, Grand Tour, Tipicità in Blu, EVO, Note di
produzione, Entra in scena** — serve:

1. **Estrarre la copy in `src/i18n/<pagina>.js`**, con la stessa forma: un oggetto
   `content` che per ora ha **solo `it`**. Nessuna traduzione in questo passo: si
   sposta il testo, non lo si riscrive. A fine operazione le pagine italiane devono
   rendere **identiche** a oggi — è la prova che l'estrazione è pulita.
2. **Niente rotte `/en/…` finché non esiste l'oggetto `en`.** Una rotta inglese che
   mostra testo italiano è peggio di una rotta che non c'è.
3. **Il selettore di lingua compare solo dove l'inglese esiste.** Oggi, su tutte le
   pagine tranne Tipicità, va nascosto: un selettore che porta a una pagina mancante
   è peggio di nessun selettore. Quando arriva l'inglese di una pagina, il selettore
   di quella pagina si accende da sé.

**Il Grand Tour ha un problema in più:** parte della sua copy non sta nel `.astro`
ma nei dati — `src/assets/gt-racconto.json`, `gt-tappe.json`, `gt-temi.json`,
`gt-eventi.json`. Vanno trattati con la stessa logica (una chiave per lingua dentro
il dato, oppure un file per lingua), e la scelta la fate voi: segnalatemi quale,
così scrivo l'inglese nella forma giusta al primo colpo invece che da rifare.

## 4. Gli indirizzi inglesi

**Si tiene la forma già in uso: `/en/` più lo slug italiano.** `/en/tipicita/`,
`/en/grand-tour-delle-marche/`, `/en/tipicita-in-blu/`, `/en/evo/`. Gli slug sono
nomi propri — «Grand Tour delle Marche» non si traduce — e cambiarli dopo
costerebbe una catena di redirect per niente.

Quando una pagina diventa bilingue, le vanno aggiunti gli `hreflang` come li ha già
Tipicità: `it` sulla radice, `en` sotto `/en/`, `x-default` sull'italiano. È la cosa
singola che rende di più su un sito bilingue, e si fa una volta sola.

---

## 5. Quanto è il lavoro, perché si sappia

Contate: la copy da tradurre è circa **4.800 parole** fra le sei pagine — Tipicità in
Blu da sola ne fa quasi duemila — più i quattro JSON del Grand Tour, che ne valgono
sì e no altre millecinquecento. Non è un pomeriggio, ed è lavoro mio: arriva a
blocchi, nell'ordine home → Tipicità in Blu → Grand Tour → EVO → le due pagine
piccole. Tipicità in Blu prima del Grand Tour perché il suo pubblico è
dichiaratamente l'altra sponda dell'Adriatico.

## 6. Verifica di questo passo

Le sei pagine italiane rendono identiche a prima dell'estrazione — confrontate a
schermo, non a occhio sul codice. La parola «Tipicità Festival» non compare più da
nessuna parte (`grep -ri "tipicità festival" src` non deve trovare niente, a parte
eventuali commenti che spiegano la rinomina). Il menù dice «Tipicità» su tutte le
pagine. I dati strutturati della pagina Tipicità dicono `"name": "Tipicità"`. Il
selettore di lingua non compare dove l'inglese non c'è, e `/en/tipicita/` continua a
funzionare come prima.

Commit suggeriti, due e separati:
`contenuti: la manifestazione si chiama Tipicità, non più Tipicità Festival`
`tech: copy di tutte le pagine estratta in src/i18n, impianto pronto per l'inglese`
