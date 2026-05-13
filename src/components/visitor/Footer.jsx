import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Foodies</h2>

          <p className="text-gray-400 mt-4">
            Platform pemesanan makanan modern dengan layanan cepat dan
            terpercaya.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Navigation</h3>

          <ul className="space-y-3 mt-5 text-gray-400">
            <li>Home</li>
            <li>Menu</li>
            <li>Review</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Contact</h3>

          <ul className="space-y-3 mt-5 text-gray-400">
            <li>foodies@gmail.com</li>
            <li>0812-3456-7890</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Social Media</h3>

          <div className="flex gap-4 mt-5 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-500">
        © 2026 Foodies. All rights reserved.
      </div>
    </footer>
  );
}
