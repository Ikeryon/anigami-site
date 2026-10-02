// Relazione di impatto — testi.
//
// Stessa forma di src/i18n/tipicita.js: un oggetto `content` con una chiave
// per lingua. Per ora c'è solo `it`; l'inglese arriva con gli altri blocchi.
//
// ⚠️ NON È UNA SCELTA EDITORIALE, È ADEMPIMENTO. La legge 208/2015 impone
// alle società benefit di redigere ogni anno una relazione di impatto,
// allegarla al bilancio e PUBBLICARLA SUL SITO della società. Da quando
// anigami.it è il sito di Imagina, la relazione va ospitata qui: questa
// pagina non si toglie e non si alleggerisce.
//
// ⚠️ PAGINA SEGNAPOSTO. Quando la prima relazione è pronta, qui va il link
// al PDF (o il testo). Fino ad allora la pagina dichiara l'obbligo e dice
// dove il documento comparirà: è la struttura, prevista adesso. Nessuna
// data inventata — l'unico riferimento temporale è quello già pubblicato in
// Note di produzione (Sas fino al 30 giugno 2026).

export const content = {
  it: {
    meta: {
      title: 'Relazione di impatto — Imagina Srl Società Benefit',
      description:
        'La relazione annuale di impatto di Imagina Srl Società Benefit, prevista dalla legge 208/2015 per le società benefit.',
    },
    titolo: 'Relazione di impatto',
    par: [
      'Le società benefit hanno l\'obbligo di redigere ogni anno una relazione sul perseguimento delle finalità di beneficio comune iscritte nel proprio statuto. La relazione è allegata al bilancio d\'esercizio e pubblicata sul sito della società. La valutazione dell\'impatto non è affidata all\'autodichiarazione: si usa uno standard esterno e indipendente, che copre governance, lavoratori, altri portatori d\'interesse e ambiente.',
      'Imagina di Francesca Serri & C. Sas si è trasformata in Imagina Srl Società Benefit; la denominazione precedente è rimasta in vigore fino al 30 giugno 2026. La prima relazione di impatto sarà pubblicata su questa pagina insieme al bilancio dell\'esercizio a cui si riferisce.',
    ],
    ritorno: { label: 'Torna alla home', href: '/' },
  },
};
