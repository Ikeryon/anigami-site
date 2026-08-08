// Contenuti bilingui della landing Tipicità (IT/EN).
// Regola: geo/media/pin sono CONDIVISI (sharedStages); solo i testi cambiano
// per lingua (content[lang]). Il componente TipicitaPage unisce i due.
// Vincoli: "anigami" non compare mai; la doppia codifica dei menu NON si spiega
// (né IT né EN). Testi = consegne Cowork validate da Paolo (TESTI-*.md, 06/08).

// ── STAGES condivisi: anno, sigla, codice paese, pin città, media ──
// (i testi t/p/d/caption stanno in content[lang].stages, allineati per indice)
export const sharedStages = [
  { y: '1993', c: '380', px: 855.5, py: 180.8, key: true,
    photos: ['/tipicita/tracce/1993-1.jpg','/tipicita/tracce/1993-2.jpg','/tipicita/tracce/1993-3.jpg','/tipicita/tracce/1993-4.jpg','/tipicita/tracce/1993-5.jpg','/tipicita/tracce/1993-6.jpg','/tipicita/tracce/1993-7.jpg','/tipicita/tracce/1993-8.jpg','/tipicita/tracce/1993-9.jpg'] },
  { y: '1998–2006', c: '724', px: 780.8, py: 188.5 },
  { y: '2006–09', c: '578', px: 846.3, py: 60.5, video: '/tipicita/tracce/2006-norvegia.mp4' },
  { y: '2011', c: '380', px: 855.5, py: 180.8, key: true,
    photos: ['/tipicita/tracce/2011-1.jpg','/tipicita/tracce/2011-2.jpg','/tipicita/tracce/2011-3.jpg','/tipicita/tracce/2011-4.jpg','/tipicita/tracce/2011-5.jpg'] },
  { y: '2015', c: '380', px: 836.7, py: 169.1 },
  { y: '2015–17', c: '784', px: 1037, py: 275.5 },
  { y: '2018', tag: 'NY', c: '840', px: 497.3, py: 193.4,
    photos: ['/tipicita/tracce/2018ny-1.jpg','/tipicita/tracce/2018ny-2.jpg','/tipicita/tracce/2018ny-3.jpg','/tipicita/tracce/2018ny-4.jpg','/tipicita/tracce/2018ny-5.jpg'] },
  { y: '2018', tag: 'AL', c: '008', px: 880.8, py: 190.2,
    photos: ['/tipicita/tracce/2018al-1.jpg','/tipicita/tracce/2018al-2.jpg','/tipicita/tracce/2018al-3.jpg','/tipicita/tracce/2018al-4.jpg'] },
  { y: '2019', c: '124', px: 497.3, py: 169.3 },
  // 2022 sdoppiato in TRE tappe (Paolo, 06/08 sera): il rebranding a Fermo,
  // EXPO Dubai, la Tanzania. Il rubino resta al momento identitario (Festival).
  { y: '2022', c: '380', px: 855.5, py: 180.8, key: true, video: '/tipicita/tracce/2022-festival.mp4' },
  { y: '2022', tag: 'AE', c: '784', px: 1038.5, py: 273.6 },
  { y: '2022', tag: 'TZ', c: '834', px: 974.4, py: 438.6 },
  { y: '2023', tag: 'UK', c: '826', px: 799.5, py: 138.8 },
  { y: '2023', tag: 'FR', c: '250', px: 809.2, py: 152.0 },
  { y: '2024', c: '392', px: 1383.4, py: 219.2,
    photos: ['/tipicita/tracce/2024-1.jpg','/tipicita/tracce/2024-2.jpg','/tipicita/tracce/2024-3.jpg','/tipicita/tracce/2024-4.jpg'] },
  // 2025 diviso in Giappone e Argentina (Paolo, 06/08 sera). Le foto sono
  // state smistate guardandole una a una: 1–3 sono la missione giapponese,
  // 4–6 (+ lo stand di Bahía Blanca) sono quella argentina.
  { y: '2025', tag: 'JP', c: '392', px: 1383.4, py: 219.2,
    photos: ['/tipicita/tracce/2025-1.jpg','/tipicita/tracce/2025-2.jpg','/tipicita/tracce/2025-3.jpg'] },
  { y: '2025', tag: 'AR', c: '032', px: 555.2, py: 582.4,
    photos: ['/tipicita/tracce/2025-4.jpg','/tipicita/tracce/2025-5.jpg','/tipicita/tracce/2025-6.jpg','/tipicita/tracce-argentina.jpg'] },
];

// accento e tema sono identici nelle due lingue → vivono nel componente.

export const content = {
  // ══════════════════════════ ITALIANO ══════════════════════════
  it: {
    htmlLang: 'it',
    meta: {
      title: 'Tipicità Festival — Fermo, 12-14 marzo 2027',
      description: 'Tipicità Festival, Fermo, 12-14 marzo 2027: dal 1993 il festival delle traiettorie indigene tra enogastronomia, artigianato e cultura del territorio.',
    },
    payoff: { src: '/logos/tipicita-payoff-it.svg', alt: 'il festival delle traiettorie indigene' },
    menu: [
      { href: '#trama', label: '.Trama' },
      { href: '#essenza', label: '.Essenza' },
      { href: '#motore', label: '.Motore' },
      { href: '#tracce', label: '.Tracce' },
    ],
    chapters: { trama: 'Trama', essenza: 'Essenza', motore: 'Motore', tracce: 'Tracce' },
    trama: [
      { h3: `Dal locale al globale`, p: `Festival, rassegne e incontri tematici — enogastronomia, turismo, design, ricerca, sostenibilità. Non capitoli separati: la stessa domanda, vista da angolazioni diverse.` },
      { h3: `Lab di co-creazione glocal`, p: `Progetti condivisi con università, imprese, istituzioni. Non per raccontare l'Italia al mondo, ma per costruirla insieme a chi la guarda da fuori.` },
      { h3: `Piattaforma per il territorio`, p: `Una rete che mette in relazione persone, luoghi, storie — la stessa rete di circa 300 realtà pubbliche e private che sostiene ogni edizione.` },
    ],
    tramaDuo: [
      { src: '/tipicita/trama-1.jpg', alt: 'La pasta di Campofilone esposta a Tipicità' },
      { src: '/tipicita/trama-2.jpg', alt: 'Un intervento sul palco di Tipicità: radici e traiettorie' },
    ],
    essenza: [
      { cls: 'lead-card', body: `<p class="cl">La tipicità<br/>non è un'etichetta.</p><p class="cs">È <strong>la traccia che un territorio lascia</strong> dentro le cose che genera.</p>` },
      { cls: 'key-card', body: `<p>Tipicità è <em>una risposta culturale</em> a uno stimolo ambientale.</p>` },
      { kick: `la traccia`, body: `<p>Il ciauscolo non è tipico delle Marche perché qualcuno l'ha deciso. Lo è perché qualcuno, prima di chiunque altro, ha interpretato in quella forma <strong>il clima, l'allevamento, i tempi di una collina precisa</strong> — quella, e non un'altra.</p>` },
      { kick: `la traccia`, body: `<p>E vale per un salume come per un software: una software house di Mumbai e una di Tolentino non lavoreranno mai allo stesso modo.</p><p>Non è una differenza di competenza. <strong>È una differenza di territorio.</strong></p>` },
      { cls: 'photo-card', img: { src: '/tipicita/essenza-1.jpg', alt: 'Salumi e formaggi del territorio sui banchi del festival' } },
      { kick: `l'attraversamento`, body: `<p>Ma nessuna tipicità resta viva da sola. Il pomodoro arriva da un altro continente, prima di diventare <strong>più napoletano del napoletano stesso</strong>.</p><p>E la cucina italiana è patrimonio Unesco per il motivo opposto a quello che si crede: perché è un prodotto globale, mutato e mutevole.</p>` },
      { cls: 'key-card', body: `<p>Il locale non sopravvive isolandosi dal mondo — <em>sopravvive attraversandolo</em>.</p>` },
      { kick: `la tensione`, body: `<p><strong>Traiettorie</strong> e <strong>indigene</strong>: due parole che tirano in direzioni opposte, e per questo si tengono in piedi a vicenda.</p><p>Traiettoria è aerea — rotte, mercati, il mondo che si muove. Indigeno è caldo, quasi primordiale — l'istinto di un luogo, prima che diventi racconto.</p>` },
      { kick: `la tensione`, body: `<p>Tipicità sta esattamente in mezzo:</p><p class="cl-small"><strong>racconta il globale attraverso il locale.</strong></p>` },
      { cls: 'key-card', body: `<p>Oggi Tipicità sta diventando qualcos'altro ancora: <em>il festival delle traiettorie indigene</em>.</p>` },
    ],
    essHint: `scorri`,
    motore: {
      blabel: `La formula`,
      nodes: ['Traiettorie', 'Carburante', 'Impatto', 'Ingranaggi'],
      panels: [
        { h: null, body: `<p>Il Made in Marche esce dai confini regionali: dai palchi di Fermo alle fiere di <strong>Dubai, New York, Tokyo</strong> — non vetrine isolate, tappe della stessa rotta.</p>` },
        { h: 'count', body: `<p class="mnum"><span id="mcount">0</span><small>realtà in rete</small></p><p>Enti, imprese, università: una <strong>partnership pubblico-privata</strong> che co-progetta ogni edizione.</p>` },
        { h: null, body: `<p>Ogni edizione si converte in occasioni concrete: <strong>visibilità per i brand</strong>, accesso a mercati nazionali e internazionali, <strong>relazioni che restano attive</strong> oltre i tre giorni di festival.</p>` },
        { h: 'gears', body: `<p>Nove temi attraversano ogni edizione:</p><ul class="chips"><li>Sviluppo territoriale</li><li>Biodiversità e sostenibilità</li><li>Turismo esperienziale</li><li>Patrimonio enogastronomico e innovazione</li><li>Manifattura creativa e Made in Italy</li><li>Economia circolare e transizione verde</li><li>Cooperazione accademica e ricerca</li><li>Cultura digitale e comunità intelligenti</li><li>Giovani e competenze per il futuro</li></ul>` },
      ],
    },
    tracceLede: `Una rotta che si allunga edizione dopo edizione. Trascina il cursore lungo gli anni.`,
    mon: { map: 'MON 01 · MAPPA', title: 'MON 02 · TITOLO', desc: 'MON 03 · SINTESI', photo: 'MON 04 · ARCHIVIO' },
    placeholder: `Foto d'archivio — in selezione`,
    aria: {
      menu: 'Capitoli', schema: 'La formula', anni: 'Anni della rotta', scrub: 'Cursore degli anni',
      prev: 'Card precedente', next: 'Card successiva', deckNext: 'Quadro successivo',
    },
    langToggle: { to: 'en', href: '/en/tipicita/', label: 'EN', aria: 'English version' },
    stages: [
      { t: 'Festival dei prodotti tipici delle Marche', p: 'Fermo', caption: 'Fermo, 1993 — dall’archivio della prima edizione.',
        d: 'Nasce a Fermo l’evento pionieristico che porta le eccellenze gastronomiche marchigiane su un palcoscenico unico nel suo genere. Il primo lavoro non è raccontare le Marche al mondo: è convincere i marchigiani che ciò che si produce sotto casa vale.' },
      { t: 'Castiglia e León', p: 'Spagna',
        d: 'Valladolid, 1998: una stretta di mano tra due entroterra. Poi gli educational per la stampa, il forum sulle aree montane e, nel 2003, il patto di cooperazione con le istituzioni di Castilla y León firmato nella cornice del festival: Tipicità scopre di essere anche un tavolo diplomatico.' },
      { t: 'Isole Lofoten', p: 'Norvegia', caption: 'Isole Lofoten — dal video della missione. [BOZZA]',
        d: 'A Svolvær lo stoccafisso all’anconitana torna nel porto da cui parte da cinque secoli, cucinato dai marchigiani. Ma il segno più profondo lo lascia il metodo: sulle isole nasce un festival costruito sul modello di Tipicità. Il prodotto viaggia — il format mette radici.' },
      { t: 'Made in Marche Festival', p: 'Fermo', caption: 'Fermo — il festival diventa Made in Marche. [BOZZA]',
        d: 'Il cibo chiama, il resto risponde: al Fermo Forum debutta la Made in Marche Gallery — vetrine di moda e design accanto ai banchi dell’enogastronomia. Il festival capisce che i saperi marchigiani sono un’unica manifattura, in materie diverse.' },
      { t: 'EXPO Milano', p: 'Milano',
        d: '«Nutrire il pianeta»: Tipicità arriva a Milano con una risposta concreta — il Paniere di lunga vita, costruito con l’Università di Camerino e i produttori di uno dei territori più longevi d’Europa. Non uno slogan: una dieta che funziona da secoli.' },
      { t: 'Italian Cuisine World Summit', p: 'Dubai e Abu Dhabi, EAU',
        d: 'Al summit che porta nel Golfo decine di stelle Michelin, Tipicità aggiunge l’anello che manca: non i piatti, i produttori. La cucina italiana raccontata da chi ne coltiva le materie prime.' },
      { t: 'Taste Marche Experience', p: 'New York, USA', caption: 'New York — Taste Marche Experience da Lucciola. [BOZZA]',
        d: 'Da Lucciola, insegna italiana di New York, la Taste Marche Experience mette in scena food, fashion ed eco design: tre codici, un solo saper fare. La città che consacra i marchi scopre una regione che li fa.' },
      { t: 'III Settimana della Cucina Italiana nel Mondo', p: 'Tirana e Valona, Albania', caption: 'Tirana — la Settimana della Cucina Italiana. [BOZZA]',
        d: 'Nello stesso anno, la sponda di fronte: Tirana e Valona per la III Settimana della Cucina Italiana nel Mondo. L’Adriatico come ponte, non come confine.' },
      { t: 'IV Settimana della Cucina Italiana nel Mondo', p: 'Ottawa e Montréal',
        d: 'Ottawa e Montréal, nel paese dove l’Italian Sounding vale più dell’originale: due serate per far assaggiare la differenza tra ciò che suona italiano e ciò che lo è. La Taste Marche Experience attraversa l’Atlantico verso nord.' },
      // le tre frasi qui sotto sono la frase 2022 approvata, spezzata nei suoi
      // tre periodi (uno per evento): nessuna riscrittura, solo la congiunzione
      // iniziale della Tanzania adattata ("E a" → "A").
      { t: 'Semplicemente “Festival”', p: 'Fermo', caption: 'Semplicemente “Festival” — il motion poster. [BOZZA]',
        d: 'Tipicità diventa semplicemente “Festival”, ecosistema delle micro-Italie autentiche.' },
      { t: 'EXPO2020 Dubai', p: 'Dubai, EAU',
        d: 'A EXPO Dubai la sua foglia si fa cofanetto phygital, con un QR che trasforma i prodotti in viaggi.' },
      { t: 'VII Settimana della Cucina Italiana nel Mondo', p: 'Dar Es Salaam e Zanzibar, Tanzania',
        d: 'A Dar es Salaam e Zanzibar, prima volta in Africa, Tipicità rappresenta l’Italia intera.' },
      { t: 'Tipicità Experience', p: 'Londra, Regno Unito',
        d: 'Da Hampstead parte l’edizione 2023: Rossodisera, l’unica cucina marchigiana di Londra, diventa ambasciata permanente delle Marche sulla City. E il Console ricorda agli ospiti che «tipico» viene dal greco týpos: impronta — unicità che non si imita.' },
      { t: 'VIII Settimana della Cucina Italiana nel Mondo', p: 'Parigi',
        d: 'Parigi: la presentazione ufficiale della candidatura della cucina italiana a patrimonio immateriale dell’Unesco. Il locale che ha attraversato il mondo chiede il riconoscimento del viaggio.' },
      { t: 'IX Settimana della Cucina Italiana nel Mondo', p: 'Tokyo e Osaka', caption: 'Tokyo e Osaka — la IX Settimana. [BOZZA]',
        d: 'Una master class sul brodetto per gli chef giapponesi, l’accordo Ritsumeikan–Camerino sulle scienze del cibo e, a Osaka, l’osteria di Kumiko Muraji che cucina marchigiano: le rotte migliori hanno già qualcuno che le percorre al contrario.' },
      // ⚠️ la frase del Giappone è l'UNICO testo nuovo di questo split: la
      // frase 2025 approvata dedicava a Osaka solo l'incipit "Da EXPO Osaka".
      // BOZZA da validare con Paolo/Cowork.
      { t: 'X Settimana della Cucina Italiana nel Mondo', p: 'EXPO2025 Osaka, Giappone', caption: 'EXPO2025 Osaka — dalla missione giapponese. [BOZZA]',
        d: 'Da EXPO Osaka riparte la rotta: il Giappone ospita la X Settimana della Cucina Italiana nel Mondo. [BOZZA]' },
      { t: 'X Settimana della Cucina Italiana nel Mondo', p: 'Bahia Blanca, Buenos Aires, Ushuaia', caption: 'Dalla rotta argentina — e ritorno a Fermo. [BOZZA]',
        d: 'La rotta più lunga mai percorsa: tremila chilometri tra Bahía Blanca, gemellata con Fermo, Buenos Aires e Ushuaia — la biodiversità mediterranea alla città più australe del mondo, alla vigilia del verdetto Unesco. E l’anno dopo l’Argentina sale sui banchi di Fermo.' },
    ],
  },

  // ══════════════════════════ ENGLISH ══════════════════════════
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Tipicità Festival — Fermo, Italy · 12–14 March 2027',
      description: 'Tipicità Festival, Fermo (Marche, Italy), 12–14 March 2027: since 1993, the festival of native trajectories — food, craftsmanship and the culture of place.',
    },
    payoff: { src: '/logos/tipicita-payoff-en.svg', alt: 'the festival of native trajectories' },
    menu: [
      { href: '#trama', label: '.Thread' },
      { href: '#essenza', label: '.Essence' },
      { href: '#motore', label: '.Engine' },
      { href: '#tracce', label: '.Traces' },
    ],
    chapters: { trama: 'Thread', essenza: 'Essence', motore: 'Engine', tracce: 'Traces' },
    trama: [
      { h3: `From local to global`, p: `Festivals, showcases and thematic forums — food, tourism, design, research, sustainability. Not separate chapters: the same question, seen from different angles.` },
      { h3: `A glocal co-creation lab`, p: `Shared projects with universities, companies and institutions. Not to tell Italy to the world, but to build it together with those who see it from the outside.` },
      { h3: `A platform for the territory`, p: `A network connecting people, places and stories — the same three hundred public and private partners that stand behind every edition.` },
    ],
    tramaDuo: [
      { src: '/tipicita/trama-1.jpg', alt: 'Campofilone pasta on display at Tipicità' },
      { src: '/tipicita/trama-2.jpg', alt: 'A talk on the Tipicità stage: roots and trajectories' },
    ],
    essenza: [
      { cls: 'lead-card', body: `<p class="cl">Typicity is<br/>not a label.</p><p class="cs">It is <strong>the trace a territory leaves</strong> in what it creates.</p>` },
      { cls: 'key-card', body: `<p>Tipicità is <em>a cultural response</em> to an environmental stimulus.</p>` },
      { kick: `the trace`, body: `<p>Ciauscolo — the soft, spreadable salami of these hills — is not typical of the Marche because someone decided it. It is because someone, before anyone else, interpreted in that form <strong>the climate, the farming, the tempo of one precise hillside</strong> — that one, and no other.</p>` },
      { kick: `the trace`, body: `<p>And it holds for a salami as for software: a dev house in Mumbai and one in Tolentino will never work the same way.</p><p>Not a difference in skill. <strong>A difference in territory.</strong></p>` },
      { cls: 'photo-card', img: { src: '/tipicita/essenza-1.jpg', alt: 'Cured meats and cheeses of the territory on the festival stalls' } },
      { kick: `the crossing`, body: `<p>Yet no typicity survives alone. The tomato arrived from another continent before becoming <strong>more Neapolitan than Naples itself</strong>.</p><p>And Italian cuisine is a UNESCO candidate for the opposite reason to the one you would expect: because it is a global product — changed, and still changing.</p>` },
      { cls: 'key-card', body: `<p>The local does not survive by sealing itself off from the world — <em>it survives by crossing it.</em></p>` },
      { kick: `the tension`, body: `<p><strong>Trajectories</strong> and <strong>native</strong>: two words pulling in opposite directions — which is why they hold each other upright.</p><p>Trajectory is airborne: routes, markets, a world in motion. Native is warm, almost primal: the instinct of a place, before it becomes a story.</p>` },
      { kick: `the tension`, body: `<p>Tipicità stands exactly in between:</p><p class="cl-small"><strong>it tells the global through the local.</strong></p>` },
      { cls: 'key-card', body: `<p>Today Tipicità is becoming something else again: <em>the festival of native trajectories</em>.</p>` },
    ],
    essHint: `scroll`,
    motore: {
      blabel: `The formula`,
      nodes: ['Trajectories', 'Fuel', 'Impact', 'Gears'],
      panels: [
        { h: null, body: `<p>Made in Marche travels beyond regional borders: from the stages of Fermo to the fairs of <strong>Dubai, New York, Tokyo</strong> — not isolated showcases, stops on the same route.</p>` },
        { h: 'count', body: `<p class="mnum"><span id="mcount">0</span><small>partners in network</small></p><p>Institutions, companies, universities: a <strong>public-private partnership</strong> that co-designs every edition.</p>` },
        { h: null, body: `<p>Every edition converts into concrete opportunities: <strong>visibility for brands</strong>, access to national and international markets, <strong>relationships that stay active</strong> beyond the festival's three days.</p>` },
        { h: 'gears', body: `<p>Nine themes run through every edition:</p><ul class="chips"><li>Territorial development</li><li>Biodiversity &amp; sustainability</li><li>Experiential tourism</li><li>Food heritage &amp; innovation</li><li>Creative manufacturing &amp; Made in Italy</li><li>Circular economy &amp; green transition</li><li>Academic cooperation &amp; research</li><li>Digital culture &amp; smart communities</li><li>Youth &amp; future skills</li></ul>` },
      ],
    },
    tracceLede: `A route that grows longer with every edition. Drag the cursor along the years.`,
    mon: { map: 'MON 01 · MAP', title: 'MON 02 · TITLE', desc: 'MON 03 · BRIEF', photo: 'MON 04 · ARCHIVE' },
    placeholder: `Archive photos — selection in progress`,
    aria: {
      menu: 'Chapters', schema: 'The formula', anni: 'Years of the route', scrub: 'Cursor along the years',
      prev: 'Previous card', next: 'Next card', deckNext: 'Next frame',
    },
    langToggle: { to: 'it', href: '/tipicita/', label: 'IT', aria: 'Versione italiana' },
    stages: [
      { t: 'Festival of Typical Products of the Marche', p: 'Fermo', caption: `Fermo, 1993 — from the first edition's archive.`,
        d: `Fermo, 1993: a pioneering event puts the region's food heritage on a stage of its own. The first job is not telling the world about the Marche — it is convincing the locals that what is made down the road deserves the spotlight.` },
      { t: 'Castilla y León', p: 'Spain',
        d: `Valladolid, 1998: a handshake between two inland regions. Then press tours, a forum on mountain communities and, in 2003, a cooperation pact with the institutions of Castilla y León signed within the festival itself: Tipicità turns out to be a diplomatic table, too.` },
      { t: 'Lofoten Islands', p: 'Norway', caption: `Lofoten Islands — from the mission footage. [DRAFT]`,
        d: `In Svolvær, Marche chefs serve hundreds of portions of stockfish all'anconitana in the very port it has sailed from for five centuries. The deeper mark is left by the method: the islands founded a festival modelled on Tipicità. Products travel — formats take root.` },
      { t: 'Made in Marche Festival', p: 'Fermo', caption: `Fermo — the festival becomes Made in Marche. [DRAFT]`,
        d: `Food leads, the rest follows: the Made in Marche Gallery debuts at Fermo Forum — fashion and design showcases beside the food stalls. One regional know-how, in different materials.` },
      { t: 'EXPO Milano', p: 'Milan',
        d: `"Feeding the Planet": Tipicità arrives in Milan with a concrete answer — the Long-Life Basket, built with the University of Camerino and producers from one of Europe's longest-living territories. Not a slogan: a diet that has worked for centuries.` },
      { t: 'Italian Cuisine World Summit', p: 'Dubai & Abu Dhabi, UAE',
        d: `At the summit that brings dozens of Michelin stars to the Gulf, Tipicità adds the missing link: not the dishes — the producers. Italian cuisine told by the people who grow it.` },
      { t: 'Taste Marche Experience', p: 'New York, USA', caption: `New York — Taste Marche Experience at Lucciola. [DRAFT]`,
        d: `At Lucciola, an Italian outpost in New York, the Taste Marche Experience stages food, fashion and eco design: three codes, one know-how. The city that crowns brands discovers the region that makes them.` },
      { t: '3rd Week of Italian Cuisine in the World', p: 'Tirana & Vlorë, Albania', caption: `Tirana — the Week of Italian Cuisine. [DRAFT]`,
        d: `The same year, the opposite shore: Tirana and Vlorë for the 3rd Week of Italian Cuisine in the World. The Adriatic as a bridge, not a border.` },
      { t: '4th Week of Italian Cuisine in the World', p: 'Ottawa & Montréal',
        d: `Ottawa and Montréal, in the land where Italian Sounding outsells the original: two evenings to taste the difference between what sounds Italian and what is. The Taste Marche Experience crosses the Atlantic, northbound.` },
      { t: 'Simply "Festival"', p: 'Fermo', caption: `Simply "Festival" — the motion poster. [DRAFT]`,
        d: `Tipicità becomes simply "Festival", an ecosystem of Italy's most authentic micro-communities.` },
      { t: 'EXPO2020 Dubai', p: 'Dubai, UAE',
        d: `At EXPO Dubai its leaf turns into a phygital gift box, a QR code transforming products into journeys.` },
      { t: '7th Week of Italian Cuisine in the World', p: 'Dar es Salaam & Zanzibar, Tanzania',
        d: `In Dar es Salaam and Zanzibar — a first in Africa — Tipicità represents Italy itself.` },
      { t: 'Tipicità Experience', p: 'London, United Kingdom',
        d: `The 2023 edition launches from Hampstead: Rossodisera, London's only Marche kitchen, becomes the region's permanent embassy in the city. And the Consul reminds the guests that "typical" comes from the Greek týpos: imprint — a uniqueness that cannot be imitated.` },
      { t: '8th Week of Italian Cuisine in the World', p: 'Paris',
        d: `Paris: the official presentation of Italian cuisine's candidacy for UNESCO intangible heritage. The local that has crossed the world asks for its journey to be recognised.` },
      { t: '9th Week of Italian Cuisine in the World', p: 'Tokyo & Osaka', caption: `Tokyo & Osaka — the 9th Week. [DRAFT]`,
        d: `A brodetto master class for Japanese chefs, a food-science agreement between Ritsumeikan and Camerino universities and, in Osaka, Kumiko Muraji's osteria cooking marchigiano: the best routes already have someone travelling them in reverse.` },
      { t: '10th Week of Italian Cuisine in the World', p: 'EXPO2025 Osaka, Japan', caption: `EXPO2025 Osaka — from the Japanese mission. [DRAFT]`,
        d: `From EXPO Osaka the route sets out again: Japan hosts the 10th Week of Italian Cuisine in the World. [DRAFT]` },
      { t: '10th Week of Italian Cuisine in the World', p: 'Bahía Blanca, Buenos Aires, Ushuaia', caption: `From the Argentine route — and back to Fermo. [DRAFT]`,
        d: `The longest route yet: three thousand kilometres through Bahía Blanca — Fermo's twin city — Buenos Aires and Ushuaia, bringing Mediterranean biodiversity to the world's southernmost city on the eve of the UNESCO verdict. A year later, Argentina sets up its own stall in Fermo.` },
    ],
  },
};

// unisce geo/media condivisi + testi della lingua richiesta → array `stages`
export function buildStages(lang) {
  const t = content[lang].stages;
  return sharedStages.map((s, i) => ({ ...s, ...t[i] }));
}
