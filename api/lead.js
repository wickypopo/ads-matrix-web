export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/9781487/4b40u4y/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      },
    );

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Zapier request failed",
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
