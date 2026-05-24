export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f7fa",
        color: "#111",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#ffffff",
          padding: "20px 40px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="/logo.png"
            alt="Zhuenix Supply"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Zhuenix Supply
            </h1>

            <p
              style={{
                margin: 0,
                color: "#00a6a6",
                fontSize: "15px",
                marginTop: "5px",
              }}
            >
              Source • Supply • Succeed
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/8618159917333"
          target="_blank"
          style={{
            background: "#00a884",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
          background:
            "linear-gradient(135deg, #003366 0%, #00a6a6 100%)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "58px",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          Global Supply Chain Partner
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "24px",
            lineHeight: "1.8",
          }}
        >
          Zhuenix Supply helps global businesses connect with
          reliable Chinese manufacturers, warehousing services,
          and international logistics solutions.
        </p>
      </section>

      {/* Services */}
      <section
        style={{
          padding: "90px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            marginBottom: "60px",
            color: "#003366",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Factory */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#003366",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              Factory Sourcing
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                color: "#444",
                fontSize: "18px",
              }}
            >
              Connect with verified manufacturers across China
              with complete sourcing support and supplier
              management.
            </p>
          </div>

          {/* Warehouse */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#003366",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              Warehousing
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                color: "#444",
                fontSize: "18px",
              }}
            >
              Professional inventory storage, consolidation,
              packaging, and fulfillment solutions.
            </p>
          </div>

          {/* Shipping */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#003366",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              Global Shipping
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                color: "#444",
                fontSize: "18px",
              }}
            >
              Efficient sea freight, air cargo, and container
              logistics worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          background: "#ffffff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "44px",
              color: "#003366",
              marginBottom: "30px",
            }}
          >
            About Zhuenix Supply
          </h2>

          <p
            style={{
              fontSize: "21px",
              lineHeight: "2",
              color: "#444",
            }}
          >
            We provide complete sourcing and supply chain
            solutions for businesses worldwide. From factory
            selection to logistics delivery, Zhuenix Supply
            helps companies reduce costs, improve efficiency,
            and scale globally.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#003366",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h3
          style={{
            marginBottom: "25px",
            fontSize: "32px",
          }}
        >
          Contact Us
        </h3>

        <p style={{ fontSize: "20px" }}>
          Email: 337315382@qq.com
        </p>

        <p style={{ fontSize: "20px" }}>
          WhatsApp: +86 18159917333
        </p>

        <p
          style={{
            marginTop: "35px",
            opacity: 0.7,
          }}
        >
          © 2025 Zhuenix Supply. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
