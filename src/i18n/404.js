// La pagina che non c'è — testi.
//
// ⚠️ QUESTA PAGINA PORTA TUTTE E DUE LE LINGUE INSIEME, ed è l'unica del
// sito a farlo. Non è una svista né una scorciatoia: su hosting statico
// Vercel serve UN SOLO 404.html, quello alla radice dell'output, per
// qualunque indirizzo sbagliato — anche sotto /en/. Si potrebbe dirottare
// /en/* su un secondo file con una riscrittura, ma una riscrittura
// risponde 200 e non 404, e un «non trovato» che dice «trovato» è peggio
// di una riga in più di inglese.
// Quindi: la riga italiana, la stessa in inglese sotto, e le vie d'uscita
// una volta sola — i marchi non hanno bisogno di traduzione.
//
// Registro: quello del resto del sito. Niente «ops», niente illustrazione
// buffa, nessun punto esclamativo. La pagina non c'è, e si dice.

export const content = {
  it: {
    meta: {
      title: 'Pagina non trovata — Imagina Srl Società Benefit',
      description: 'La pagina cercata non esiste su anigami.it.',
    },
    codice: '404',
    riga: 'Questa pagina non c’è.',
    casa: 'Torna alla home',
    progetti: 'oppure i progetti',
  },
  en: {
    riga: 'This page is not here.',
    casa: 'Back to the home page',
    progetti: 'or the projects',
  },
};
