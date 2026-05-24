export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a" }}>
      
      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <img
          src="https://i.imgur.com/VpD4hZA.png"
          alt="Zhuenix Supply"
          style={{
            width: "180px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "56px",
            marginBottom: "10px",
          }}
        >
          Zhuenix Supply
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Professional China sourcing, warehousing, logistics and global
          supply chain solutions.
        </p>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          About Zhuenix Supply
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            textAlign: "center",
            color: "#334155",
          }}
        >
          Zhuenix Supply helps global businesses connect with trusted Chinese
          manufacturers, warehouses, and logistics partners. We provide
          efficient sourcing, fulfillment, and shipping services worldwide.
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
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "28px" }}>Factory Sourcing</h3>

              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Connect with reliable manufacturers across China for efficient
                product sourcing and production.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "28px" }}>Warehousing</h3>

              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Safe inventory storage and fulfillment services with efficient
                warehouse management.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "28px" }}>Global Shipping</h3>

              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Worldwide air, sea and container logistics solutions for modern
                businesses.
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
            marginBottom: "25px",
          }}
        >
          Contact Us
        </h2>

        <p style={{ fontSize: "20px", marginBottom: "10px" }}>
          Email: contact@zhuenixsupply.com
        </p>

        <p style={{ fontSize: "20px" }}>
          WhatsApp: +86 138 0000 0000
        </p>
      </section>
    </main>
  );
}
