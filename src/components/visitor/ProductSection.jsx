import products from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section id="menu" className="py-28 bg-orange-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-orange-500 font-semibold">Menu Favorit</span>

          <h2 className="text-4xl font-bold mt-4">Produk Unggulan Kami</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
