export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.7)",
        color: "white",
        padding: "1rem 2rem",
        marginTop: "2rem",
        borderTop: "2px solid #0066ff",
        fontFamily: "Rajdhani",
        textAlign: "center",
        fontSize: "0.85rem",
      }}
    >
      <p style={{ color: 'white',margin: 0, marginBottom: "0.5rem" }}>
        &copy; 2024 MaybeArt.IO. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Privacy
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Terms
        </a>
      </div>
    </footer>
  );
}