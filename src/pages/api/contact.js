export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    return res.status(200).json({ success: true, message: 'Your contact request has been received.' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
