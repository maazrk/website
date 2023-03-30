export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await fetch(`${process.env.GATSBY_NOTIFICATIONS_API_URL}/categories`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: true });
  }
}