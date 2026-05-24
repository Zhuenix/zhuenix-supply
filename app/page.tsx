export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <img
          src="https://i.imgur.com/u7T87A4.png"
          alt="logo"
          style={{
            width: "180px",
            marginBottom: "20px",
          }}
        />

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
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Source • Supply • Succeed
        </p>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Reliable China sourcing and supply chain partner helping global buyers
          connect with factories, warehousing, logistics, and export solutions.
        </p>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
          }}
        >
          About Zhuenix Supply
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Zhuenix Supply is a trusted sourcing and supply chain company based in
          China. We help overseas businesses manage factory sourcing,
          warehousing, shipping, and global logistics with professional support.
        </p>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "#f5f7fa",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
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
            }}
          >

            {/* CARD 1 */}
            <div
              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ fontSize: "28px" }}>
                  Warehousing
                </h3>

                <p style={{ color: "#666", lineHeight: "1.7" }}>
                  Secure storage, inventory management, and fulfillment solutions
                  for international shipments.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ fontSize: "28px" }}>
                  Factory Sourcing
                </h3>

                <p style={{ color: "#666", lineHeight: "1.7" }}>
                  Connect with reliable manufacturers and suppliers across China.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ fontSize: "28px" }}>
                  Global Shipping
                </h3>

                <p style={{ color: "#666", lineHeight: "1.7" }}>
                  Professional sea freight, air freight, and export logistics
                  support worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#0d1b2a",
          color: "white",
          textAlign: "center",
          padding: "70px 20px",
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

        <p style={{ fontSize: "20px", marginBottom: "10px" }}>
          Email: contact@zhuenix.com
        </p>

        <p style={{ fontSize: "20px" }}>
          WhatsApp: +86 000 0000 0000
        </p>
      </section>

    </main>
  );
}
