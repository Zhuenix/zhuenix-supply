import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <img src="/logo.png" alt="Logo" className="logo" />

          <h1>Global Supply Chain Partner</h1>

          <p>
            Zhuenix Supply helps global businesses connect with reliable
            Chinese manufacturers, warehousing services, and international
            logistics solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="card">
            <img src="/factory.jpg" alt="Factory" />
            <h3>Factory Sourcing</h3>

            <p>
              Connect with verified manufacturers across China with complete
              sourcing support and supplier management.
            </p>
          </div>

          <div className="card">
            <img src="/warehouse.jpg" alt="Warehouse" />
            <h3>Warehousing</h3>

            <p>
              Professional inventory storage, consolidation, packaging,
              and fulfillment solutions.
            </p>
          </div>

          <div className="card">
            <img src="/shipping.jpg" alt="Shipping" />
            <h3>Global Shipping</h3>

            <p>
              Efficient sea freight, air cargo, and container logistics
              worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about"
        style={{
          backgroundImage: "url('/about.jpg')"
        }}
      >
        <div className="overlay-dark">

          <h2>About Zhuenix Supply</h2>

          <p>
            We provide complete sourcing and supply chain solutions for
            global businesses. From factory selection to international
            logistics, Zhuenix Supply helps companies reduce costs,
            improve efficiency, and scale globally.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact"
        style={{
          backgroundImage: "url('/contact.jpg')"
        }}
      >
        <div className="overlay-dark">

          <h2>Contact Us</h2>

          <p>Email: 337315382@qq.com</p>

          <p>WhatsApp: +86 18159917333</p>

          <p className="copyright">
            © 2025 Zhuenix Supply. All Rights Reserved.
          </p>

        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
