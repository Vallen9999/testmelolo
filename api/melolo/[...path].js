export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const pathParam = req.query.path;

    // FIX: handle string or array
    const endpoint = Array.isArray(pathParam)
      ? pathParam.join("/")
      : pathParam;

    const queryString = req.url.includes("?")
      ? "?" + req.url.split("?")[1]
      : "";

    const targetURL = `https://melolo-api-azure.vercel.app/api/melolo/${endpoint}${queryString}`;

    const response = await fetch(targetURL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).send(text);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({
      error: "Proxy failed",
      message: error.message
    });
  }
}