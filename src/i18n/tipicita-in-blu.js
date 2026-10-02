// Tipicità in Blu — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`: finché `en` non esiste non esiste la
// rotta /en/tipicita-in-blu/ e il selettore di lingua non compare.
//
// LA FABULA È LA STRUMENTAZIONE: la pagina è una PLANCIA. Sezioni
// codificate, coordinate, dati in evidenza, registro tecnico-nautico. La
// sobrietà È la fabula — qui il virtuosismo sta nella precisione.
//
// ⚠️ OSSATURA NON REPLICABILE: due sole matrici, .Rotta e .Cantiere.
// Niente deck a quadri, niente moviola, niente card orizzontali: sono
// dispositivi di Tipicità e non si ereditano.
//
// TESTI: trascritti TALI E QUALI da TESTI-TIB.md v3 (19/08/2026), rivisto
// sul reportage 2025. Non riscriverli. Registro da SCHEDA: si afferma ciò
// che la piattaforma È, mai "potremmo".
//
// COSA NON STA QUI, e sta invece nella pagina: il manifesto dell'archivio
// fotografico (numeri, gruppi, anni), le tinte della ruota, le coordinate
// della carta adriatica, le cromie. Non sono testo e non si traducono.

export const content = {
  it: {
    meta: {
      title: 'Tipicità in Blu — Ancona, il mare come laboratorio di futuro',
      description:
        'Tipicità in Blu, Ancona: una settimana all\'anno l\'Adriatico diventa un laboratorio a cielo aperto. Blue economy, ricerca, cooperazione adriatica e il cantiere permanente The Blue Way.',
    },

    plancia: {
      titolo: 'Tipicità in Blu',
      marchioAlt: 'Tipicità in Blu',
      payoff: 'Mare, laboratorio di futuro',
      // righe-dato in segmenti: su schermo stretto scendono una per riga
      // invece di spezzarsi a caso — la plancia resta plancia
      fix: ['43°37′N 13°30′E', 'Ancona, Mole Vanvitelliana', 'maggio 2027'],
      navAria: 'Sezioni',
    },

    // ⚠️ I nomi delle due matrici NON si traducono e NON si spiegano: sono
    // il dispositivo della pagina, come il menù bifronte di Tipicità.
    matrici: [
      { id: 'rotta', label: '.Rotta' },
      { id: 'cantiere', label: '.Cantiere' },
    ],

    barra: { navAria: 'Sezioni della pagina', fix: '43°37′N 13°30′E' },

    rotta: {
      h2: 'Rotta',
      // «dove il mare incontra le persone» è una delle tre righe-firma
      // verificate nei materiali di casa (REGISTRO §3).
      // v3 §2.1: aggiunti «pescatori, cuochi» — la squadra tiene insieme
      // scienziati e operatori portuali, e qui si elencava solo la metà
      // istituzionale.
      apertura:
        'Il mare non è un paesaggio: è un sistema produttivo, scientifico e culturale. Tipicità in Blu è il festival dove il mare incontra le persone che su quel sistema lavorano — imprese, ricercatori, istituzioni, naviganti, pescatori, cuochi — e chi nel mare vede una risorsa da capire prima che da sfruttare. Una settimana all\'anno, ad Ancona, l\'Adriatico diventa un laboratorio a cielo aperto.',

      // ⚠️ NIENTE NUMERO DI EDIZIONE in questa scheda (decisione 02/10/2026):
      // la base su cui si contava non è considerata confermata. L\'unico dato
      // d\'edizione in pagina è «2014» fra le letture, e «maggio 2027» nella
      // riga-plancia. Non reintrodurne uno senza una fonte scritta.
      scheda: [
        ['Dove', 'Ancona — Mole Vanvitelliana, Marina Dorica, Piazza Cavour'],
        ['Coordinate', '43°37′N 13°30′E'],
        ['Durata', 'sette giorni, dal sabato al venerdì'],
      ],

      // LA POSIZIONE (integrazione dai materiali di casa): il dettaglio
      // erudito è breve, esatto, e fonda — non decora.
      posizione: {
        h3: 'La posizione',
        par: 'Ancona è il luogo esatto di questo discorso. Il nome viene dal greco <i lang="grc-Latn">Ankón</i>, gomito: la costa che si piega e si spinge dentro l\'Adriatico. Una città di terra affacciata sul mare, con il porto che va da Marina Dorica all\'arco di Traiano, e il quartier generale del festival alla Mole Vanvitelliana — ex lazzaretto su un\'isola artificiale, fra la terra e l\'acqua. Il sodalizio fra le due cose non è una metafora: è la geografia.',
      },

      // v3 §2.3: «da mare a mare» e «il mare non è soltanto scenario ma
      // principio generatore» sono formule testuali di casa, non invenzioni.
      visione: {
        h3: 'La visione',
        par: [
          '«Mare, laboratorio di futuro» non è uno slogan: è una descrizione. Le questioni che il mare pone — energia, cibo, trasporti, clima, lavoro — non si risolvono per compartimenti. Il festival le mette nello stesso spazio fisico e le fa parlare: la ricerca accanto al cantiere, la pesca accanto alla biotecnologia, la scuola accanto all\'impresa. È un festival «da mare a mare», che si innesta nel tessuto cittadino e lo trasforma in un ecosistema dove il mare non è soltanto scenario, ma principio generatore di idee, progetti e collaborazioni.',
          'E il perimetro non si ferma alla costa. <b>Il mare inizia dalla montagna</b>: è la frase con cui Tipicità e il Polo Tecnologico Alto Adriatico hanno aperto Ecomondo, ed è un\'affermazione idrografica prima che retorica. Bacini, fiumi, aree interne e acque costiere sono un sistema solo, e trattarli separati è il modo più rapido per sbagliare le politiche di tutti e due.',
        ],
      },

      // L'ARCHITETTURA (v3 §2.4): che cosa succede, di preciso.
      // ⚠️ NIENTE DATE QUI. Le date della prossima edizione stanno nella
      // riga-plancia in cima e in nessun altro posto: se finiscono anche qui,
      // ogni anno vanno corrette in tre punti e uno resta indietro.
      // NB: il reportage chiama "matrici" questi tre blocchi di calendario. È
      // la stessa parola che nomina le due sezioni della pagina — in pagina
      // non si incrociano mai, perché la nav mostra i nomi delle sezioni.
      architettura: {
        h3: 'L\'architettura',
        lead: 'La manifestazione ha tre matrici, e ognuna ha il suo tempo e il suo luogo.',
        voci: [
          {
            nome: 'Il Weekend Blu',
            testo: 'due giorni ad alta intensità fra Marina Dorica e la Mole Vanvitelliana: regate, esperienze di cucina, mostre, visite.',
          },
          {
            nome: 'Le Giornate della Blue Economy',
            testo: 'cinque giorni di lavoro fra la Mole, la Facoltà di Ingegneria dell’Università Politecnica delle Marche e il Passetto: formazione, innovazione, imprese, ricerca, e in chiusura l’hackathon e il forum.',
          },
          {
            nome: 'Il circuito cittadino',
            testo: 'per tutta la durata, mostre e itinerari nei luoghi della città e nei locali che aderiscono, che tengono insieme le due anime e le portano fuori dalle sedi.',
          },
        ],
      },

      // LA TABELLA DI MARCIA. Sette giorni dal sabato al venerdì successivo
      // (confermato il 02/10/2026: la 13ª si è svolta dal 16 al 22 maggio
      // 2026, che è sabato-venerdì). L'asse porta le iniziali dei giorni e non
      // numeri progressivi: una settimana che parte di sabato ha una forma.
      // ⚠️ Niente «otto giorni»: quella cifra viene dalla parte del reportage
      // che si contraddice sull'edizione.
      marcia: {
        label: 'La tabella di marcia',
        giorni: ['S', 'D', 'L', 'M', 'M', 'G', 'V'],
        giorniEstesi: ['sabato', 'domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì'],
        // `da`/`a` e `tratto` sono geometria della barra: non si traducono
        voci: [
          { nome: 'Weekend Blu', dove: 'Marina Dorica · la Mole', da: 1, a: 3, tratto: false },
          { nome: 'Giornate della Blue Economy', dove: 'la Mole · Ingegneria · il Passetto', da: 3, a: 8, tratto: false },
          { nome: 'Circuito cittadino', dove: 'la città e i locali', da: 1, a: 8, tratto: true },
        ],
        nota: 'Sette giorni, dal sabato al venerdì successivo: due di Weekend Blu, cinque di Giornate della Blue Economy, e il circuito cittadino a tratteggio su tutta la durata, perché è diffuso in città e non concentrato in una sede.',
      },

      // I FORMATI (v3 §4): la prova, dopo la tesi. Non aprono una terza
      // sezione — la regola delle due matrici resta.
      // ⚠️ `idx` e `gruppi` sono tecnici: indice della lastra e bacino da cui
      // estrarre la fotografia. Non si traducono.
      formati: {
        h3: 'I formati',
        voci: [
          {
            nome: 'Blu Village',
            dove: 'la cittadella della ricerca sul mare, in Piazza Cavour, con l’Università Politecnica delle Marche',
            testo: 'Per una giornata la ricerca sul mare esce dai laboratori e si mette in piazza: exhibit, talk, laboratori, dimostrazioni. Scienza, innovazione, sostenibilità e impresa in un racconto che si può toccare con mano. Il mare smette di essere solo l’elemento identitario del territorio e diventa una piattaforma di conoscenza condivisa.',
            idx: '01', gruppi: ['ricerca', 'ragazzi', 'saloncino'],
            alt: 'I banchi della ricerca sul mare, con il pubblico',
          },
          {
            nome: 'Sailing Chef',
            dove: 'Marina Dorica, apre la stagione velica',
            testo: 'Una regata gourmet. Ogni equipaggio riceve una cassetta di prodotti ittici abbinati a eccellenze agricole selezionate; in navigazione la ciurma cucina, e al rientro in porto una giuria assaggia. La classifica nasce dall’incontro fra performance sportiva, creatività culinaria e capacità di raccontare il mare attraverso i sapori.',
            idx: '02', gruppi: ['regata', 'cucina'],
            alt: 'La regata e la cucina a bordo',
          },
          {
            nome: 'Visita il Cantiere',
            dove: 'partenza dalla Mole, accesso gratuito su prenotazione',
            testo: 'Un luogo normalmente chiuso si apre: la cantieristica navale vista da dentro, le professioni blu, i processi produttivi, il design. Cittadini, appassionati, studenti e famiglie entrano nel cuore di un luogo simbolico per l’economia e l’identità marittima della città.',
            idx: '03', gruppi: ['cantiere'],
            alt: 'Il cantiere navale visto da dentro',
          },
          {
            nome: 'Menù in Blu e Aperiblu',
            dove: 'nei locali della città',
            testo: 'Il festival esce dalle sedi e si distribuisce in città: per una settimana il circuito dei ristoranti e dei bar propone il pesce dell’Adriatico. È il modo più semplice per dire che il mare, qui, non è un tema di convegno.',
            idx: '04', gruppi: ['tavola'],
            alt: 'La tavola e le degustazioni in città',
          },
        ],
      },

      // ⚠️ TESTO DA FAR VALIDARE: è una parafrasi di quanto detto da Paolo il
      // 02/10/2026 e non viene da TESTI-TIB. Se Cowork lo riscrive, si
      // sostituisce qui e basta.
      repertorio: {
        label: 'Negli anni',
        nota: 'Il festival ha cambiato forma molte volte: convegni in sale moderne e in luoghi storici, hackathon, regate, saloncini di degustazione, appuntamenti tecnici, tavoli di lavoro. Il mezzo cambia ogni volta, il punto no — al centro restano i temi.',
        alt: 'Un momento di una delle edizioni del festival',
      },

      // IL QUADRO STRUMENTI: i sette ambiti veri (v3 §2.5).
      // ⚠️ I dieci tag di prima erano verosimili, ed era quello il problema:
      // verosimili invece che veri. Questa è la tassonomia della
      // manifestazione. Sono SETTE, e il numero conta: la ruota ha sette
      // settori, e il conto si legge.
      strumenti: {
        label: 'Il quadro strumenti · gli ambiti',
        voci: [
          'Innovazione e start-up',
          'Idrosfera',
          'Multifunzionalità',
          'Economia circolare',
          'Cantieristica navale',
          'Confronti internazionali',
          'Ricerca e progetti europei',
        ],
        // l'etichetta della ruota: %s viene sostituito con l'elenco
        aria: 'I sette ambiti della manifestazione: %s.',
      },

      estensione:
        'Cultura, cibo e territorio, turismo, filiera ittica e acquacoltura, specie autoctone e aliene. Cantieristica, nautica e diporto, infrastrutture e mobilità, sub-fornitura nautica. Intelligenza artificiale e nuove tecnologie, creatività applicata, nuova impresa giovanile. Sostenibilità, economia circolare e del riuso, ciclo delle acque e depurazione. Progetti europei e internazionalizzazione.',

      // LE METRICHE (v3 §2.6) — numeri propri, scelti perché INVECCHIANO
      // PIANO: una landing dura più di un'edizione.
      // ⚠️ LO ZERO SUI CONTRIBUTI PUBBLICI È USCITO DI PAGINA (decisione di
      // Paolo, 02/10/2026) e non va reintrodotto per ragioni di
      // impaginazione: il dato è vero, ma vantarlo su una vetrina pubblica
      // suona come una stoccata verso gli enti che sono partner
      // istituzionali della manifestazione.
      metriche: {
        label: 'Le metriche',
        voci: [
          { num: '2014', label: 'l’anno della prima edizione: il festival è oltre il giro di boa del suo primo decennio' },
          { num: 'oltre 30', label: 'i partner pubblici e privati di ogni edizione' },
          { num: 'oltre 25', label: 'le aziende del territorio che la sostengono' },
        ],
      },

      corridoio: {
        h3: 'Il corridoio',
        par: 'Ancona guarda il corridoio adriatico-ionico: due sponde, sette paesi, una strategia europea (EUSAIR) che qui trova uno dei suoi luoghi di lavoro. Il festival opera dentro questa geografia — con la Commissione Europea nelle Blue Economy Days, con i programmi Interreg Italia–Croazia, con gli atenei delle due coste. L\'Adriatico non divide due sponde: le tiene insieme.',
      },

      carta: {
        did: 'Il medio Adriatico, profilo ricalcato da coordinate reali. Il gomito al centro è il Conero: venticinque chilometri di costa che si spingono dentro il mare.',
        targhe: { ancona: 'ANCONA', est: 'SPONDA EST', mare: 'ADRIATICO' },
      },

      // ⚠️ CORREZIONE FATTUALE (v3 §2.8). Fincantieri e MSC sono usciti: nel
      // reportage non compaiono fra i partner, e un nome sbagliato
      // nell'elenco dei partner è l'errore che un partner vero nota per primo.
      equipaggio: {
        h3: 'L\'equipaggio',
        par: [
          'Partner istituzionali: Comune di Ancona, Camera di Commercio delle Marche, Regione Marche. Partner scientifico: Università Politecnica delle Marche. Project partner: Banco Marchigiano. Partner tecnico: Marina Dorica.',
          'E intorno, la rete che il festival convoca ogni anno: atenei e centri di ricerca, poli tecnologici, aziende di servizi pubblici, associazioni di categoria e professionali, sodalizi culturali, imprese leader dei rispettivi comparti, grandi gruppi cooperativi.',
        ],
      },

      // LA SQUADRA (v3 §2.9): chiude .Rotta. Dice l'ascolto come procedura,
      // senza aureola — è la voce di casa già scritta.
      squadra: {
        h3: 'La squadra',
        par: 'Chi sta al tavolo, di solito, non sta allo stesso tavolo. Scienziati e docenti, ricercatori e specialisti, divulgatori e scrittori, chef affermati ed emergenti, pescatori e operatori portuali, viticoltori e ristoratori. Il metodo è dichiarato ed è bottom up: si raccolgono i bisogni delle diverse anime che cooperano, e si lavora perché il confronto non sia verticale. Le contaminazioni che ne escono non sono un effetto collaterale — sono il prodotto.',
        idx: '05', gruppi: ['tavolo', 'hackathon'],
        alt: 'Un tavolo di lavoro',
      },

      // la banda: l'unica fotografia a colori pieni della pagina
      // ⚠️ MANCA ANCORA la veduta dall'alto del lungomare, dal porto a Marina
      // Dorica, che sarebbe il soggetto giusto: nell'archivio non c'è.
      banda: { idx: 'Banda', gruppi: ['citta'], alt: 'Ancona e il suo porto' },
    },

    cantiere: {
      h2: 'Cantiere',
      // ⚠️ CORREZIONE FATTUALE: la paternità di The Blue Way è di due
      // soggetti soltanto — Tipicità in Blu e il Polo Tecnologico Alto
      // Adriatico. iNEST non c'entra con la nascita: ha collaborato a
      // progetti sviluppati DENTRO The Blue Way, e il suo nome resta solo lì.
      apertura:
        'The Blue Way nasce dalla collaborazione fra Tipicità in Blu e il Polo Tecnologico Alto Adriatico: un cantiere progettuale fondato su un principio semplice — condivisione. Buone prassi che circolano tra le due sponde dell\'Adriatico, talenti che si formano lavorando su problemi veri, risultati di ricerca che non restano nei paper.',

      scheda: [
        ['Nasce da', 'Tipicità in Blu e Polo Tecnologico Alto Adriatico'],
        ['Atenei', 'Politecnica delle Marche, Trieste, Udine, Bari, SISSA'],
        ['In rete', 'theblueway.it'],
      ],

      aperto: {
        h3: 'Il cantiere aperto',
        par: [
          // la definizione ufficiale, quella usata a Ecomondo: è la più
          // esatta e conviene tenerla testuale
          'La definizione ufficiale, quella usata a Ecomondo, è la più esatta e conviene tenerla: una <b>piattaforma di condivisione fisica e digitale per stimolare un\'ampia alleanza di talenti, energie e competenze</b>, sull\'area individuata come Polo del Mare Adriatico.',
          // v3 §3.2: il posizionamento, riga nuova dal reportage
          'È un percorso di sviluppo che tiene insieme divulgazione scientifica, creatività e visione territoriale, e che si proietta in contesti nuovi e internazionali. Colloca Tipicità in Blu al centro dello scacchiere adriatico-ionico come modello di cooperazione fra territori uniti dal mare e dalle sfide della transizione blu.',
          'The Blue Way non coincide con la manifestazione: lavora tutto l\'anno, con ricadute sul territorio italiano e oltre. È una piattaforma permanente che collega gli atenei dell\'arco adriatico — Politecnica delle Marche, Trieste, Udine, Bari, SISSA — le imprese che pongono le sfide e i giovani che le raccolgono. Il metodo è quello del cantiere: si progetta, si prototipa, si vara. E ogni varo apre il progetto successivo.',
        ],
      },

      // GLI SPECCHI DEL CANTIERE (v3 §3.3): non tre schede pari ma una
      // cronologia. Le edizioni di Ancona sono DUE, ed è da lì che è partita
      // quella di Trieste.
      // ⚠️ Le fonti pubbliche sulla tappa di Trieste NON dicono che discende
      // dalle due edizioni anconetane: quella è la storia di casa, e qui è
      // affermata come tale senza contraddire il fatto che a Trieste i
      // promotori sono iNEST e Barcolana.
      specchi: {
        h3: 'Gli specchi del cantiere',
        voci: [
          {
            testa: 'Ancona, maggio 2024',
            sotto: 'la prima edizione',
            par: [
              'Quarantun partecipanti da tutto il mondo, otto squadre, quarantotto ore. Curata dal Polo Tecnologico Alto Adriatico dentro i progetti Reginna 4.0 e iNEST, con l’Università Politecnica delle Marche, l’Università di Trieste, l’OGS, l’IRBIM del CNR e il Comune di Ancona. Vince <b>Finding Algae</b>: un drone che raccoglie le alghe che infestano fondali e litorali. La squadra vincitrice è mista, studenti di Ancona e di Trieste insieme — le due città lavoravano già allo stesso tavolo prima che a Trieste ci fosse una tappa.',
            ],
          },
          {
            testa: 'Ancona, 22–23 maggio 2025',
            sotto: 'la seconda edizione',
            par: [
              '«The nautical edition»: il campo si stringe sulla nautica. Quarantotto ore dentro il BLUESLINKS Innovation Hub del programma Interreg Italia-Croazia, aperte a laureati e giovani startupper delle due sponde, con facilitatori bilingui italiano-croato. Le sfide arrivano dalle imprese e riguardano Transizione 5.0 ed ESG. Networking, presentazione delle challenge, prototipazione, pitch davanti alla giuria, voucher tecnologici ai primi due team. Vince <b>Blue Access</b>, una piattaforma per rendere il turismo marino più accessibile e inclusivo.',
            ],
          },
          {
            testa: 'Trieste, 13–14 ottobre 2025',
            sotto: 'il format cambia città',
            par: [
              'Dalle due edizioni anconetane nasce <b>The Blue Way Hack</b>, all’Urban Center di Trieste dentro Barcolana57. Lo promuove il consorzio di ricerca iNEST e lo organizza il Polo Tecnologico Alto Adriatico; Tipicità in Blu e The Blue Way sono fra i partner, insieme a OGS, alle università di Trieste, Udine, Ancona e Bari e a FermoTech. Trenta partecipanti in rappresentanza di quindici start-up e spin-off universitari da Friuli Venezia Giulia, Veneto, Marche e Puglia; oltre trenta ore su cinque temi — biologia degli ecosistemi marini, rischi fisici e chimici dell’idrosfera, trasporto costiero sostenibile, pianificazione integrata fra terra e mare, gemello digitale dell’Alto Adriatico.',
              'Cambiando città il formato ha alzato il tiro: ad Ancona correvano squadre di studenti, a Trieste imprese già costituite.',
            ],
          },
          {
            testa: 'Il lavoro che non si vede',
            sotto: '',
            par: ['Reti di progetto, scambi tra laboratori, accompagnamento delle idee premiate verso bandi e mercati.'],
          },
        ],
      },

      trova: {
        h3: 'Chi trova cosa',
        voci: [
          'La ricerca vi trova la strada più corta tra un risultato scientifico e la sua applicazione.',
          'Le imprese vi trovano problemi formulati bene e squadre giovani che li aggrediscono senza rendite di posizione.',
          // ⚠️ iNEST tolto da qui: non è un consorzio su cui The Blue Way sia
          // "rodato", è un partner di un singolo progetto.
          'Chi progetta su fondi europei vi trova consorzi già rodati sui programmi Interreg, due sponde già connesse, casi pilota documentati.',
          'Le istituzioni vi trovano un formato che tiene insieme sviluppo costiero, formazione e tutela — le tre cose che di solito viaggiano separate.',
          'Gli studenti vi trovano il primo cantiere in cui il mare è una carriera possibile, non una vacanza.',
        ],
      },
    },

    chiusura: {
      aria: 'Chiusura',
      testo: 'Il laboratorio è aperto. 43°37′N 13°30′E —',
      varco: { label: 'theblueway.it', href: 'https://theblueway.it' },
    },

    // Le etichette dei gruppi dell'archivio fotografico: per ciascuno la
    // voce della didascalia e il testo alternativo. Sono separati perché
    // servono a due cose diverse — la didascalia nomina, il testo alternativo
    // descrive a chi non vede. Valgono per qualunque scatto del gruppo.
    // ⚠️ Le CHIAVI (ricerca, mestiere, citta…) sono tecniche: legano le
    // etichette al manifesto dell'archivio e non si traducono.
    gruppiFoto: {
      ricerca: ['i banchi della ricerca', 'Il pubblico ai banchi della ricerca sul mare'],
      mestiere: ['il mestiere', 'Mani al lavoro su un mestiere del mare'],
      citta: ['Ancona', 'Ancona vista dal mare, con il porto'],
      mare: ['il mare', 'Il mare aperto davanti alla costa d\'Ancona'],
      regata: ['la regata', 'Barche a vela in regata davanti ad Ancona'],
      cucina: ['la cucina', 'La preparazione del pesce durante il festival'],
      tavola: ['la tavola', 'Una degustazione in uno dei locali della città'],
      aperitivo: ['l\'aperitivo', 'Un momento conviviale all’aperto durante il festival'],
      cantiere: ['il cantiere', 'Il cantiere navale aperto ai visitatori'],
      mostra: ['la mostra', 'Visitatori davanti a una mostra del festival'],
      saloncino: ['il saloncino', 'Un banco tematico con i prodotti del mare'],
      hackathon: ["l'hackathon", 'Squadre di giovani al lavoro durante l’hackathon'],
      tavolo: ['il tavolo di lavoro', 'Un tavolo di lavoro fra gli addetti del settore'],
      convegno: ['il convegno', 'Il pubblico a un incontro del festival'],
      scena: ['la scena', 'Un momento di spettacolo durante il festival'],
      visita: ['la visita', 'Una visita guidata ai luoghi del porto'],
      ragazzi: ['i ragazzi', 'Studenti e ragazzi a un laboratorio del festival'],
      bordo: ['a bordo', 'Un dettaglio a bordo, durante la navigazione'],
      sala: ['la sala', 'Una delle sale che ospitano il festival'],
    },

    sd: {
      name: 'Tipicità in Blu',
      luogo: 'Mole Vanvitelliana',
      citta: 'Ancona',
      regione: 'Marche',
      organizzatore: 'Imagina Srl Società Benefit',
    },
  },
};
