import About from "./components/home/aboutSection";
import HeroSection from "./components/home/heroSection";
import ProductList from "./components/productList";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen ">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌳 Hero Section */}
      <HeroSection />

      {/* 🪵 About Section */}
      <About />

      {/* 🧰 Product Showcase */}
      <ProductList />

      {/* 🖼️ Footer */}
      <Footer />
    </main>
  );
}
