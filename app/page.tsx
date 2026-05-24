export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Zhuenix Supply"
              className="h-16 w-16 object-contain"
            />

            <div>
              <h1 className="text-4xl font-bold text-blue-900">
                Zhuenix Supply
              </h1>

              <p className="text-teal-600 text-lg">
                Source • Supply • Succeed
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8618159917333"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[700px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Warehouse"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h2 className="text-7xl font-bold mb-8">
            Global Supply Chain Partner
          </h2>

          <p className="text-3xl max-w-4xl leading-relaxed">
            Zhuenix Supply helps global businesses connect with reliable Chinese manufacturers,
            warehousing services, and international logistics solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-6xl font-bold text-center text-blue-900 mb-20">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Factory */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/factory.jpg"
              alt="Factory"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Factory Sourcing
              </h3>

              <p className="text-gray-700 text-xl leading-relaxed">
                Connect with verified manufacturers across China with complete sourcing support and supplier management.
              </p>
            </div>
          </div>

          {/* Warehouse */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/warehouse.jpg"
              alt="Warehouse"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Warehousing
              </h3>

              <p className="text-gray-700 text-xl leading-relaxed">
                Professional inventory storage, consolidation, packaging, and fulfillment solutions.
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/shipping.jpg"
              alt="Shipping"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Global Shipping
              </h3>

              <p className="text-gray-700 text-xl leading-relaxed">
                Efficient sea freight, air cargo, and container logistics worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="relative py-32 overflow-hidden">

        <img
          src="/about.jpg"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/85"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold text-blue-900 mb-10">
            关于 Zhuenix Supply
          </h2>

          <p className="text-3xl text-gray-800 leading-loose">
            我们为全球企业提供完整的采购和供应链解决方案。
            从工厂选择到物流配送，Zhuenix Supply 助力企业降低成本、
            提高效率并实现全球规模化发展。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-32 text-white overflow-hidden">

        <img
          src="/contact.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/80"></div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl font-bold mb-12">
            联系我们
          </h2>

          <div className="space-y-6 text-3xl">
            <p>邮箱：337315382@qq.com</p>
            <p>WhatsApp：+86 18159917333</p>
          </div>

          <p className="mt-16 text-gray-300 text-xl">
            © 2025 Zhuenix Supply. 版权所有。
          </p>
        </div>
      </section>

    </main>
  );
}
