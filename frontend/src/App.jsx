import { useEffect, useState } from "react"
import Toast from "./components/Toast"
import Loader from "./components/Loader"
import Error from "./components/Error"

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [name, setName] = useState("")
  const [names, setNames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [toast, setToast] = useState("")

  const fetchNames = async () => {
    setLoading(true)
    const res = await fetch(API_URL)
    const data = await res.json()
    setNames(data.names)
    setLoading(false)
  }

  useEffect(() => {
    fetchNames()
  }, [])

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Name is required")
      return
    }

    setError("")
    setLoading(true)

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })

    const data = await res.json()

    if (!data.success) {
      setError(data.message)
    } else {
      setToast("Name added successfully")
      setNames(prev => [
        { name, createdAt: new Date().toISOString() },
        ...prev
      ])
      setName("")
      setTimeout(() => setToast(""), 2000)
    }

    setLoading(false)
  }

  const clearAll = async () => {
    await fetch(API_URL, { method: "DELETE" })
    setNames([])
    setToast("All names cleared")
    setTimeout(() => setToast(""), 2000)
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Hello Names</h1>
        <p className="subtitle">Simple name capture application</p>

        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter a name"
        />

        <button
          className="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        <Error message={error} />

        {loading && <Loader />}

        {names.length === 0 && !loading ? (
          <p className="empty">No names added yet</p>
        ) : (
          <ul className="list">
            {names.map((item, i) => (
              <li key={i} className="item">
                <span>{item.name}</span>
                <small style={{ opacity: 0.6, fontSize: 12 }}>
                  Added at {new Date(item.createdAt).toLocaleTimeString()}
                </small>
              </li>
            ))}
          </ul>
        )}

        {names.length > 0 && (
          <button
            className="button"
            style={{ background: "#ef4444", marginTop: 10 }}
            onClick={clearAll}
          >
            Clear All Names
          </button>
        )}
      </div>

      <Toast message={toast} />
    </div>
  )
}

export default App
