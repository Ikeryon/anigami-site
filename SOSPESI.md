# SOSPESI — cose aperte, per pagina

> Registro dei punti in attesa: materiali mancanti, testi da validare,
> decisioni di Paolo. Si accumula man mano che si lavorano le pagine.
> Aperto da Claude Code, 07/08/2026 (richiesta di Paolo).
> Convenzione: `[ ]` aperto · `[x]` chiuso (con data e come si è chiuso).

---

## Trasversali (tutto il sito)

- [ ] **Immagini OG** — i meta testuali (title/description) ci sono su tutte
  le pagine, manca l'immagine di anteprima social. Serve un'immagine per
  pagina (1200×630) o una di sistema. Nessun `og:image` finché non esiste,
  meglio niente che un link rotto.
- [ ] **`dist/` è tracciato da git** (80 file) e non è in `.gitignore`: ogni
  build sporca la lista delle modifiche con 14+ file. Da ignorare e smettere
  di tracciare — **serve prima la conferma che Vercel builda dai sorgenti**
  e non serva la cartella committata.
- [ ] **File pesanti in root**: `GT2.eps` e `Imagina_1.eps` (~1,4 MB l'uno).
  Valutare se tenerli fuori dal repo (sono export sorgente, non asset web).
- [ ] **Bilinguismo IT/EN** — impianto pronto e collaudato su Tipicità
  (`/en/tipicita/`). Mancano i testi EN di: home, Grand Tour, Tipicità in Blu,
  EVO, Note di produzione, Entra in scena. Arrivano da Cowork, non si
  inventano. Nomi dei capitoli EN già decisi dalla brochure TF27.
- [ ] **Menù dei progetti** — per ora vive solo su Tipicità. Paolo ha detto
  che può stare ovunque: da estendere alle altre pagine quando si vuole.
- [ ] **Lighthouse** non eseguibile dalla sessione: performance e
  accessibilità da misurare sulla preview Vercel.

## Tipicità

- [ ] **Peso della pagina**: la mappa SVG della moviola è 163 KB inline
  (~58 KB in brotli). Riducendo i decimali dei path si taglierebbe il 30–40%
  con spostamenti sotto il decimo di pixel — impercettibile ma tecnicamente
  una modifica visiva: **serve l'ok di Paolo**.
- [ ] **Video hero 9,8 MB** (`/tipicita/loop.mp4`) in autoplay: è il vero
  collo di bottiglia delle prestazioni. Andrebbe ri-encodato a 2–3 MB.
- [ ] **Contrasto degli anni della moviola**: `--text-faint` rende ~2,6:1 sui
  numeri non attivi (sotto AA). Alzarlo è un cambio di colore → ok di Paolo.
- [ ] **Testo del Giappone (2025 · JP)**: unica frase NON approvata, scritta
  da me perché lo split 2025 lo richiedeva. È marcata `[BOZZA]` in pagina.
- [ ] **Media mancanti** per le tappe 2022 · AE (Dubai) e 2022 · TZ
  (Tanzania): mostrano "Foto d'archivio — in selezione".
- [ ] **Didascalie moviola** tutte `[BOZZA]`, da validare.

## Tipicità in Blu

- [ ] **Testi = bozze Cowork (v2)**, da rileggere in preview con Paolo.
- [ ] **Anno della prima edizione**: la consegna v1 indicava `2014` come
  **dedotto** (dalla 12ª edizione nel 2025), mai confermato. Ora non è più in
  pagina (il giornale di bordo è stato rimosso in v2), ma resta un dato da
  fissare prima di riusarlo altrove.
- [x] **Date prossima edizione** — chiuso 07/08/2026: Paolo indica
  **maggio 2027**; schema.org Event con precisione al mese, giorni esatti da
  aggiungere quando fissati.
- [ ] **I 24 video** (12 pillole The Blue Way + 3 set hackathon con giurie e
  classifiche) erano nella versione precedente e **non sono più in pagina**:
  la struttura v2 non li prevede. Sono recuperabili dalla history git.
  Decidere: appendice in fondo, pagina propria, o si lasciano fuori.
- [ ] **Verifica visiva**: dalla sessione non è stato possibile vedere la
  pagina resa né far scattare conteggi e dissolvenze (il pannello browser non
  compone frame, l'IntersectionObserver non si attiva). Serve una controprova
  di Paolo sulla preview.

## Grand Tour delle Marche

- [ ] *(in lavorazione, 07/08/2026)*
- [ ] **Cartolina Montappone 2017** esclusa: il file fornito è a bassa
  risoluzione. Cowork la riesporta dal PDF "Festa del Cappello".
- [ ] **Cartolina Capodarco 2015** esclusa (doppione con la serie 2016).
- [ ] **Cartolina 2020 con Lavinia** in recupero (file OneDrive instabile):
  quando arriva entra in gallery.
- [ ] **Retro delle cartoline 2015**: hanno testi bilingui d'epoca — materiale
  per un eventuale "gira la cartolina" in una v2 della gallery.
- [ ] **Claim di stagione** "Oltre la destinazione…": da confermare con Paolo
  se è payoff di pagina o solo di stagione.
- [ ] **Illustrazione di Martino** dal pieghevole 2026: serve il file pulito.
- [ ] **Foto dei tre capitoli**: placeholder in attesa di selezione d'archivio.
- [ ] **Link al calendario** della stagione corrente su tipicita.it: resa da
  definire con Paolo.

## EVO

- [ ] **Fabula da implementare** (Alfabeto · Evoluzioni): la pagina usa ancora
  capitoli di Tipicità, in violazione della regola dell'ossatura.
- [ ] **Numero di edizione** incerto (fonti discordanti 4ª/5ª).
