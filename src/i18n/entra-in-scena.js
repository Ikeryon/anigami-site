// Entra in scena — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Qui per ora c'è solo `it`: finché `en` non esiste non esiste
// nemmeno la rotta /en/entra-in-scena/, e il selettore di lingua non compare.
// Una rotta inglese che mostra testo italiano è peggio di una rotta che non
// c'è.
//
// Qui dentro sta SOLO la copy. Cromie, struttura e stili restano nella
// pagina: non sono cose da tradurre.

export const content = {
  it: {
    meta: {
      title: 'Entra in scena — Imagina Srl Società Benefit',
      description: 'Contatti Imagina Srl Società Benefit, Camerino.',
    },
    titolo: 'Entra in scena',
    email: 'info@anigami.it',
    // etichetta esplicita: senza, «amministrazione@…» sembra un secondo
    // indirizzo a cui scrivere, e non lo è
    pecEtichetta: 'PEC',
    pec: 'amministrazione@pec.imagina.srl',
    indirizzo: 'Viale Giacomo Leopardi, 14 – Camerino (MC)',
  },
};
