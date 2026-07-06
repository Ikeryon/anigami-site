// Riceve i dati del modulo di iscrizione al contest e crea/aggiorna il contatto
// su Brevo, aggiungendolo alla lista "Contest Trota e Verdicchio 2026" (id 251).
// Questo fa scattare l'Automazione 1 (email "Ci sei quasi!").
//
// Richiede la variabile d'ambiente BREVO_API_KEY impostata su Vercel
// (Project Settings -> Environment Variables), MAI scritta qui nel codice.

const CONTEST_LIST_ID = 251;

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
          WHATSAPP: whatsapp,
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
      res.status(502).json({ error: 'Errore nel salvataggio dei dati' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Errore imprevisto:', err);
    res.status(500).json({ error: 'Errore interno' });
  }
}
