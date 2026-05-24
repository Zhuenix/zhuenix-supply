import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-[#0A3B78]">

      {/* Header */}
      <header className="bg-white flex items-center justify-between px-10 py-5 shadow-sm">
        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Zhuenix Supply"
            width={80}
            height={80}
            priority
          />

          <div>
            <h1 className="text-4xl font-bold">
              Zhuenix Supply
            </h1>

            <p className="text-cyan-600 text-xl mt-1">
              Source • Supply • Succeed
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/8618159917333"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-2xl font-bold transition"
        >
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">

        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-7xl font-bold text-white mb-10">
            Global Supply Chain Partner
          </h2>

          <p className="text-3xl text-white leading-relaxed max-w-5xl">
            Zhuenix Supply helps global businesses connect with reliable Chinese manufacturers,
            warehousing services, and international logistics solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-10">
        <h2 className="text-6xl font-bold text-center mb-20">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Factory */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/factory.jpg"
              alt="Factory"
              width={600}
              height={400}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-5">
                Factory Sourcing
              </h3>

              <p className="text-2xl leading-relaxed text-gray-700">
                Connect with verified manufacturers across China with complete sourcing support and supplier management.
              </p>
            </div>
          </div>

          {/* Warehouse */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/warehouse.jpg."
              alt="Warehouse"
              width={600}
              height={400}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-5">
                Warehousing
              </h3>

              <p className="text-2xl leading-relaxed text-gray-700">
                Professional inventory storage, consolidation, packaging, and fulfillment solutions.
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/shipping.jpg."
              alt="Shipping"
              width={600}
              height={400}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-5">
                Global Shipping
              </h3>

              <p className="text-2xl leading-relaxed text-gray-700">
                Efficient sea freight, air cargo, and container logistics worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-10">

          <div>
            <h2 className="text-6xl font-bold mb-10">
              关于 Zhuenix Supply
            </h2>

            <p className="text-3xl leading-relaxed text-gray-700">
              我们为全球企业提供完整的采购和供应链解决方案。
              从工厂选择到物流配送，Zhuenix Supply 助力企业降低成本、
              提高效率并实现全球规模化发展。
            </p>
          </div>

          <div>
            <Image
              src="/about.jpg."
              alt="About"
              width={900}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="relative py-36 text-center overflow-hidden">

        <Image
          src="/contact.jpg."
          alt="Contact"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#062E63]/80"></div>

        <div className="relative z-10 text-white">

          <h2 className="text-6xl font-bold mb-10">
            联系我们
          </h2>

          <p className="text-3xl mb-6">
            邮箱：337315382@qq.com
          </p>

          <p className="text-3xl mb-12">
            WhatsApp：+86 18159917333
          </p>

          <p className="text-xl text-gray-300">
            © 2025 Zhuenix Supply. 版权所有。
          </p>

        </div>
      </section>

    </main>
  );
}
