export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: '請提供卡牌 ID' });

  const API_KEY = process.env.POKEMON_PRICE_TRACKER_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key 未設定' });

  try {
    const url = `https://www.pokemonpricetracker.com/api/v2/cards/${id}`;
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: '查詢失敗', detail: err.message });
  }
}
