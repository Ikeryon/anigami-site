# REPORT DI SESSIONE — anigami.it (per l'altra chat Cowork sullo stesso sito)

> Scritto il 03/08/2026 dalla sessione Cowork "storica" del sito anigami.it.
> Serve a chi lavora in parallelo su questo stesso progetto: qui trovi
> l'idea sviluppata, lo stato dei contenuti, le regole già fissate e i
> punti aperti. **Leggi anche, nel repo: `CLAUDE.md`** (regole operative e
> design system), **`ANIGAMI-CONCEPT.md`** (concept generativo v2),
> **`SINTESI-NARRATIVA-4-PROGETTI.md`** (tutti i testi con il loro stato).
> Non duplico qui ciò che sta lì — questo è il quadro d'insieme.

## 1. Il progetto in una riga

Ricostruzione nativa di anigami.it (sito corporate di Imagina Srl Società
Benefit) come "contenitore di manifesti autonomi" dei 4 progetti
principali — dentro il macroprogetto **Universo Anigami** (backend unico
Directus + Anigami Studio; Bibbia in
`C:\Progetti\anigami-studio-new\docs\PROGETTO-ANIGAMI.md`, leggere §10).

**Stack**: Astro 4 statico, zero dipendenze extra, Vercel (progetto
`anigami-site`). Branch `astro-setup` = preview; `main` = produzione.
**Repo**: `C:\Progetti\anigami-site`
(⚠️ punto aperto: possibile trasloco su `C:\Progetti`, non deciso).

## 2. L'idea sviluppata (in ordine di evoluzione)

1. **Impianto "cinema"**: home = corridoio dei poster; ogni progetto =
   landing-manifesto autonoma (logo grande in hero a piena altezza,
   cromia propria, capitoli numerati, barra capitoli sticky, View
   Transitions tra le pagine, grana filmica ovunque). Imagina compare
   poco: solo home, note-di-produzione, entra-in-scena.
2. **Cromie per pagina** (richiesta esplicita di Paolo: "non tutto
   nero"): home e pagine Imagina su **bianco luminoso** #faf9f6;
   Tipicità bianco+teal in **eco della brochure ufficiale TF27** (hero a
   campo pieno teal, capitoli col punto ".Trama", box teal, timeline);
   Grand Tour su carta calda; Tipicità in Blu su blu profondo; EVO su
   vinaccia scuro. Dettagli e hex in `CLAUDE.md`.
3. **Revisione "aria" su Tipicità** (feedback Paolo: troppi wall of
   text): paragrafi spezzati, frasi-chiave estratte in grande (.keyline),
   placeholder-immagine flottanti nel testo, Trama a 3 schede, Ingranaggi
   a chips. **Questo trattamento va probabilmente esteso alle altre 3
   landing — non ancora fatto.**
4. **Concept generativo "anāgāmi"** (v2, in discussione — vedi
   `ANIGAMI-CONCEPT.md`): il nome letto come il termine buddhista
   *anāgāmi*, "colui che non ritorna" → idea-madre **"la trasformazione
   irreversibile: ciò che cambia non torna indietro"**. Genera: segni
   d'interazione permanenti nella sessione (trace che resta), metamorfosi
   tipografica una-tantum imagina→anigami in hero (le lettere sono
   davvero le stesse), atmosfere mai identiche due volte, feed news
   "Mutamenti". Mockup: `mockup-anagami-home.html`. La v1 ("foglio e
   piega", `mockup-piega-home.html`) è stata **scartata** da Paolo — non
   riproporla. ⚠️ Paolo non ha ancora risposto alle domande di chiusura
   del concept (v. §6 del concept): finché non conferma, la metamorfosi e
   il "segno che resta" NON vanno implementati nel sito.

## 3. Stato dei contenuti (il dettaglio è in SINTESI-NARRATIVA)

- **Testi lunghi delle 4 landing**: lavorati con Paolo, quasi definitivi.
  NON riscriverli. Si possono solo spezzare tipograficamente.
- **Bozze mie da sostituire/validare**: manifesto home, alcune hero line,
  payoff GT ed EVO, paragrafo-piattaforma The Blue Way, facts hackathon.
  Tutto marcato nei commenti dei file .astro con "NOTA PER PAOLO"/"bozza".
- **Regola d'oro**: MAI "quattro festival" — sono "i progetti principali"
  di una rete attiva dal 1991 (~300 realtà).
- **The Blue Way** (dentro Tipicità in Blu): piattaforma internazionale
  PRIMA, hackathon come esempi POI. Video YouTube reali già mappati.
- **Punti fattuali aperti**: Tipicità 1991 vs 1993 (brochure vs testi);
  numero edizione EVO e date 2026 (coming-soon evo.ooo dice 24–27
  settembre; sito anigami dice ancora "dicembre"); date prossime
  edizioni GT/TIB per gli schema.org.

## 4. Asset e stato tecnico

- **Loghi** in `public/`: Imagina colori+bianco; Tipicità (bianco); GT
  (fullcolor+white); TIB (colori+bianco); EVO. Manca un logo "The Blue
  Way" dedicato.
- **Foto reali**: mancano ovunque — i `.media-ph` sono placeholder
  progettati per riceverle.
- **Video hero**: Paolo ha esportato `C:\Progetti\Anigami-newsite\Hero.mp4`
  = animazione del logo Imagina **su fondo nero** (1080p25, 16s, H.264
  10-bit). Su home bianca non funziona (lastra grigia): richiesto
  **re-export su fondo #FAF9F6 col logo scuro/colori**; il 10-bit lo
  converto io (le versioni web dell'export nero sono già pronte in
  sessione: MP4 148KB + WebM 96KB, senza audio). Decisione aperta: no
  loop, fermo sull'ultimo frame; coordinare con la metamorfosi del
  concept.
- **Ultimo deploy noto**: preview "cinema" su `astro-setup` (build ok,
  con View Transitions). Dopo di allora sono stati committati sul disco
  di Paolo (ma non necessariamente pushati): cromie per pagina, revisione
  aria Tipicità, logo-imagina.svg/color, CLAUDE.md, concept e mockup.
  **Verificare `git status` prima di toccare qualsiasi cosa.**

## 5. Regole di convivenza tra sessioni (già pattuite, in CLAUDE.md)

- Una sessione Claude Code (locale) dovrebbe occuparsi di architettura
  (`src/layouts|components|styles`) e ha come primo compito separare i
  contenuti dal codice (content collections). Le sessioni Cowork
  producono contenuti/asset e scrivono direttamente nella working copy.
- **Mai lavorare sugli stessi file nello stesso momento.** Prima di
  scrivere nel repo: tree committato. Commit piccoli, prefisso
  "contenuti:" per i contenuti.
- Decisioni che toccano l'universo (schema Directus, siti, deploy) →
  si aggiornano SOLO nella Bibbia, rileggendola dal disco prima.
- Il feed news arriverà da Directus (`articles` con `home_site`/
  `target_sites`, modello già COMPLETO nella Bibbia §3): non inventare
  backend alternativi.

## 6. Cosa NON fare (errori già corretti, non ripeterli)

- Non scrivere "quattro festival" / non ridurre Imagina ai 4 progetti.
- Non riproporre il concept "piega/origami" (scartato).
- Non rimettere le landing su fondo nero uniforme (scartato).
- Non riscrivere i testi marcati come lavorati.
- Non usare estetica buddhista per il concept anāgāmi (è etimologia, non
  tema visivo).
- Non pushare/mergiare su `main` senza ok esplicito di Paolo.
