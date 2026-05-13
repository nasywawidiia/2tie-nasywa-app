import testimonials from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-orange-500 font-semibold">Testimoni</span>

          <h2 className="text-4xl font-bold mt-4">Apa Kata Pelanggan</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-[30px] shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
  
                />

                <div>
                  <h3 className="font-bold">{item.name}</h3>
                </div>
              </div>

              <p className="text-gray-500 mt-6 leading-relaxed">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
