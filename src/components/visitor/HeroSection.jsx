export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
            Best Food Delivery
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
            Nikmati Makanan Favoritmu Dengan Mudah
          </h1>

          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            Foodies membantu pelanggan menemukan makanan terbaik dengan proses
            pemesanan cepat dan praktis.
          </p>

          <button className="mt-8 px-7 py-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
            Pesan Sekarang
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-[40px] shadow-2xl h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
