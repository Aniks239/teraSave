export default async function handler(req, res) {

  const { url } = req.body

  const response = await fetch(
    "https://xapiverse.com/api/terabox-pro",
    {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "sk_1c0a07cdf69031e04c9baea0e62edaf9": process.env.API_KEY
      },

      body: JSON.stringify({
        url: url
      })
    }
  )

  const data = await response.json()

  res.status(200).json(data)
}
