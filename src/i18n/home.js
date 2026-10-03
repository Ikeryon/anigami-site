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

    // LA RIGA DI VISIONE (Paolo, 02/10/2026). Scelta scartando le tre
    // candidate del brief originale, dal concetto dettato da lui: «per
    // comprendere davvero l'unicità va messa in relazione alle realtà che da
    // essa differiscono», senza usare la parola «territorio».
    // ⚠️ IL PUNTO FERMO FA PARTE DELLA FRASE e non si toglie: è quello che la
    // rende un'affermazione invece di uno slogan. Niente corsivo, niente
    // spezzatura su due righe, nessuna maiuscola in più.
    visione: 'Niente è unico da solo.',

    // Il selettore di lingua, nella stessa forma di tipicita.js: `aria` è
    // scritto nella lingua di DESTINAZIONE, perché lo legge chi ci va.
    langToggle: { to: 'en', href: '/en/', label: 'EN', aria: 'English version' },

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
      piede: 'Viale Giacomo Leopardi, 14 – Camerino (MC) · PEC amministrazione@pec.imagina.srl · P.IVA/C.F. IT 01115460436',
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

  // ════════════════════════════════════════════════════════════════════
  // INGLESE BRITANNICO (en-GB). È un'impresa italiana che parla
  // all'Europa — all'Adriatico, a Interreg, agli atenei delle due sponde —
  // e l'ortografia britannica è quella in cui quel mondo scrive.
  //
  // Due scelte di traduzione dichiarate, che valgono per tutto il sito:
  //  · «territorio» NON diventa «territory», che in inglese suona
  //    amministrativo o coloniale: si rende con «place», e si tiene
  //    «territorial» solo dov'è termine tecnico europeo — «territorial
  //    marketing», che nei bandi si scrive così;
  //  · «società benefit» NON si traduce. È una forma giuridica italiana, e
  //    il blocco che la spiega perde senso se diventa «benefit
  //    corporation». Resta in italiano, in corsivo.
  // ════════════════════════════════════════════════════════════════════
  en: {
    meta: {
      title: 'Imagina Srl Società Benefit',
      description:
        'Imagina Srl Società Benefit, Camerino, Italy: territorial marketing and integrated communication since 1991. You don\'t promote a place — you put it in a position to tell its own story.',
    },

    titolo: 'Imagina Srl Società Benefit',

    cornice: {
      societa: 'Imagina Srl Società Benefit',
      chiSiamo: 'Who we are',
      luogo: 'Camerino, Marche · since 1991',
    },

    // In inglese la tensione fra «unique» e «on its own» è la stessa che in
    // italiano c'è fra «unico» e «solo»: la frase viaggia, ed è il motivo
    // per cui regge in tutte e due le lingue. Il punto fermo resta.
    visione: 'Nothing is unique on its own.',

    langToggle: { to: 'it', href: '/', label: 'IT', aria: 'Versione italiana' },

    // ⚠️ I QUATTRO LINK PUNTANO ALLE PAGINE ITALIANE, e non è una svista.
    // Soltanto Tipicità ha l'inglese, quindi solo lei va a /en/. Mandare un
    // lettore inglese su /en/evo/ prima che esista sarebbe un 404;
    // mandarlo sulla pagina italiana è onesto.
    // ⚠️ RIGA DI MANUTENZIONE: ogni volta che una landing diventa bilingue,
    // il suo href QUI passa a /en/… — e lo stesso vale per il link dentro
    // il primo blocco del sipario, più sotto. Sono i due punti che restano
    // indietro se nessuno se li segna.
    segni: {
      etichetta: 'the projects',
      ariaLabel: 'The projects',
      voci: [
        { id: 'tipicita', simbolo: 'mk-tipicita', nome: 'Tipicità', href: '/en/tipicita/', acceso: '#05606a' },
        { id: 'grand-tour', simbolo: 'mk-grand-tour', nome: 'Grand Tour delle Marche', href: '/grand-tour-delle-marche/', acceso: '#d1544c' },
        { id: 'tipicita-in-blu', simbolo: 'mk-tipicita-in-blu', nome: 'Tipicità in Blu', href: '/tipicita-in-blu/', acceso: '#209fb6' },
        { id: 'evo', simbolo: 'mk-evo', nome: 'EVO', href: '/evo/', acceso: '#b8497a' },
      ],
    },

    dispacci: { ariaLabel: 'Dispatches', locale: 'en-GB' },

    sipario: {
      titolo: 'Imagina Srl Società Benefit',
      chiudi: 'Close',
      blocchi: [
        {
          titolo: 'Who we are',
          par: [
            'Imagina is a <i>società benefit</i> based in Camerino, in the Marche. Since 1991 it has worked in territorial marketing and integrated communication, with a clear specialisation in two sectors: agri-food, and tourism and territorial development.',
            'It is a micro-enterprise working on an international scale, and that holds together for a precise reason: Imagina is the lead organisation of a public–private partnership that today counts around three hundred bodies, public and private, which share a belief in the value of place. It is not a network of endorsements: it is the structure we work with all year round.',
            'Out of these three decades comes the body of work that lives under the umbrella brand Tipicità and its offshoots — the <a href="/en/tipicita/">festival in Fermo</a>, the <a href="/grand-tour-delle-marche/">Grand Tour delle Marche</a>, <a href="/tipicita-in-blu/">Tipicità in Blu</a> and <a href="/evo/">EVO</a>. Four independent projects, four languages, one network.',
          ],
        },
        {
          titolo: 'How we work',
          par: [
            'Contamination, osmosis, cross-fertilisation: this is the fuel Imagina uses to set networking in motion between supply chains and between places. Long networks and short ones, producing new accounts and new openings, using global crossmedia to carry local specificity.',
            'The method has an order, and it costs time. First you listen to what a place has to say, and that takes months. Then you meet different communities and compare their differences instead of smoothing them over. Then you bring the positioning into focus — local in substance, global in outlook. Only at the end do you build tailor-made actions, because no two communities resemble each other closely enough to deserve the same format.',
            'The work arrives turnkey: feasibility analysis, design, coordination, general organisation. And it arrives from a team of professionals with years of experience in Italy and abroad in planning, design and integrated communication.',
          ],
        },
        {
          titolo: 'What we do',
          par: [
            '<b>Territorial marketing and development</b> — marketing projects, coaching and territorial networking; creating and developing umbrella brands; cross-fertilisation between supply chains; bottom-up routes to tourism development; co-creation of a place\'s assets; general and thematic tourist itineraries; transnational cooperation projects.',
            '<b>Events and formats</b> — turnkey design, organisation and management of festivals, congresses, conferences, trade fairs and exhibitions; hackathons; professional training courses; press tours and educational tours.',
            '<b>Communication</b> — crossmedia campaigns on the web, on social platforms and through tailored direct mailing; press office and relations with local, national and trade media; public relations plans; image consultancy; video production; publishing, from guides to monographs.',
          ],
        },
        {
          titolo: 'Where',
          par: [
            'Imagina works in almost every Italian region. Beyond the border, a network of relationships built up over time has taken it to Germany, France, Spain, the United Kingdom, Slovenia, Croatia, Montenegro and Albania, and further afield to the United States, Canada, Argentina, the United Arab Emirates, Norway and Japan.',
          ],
        },
        {
          // ⚠️ VALE ANCHE QUI: questo blocco SPIEGA L'ISTITUTO GIURIDICO,
          // non celebra l'azienda. Non accorciare, non alleggerire, non
          // sostituire «società benefit» con «benefit corporation»: è una
          // forma giuridica italiana e il paragone americano la falserebbe.
          titolo: 'What it means to be a società benefit',
          par: [
            'A <i>società benefit</i> is not a certification and it is not an award. It is a legal form, introduced in Italy by the 2016 budget law — law 208/2015, paragraphs 376 to 384 — which made Italy the first country in Europe to write it into its statute book.',
            'Nor is it the non-profit sector. A <i>società benefit</i> remains a company that makes profits and distributes them. What changes is the corporate purpose: alongside the aim of profit, one or more common-benefit purposes are written into the articles of association. From that moment they are no longer intentions. They are obligations, and they bind the directors, who have to balance three interests instead of one: that of the shareholders, that of the stated purposes, and that of the people the company\'s activity has an effect on.',
            'Three concrete duties follow. An impact officer has to be appointed. An impact report has to be drawn up every year, attached to the financial statements and published on the company\'s website. And that report cannot be a piece of storytelling: impact has to be measured against an external, independent assessment standard covering four areas — governance, workers, other stakeholders, and the environment.',
            'There is a penalty as well, and it is the part that makes this serious. A company that calls itself a <i>società benefit</i> without genuinely pursuing the purposes it has written down falls under the rules on misleading advertising, supervised by the Italian competition and market authority. It is not a label you hang on the door: it is a commitment that costs something, and one that somebody can come and check.',
            '<b>For Imagina</b> this means one thing, and it fits in a single line: looking after the places we work in is not what surrounds the job, it is the job. Bringing out a region\'s talents across the whole range — the artisans and the researchers, the producers and the students, the person keeping a shop open in a hill village and the one studying the sea in a laboratory. Profit keeps the structure standing; the purpose is that the places we work in are better off than we found them.',
          ],
        },
      ],
      accessiAria: 'More, and how to reach us',
      // le tre pagine Imagina non hanno ancora l'inglese: i link restano
      // agli indirizzi italiani finché non ce l'hanno
      accessi: [
        { label: 'Production notes', href: '/note-di-produzione/' },
        { label: 'Impact report', href: '/relazione-di-impatto/' },
        { label: 'Take the stage', href: '/entra-in-scena/' },
        { label: 'info@anigami.it', href: 'mailto:info@anigami.it' },
      ],
      piede: 'Viale Giacomo Leopardi, 14 – Camerino (MC), Italy · Certified e-mail amministrazione@pec.imagina.srl · VAT/Tax code IT 01115460436',
    },

    sd: {
      name: 'Imagina Srl Società Benefit',
      streetAddress: 'Viale Giacomo Leopardi, 14',
      addressLocality: 'Camerino',
      addressRegion: 'Marche',
    },
  },
};
