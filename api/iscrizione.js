// Riceve i dati del modulo di iscrizione al contest e crea/aggiorna il contatto
// su Brevo, aggiungendolo alla lista "Contest Trota e Verdicchio 2026" (id 251).
// Questo fa scattare l'Automazione 1 (email "Ci sei quasi!").
//
// Richiede la variabile d'ambiente BREVO_API_KEY impostata su Vercel
// (Project Settings -> Environment Variables), MAI scritta qui nel codice.

const CONTEST_LIST_ID = 251;

// Brevo rifiuta l'attributo WHATSAPP se il numero non e' in formato
// internazionale (es. "+39..."). Gli utenti scrivono quasi sempre il numero
// in formato locale (es. "333 123 4567"): senza questa normalizzazione ogni
// iscrizione veniva rifiutata da Brevo con "400 invalid_parameter" (-> 502).
function toInternational(raw) {
  if (!raw) return '';
  const trimmed = String(raw).trim();
  const digits = trimmed.replace(/[^\d]/g, '');
  if (!digits) return '';
  if (trimmed.startsWith('+')) return '+' + digits;          // gia' internazionale (+39, +44, ...)
  if (digits.startsWith('00')) return '+' + digits.slice(2); // prefisso 00 -> +
  if (digits.startsWith('39') && digits.length >= 11) return '+' + digits; // prefisso 39 gia' presente
  return '+39' + digits;                                     // numero italiano locale -> aggiungo +39
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const {
    nome,
    cognome,
    email,
    whatsapp,
    city,
    statoRicetta,
    consensoPrivacy,
    consensoNewsletter,
  } = req.body || {};

  if (!nome || !cognome || !email || !whatsapp || !city || !consensoPrivacy) {
    res.status(400).json({ error: 'Campi obbligatori mancanti' });
    return;
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY non impostata');
    res.status(500).json({ error: 'Configurazione mancante' });
    return;
  }

  const whatsappIntl = toInternational(whatsapp);

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          NOME: nome,
          COGNOME: cognome,
          WHATSAPP: whatsappIntl,
          CITY: city,
          STATO_RICETTA: statoRicetta || '',
          CONSENSO_PRIVACY: !!consensoPrivacy,
          CONSENSO_NEWSLETTER: !!consensoNewsletter,
        },
        listIds: [CONTEST_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error('Errore Brevo:', brevoRes.status, errText);
      // Il motivo di Brevo resta nei log (utile per il debug); all'utente
      // la pagina mostra comunque un messaggio generico.
      res.status(502).json({ error: 'Errore nel salvataggio dei dati', brevoStatus: brevoRes.status });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Errore imprevisto:', err);
    res.status(500).json({ error: 'Errore interno' });
  }
}
