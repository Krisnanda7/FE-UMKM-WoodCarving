"use client";

export default function ProductCard({ product }: any) {
  return (
    <div
      key={product.id}
      className="bg-gray-900 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500"
    >
      <a href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl mb-4 w-full h-56 object-cover"
        />
      </a>

      <h3 className="text-2xl font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-amber-400 font-medium">{product.price}</p>
    </div>
  );
}
