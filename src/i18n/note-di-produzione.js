// Note di produzione — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`; quando arriverà `en` si aggiunge qui e
// la rotta /en/note-di-produzione/ si crea di conseguenza.
//
// Il registro del colophon è fattuale e datato, senza aggettivi di merito.
// In chiusura il principio del metodo: non una dichiarazione su di sé, ma
// un'osservazione — lo stesso schema che si ripete guardando i quattro
// marchi fianco a fianco.

export const content = {
  it: {
    meta: {
      title: 'Note di produzione — Imagina Srl Società Benefit',
      description:
        'Imagina Srl Società Benefit, Camerino. Dati, rete, storia societaria dietro Tipicità, Grand Tour delle Marche, Tipicità in Blu, EVO.',
    },
    titolo: 'Note di produzione',
    societa:
      'Imagina Srl Società Benefit (fino al 30 giugno 2026: Imagina di Francesca Serri & C. Sas), sede legale a Camerino (MC). Attiva dal 1991 nel marketing e nella comunicazione integrata, con predilezione per agroalimentare e turistico-territoriale.',
    numeri: [
      { cifra: '1991', voce: 'anno di attività' },
      { cifra: '~300', voce: 'realtà pubbliche e private in rete' },
      { cifra: '8 mesi', voce: 'lavoro dietro ogni 3 giorni di festival' },
    ],
    relazioni:
      'Relazioni internazionali attive in Germania, Francia, Spagna, Inghilterra, Slovenia, Croazia, Montenegro, Stati Uniti, Canada, Emirati Arabi, Norvegia, Federazione Russa, Albania, Giappone.',
    metodo:
      'Tipicità nasce nel 1993 e si evolve — MarcheTur, poi Experience, poi Art & Genius. Il Grand Tour delle Marche cambia forma da comunità a comunità: incubatore in un borgo, strumento promozionale in un festival già affermato altrove. EVO cambia nome quando il precedente non basta più — da Tipicità Evo a "i linguaggi del terzo millennio". Tre marchi, tre percorsi separati. Messi fianco a fianco, raccontano la stessa cosa: nessuno dei quattro progetti impone un formato fisso a un territorio. Ognuno si mette in ascolto, ed è per questo che nessuno dei quattro somiglia esattamente a se stesso dieci anni fa.',
  },
};
