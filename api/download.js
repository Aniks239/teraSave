export default async function handler(req, res) {

  const response = await fetch("YOUR_API_URL", {

    method: "POST",

    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json"
    },

    body: JSON.stringify(req.body)
  })

  const data = await response.json()

  res.status(200).json(data)
}
