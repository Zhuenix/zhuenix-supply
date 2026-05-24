export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        margin: 0,
        padding: 0,
        background: "#ffffff",
        color: "#0f172a",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Zhuenix Supply
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Source • Supply • Succeed
        </p>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "25px",
          }}
        >
          About Zhuenix Supply
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            color: "#475569",
          }}
        >
          Zhuenix Supply is a professional China sourcing and global supply
          chain partner helping businesses connect with trusted factories,
          warehousing solutions, and worldwide logistics services.
        </p>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
              alt="Factory"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3>Factory Sourcing</h3>

              <p style={{ color: "#475569", lineHeight: "1.8" }}>
                Connect with reliable manufacturers and suppliers across China.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
              alt="Warehouse"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3>Warehousing</h3>

              <p style={{ color: "#475569", lineHeight: "1.8" }}>
                Secure inventory storage and professional fulfillment services.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
              alt="Shipping"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3>Global Shipping</h3>

              <p style={{ color: "#475569", lineHeight: "1.8" }}>
                Worldwide air freight, sea freight and container logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#0f172a",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>

        <p style={{ fontSize: "20px" }}>
          Email: contact@zhuenixsupply.com
        </p>

        <p style={{ fontSize: "20px" }}>
          WhatsApp: +86 138 0000 0000
        </p>
      </section>
    </main>
  );
}
