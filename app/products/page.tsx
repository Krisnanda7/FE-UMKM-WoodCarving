import Navbar from "../components/layout/navbar";
import HeroShop from "../components/shop/heroShop";
import ProductList from "../components/productList";
import Footer from "../components/layout/footer";

export default function ProductsPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <HeroShop />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}
