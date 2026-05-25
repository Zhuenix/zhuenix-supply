export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8618159917333?text=Hello%20I%20am%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "14px 18px",
        borderRadius: "50px",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <span>💬</span>
      <span>WhatsApp</span>
    </a>
  );
}
