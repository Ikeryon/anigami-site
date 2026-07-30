# Anigami — Concept generativo "Anāgāmi: ciò che cambia non torna indietro"

> **Cos'è.** Il modello generativo del nuovo anigami.it, sul metodo che ha
> funzionato per evo.ooo: un'idea-madre che genera navigazione, transizioni,
> naming, micro-interazioni — non un tema grafico. Per EVO: "il festival è
> un gioco" → il sito è un Tabellone. Per Anigami:
>
> **anāgāmi** — nel buddhismo, "colui che non ritorna": il terzo stadio del
> risveglio, chi è trasformato al punto che non tornerà mai alla forma di
> prima. Da qui l'idea-madre, laica e concreta:
> **la trasformazione irreversibile. Ciò che cambia non torna indietro.**
>
> **Stato.** PROPOSTA v2 (2026-07-30) — sostituisce la v1 "foglio e piega",
> scartata da Paolo. Prototipo: `mockup-anagami-home.html`.
> ⚠️ Il riferimento buddhista è la radice del nome, non l'estetica: niente
> iconografia religiosa, niente zen da spa. Il principio si vive
> nell'interazione, non si dichiara.

---

## 1. Perché è l'idea giusta (è già nei contenuti)

- EVO non sta per olio d'oliva: sta per **Evoluzione**.
- Il Grand Tour si misura da **"ciò che resta quando è già ripartito"**.
- I festival "smettono di essere quello che chi li organizza ha scritto" e
  **non somigliano a se stessi dieci anni fa**.
- La pizza col pomodoro: il locale che attraversa il mondo **non torna**
  quello di prima.
- Il payoff di Imagina già scelto per la home: *"Una rete che continua a
  muoversi."*

Il sito non deve raccontare questo principio: deve **farlo accadere**
mentre lo si naviga.

## 2. Come l'idea genera l'esperienza

1. **Il segno resta (firma del sistema).** Le micro-interazioni sono
   irreversibili nella sessione: dove passi, lasci un segno che non si
   cancella. Il trace-link cambia natura: la riga sotto il link **non si
   dissolve più — resta** (oggi si dissolve lentamente; nel nuovo modello
   il passaggio è un cambiamento compiuto). I pannelli dei progetti
   visitati/toccati conservano il filo del proprio colore: a fine visita
   la home porta i segni del tuo percorso. (Vedi mockup: hover su un
   pannello → il segno rimane.)
2. **La metamorfosi del nome (una sola volta).** Alla prima visita, in
   hero, le lettere di **imagina** si riordinano in **anigami** — sono le
   stesse lettere, è un fatto: il nome è Imagina trasformata. Succede una
   volta sola, mai replay (come il sipario di EVO: `localStorage`), perché
   una trasformazione vera non si ripete. Ai ritorni il nome è già, e per
   sempre, anigami.
3. **Mai la stessa pagina due volte.** A ogni navigazione l'atmosfera
   varia impercettibilmente (posizione degli aloni del gradiente, seed per
   sessione): tornare alla home non è tornare indietro — è arrivare in un
   posto leggermente diverso. Sottile, sotto la soglia del "effetto", ma
   percepibile come vita.
4. **Moto sempre in avanti.** Transizioni direzionali (View Transitions):
   entrare in un progetto spinge avanti; tornare alla home NON è
   l'animazione inversa (nessun "rewind" visivo — si prosegue, non si
   torna). Il reveal allo scroll resta one-way: ciò che è apparso non
   ri-scompare (già così, ora diventa principio dichiarato).
5. **Lessico.** Feed news in home = **"Mutamenti"** (dry, fattuale: ogni
   notizia è un cambiamento di stato dell'universo). Footer: *"Ciò che
   cambia non torna indietro. Imagina, dal 1991."* Restano "Note di
   produzione" ed "Entra in scena".
6. **Cosa NON si fa.** Niente simboli buddhisti, niente loto/ensō/mandala,
   niente citazioni. La radice del nome può vivere in UNA riga discreta
   nelle Note di produzione (etimologia), non in home.

## 3. L'equivalente di "Conquest" (prospettiva, NON MVP)

**"Il passaggio"**: un percorso nell'universo in cui ogni scelta chiude
la precedente — il visitatore attraversa 3 soglie (territorio, tema,
stagione) e ottiene un itinerario personale tra gli eventi dei progetti
(da Directus: events → editions → initiatives, già modellati). Alla fine
il percorso è suo e non si rifà uguale: seed registrato, itinerario
"non-ritornante". Zero backend nuovo. Da valutare a landing e feed a
regime.

## 4. Cosa resta fermo (vincoli)

- Testi approvati, impianto e cromie delle landing (brochure Tipicità,
  blu TIB, ecc.): la trasformazione è il **gesto di attraversare il
  sito**, non un restyling delle figure.
- Tono asciutto/cinematico; Imagina solo su home/note/entra-in-scena.
- Stack: Astro su Vercel; news da Directus `articles` con `target_sites`
  (architettura Bibbia §10), rebuild via Deploy Hook.
- Accessibilità: `prefers-reduced-motion` = niente metamorfosi né derive
  d'atmosfera, contenuto identico; la metamorfosi del nome ha fallback
  statico ("anigami" già composto) e non blocca nulla (SEO: il DOM
  contiene il nome finale).

## 5. Metodo di lavoro (come per EVO)

1. **Cowork**: prototipi HTML da vedere prima di codare —
   `mockup-anagami-home.html` (metamorfosi + segni che restano); se la
   direzione piace: mockup transizione-avanti tra pagine e "Mutamenti".
2. Ad approvazione: handoff `ANIGAMI-HANDOFF-*.md` + prompt per la
   sessione Claude Code (repo con dev server).
3. Decisioni di livello universo → Bibbia (`anigami-studio-new/docs/
   PROGETTO-ANIGAMI.md`), sezione nuova per anigami.it, rileggendo sempre
   il file dal disco prima di scrivere.

## 6. Punti da chiarire con Paolo

1. Conferma dell'idea-madre **anāgāmi / trasformazione irreversibile** e
   del tono (radice buddhista come etimologia discreta, non estetica).
2. Il trace-link che **resta** invece di dissolversi: ok al cambio di
   firma? (È il rovescio del principio attuale "si dissolve con ritardo".)
3. "Mutamenti" come nome del feed news in home: convince?
4. La metamorfosi imagina→anigami una-sola-volta-per-sempre: ok, o
   preferisci una volta **per sessione**?
5. Dove vive il repo: OneDrive (attuale, recente) vs `C:\Progetti`
   (migrazione già fatta per gli altri; lì c'è solo una copia di aprile).
6. Brief per l'agente del feed news: da aggiornare col backend reale
   (Directus/`articles` esiste già — il mio brief diceva "da scegliere").
