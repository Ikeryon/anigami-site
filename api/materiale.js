// Riceve i dati del modulo "invio materiale" e aggiorna il contatto Brevo
// esistente (trovato per email) con i dati della ricetta e il link al video.
// L'aggiornamento dell'attributo VIDEO_LINK fa scattare l'Automazione 2
// (email "Materiale ricevuto!").
//
// Richiede la variabile d'ambiente BREVO_API_KEY impostata su Vercel
// (Project Settings -> Environment Variables), MAI scritta qui nel codice.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const {
    email,
    nomeRicetta,
    descrizione,
    ingredienti,
    videoLink,
    consensoRegolamento,
    consensoPrivacy,
  } = req.body || {};

  if (!email || !nomeRicetta || !descrizione || !ingredienti || !videoLink || !consensoRegolamento || !consensoPrivacy) {
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
          NOME_RICETTA: nomeRicetta,
          DESCRIZIONE_RICETTA: descrizione,
          INGREDIENTI: ingredienti,
          VIDEO_LINK: videoLink,
          CONSENSO_PRIVACY: !!consensoPrivacy,
        },
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
