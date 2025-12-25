export default function Error({ message }) {
  if (!message) return null

  return (
    <p style={{ color: "#fca5a5", textAlign: "center", fontSize: 13 }}>
      {message}
    </p>
  )
}
