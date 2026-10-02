// La home — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`: finché `en` non esiste non esiste la
// rotta /en/ e il selettore di lingua non compare.
//
// ⚠️ REGOLE SOVRANE: la parola "anigami" non compare mai come testo (vive
// solo in info@anigami.it e nel dominio); mai "quattro festival" — sono
// "quattro progetti"; i giochi di senso non si spiegano.

export const content = {
  it: {
    meta: {
      title: 'Imagina Srl Società Benefit',
      description:
        'Imagina Srl Società Benefit, Camerino: dal 1991 marketing territoriale e comunicazione integrata. Un territorio non si promuove: si mette in condizione di raccontarsi.',
    },

    // Il titolo di pagina, letto solo dai lettori di schermo.
    titolo: 'Imagina Srl Società Benefit',

    // Le righe in cornice.
    cornice: {
      societa: 'Imagina Srl Società Benefit',
      chiSiamo: 'Chi siamo',
      luogo: 'Camerino, Marche · dal 1991',
    },

    // ⚠️ SEGNAPOSTO (Paolo, 09/08). La riga di visione è da decidere.
    // Le tre candidate del brief §5:
    //   · «Un territorio non si promuove. Si mette in condizione di
    //     raccontarsi.» — la prima frase in corsivo, la seconda in tondo
    //   · «Il valore di un territorio non è quello che possiede: è quello
    //     che riesce a mettere in relazione»
    //   · «Locale nella sostanza, globale nello sguardo»
    visione: 'Placeholder per una frase di opening',

    // I quattro segni. ⚠️ `id`, `simbolo`, `href` e `acceso` sono chiavi
    // tecniche e colori: non si traducono. Si traduce solo `nome`, che è il
    // testo per i lettori di schermo — e nemmeno quello, perché sono nomi
    // propri. Restano qui perché la copy della pagina sta tutta in un posto.
    segni: {
      etichetta: 'i progetti',
      ariaLabel: 'I progetti',
      voci: [
        { id: 'tipicita', simbolo: 'mk-tipicita', nome: 'Tipicità', href: '/tipicita/', acceso: '#05606a' },
        { id: 'grand-tour', simbolo: 'mk-grand-tour', nome: 'Grand Tour delle Marche', href: '/grand-tour-delle-marche/', acceso: '#d1544c' },
        { id: 'tipicita-in-blu', simbolo: 'mk-tipicita-in-blu', nome: 'Tipicità in Blu', href: '/tipicita-in-blu/', acceso: '#209fb6' },
        { id: 'evo', simbolo: 'mk-evo', nome: 'EVO', href: '/evo/', acceso: '#b8497a' },
      ],
    },

    // I dispacci. `locale` serve allo script per formattare la data: è
    // l'unica stringa di questa pagina che vive nel JavaScript, e viaggia
    // fino a lì come attributo data- invece che scritta nel codice, così
    // quando arriverà l'inglese basta cambiarla qui.
    dispacci: { ariaLabel: 'Dispacci', locale: 'it-IT' },

    sipario: {
      titolo: 'Imagina Srl Società Benefit',
      chiudi: 'Chiudi',
      blocchi: [
        {
          titolo: 'Chi siamo',
          par: [
            'Imagina è una società benefit con sede a Camerino, nelle Marche. Dal 1991 lavora nel marketing territoriale e nella comunicazione integrata, con una specializzazione netta su due comparti: l\'agroalimentare e il turistico-territoriale.',
            'È una microimpresa che opera su scala internazionale, e la cosa sta in piedi per una ragione precisa: Imagina è il referente di un partenariato pubblico-privato che oggi conta circa trecento entità, pubbliche e private, che si riconoscono nel valore territorio. Non è una rete di patrocini: è la struttura con cui si lavora tutto l\'anno.',
            // ⚠️ RISCRITTA, non ripulita (02/10/2026). Da quest'anno la
            // manifestazione si chiama «Tipicità» e basta: togliere qui la
            // parola «Festival» avrebbe dato all'ombrello e a una delle sue
            // declinazioni lo stesso nome nella stessa riga. Quando il
            // prodotto di punta prende il nome dell'ombrello, si smette di
            // nominarlo e lo si indica — da qui «il festival di Fermo».
            'Da questo trentennio nasce il patrimonio di progettualità che vive sotto il marchio ombrello Tipicità e nelle sue declinazioni — il <a href="/tipicita/">festival di Fermo</a>, il <a href="/grand-tour-delle-marche/">Grand Tour delle Marche</a>, <a href="/tipicita-in-blu/">Tipicità in Blu</a> ed <a href="/evo/">EVO</a>. Quattro progetti autonomi, quattro linguaggi, una sola rete.',
          ],
        },
        {
          titolo: 'Come lavoriamo',
          par: [
            'Contaminazione, osmosi, cross fertilization: è il carburante con cui Imagina attiva processi di networking fra filiere e fra territori. Reti lunghe e reti corte che producono racconti nuovi e occasioni nuove, usando la crossmedialità globale per veicolare specificità locali.',
            'Il metodo ha un ordine e costa tempo. Prima si ascolta cosa dice il territorio, e ci vogliono mesi. Poi si incontrano comunità diverse e si confrontano le differenze invece di appianarle. Poi si mette a fuoco il posizionamento — locale nella sostanza, globale nello sguardo. Solo alla fine si costruiscono azioni su misura, perché nessuna comunità somiglia a un\'altra abbastanza da meritare lo stesso formato.',
            'Il lavoro arriva chiavi in mano: analisi di fattibilità, progettazione, coordinamento, organizzazione generale. E arriva da un gruppo di professionisti con esperienza pluriennale in Italia e all\'estero nella pianificazione, nella progettazione e nella comunicazione integrata.',
          ],
        },
        {
          titolo: 'Cosa facciamo',
          par: [
            '<b>Marketing e sviluppo territoriale</b> — progetti di marketing, coaching e networking territoriale; creazione e sviluppo di marchi ombrello; processi di cross-fertilization fra filiere; percorsi bottom-up per lo sviluppo turistico; co-creazione degli asset di un territorio; itinerari turistici generali e tematici; progetti di cooperazione transnazionale.',
            '<b>Eventi e format</b> — progettazione, organizzazione e gestione chiavi in mano di festival, congressi, convegni, fiere ed esposizioni; hackathon; corsi di formazione professionale; press tour ed educational tour.',
            '<b>Comunicazione</b> — campagne crossmediali su web, social e direct mailing customizzato; ufficio stampa e rapporti con i media locali, nazionali e di settore; piani di relazioni pubbliche; consulenza di immagine; produzione video; pubblicazioni, dalle guide alle monografie.',
          ],
        },
        {
          titolo: 'Dove',
          par: [
            'Imagina opera in quasi tutte le regioni italiane. Fuori dai confini, una rete di relazioni costruita nel tempo l\'ha portata a lavorare in Germania, Francia, Spagna, Regno Unito, Slovenia, Croazia, Montenegro e Albania, e più lontano in Stati Uniti, Canada, Argentina, Emirati Arabi, Norvegia e Giappone.',
          ],
        },
        {
          // ⚠️ Questo blocco SPIEGA L'ISTITUTO GIURIDICO, non celebra
          // l'azienda: è una richiesta esplicita di Paolo. Chi esce deve
          // aver imparato qualcosa che non sapeva. Non accorciare, non
          // alleggerire — vale anche per chi tradurrà.
          titolo: 'Che cosa significa essere società benefit',
          par: [
            'Società benefit non è una certificazione e non è un premio. È una forma giuridica, introdotta in Italia dalla legge di stabilità 2016 — legge 208/2015, commi 376-384 — che ha fatto dell\'Italia il primo Paese europeo ad averla nel proprio ordinamento.',
            'E non è nemmeno il non profit. Una società benefit resta un\'impresa che fa utili e li distribuisce. Quello che cambia è l\'oggetto sociale: accanto allo scopo di lucro, nello statuto vengono scritte una o più finalità di beneficio comune. Da quel momento non sono più intenzioni. Sono vincoli, e vincolano gli amministratori, che devono bilanciare tre interessi invece di uno solo: quello dei soci, quello delle finalità dichiarate e quello delle persone su cui l\'attività dell\'impresa ha effetto.',
            'Da qui discendono tre obblighi concreti. Va nominato un responsabile dell\'impatto. Va redatta ogni anno una relazione di impatto, allegata al bilancio e pubblicata sul sito. E quella relazione non può essere un racconto: l\'impatto va misurato con uno standard di valutazione esterno e indipendente, che copre quattro aree — governance, lavoratori, altri portatori d\'interesse, ambiente.',
            'C\'è anche una sanzione, ed è la parte che rende la cosa seria. Un\'impresa che si dichiara società benefit senza perseguire davvero le finalità che ha scritto ricade nella disciplina della pubblicità ingannevole, sotto la vigilanza dell\'Autorità Garante della Concorrenza e del Mercato. Non è un\'etichetta che si appende: è un impegno che ha un costo e che qualcuno può venire a verificare.',
            '<b>Per Imagina</b> questo significa una cosa sola, e la si può dire in una riga: la cura del territorio non è il contorno del lavoro, è il lavoro. Valorizzare i talenti di una regione ad ampio spettro — gli artigiani e i ricercatori, i produttori e gli studenti, chi tiene aperta una bottega in un borgo e chi in un laboratorio studia il mare. Il profitto serve a tenere in piedi la struttura; lo scopo è che i territori dove lavoriamo stiano meglio di come li abbiamo trovati.',
          ],
        },
      ],
      accessiAria: 'Approfondimenti e contatti',
      accessi: [
        { label: 'Note di produzione', href: '/note-di-produzione/' },
        { label: 'Relazione di impatto', href: '/relazione-di-impatto/' },
        { label: 'Entra in scena', href: '/entra-in-scena/' },
        { label: 'info@anigami.it', href: 'mailto:info@anigami.it' },
      ],
      piede: 'Viale Giacomo Leopardi, 14 – Camerino (MC) · P.IVA/C.F. IT 01115460436',
    },

    // Dati strutturati: fatti anagrafici, non copy. Stanno qui perché la
    // descrizione viaggia con la lingua.
    sd: {
      name: 'Imagina Srl Società Benefit',
      streetAddress: 'Viale Giacomo Leopardi, 14',
      addressLocality: 'Camerino',
      addressRegion: 'Marche',
    },
  },
};
