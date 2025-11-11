export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center
     justify-center gap-12 lg:gap-20 px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-black text-white min-h-screen"
      style={{ backgroundImage: "url('/product5..jpeg')" }}
    >
      {/*  overlay gelap agar text tetap terbaca */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="py-20 text-left max-w-xl space-y-6 flex-shrink- relative z-10">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
          HANDMADE WOODEN CREATIONS AND BALINESE{" "}
          <span className="text-amber-500">WOOD CARVINGS</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Explore Mutra Wood Carving`s exquisite collection of handcrafted
          wooden furniture and authentic Balinese carvings. Perfect for adding
          elegance to your home.
        </p>

        {/* ROUTE BUTTON KE PRODUCTS */}
        <a href={`/products`}>
          <button className="cursor-pointer bg-amber-700 hover:bg-amber-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white">
            Visit Shop
          </button>
        </a>
        <div className="flex gap-12 pt-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">50+</h2>
            <p className="text-sm text-gray-400 mt-1">products in our store</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">5</h2>
            <p className="text-sm text-gray-400 mt-1">years of experience</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="md:w-1/2 grid grid-cols-3 gap-4 relative z-10z">
        {/* Image kiri besar */}
        <img
          src="/product5..jpeg"
          alt="carving1"
          className="rounded-xl object-cover h-[400px] w-full col-span-2 row-span-2"
        />

        {/* Image kanan atas */}
        <img
          src="/product2..jpeg"
          alt="carving2"
          className="rounded-xl object-cover h-[190px] w-full"
        />

        {/* Image kanan bawah */}
        <img
          src="/product2..jpeg"
          alt="carving3"
          className="rounded-xl object-cover h-[190px] w-full"
        />
      </div>
    </section>
  );
}
