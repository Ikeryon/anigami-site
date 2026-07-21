# Anigami — sito Imagina (anigami.it)

Ricostruzione nativa in codice del sito anigami.it (prima WordPress).
Astro 4, output statico, deploy su Vercel. Lavoro svolto finora in
Cowork con Paolo (Imagina Srl Società Benefit, Camerino); questo file
è il passaggio di consegne.

## Deploy

- Branch `astro-setup` → preview automatica Vercel (URL privato).
- Branch `main` → produzione (anigami.it). Merge solo quando Paolo approva.
- Progetto Vercel: `anigami-site` (account "Anigami's projects").

## Identità e principi (dal brief, NON derogare senza chiedere)

- Il sito è un **contenitore di manifesti autonomi**: ogni progetto
  (Tipicità, Grand Tour delle Marche, Tipicità in Blu, EVO) è un poster
  con logo, palette e navigazione propri. La home è "il corridoio del
  cinema".
- **Imagina compare poco**: logo solo su home, note-di-produzione,
  entra-in-scena. Sulle landing dei progetti solo il rimando discreto
  "Anigami" in alto a destra.
- Tono **asciutto e cinematico**: niente aggettivi di merito, niente
  linguaggio pubblicitario. Fattuale, datato.
- Principio "traccia che resta": vedi `.trace-link` in global.css
  (l'underline si dissolve con ritardo).
- ⚠️ **NON scrivere mai "quattro festival"**: non sono tutti festival e
  Imagina non si esaurisce in essi. Sono "i progetti principali" di una
  rete attiva dal 1991 (marketing territoriale, comunicazione integrata,
  ~300 realtà pubbliche e private).

## Cromie per pagina (richiesta esplicita di Paolo: "non tutto nero")

Ogni pagina imposta il proprio tema via prop `theme` (variabili CSS) su
BaseLayout/BrandLayout:

- **Home + pagine Imagina**: bianco luminoso `#faf9f6`, logo Imagina a
  colori (`/logo-imagina-color.svg`; quello bianco è `/logo-imagina.svg`).
- **Tipicità**: eco della brochure TF27 (PDF fornito da Paolo) — interni
  bianchi `#fcfcfa` + teal ufficiale `#035f6a`; hero a campo pieno teal
  (`heroVariant="field"`) con wordmark bianco; capitoli col punto
  (".Trama"); barra capitoli = banda teal; timeline nelle Tracce
  (punti teal + rubino `#a52257` per i momenti-chiave).
- **Grand Tour**: carta calda `#fbf4ec`; accento testi `#d1544c`
  (tono scurito dell'ufficiale `#ee726c` per leggibilità — ufficiali:
  `ee726c` / `f6ac7c`); logo `grand-tour-color.svg`.
- **Tipicità in Blu**: blu profondo `#0a1a2b` (da palette ufficiale
  `112f49` / `209fb6` / `065082`); accento `#209fb6`; logo bianco
  `tipicita-in-blu-white.svg`.
- **EVO**: vinaccia profondo `#190712`; ufficiale `#7f1244`; per i testi
  accentati si usa `#b8497a` (schiarito per leggibilità — da validare
  con Paolo).

## Architettura

- `src/layouts/BaseLayout.astro` — theme (CSS vars), accent, JSON-LD,
  ViewTransitions, script reveal (`[data-reveal]`, re-init su
  `astro:page-load`).
- `src/layouts/BrandLayout.astro` — hero a piena altezza (kicker, logo
  grande, heroLine, scroll-cue), `heroVariant` 'atmosphere'|'field',
  `variant` (classe-gancio, es. `v-tipicita`), barra capitoli sticky.
- `src/components/VideoCard.astro` — card video YouTube (solo thumbnail,
  nessun iframe finché non si clicca).
- Placeholder immagini: `.media-ph` (+ `--tall`, `--wide`, `.media-strip`,
  float `.ph-right`/`.ph-left` su Tipicità) — da sostituire con `<img>`
  reali quando Paolo fornisce le foto.
- Grana filmica: `body::after` in global.css.

## Testi

- I testi lunghi delle landing sono stati **lavorati insieme a Paolo**:
  non riscriverli, non "migliorarli". Si possono spezzare in paragrafi
  (solo a cavallo di frasi) per la leggibilità — fatto su Tipicità
  (revisione "aria", 11/07/2026), eventualmente da estendere alle altre.
- I testi segnati nei commenti come "bozze mie" (manifesto home, hero
  line, facts hackathon) li sostituirà Paolo.
- Sezione "The Blue Way" (pagina Tipicità in Blu): piattaforma
  internazionale PRIMA, pillole di conoscenza (progetti UE, buone
  pratiche), POI gli hackathon come esempi. Target: europrogettisti,
  ricercatori. Video reali da YouTube già mappati nel file.

## Punti aperti (chiedere a Paolo, non decidere da soli)

1. **1991 vs 1993**: la brochure TF27 fa nascere Tipicità nel 1991
   (35ª edizione nel 2027); i testi dicono 1993. Da uniformare.
2. Numero edizione EVO (fonti discordanti 4ª/5ª) e date prossime
   edizioni GT/TIB (per schema.org Event reali).
3. `public/hero-imagina.mp4` — video hero in preparazione da Paolo
   (il codice lo aspetta già, nessuna modifica necessaria).
4. Logo "The Blue Way" distinto (mai fornito; TIB ≠ The Blue Way).
5. Foto reali per tutti i `.media-ph`.
6. "Tracce" su Tipicità in Blu è ridondante con le card hackathon.
7. Da eliminare a mano (residui vecchio sito): `src/components/Header.astro`
   se ancora presente, vecchi `index.html` / `logo-imagina.svg` in root.
8. La cartella `api/` e le pagine contest (trota-e-verdicchio) sono del
   sito precedente e funzionanti: non toccarle senza motivo.

## Lavoro in parallelo con Cowork (accordo con Paolo, 11/07/2026)

Questo repo è lavorato da DUE sessioni in parallelo:
- **Claude Code (tu)**: architettura e presentazione — `src/layouts`,
  `src/components`, `src/styles`, config, responsive, animazioni.
- **Cowork (sessione cloud)**: contenuti e materiali — testi, dati,
  asset in `public/`, ricerche. Scrive direttamente nella working copy
  di Paolo (non passa da git).

Regole:
1. **Primo compito per te**: separa i contenuti dal codice — sposta
   testi e dati delle pagine in file di contenuto dedicati (content
   collections o moduli dati in `src/content/` / `src/data/`), così le
   due sessioni non toccano mai gli stessi file.
2. Committa spesso e in piccolo. Quando Paolo annuncia contenuti in
   arrivo da Cowork, assicurati che il tree sia committato prima.
3. Non riscrivere i testi approvati (vedi sezione Testi). I contenuti
   nuovi arrivano da Cowork/Paolo, non vanno inventati qui.

## Vincoli tecnici

- Nessuna dipendenza extra senza necessità: solo `astro`.
- `color-mix()` usato diffusamente (ok browser moderni).
- Rispettare `prefers-reduced-motion` in ogni animazione nuova.
