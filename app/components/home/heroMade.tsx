"use client";

import { Heart, ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "1 Set Balinese Gate, Wood Carving, Handmade Wood Carving, Temple Gate Statue, Balinese Ornament, Home Decor, Christmas Gifts",
    category: "BALINESE STATUE",
    price: "Rp1.600.000",
    image: "/product5..jpeg",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving – Tribal Wall Art Decor",
    category: "ABSTRACT, MASK",
    price: "Rp660.000",
    image: "/product5..jpeg",
  },
  {
    id: 3,
    name: "Abstract Mask Wall Art – Hand-Carved Hibiscus Wood Tribal Decor",
    category: "MASK",
    price: "Rp330.000",
    image: "/product5..jpeg",
  },
];

export default function HeroMade() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <h2 className="text-4xl font-bold tracking-tight uppercase">
          Made with Care
        </h2>
        <p className="text-gray-500 mt-3 md:mt-0 text-sm md:text-base">
          Masters of Handcrafted <br /> Wooden Art in Bali
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Gambar */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="object-cover w-full h-[350px] rounded-xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Icons */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm py-3 px-4 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 rounded-full hover:bg-amber-100">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-amber-100">
                  <Heart className="w-5 h-5" />
                </button>
                <Link
                  href={`/products/${product.id}`}
                  className="p-2 rounded-full hover:bg-amber-100"
                >
                  <Eye className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Info */}
            <p className="text-xs text-gray-500 uppercase mt-4">
              {product.category}
            </p>
            <h3 className="text-base font-semibold leading-snug mt-1 line-clamp-2 hover:text-amber-700 transition">
              {product.name}
            </h3>
            <p className="text-gray-800 font-medium mt-1">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="pt-10 flex justify-center">
        <a href={`/products`}>
          <button className=" cursor-pointer bg-amber-700 hover:bg-amber-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white">
            Visit All Our Products
          </button>
        </a>
      </div>
    </section>
  );
}
