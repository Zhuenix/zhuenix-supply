export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="Logo" className="logo" />

          <h1>Global Supply Chain Partner</h1>

          <p>
            Zhuenix Supply helps global businesses connect with reliable Chinese manufacturers,
            warehousing services, and international logistics solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">

        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="card">
            <img src="/factory.jpg" alt="Factory" />

            <div className="card-content">
              <h3>Factory Sourcing</h3>

              <p>
                Connect with verified manufacturers across China with complete sourcing support and supplier management.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/warehouse.jpg" alt="Warehouse" />

            <div className="card-content">
              <h3>Warehousing</h3>

              <p>
                Professional inventory storage, consolidation, packaging, and fulfillment solutions.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/shipping.jpg" alt="Shipping" />

            <div className="card-content">
              <h3>Global Shipping</h3>

              <p>
                Efficient sea freight, air cargo, and container logistics worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about">

        <h2>关于 Zhuenix Supply</h2>

        <p>
          我们为全球企业提供完整的采购和供应链解决方案。
          从工厂选择到物流配送，Zhuenix Supply 助力企业降低成本、
          提高效率并实现全球规模化发展。
        </p>

        <img src="/about.jpg" alt="About" />

      </section>

      {/* CONTACT */}
      <section className="contact">

        <div className="contact-content">

          <h2>联系我们</h2>

          <p>邮箱：337315382@qq.com</p>

          <p>WhatsApp：+86 18159917333</p>

          <div className="footer">
            © 2025 Zhuenix Supply. 版权所有。
          </div>

        </div>

      </section>

    </main>
  );
}
