import { FaUtensils, FaMotorcycle, FaStar } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          alt="About"
          className="rounded-[40px] h-[500px] object-cover shadow-xl"
        />

        <div>
          <span className="text-orange-500 font-semibold">Tentang Foodies</span>

          <h2 className="text-4xl font-bold mt-4">
            Platform Pemesanan Makanan Modern
          </h2>

          <p className="text-gray-500 mt-6 leading-relaxed">
            Foodies hadir untuk membantu pelanggan mendapatkan makanan terbaik
            dengan layanan cepat dan aman.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex gap-4">
              <FaUtensils className="text-orange-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Menu Berkualitas</h3>

                <p className="text-gray-500">
                  Menyediakan berbagai makanan favorit pelanggan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMotorcycle className="text-orange-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Fast Delivery</h3>

                <p className="text-gray-500">
                  Pengiriman cepat dan aman sampai tujuan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaStar className="text-orange-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Best Experience</h3>

                <p className="text-gray-500">
                  Tampilan modern dan mudah digunakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
