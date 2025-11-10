import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Shop</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Medallions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Cross Medallions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Dragon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Toys
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Mask
              </a>
            </li>
          </ul>
        </div>

        {/* Find Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Find Us</h3>
          <div className="space-y-3 text-gray-400">
            <p>
              Gianyar City
              <br />
              Kabupaten Gianyar, Bali 80552
            </p>
            <p className="pt-4">+62 821-4460-3278</p>
            <p>info@woodcarving.com</p>
          </div>
        </div>

        {/* Work Hours Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Work Hours</h3>
          <p className="text-gray-400 mb-6">Mon-Sun 08:00AM - 08:00PM</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
