import Image from "next/image";
import Navbar from "../components/navbar";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
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

          <nav className="flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-bigOrange">Home</Link>
            <Link href="/pages/sobre-nos" className="hover:text-bigOrange">Sobre Nós</Link>
            <Link href="/pages/parceiros" className="hover:text-bigOrange">Parceiros</Link>
            <Link href="/pages/trabalhe-conosco" className="hover:text-bigOrange">Trabalhe Conosco</Link>
            <Link href="/pages/contato" className="hover:text-bigOrange">Contato</Link>
          </nav>

          <div className="flex space-x-4">
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
  )
}