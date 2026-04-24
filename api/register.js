export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Parse body — Vercel may pass it as string or object depending on runtime
  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { name, email } = body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }

  const parts = name.trim().split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ') || '';

  const token = process.env.GHL_PIT_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error('Missing env vars — token:', !!token, 'locationId:', !!locationId);
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email,
        source: 'Hertsmere Open Day - May 2026',
        tags: ['open-day-may-2026', 'gdpr-opted-in']
      })
    });

    const data = await ghlRes.json();

    if (!ghlRes.ok) {
      console.error('GHL error:', ghlRes.status, JSON.stringify(data));
      return res.status(500).json({ error: 'GHL API error', detail: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Fetch error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
