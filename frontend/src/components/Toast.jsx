export default function Toast({ message }) {
  if (!message) return null

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#22c55e",
      color: "#020617",
      padding: "10px 16px",
      borderRadius: 8,
      fontSize: 14
    }}>
      {message}
    </div>
  )
}
