export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="text-orange-500 font-semibold mt-2">
          {product.price}
        </p>

        <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  );
}