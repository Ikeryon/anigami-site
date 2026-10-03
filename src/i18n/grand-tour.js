// Grand Tour delle Marche — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`: finché `en` non esiste non esiste la
// rotta /en/grand-tour-delle-marche/ e il selettore di lingua non compare.
//
// LA FABULA È L'ITINERARIO: la barra dei capitoli è una strada con
// waypoint, lo scroll è strada fatta, i capitoli sono soste, la chiusura è
// ciò che resta dopo la ripartenza. Lessico odeporico, mai da brochure.
//
// ── I QUATTRO JSON DI src/assets/, e perché quasi nessuno si traduce ──
// La consegna chiedeva di scegliere fra «una chiave per lingua dentro il
// dato» e «un file per lingua». Guardando che cosa c'è dentro, per tre su
// quattro non serve né l'una né l'altra:
//   · gt-tappe.json  — nomi di comuni e anni. Nomi propri: non si traducono.
//   · gt-eventi.json — comune → nome della manifestazione («Infiorata»,
//     «Brodetto Show», «GustaPorto»). Nomi propri: non si traducono.
//   · gt-racconto.json — id, titolo e playlist di 64 video veri, pubblicati
//     in italiano. Il titolo è il NOME di quel video: tradurlo lo
//     scollegherebbe dalla cosa che nomina.
//   · gt-temi.json — qui sì c'è copy, ma è soltanto l'etichetta dei sette
//     nuclei. L'etichetta è uscita dal dato ed è qui sotto, in `temi`: le
//     chiavi del JSON restano come sono e da ora in poi sono identificatori,
//     non testo da leggere.
// Risultato: i JSON restano uno solo per tutte le lingue, e la copy del
// Grand Tour sta tutta in questo file.

export const content = {
  it: {
    meta: {
      title: 'Grand Tour delle Marche — un itinerario tra borghi e comunità',
      description:
        'Grand Tour delle Marche: dal 2014 un laboratorio di comunità a geometria variabile. 73 comuni, 13 edizioni, un solo viaggio tra i borghi marchigiani.',
    },

    // Comandi delle due strisce che scorrono — le tappe e la teca. Sono qui
    // in alto, fuori da entrambe le sezioni, perché sono gli stessi per
    // tutte e due: due strisce che si guidano in due modi diversi sarebbero
    // due cose da imparare invece di una.
    scorri: {
      indietro: 'Scorri indietro',
      avanti: 'Scorri avanti',
    },

    // La fascia d'apertura. Nessuna didascalia sotto l'immagine: il credito
    // a Simona Pagano la pagina lo dà già nel racconto, e per esteso — «che
    // firma anche una serie di illustrazioni che raccontano le Marche».
    // Una riga di testo sotto una fascia a tutto campo le toglierebbe il
    // fiato per ripetere una cosa che arriva poco più in basso.
    apertura: {
      alt: 'Un viandante col bastone, di spalle su un crinale all’alba, guarda i borghi delle Marche sfumare fino all’orizzonte; sopra di lui vola Martino, il picchio del Grand Tour.',
    },

    partenza: {
      titolo: 'Grand Tour delle Marche',
      marchioAlt: 'Grand Tour delle Marche',
      dati: ['dal 2014', '13ª edizione (2026)', 'itinerario diffuso tra borghi e comunità delle Marche'],
    },

    // ⚠️ L'ETICHETTA NON È IL TITOLO. In barra i nomi stanno corti — una
    // strada si legge di sfuggita, mentre si cammina — e i concetti pieni
    // restano negli h2 delle sezioni. È la stessa regola dei lemmi di EVO.
    // `id` è tecnico (àncora e waypoint): non si traduce.
    strada: {
      aria: 'Le soste dell\'itinerario',
      soste: [
        { id: 'racconto', label: 'Il racconto' },
        { id: 'laboratorio-di-comunita', label: 'La comunità' },
        { id: 'geometria-variabile', label: 'La geometria' },
        { id: 'incubatore', label: 'L\'incubatore' },
        // l'edizione in corso era rimasta fuori dall'indice: è la sezione
        // più cercata della pagina, e l'ordine qui dentro deve seguire
        // quello del documento o la barra segna la sosta sbagliata
        { id: 'edizione', label: 'L’edizione' },
        { id: 'strada-fatta', label: 'La strada' },
        { id: 'archivio', label: 'L’archivio' },
      ],
    },

    exergo: {
      aria: 'Esergo',
      cit: '«Non come una guida che ti fa fare il solito giro turistico, ma come un amico che ti porta a scoprire casa sua.»',
      fonte: 'dalla lettera di Gioacchino, 2014',
    },

    // IL RACCONTO — testo di Paolo (19/08/2026). Trascritto fedelmente:
    // corretti solo tre refusi meccanici. Il testo è suo: non riscriverlo.
    racconto: {
      h2: 'Il filo del racconto',
      par: [
        'Con una lettera scritta dallo zio Gioacchino che scrive a Francesco, marchigiano emigrato e in procinto di tornare con la compagna Heidi prendeva il via nel 2014 la prima edizione del Grand Tour delle Marche, con il claim “Il modo migliore per viaggiare nelle Marche è viverle”.',
        'Era l’anno che precedeva Expo Milano e il Grand Tour delle Marche nasceva allo scopo di fornire una chiave di lettura immediata e chiara su quelle esperienze che permettano al viaggiatore di immergersi nella comunità locale e di entrare in contatto con l’anima autentica delle Marche. Un intreccio di eventi capaci di completarsi e compenetrarsi attraverso enogastronomia, saper fare, musica, sport, arte e tutto ciò che rende uniche le Marche.',
        'La promessa di un viaggio autentico, capace di raccontare non solo le Marche della tradizione, ma anche tutto il complesso e affascinante mondo della biodiversità della creatività, dall’artigianato artistico al design digitale. Un racconto contemporaneo e vivo, che a un certo punto è stato affidato ad una voce diversa dal solito, una viaggiatrice fuori dagli schemi, Lavinia Atipica, che ha dato vita ad una narrazione parallela, con le sue avventure al limite del camp ha raccontato il lato B del Grand Tour, personaggi, peculiarità e note di colore che poi sono quelle parti del viaggio che restano per sempre nella memoria.',
        'Un viaggio oltre la destinazione, perché il Grand Tour non è stare in un posto, ma è l’essenza stessa del viaggio.',
        'E cosa meglio della regione Marche può impersonare l’essenza autentica del viaggio? Una regione nata da un viaggio, da un gruppo di giovani sabini alla ricerca di una nuova partenza, guidati dalla speranza e da un picchio sacro a Marte. Così dal 2026 abbiamo scelto una nuova voce, Martino, picchio giramondo erede di quel leggendario volatile. A dargli forma, un’interprete di quel saper fare che è nel dna del Grand Tour: l’illustratrice marchigiana Simona Pagano, che firma anche una serie di illustrazioni che raccontano le Marche in stile cartoon e dei magneti esclusivi.',
      ],
      grigliaAria: 'Il racconto in video',
      // i titoli delle due caselle fisse: nomi propri, ma l'ultimo porta
      // un'attesa che in inglese va detta
      lavinia: 'Lavinia Atipica',
      gt2026: 'Grand Tour delle Marche 2026',
      gt2026Attesa: 'Grand Tour delle Marche 2026 — in arrivo',
    },

    laboratorio: {
      h2: 'Laboratorio di comunità',
      par: [
        'Un evento è molto più di una festa. L\'evento è la punta di un iceberg fatto di lavoro, confronti, investimento economico e umano che coinvolge un\'intera comunità. È uno stress test fondamentale capace di mettere in luce punti di forza e debolezza di un territorio.',
        'Oggi la “destinazione” e il suo management, le DMO, sono al centro del dibattito. E l\'evento è uno strumento fondamentale in chiave di costruzione di DMO perché niente come l\'evento permette un coinvolgimento ampio, una mappatura reale, una misurazione sotto sforzo delle potenzialità inespresse di una destinazione.',
        'Concertazione, ascolto e coinvolgimento non sono la premessa gentile di quel lavoro: ne sono la condizione. Negli anni il Grand Tour ha viaggiato attraverso le comunità, coinvolgendole in maniera ampia, fornendo un importante barometro delle potenzialità della destinazione.',
      ],
      // L'ICEBERG: non un'illustrazione decorativa, è la figura che il testo
      // usa già. Per chi non vede è un'immagine sola con la sua descrizione;
      // le etichette interne sono già nel testo accanto, quindi ripeterle a
      // voce sarebbe rumore.
      iceberg: {
        aria: 'L’evento è la punta di un iceberg: sopra la linea di galleggiamento la parte che il pubblico vede, sotto la massa che la regge — lavoro, confronti, investimento economico e umano, comunità.',
        etichette: ['l’evento', 'lavoro', 'confronti', 'investimento', 'comunità'],
        did: 'Ciò che si vede, e ciò che lo regge.',
      },
    },

    geometria: {
      h2: 'Geometria variabile',
      par: [
        'Un borgo di poche centinaia di abitanti e una città capoluogo non hanno bisogno della stessa cosa. Così in tredici edizioni il formato ha cambiato forma ogni volta: dove non c\'era niente il Grand Tour ha inventato da zero un appuntamento che prima non esisteva; dove il tema non stava in un solo paese ha costruito un\'esperienza estesa a un intero areale; dove esisteva già una manifestazione radicata è entrato da ospite, senza nessuna intenzione di annettersela.',
        'Non è lo stesso evento replicato: è lo stesso principio in forme diverse. E non è flessibilità per vocazione — è la conseguenza dell\'ascolto, perché chi ascolta davvero non può standardizzare. Vale anche per il perimetro: una destinazione non coincide quasi mai con un confine amministrativo. Si tiene insieme per affinità e per vocazione — una valle, un paesaggio, una filiera — e la geometria dell\'itinerario segue quella, non la carta.',
      ],
    },

    // ── L'EDIZIONE IN CORSO ──
    // Le tappe della 13ª edizione, trascritte dal pieghevole ufficiale
    // 2026 (pannelli 03 e 04 del 210x210): data, nome dell'evento e comune.
    //
    // ⚠️ IL NOME VIENE DAL CALENDARIO, NON DALL'INSEGNA DIPINTA NELLA
    // SCENA. Le due versioni non coincidono — l'insegna abbrevia («Trota &
    // Verdicchio» per «La Trota e il Verdicchio», «Città Gourmet» per
    // «Senigallia Città Gourmet»), e soprattutto è incisa nel pixel, quindi
    // non si traduce. Per questo si usano le scene SENZA insegna e il
    // titolo si scrive qui.
    //
    // `slug` è tecnico: lega la voce ai due file in public/gt/2026/
    // (tappe/<slug>-800.avif e oggetti/<slug>.avif). Non si traduce.
    // `alt` descrive la scena a chi non la vede: dice cosa si vede, non
    // «illustrazione».
    edizione: {
      h2: 'L’edizione in corso',
      sotto: 'La tredicesima edizione, da maggio 2026 a gennaio 2027. Ogni tappa ha la sua scena e il suo oggetto.',
      aria: 'Le tappe dell’edizione 2026',
      apre: 'Apri la scena',
      voci: [
        { slug: 'ancona', comune: 'Ancona', evento: 'Tipicità in Blu', quando: '16–22 maggio',
          alt: 'Martino naviga in barca sul mare di Ancona, fra meduse e fondali.' },
        { slug: 'castelraimondo', comune: 'Castelraimondo', evento: 'Infiorata del Corpus Domini', quando: '6–7 giugno',
          alt: 'Martino sorvola un borgo dalle cupole fiorite durante l’infiorata.' },
        { slug: 'civitanova', comune: 'Civitanova Marche', evento: 'GustaPorto', quando: '20 giugno',
          alt: 'Martino sul pontile accanto a una barca a vela, nel porto di Civitanova.' },
        { slug: 'porto-recanati', comune: 'Porto Recanati', evento: 'Brodetto Show', quando: '28 giugno',
          alt: 'Martino sul lungomare di Porto Recanati fra i tavoli e le scodelle del brodetto.' },
        { slug: 'castignano', comune: 'Castignano', evento: 'Percorso DiVino', quando: '3–4 luglio',
          alt: 'Martino fra le colline di Castignano, con i calici di vino suoi in alto.' },
        { slug: 'sefro', comune: 'Sefro', evento: 'La Trota e il Verdicchio', quando: '11–12 luglio',
          alt: 'Martino nel bosco di Sefro, lungo il torrente dove nuotano le trote.' },
        { slug: 'visso', comune: 'Visso', evento: 'Le Guaite del Gusto', quando: '18–19 luglio',
          alt: 'Martino fra le montagne di Visso.' },
        { slug: 'ascoli-piceno', comune: 'Ascoli Piceno', evento: 'Ascoliva festival', quando: '9–20 agosto',
          alt: 'Martino sulle torri di Ascoli Piceno, con i cartocci di olive in alto.' },
        { slug: 'sarnano', comune: 'Sarnano', evento: 'Festa del Ciauscolo e del salame spalmabile', quando: '5–6 settembre',
          alt: 'Martino sulle colline di Sarnano, con i salumi appesi in alto.' },
        { slug: 'senigallia', comune: 'Senigallia', evento: 'Senigallia Città Gourmet', quando: '6 settembre',
          alt: 'Martino sotto i portici di Senigallia.' },
        { slug: 'potenza-picena', comune: 'Potenza Picena', evento: 'Grappolo d’Oro', quando: '18–27 settembre',
          alt: 'Martino a cavallo con lo stendardo, fra le botti e i grappoli di Potenza Picena.' },
        { slug: 'macerata', comune: 'Macerata', evento: 'Evo — i linguaggi del gioco', quando: '24–27 settembre',
          alt: 'Martino dentro un labirinto, nella scena dedicata ai linguaggi del gioco.' },
        { slug: 'cagli', comune: 'Cagli', evento: 'Cagli Tutto Fungo', quando: '26–27 settembre',
          alt: 'Martino sulle colline di Cagli, con i funghi che volano in alto.' },
        { slug: 'montecassiano', comune: 'Montecassiano', evento: 'Sagra dei Sughitti', quando: '2–4 ottobre',
          alt: 'Martino fra le botti di Montecassiano.' },
        { slug: 'appignano', comune: 'Appignano', evento: 'Leguminaria', quando: '16–18 ottobre',
          alt: 'Martino fra le ceramiche di Appignano, con le scodelle di legumi in alto.' },
        { slug: 'montedinove', comune: 'Montedinove', evento: 'Sibillini in Rosa', quando: '30 ottobre – 1 novembre',
          alt: 'Martino si cala fra gli alberi di Montedinove, dove cresce la mela rosa.' },
        { slug: 'serrapetrona', comune: 'Serrapetrona', evento: 'Appassimenti Aperti', quando: '8 e 15 novembre',
          alt: 'Martino fra le cassette d’uva messa ad appassire a Serrapetrona.' },
        { slug: 'serra-de-conti', comune: 'Serra de’ Conti', evento: 'La festa della Cicerchia', quando: '27–29 novembre',
          alt: 'Martino sotto le arcate di Serra de’ Conti, fra le botti e le scodelle di cicerchia.' },
        { slug: 'camerino', comune: 'Camerino', evento: 'XXV Festa del Torrone', quando: '6 gennaio 2027',
          alt: 'Martino a Camerino di sera, fra le luminarie e il torrone.' },
      ],
      // ⚠️ IN ATTESA, non dimenticare. Queste voci sono decise ma non
      // pubblicabili: appena arriva quello che manca si spostano in `voci`,
      // si rilancia scripts/converti-gt26.mjs e compaiono.
      //   · Agugliano  — «Libera Repubblica di Castel D'Emilio», evento
      //     speciale: manca la data. La scena pulita c'è, è già convertita.
      //   · Pesaro     — «Le Marche e le De.Co. raccontano la comunità»,
      //     evento speciale: mancano la data E la scena senza insegna
      //     (in archivio esiste solo la versione con la targa dipinta).
      //   · Grottammare — «Le Marche delle eccellenze quotidiane dalla
      //     tradizione al progresso», evento speciale: stessa situazione
      //     di Pesaro.
      //   · San Ginesio — evento speciale voluto, ma in archivio ha solo
      //     l'Oggetto Magico (le maschere del teatro, 83 px): la scena non
      //     esiste e va disegnata.
      attesa: [],
    },

    incubatore: {
      h2: 'Incubatore',
      par: [
        'Non tutto quello che nasce dentro il formato resta legato al suo calendario. Alcune cose imparano a camminare da sole: tornano ogni anno anche quando l\'itinerario è altrove, con la propria organizzazione e il proprio pubblico, e a un certo punto non hanno più bisogno di noi. Sono la prova che il laboratorio ha funzionato.',
        'Il segno non è mai quanto dura la festa. È cosa resta quando il Grand Tour è già ripartito: operatori che prima non si conoscevano e adesso si telefonano, un appuntamento che qualcun altro ha preso in mano, una comunità che si è accorta di essere una destinazione. È da qui che un territorio può incamminarsi verso una DMO — non da un organigramma, ma da un gruppo che ha già imparato a decidere insieme.',
      ],
    },

    strada_fatta: {
      h2: 'La strada fatta',
      // %c = comuni toccati, %e = edizioni
      sotto: '%c comuni · %e edizioni · un solo viaggio',
      mappaAria: 'Mappa delle Marche: %c comuni toccati dall\'itinerario su 225',
      nucleiLabel: 'I nuclei tematici',
      attesa: 'Passa su un nucleo per vedere dove è passato.',
    },

    // I NUCLEI TEMATICI. Le CHIAVI sono quelle di gt-temi.json e da qui in
    // avanti sono identificatori, non testo: il dato non porta più copy.
    // `ordine` decide la sequenza dei bottoni; i nuclei senza dati vengono
    // saltati da soli.
    // ⚠️ Gli esempi: le tre righe fornite da Cowork si trascrivono tali e
    // quali. Per gli altri nuclei NON si inventa il "cosa" — si mostrano i
    // luoghi, che sono dato verificato. Le righe mancanti sono in SOSPESI.md.
    temi: {
      ordine: [
        'enogastronomia', 'vino & spiriti', 'mare & pesca', 'tradizioni & comunità',
        'cultura & spettacolo', 'storia & rievocazioni', 'natura & outdoor',
        'saper fare & design', 'innovazione', 'sport',
      ],
      etichette: {
        'enogastronomia': 'Enogastronomia',
        'vino & spiriti': 'Vino & spiriti',
        'mare & pesca': 'Mare & pesca',
        'tradizioni & comunità': 'Tradizioni & comunità',
        'cultura & spettacolo': 'Cultura & spettacolo',
        'storia & rievocazioni': 'Storia & rievocazioni',
        'natura & outdoor': 'Natura & outdoor',
        'saper fare & design': 'Saper fare & design',
        'innovazione': 'Innovazione',
        'sport': 'Sport',
      },
      esempi: {
        'saper fare & design': 'il cappello a Montappone, la carta a Fabriano, la pelle a Tolentino, la fisarmonica a Castelfidardo…',
        'mare & pesca': 'il brodetto a Porto Recanati, le cozze a Pedaso, la piccola pesca a San Benedetto…',
        'storia & rievocazioni': 'i Templari a Castignano, la battaglia delle Nazioni a Sassoferrato, gli scavi di Monte Rinaldo…',
      },
    },

    // `a` è l'anno e dà il nome ai file; `t` è la didascalia, ed è il nome
    // proprio della manifestazione più il luogo: si traduce solo se un
    // giorno si deciderà di glossarlo.
    //
    // ⚠️ UNA PER EDIZIONE, E IL CONTO DEVE TORNARE. Il titolo dice «dodici
    // anni» e qui sotto ci sono esattamente dodici voci, dal 2014 al 2025:
    // la tredicesima edizione non sta qui, sta in «L'edizione in corso».
    // Se un giorno si aggiunge il 2026 qui dentro, va cambiato anche il
    // titolo — un numero scritto in un titolo è una promessa.
    //
    // `w` è la larghezza che il pezzo ha quando è alto 300px: serve a
    // riservargli lo spazio prima che l'immagine arrivi. `gw`/`gh` sono le
    // misure della versione grande nel sipario. Li calcola e li stampa
    // scripts/converti-copertine.mjs: non si scrivono a mano.
    copertine: {
      h2: 'Dodici anni di viaggi',
      sotto: 'Dall’archivio: un pezzo per edizione, dal primo pieghevole del 2014 all’ultima cartolina. Dodici anni visti da come il Grand Tour si è annunciato.',
      aria: 'Le dodici edizioni, dalla prima all’ultima conclusa',
      apre: 'Guarda il pezzo intero',
      annate: {
        label: 'Vai all’edizione',
      },
      voci: [
        { a: '2014', w: 216, gw: 1010, gh: 1400,
          t: 'Il primo pieghevole',
          alt: 'Pieghevole del 2014: una mappa disegnata a mano delle Marche, con i luoghi delle tappe illustrati uno per uno e il motto «Il modo migliore per viaggiare nelle Marche è viverle».' },
        { a: '2015', w: 212, gw: 849, gh: 1200,
          t: 'Il pieghevole della seconda edizione',
          alt: 'Pieghevole del 2015 su fondo color carta da pacchi: la sagoma delle Marche con le tappe segnate e piccoli disegni a tratto.' },
        { a: '2016', w: 210, gw: 980, gh: 1400,
          t: 'Ascoliva, Festival mondiale dell’oliva ripiena — Ascoli Piceno',
          alt: 'Cartolina del 2016 su fondo color carta da pacchi: un’oliva incoronata, disegnata a tratto come un’incisione antica.' },
        { a: '2017', w: 210, gw: 982, gh: 1400,
          t: 'La trota e il Verdicchio — Sefro',
          alt: 'Cartolina del 2017 su fondo rosa pallido: una trota azzurra disegnata piatta, con il titolo della festa in giallo.' },
        { a: '2018', w: 210, gw: 397, gh: 567,
          t: 'Domus Romana — Sant’Angelo in Vado',
          alt: 'Cartolina del 2018: due profili affiancati dentro un medaglione circolare, uno chiaro e uno scuro, come un mosaico romano.' },
        { a: '2019', w: 210, gw: 397, gh: 567,
          t: 'La piazza del gusto — Cantiano',
          alt: 'Cartolina del 2019 su fondo grigio chiaro: una visciola e un frutto giallo uniti da un filo che disegna un cuore.' },
        { a: '2020', w: 300, gw: 1400, gh: 1400,
          t: 'Sibillini in Rosa — Montedinove',
          alt: 'Post quadrato del 2020: la sagoma delle Marche riempita di fotografie, con una donna che tiene in mano delle mele rosa.' },
        { a: '2021', w: 300, gw: 1400, gh: 1400,
          t: 'Un mare di Brodetto — Porto Recanati',
          alt: 'Post quadrato del 2021: un pesce bianco dentro un cerchio verde petrolio, su fondo bianco con righe orizzontali sottili.' },
        { a: '2022', w: 400, gw: 1024, gh: 768,
          t: 'La scatola: «oltre la destinazione»',
          alt: 'La scatola di cartone del Grand Tour 2022, stampata in rosa con mongolfiere e il payoff «Oltre la destinazione».' },
        { a: '2023', w: 300, gw: 1400, gh: 1400,
          t: 'Oltre la destinazione, dicembre — Cingoli',
          alt: 'Post quadrato del 2023: una giostra illustrata sopra un nastro arancione, su fondo di carta geografica.' },
        { a: '2024', w: 416, gw: 1820, gh: 1312,
          t: 'Senigallia Città Gourmet',
          alt: 'Cartolina del 2024 su fondo di assi di legno bianche: un nastro arancione con il titolo e una conchiglia disegnata di lato.' },
        { a: '2025', w: 240, gw: 1120, gh: 1400,
          t: 'Campanili al futuro — Ripatransone',
          alt: 'Locandina del 2025: una casa con il campanile che esce da un piatto, con posate e cibo intorno, su fondo bianco.' },
      ],
    },

    ripartenza: {
      aria: 'Chiusura',
      par: 'Il Grand Tour non finisce: riparte. La prossima sosta è già sulla mappa — e come ogni anno, qualcosa resterà anche dopo.',
    },

    // il sipario del video: `etichetta` fa anche da ripiego nello script,
    // che la legge dall'attributo invece di averla scritta dentro
    proiezione: { etichetta: 'Video', chiudi: 'Chiudi' },
  },
};
