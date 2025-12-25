const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let names = []

app.get("/", (req, res) => {
  res.send("API running")
})

app.post("/api/names", (req, res) => {
  const { name } = req.body

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Name must be a non-empty string"
    })
  }

  names.push({
    name: name.trim(),
    createdAt: new Date().toISOString()
  })

  res.status(201).json({
    success: true,
    message: "Name stored successfully"
  })
})

app.get("/api/names", (req, res) => {
  res.json({
    success: true,
    names
  })
})

app.delete("/api/names", (req, res) => {
  names = []
  res.json({ success: true })
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
