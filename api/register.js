export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const parts = name.trim().split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ') || '';

  try {
    const response = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_PIT_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        locationId: process.env.GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        source: 'Hertsmere Open Day - May 2026',
        tags: ['open-day-may-2026', 'gdpr-opted-in']
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('GHL error:', data);
      return res.status(500).json({ error: 'Failed to save registration' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
