# Anigami — Concept generativo "Il foglio e la piega"

> **Cos'è.** Il modello generativo del nuovo anigami.it, sul metodo che ha
> funzionato per evo.ooo: non un tema grafico, ma un'idea-madre che genera
> navigazione, transizioni, naming, micro-interazioni e (in prospettiva)
> un'esperienza dentro il sito. Per EVO l'idea-madre è "il festival è un
> gioco" → il sito è un Tabellone. Per Anigami la proposta è:
>
> **anigami è l'anagramma di imagina — le stesse lettere, piegate in una
> forma nuova.** Il sito è un foglio che si piega.
>
> **Stato.** PROPOSTA da discutere con Paolo (2026-07-30). Niente è
> approvato. Prototipo di riferimento: `mockup-piega-home.html` (in questa
> cartella).

---

## 1. L'idea-madre

Imagina lavora così da trent'anni: lo stesso foglio — una rete di ~300
realtà, un metodo — piegato ogni volta in una figura diversa. Tipicità,
Grand Tour, Tipicità in Blu, EVO non sono capitoli di un catalogo: sono
**figure diverse dello stesso foglio**. E una piega non torna mai piatta:
ogni progetto lascia una traccia nel metodo (principio già nel brief:
"traccia che resta", oggi reso letterale dal trace-link).

Il nome dice già tutto: **imagina → anigami** è una piegatura di lettere
(con l'eco evidente di *origami*). Il sito non deve raccontare questa idea:
deve **farla succedere sotto le dita** di chi naviga.

In una riga (per la home): **"Un solo foglio, molte figure."**

## 2. Come l'idea genera l'esperienza

- **La home è il foglio.** Bianco luminoso, grana di carta (già in essere).
  I quattro progetti non sono card ma **pieghe del foglio**: pannelli che
  si sollevano/aprono come falde di carta (vedi mockup). Aprirne uno =
  piegare il foglio in quella figura.
- **Le transizioni sono pieghe.** Il passaggio home → landing non è un
  fade ma una **piegatura** (View Transitions con trasformazione a falda,
  fallback dissolvenza + `prefers-reduced-motion`). Da landing a landing
  il foglio si ri-piega, non si ricarica.
- **Ogni landing è una figura compiuta.** Resta l'impianto attuale (poster
  autonomo, cromia propria — la brochure per Tipicità, il blu per TIB…):
  la figura finita NON deve mostrare il foglio; è il gesto di arrivarci
  che lo mostra. Nulla del lavoro fatto si butta.
- **Le micro-interazioni sono creste di piega.** Il trace-link (la riga
  che resta e si dissolve lentamente) è già la firma; si estende con:
  angoli che si sollevano al passaggio (corner-fold sui pannelli), bordi
  vivi tipo battitura del foglio, ombre di falda (mai drop-shadow
  generiche: sempre ombra "di carta piegata", direzionale).
- **Il lessico.** Le news dell'universo (feed da Directus `articles`)
  sulla home diventano **"Ultime pieghe"**; le pagine già approvate
  restano ("Note di produzione", "Entra in scena" — registri compatibili:
  la produzione è di chi piega). Il footer può chiudere con la riga:
  *"Lo stesso foglio, dal 1991."*
- **Il suono del gesto (opzionale, da discutere):** nessun suono. La
  carta di Anigami è silenziosa — l'eleganza sta nel movimento.

## 3. L'equivalente di "Conquest" (prospettiva, NON MVP)

EVO ha l'inside-game; Anigami può avere **"La piegatura"**: un percorso
guidato in cui il visitatore "piega" il proprio itinerario nell'universo —
risponde a 3 gesti/domande (che cerco? un territorio, un tema, una data) e
il foglio si piega davanti a lui in un percorso personale tra i progetti
(eventi da Directus, già modellati: events → editions → initiatives).
Zero backend nuovo: legge ciò che lo Studio già pubblica. Da valutare solo
quando il feed news e le landing sono a regime.

## 4. Cosa resta fermo (vincoli)

- I **testi approvati** e l'impianto delle landing (cromie, hero, capitoli).
- Il tono: asciutto, cinematico, niente linguaggio pubblicitario.
- Imagina presente solo su home/note/entra-in-scena.
- Stack: Astro su Vercel; contenuti condivisi da Directus (articles con
  `target_sites`) secondo l'architettura della Bibbia (§10). Il sito resta
  statico con rebuild via Deploy Hook, come Perla.
- Accessibilità: ogni piega ha fallback statico; `prefers-reduced-motion`
  = nessuna piegatura, solo dissolvenze.

## 5. Metodo di lavoro (copiato da EVO, che ha funzionato)

1. **Cowork**: prototipi HTML da vedere e correggere insieme
   (`mockup-piega-home.html` è il primo; se l'idea piace seguono:
   mockup transizione-piega tra pagine, mockup "Ultime pieghe").
2. Ad approvazione: **handoff** (`ANIGAMI-HANDOFF-*.md`) + prompt per la
   sessione **Claude Code** che implementa nel repo con dev server.
3. Decisioni che toccano l'universo → **Bibbia** (`anigami-studio-new/
   docs/PROGETTO-ANIGAMI.md`): dopo l'approvazione del concept aggiungere
   una sezione per il sito anigami.it (oggi non esiste), rileggendo
   sempre la Bibbia dal disco prima di scriverla.

## 6. Punti da chiarire con Paolo

1. **Dove vive il repo**: il lavoro recente è in
   `C:\Users\User\OneDrive\Documenti Personali\GitHub\anigami-site`;
   in `C:\Progetti\anigami` c'è una copia vecchia (aprile). Gli altri
   progetti sono migrati su `C:\Progetti` — spostiamo anche questo?
   (OneDrive + git è anche una fonte nota di conflitti di sync.)
2. L'anagramma imagina→anigami è **il** significato del nome, o il nome
   ha un'altra storia che l'idea-madre deve rispettare?
3. Le news in home ("Ultime pieghe") arrivano dal feed Directus
   `articles` con target anigami.it: confermiamo che anigami.it è tra i
   `sites` e che il feed lo predispone l'agente della chat news (brief
   già consegnato — da aggiornare: il backend ESISTE, è Directus).
4. Quanto spingere la piega nell'hero home rispetto al video
   `hero-imagina.mp4` in arrivo: convivono (video dentro la falda) o il
   video diventa la texture del foglio?
