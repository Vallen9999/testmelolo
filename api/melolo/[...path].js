export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { path = [] } = req.query;
    const endpoint = path.join("/");

    const targetURL = `https://melolo-api-azure.vercel.app/api/melolo/${endpoint}${req.url.includes("?") ? "?" + req.url.split("?")[1] : ""}`;

    const response = await fetch(targetURL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Proxy failed",
      message: error.message
    });
  }
}