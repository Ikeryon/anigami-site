// EVO — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`: finché `en` non esiste non esiste la
// rotta /en/evo/ e il selettore di lingua non compare.
//
// LA FABULA È IL VOCABOLARIO. Il gesto proprio di EVO vive nel terzo
// capitolo: il lessico si scrive mentre lo leggi.
//
// ⚠️ IL LEMMA È LA NAVIGAZIONE, NON IL TITOLO. In barra dei capitoli e nella
// riga di dizionario compare il lemma in minuscolo; l'h2 è una frase vera.
// Quattro h2 che dicessero "assunto", "muta", "lessico", "mossa" non
// significherebbero niente né per chi scorre né per un motore di ricerca.
// Quando si tradurrà: `capitoli[].label` e `riga.voce` sono la stessa parola
// e vanno mossi insieme.
//
// ⚠️ Le quattro righe di dizionario NON si spiegano in nessun punto della
// pagina — stessa regola del menù bifronte di Tipicità.
//
// NOTA PER CHI TRADUCE: i campi `voce` e `gram` della riga di dizionario
// finiscono dentro <b> e <i> nel template, non qui: così gli stili della
// pagina continuano a raggiungerli. I paragrafi invece possono contenere
// marcatura in linea (<i>, <a>) perché sono iniettati con set:html.

export const content = {
  it: {
    meta: {
      title: 'EVO — i linguaggi del terzo millennio, Macerata',
      description:
        'EVO è il festival dei linguaggi del terzo millennio, a Macerata. Dai linguaggi del cibo a quelli del gioco: perché le parole che usiamo non descrivono il mondo, lo costruiscono.',
    },

    marchio: {
      nome: 'EVO',
      heading: 'EVO — i linguaggi del terzo millennio',
      kicker: 'Macerata · i linguaggi del terzo millennio',
      heroLine: 'È il tempo a dare forma al linguaggio, o il linguaggio a dare forma al tempo?',
    },

    pratico: { etichetta: 'Dove', valore: 'Macerata' },

    // I capitoli sono lemmi: etichette in minuscolo anche in barra (è la
    // forma del lemma, non un vezzo).
    capitoli: [
      { id: 'assunto', label: 'assunto' },
      { id: 'muta', label: 'muta' },
      { id: 'lessico', label: 'lessico' },
      { id: 'mossa', label: 'mossa' },
    ],

    assunto: {
      h2: 'EVO è evoluzione, è il tempo che viviamo, è mutamento',
      riga: { voce: 'assunto', gram: 's.m.', def: 'ciò che si dà per vero prima di cominciare.' },
      occhiello: 'Il festival nasce da una domanda: le parole raccontano il tempo, o lo fabbricano?',
      par: [
        'Le parole che scegliamo, i segni, le immagini, i gesti — tutto l\'insieme di cose che chiamiamo linguaggio — descrivono la realtà o la costruiscono? È una domanda che il Novecento ha messo al centro e non ha chiuso.',
        'EVO parte da lì e lavora su un\'ipotesi precisa: che il rapporto vada nei due sensi, e che la parte interessante sia il ritorno. Un festival è un buon posto per osservarlo, perché è uno dei pochi luoghi in cui una comunità prova parole nuove in pubblico e vede subito l\'effetto che fanno.',
      ],
      h3: 'Una parola che sparisce si porta via la cosa',
      par2: [
        'Quando smette di circolare il nome di un mestiere, il mestiere sparisce poco dopo: prima dal discorso, poi dal mercato, poi dalle mani di chi lo sapeva fare. Funziona anche al contrario. Un prodotto che trova il proprio nome smette di essere merce. Un quartiere chiamato in un modo da chi ci abita e in un altro da chi ci passa soltanto è, di fatto, due quartieri diversi.',
        'L\'Università di Macerata è partner scientifico del festival fin dalla prima edizione, e il suo motto — <i>umanesimo che innova</i> — dice bene il perimetro. Il Ministero del Turismo, inserendo EVO tra gli eventi da non perdere, l\'ha definito «un esperimento che studia, racconta e cerca di interpretare i fenomeni moderni analizzandoli dal punto di vista umanistico».',
      ],
    },

    muta: {
      h2: 'Da Tipicità Evo a EVO: come un festival ha cambiato pelle',
      riga: { voce: 'muta', gram: 's.f.', def: 'il cambio di pelle; anche il silenzio che lo precede.' },
      // porta due link in linea: va reso con set:html, e per questo la regola
      // .occhiello a della pagina è dichiarata :global
      occhiello:
        'Nel 2021 era uno spin-off di <a class="trace-link" href="/tipicita/">Tipicità</a>, tappa del <a class="trace-link" href="/grand-tour-delle-marche/">Grand Tour delle Marche</a>, nato in piena pandemia. Tre anni dopo era un\'altra cosa.',
      par: [
        'Le prime due edizioni vivono sospese tra fisico e digitale: dirette lunghe, clip girate nei ristoranti, Macerata raccontata a distanza perché attraversarla non si poteva. Il tema si stringe su accoglienza e territorialità, con una coincidenza che vale la pena notare: si lavora sull\'ospitalità nell\'unico momento storico in cui ospitare è vietato.',
      ],
      h3: 'Il momento in cui il cibo diventa un linguaggio',
      par2: [
        'La formula compare alla seconda edizione quasi come un titolo di sezione — <i>i nuovi linguaggi del cibo</i>, in un panel di semiotica e filosofia condotto dal rettore dell\'ateneo. Alla terza si prende l\'intero programma.',
        'Ed è lì che il festival scopre di aver detto più di quanto intendesse. Il cibo è il primo vettore di cultura: chiamarlo linguaggio apre una porta che non si richiude. Nello stesso cartellone entrano la musica, l\'arte, il teatro di figura, le storie per bambini, una civiltà intera invitata a raccontarsi. La parola era più grande della cosa che doveva descrivere.',
        'Il nome cambia per conseguenza. «Tipicità Evo» descriveva un\'appendice, e quello che stava succedendo non lo era più. Nasce EVO — i linguaggi del terzo millennio: un festival che prende il linguaggio come oggetto, non come strumento. E che, come tutti i festival di città, non è mai soltanto il programma di chi lo organizza: lo fanno anche i locali che aderiscono, le associazioni che portano un laboratorio, chi sale su un palco per un pomeriggio.',
      ],
      nota: 'Vale la pena fermarsi un secondo: è la tesi del festival applicata al festival stesso. Una parola nuova ha cambiato la cosa che doveva descrivere.',
    },

    lessico: {
      h2: 'Il vocabolario di EVO: i linguaggi per guardare la realtà',
      riga: {
        voce: 'lessico',
        gram: 's.m.',
        def: 'l\'insieme delle parole di cui una comunità dispone. Ciò che non vi compare, per quella comunità, quasi non esiste.',
      },
      occhiello:
        'Non sono i temi di un cartellone. Sono alcuni dei punti di vista da cui EVO ha guardato la realtà — e ognuno restituisce un pezzo diverso.',
      intro: 'Alcuni: l\'elenco non è chiuso e non ha nessuna intenzione di esserlo.',
      // Undici voci. Non sono i temi di un cartellone: sono alcuni dei punti
      // di vista da cui EVO ha guardato la realtà. La tassonomia non è
      // inventata, il programma 2024 era indicizzato così.
      // Definizioni [BOZZA Cowork, da validare con Paolo].
      // ⚠️ `id` è una chiave tecnica (finisce negli attributi id/aria-controls):
      // non si traduce.
      voci: [
        { id: 'cibo', voce: 'i linguaggi del cibo',
          def: 'Si impara prima di saper parlare. Dice da dove vieni anche quando preferiresti tacerlo.' },
        { id: 'accoglienza', voce: 'i linguaggi dell\'accoglienza',
          def: 'Una grammatica: si possono conoscere tutte le regole e restare scortesi, o sbagliarle tutte e far sentire qualcuno a casa.' },
        { id: 'tipicita', voce: 'i linguaggi della tipicità',
          def: 'Un prodotto senza nome è merce. Con un nome, e con la storia che lo regge, è un luogo che si può mangiare.' },
        { id: 'impresa', voce: 'i linguaggi d\'impresa',
          def: 'Le parole con cui un\'azienda si descrive decidono che azienda diventerà. Cambiare il piano industriale è facile. Cambiare il vocabolario, no.' },
        { id: 'digitale', voce: 'i linguaggi del digitale',
          def: 'Non un canale in più: un modo di pensare, che si è preso le nostre frasi prima dei nostri schermi.' },
        { id: 'artificiali', voce: 'i linguaggi artificiali',
          def: 'Parliamo con qualcosa che ha imparato a parlare leggendoci. Quello che risponde è fatto delle nostre parole.' },
        { id: 'arte', voce: 'i linguaggi dell\'arte',
          def: 'Dice ciò che non entra in nessuna frase. Chi smette di praticarlo perde pezzi di sé senza accorgersene.' },
        { id: 'odio', voce: 'i linguaggi dell\'odio',
          def: 'Le parole che feriscono non sono un effetto collaterale del discorso: sono un progetto. Nominarle è il primo modo di disinnescarle.' },
        { id: 'benessere', voce: 'i linguaggi del benessere',
          def: 'Il corpo parla per primo e quasi sempre ha ragione. Ascoltarlo è una forma di alfabetizzazione.' },
        { id: 'contemporaneo', voce: 'i linguaggi del contemporaneo',
          def: 'Dire <i>adesso</i> mentre adesso sta ancora succedendo: la cosa più difficile che il linguaggio sappia fare.' },
        { id: 'gioco', voce: 'i linguaggi del gioco',
          def: 'Li contiene tutti. Si simula qualsiasi cosa, poi se ne esce per parlarne.' },
      ],
      nota: 'Nel programma del 2024, uno degli incontri sui linguaggi dell\'odio si intitolava «Quando le parole incidono sulla realtà». Lo firmavano l\'Università di Macerata e un liceo classico.',
    },

    mossa: {
      h2: 'Il gioco è il linguaggio che permette di parlarli tutti',
      riga: { voce: 'mossa', gram: 's.f.', def: 'l\'unità minima del gioco: una scelta che sposta tutti.' },
      occhiello: 'L\'ultimo linguaggio entrato nel vocabolario è anche quello che li contiene.',
      h3a: 'Un laboratorio dove si può simulare tutto',
      para: [
        'Dentro un gioco si montano un mercato, una città, una carestia, una guerra — e poi se ne esce per parlarne. Le cose troppo grandi o troppo dolorose per essere affrontate di petto, giocate diventano maneggiabili. È il motivo per cui eserciti, scuole e bambini usano lo stesso strumento per ragioni opposte.',
      ],
      h3b: 'Regole che tengono insieme persone lontanissime',
      parb: [
        'A un tavolo da gioco un ottantenne, un trentenne e un bambino di dieci anni stanno alla pari, e idee distanti convivono per un\'ora senza scontrarsi. Quasi tutti gli altri linguaggi fanno il contrario: servono a segnalare chi sta dentro e chi sta fuori.',
        'E il gioco va oltre la nostra specie. Si gioca con un cane, si gioca con un gatto: chi addestra un animale sta giocando, e lo sanno tutti e due. È probabilmente l\'unico linguaggio interspecifico che abbiamo — l\'unico che nessuno ha dovuto insegnare.',
        'Il capitolo è appena cominciato.',
      ],
    },

    congedo: {
      testo: 'Una parola nuova, messa in circolo in una città, dopo un po\' la si sente per strada. Da lì in avanti non è più una parola: è un pezzo di mondo.',
      sito: { label: 'evo.ooo', href: 'https://evo.ooo' },
    },

    // Dati strutturati: la pagina è un manifesto senza date, quindi un Event
    // sarebbe invalido — richiede startDate. Si dichiara un WebPage con
    // `about` di tipo Festival. Nessuna data finché la pagina non ne ha.
    sd: {
      name: 'EVO — i linguaggi del terzo millennio',
      alternateName: 'EVO — i linguaggi del terzo millennio',
      citta: 'Macerata',
      organizzatore: 'Comune di Macerata',
    },
  },
};
