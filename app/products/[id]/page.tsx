"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/layout/navbar";
import ProductDetail from "@/app/components/productDetail";
import Footer from "@/app/components/layout/footer";

const allProducts = [
  {
    id: 1,
    name: "Balinese Gate Wood Carving",
    category: "Balinese Statue",
    price: "Rp1.600.000",
    description:
      "1 Set Balinese Gate, Handmade Wood Carving, Temple Gate Statue, Balinese Ornament, Home Decor.",
    images: ["product2..jpeg", "product2..jpeg", "product2..jpeg"],
    tags: [
      "BaliHomeDecor",
      "BalineseDecor",
      "BalineseGate",
      "BalineseOrnament",
      "BohoHomeDecor",
      "WoodCarving",
    ],
    sku: "183",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: "Rp660.000",
    description:
      "Beautiful handmade abstract wood mask perfect for modern home decor.",
    images: ["/images/product2.jpg"],
    tags: ["Abstract", "Modern", "WoodCarving"],
    sku: "221",
  },
  {
    id: 3,
    name: "Baby Buddha Woor Statue",
    category: "Buddha",
    price: "Rp560.000",
    description:
      "Beautiful handmade abstract wood mask perfect for modern home decor.",
    images: ["/images/product3..jpeg"],
    tags: ["Abstract", "Modern", "WoodCarving"],
    sku: "221",
  },
  {
    id: 4,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: "Rp660.000",
    description:
      "Beautiful handmade abstract wood mask perfect for modern home decor.",
    images: ["/images/product2.jpg"],
    tags: ["Abstract", "Modern", "WoodCarving"],
    sku: "221",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: "Rp660.000",
    description:
      "Beautiful handmade abstract wood mask perfect for modern home decor.",
    images: ["/images/product2.jpg"],
    tags: ["Abstract", "Modern", "WoodCarving"],
    sku: "221",
  },
  // tambahkan produk lainnya
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product)
    return <p className="text-center text-white mt-20">Product not found.</p>;

  return (
    <main>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
