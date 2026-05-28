export default async function handler(req, res) {
  // Nur POST erlauben
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    const response = await fetch(
      "https://ads-matrix-app.vercel.app/api/webhooks/leads/2950b7d3-c898-4397-b95c-db34bcb92b8c",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Webhook request failed",
        details: text,
      });
    }

    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}
