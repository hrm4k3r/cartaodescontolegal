"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar />
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

          <div className="flex items-center">
            <div className="p-2 rounded-l-md">
              <Image src="/logo.png" alt="Cartão Desconto Legal" width={150} height={100} />
            </div>
          </div>

          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <nav
            className={`absolute md:relative  left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 md:flex space-x-8 text-lg font-medium transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"
              }`}
          >
            <Link href="/" className="block md:inline hover:text-bigOrange">Home</Link>
            <Link href="/pages/sobre-nos" className="block md:inline hover:text-bigOrange">Sobre Nós</Link>
            <Link href="/pages/parceiros" className="block md:inline hover:text-bigOrange">Parceiros</Link>
            <Link href="/pages/trabalhe-conosco" className="block md:inline hover:text-bigOrange">Trabalhe Conosco</Link>
            <Link href="/pages/contato" className="block md:inline hover:text-bigOrange">Contato</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button className="flex items-center px-6 py-4 bg-bigOrange text-blackSite font-bold hover:bg-shineYellow hover:text-[#1a1a1a] transition ease-in-out">
              Login <FiArrowRight className="ml-2" />
            </button>
            <button className="flex items-center px-6 py-4 bg-bigOrange text-blackSite font-bold hover:bg-shineYellow hover:text-[#1a1a1a] transition ease-in-out">
              Criar sua conta <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
