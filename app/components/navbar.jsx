import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-700">

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-900">CONTATO</a>
          <a href="#" className="hover:text-gray-900">ONDE ESTAMOS</a>
          <a href="#" className="hover:text-gray-900">FAQ'S</a>
        </div>

        <div className="hidden md:block">
          <span>Precisa de Suporte?</span> <a href="https://wa.me/5535984265018" className="font-bold">+55 (35) 9 8426-5018</a>
        </div>

        <div className="flex items-center space-x-4">
          <FiSearch className="text-gray-700 cursor-pointer hover:text-gray-900" />
          <FaFacebook className="text-gray-700 cursor-pointer hover:text-blue-700" />
          <FaInstagram className="text-gray-700 cursor-pointer hover:text-pink-500" />
          <FaYoutube className="text-gray-700 cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}
