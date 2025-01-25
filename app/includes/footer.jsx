import Image from "next/image";
import { FaApple, FaGooglePlay, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <Image src="/logo.png" alt="Cartão Desconto Legal" width={150} height={100} />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-800 flex items-center px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
              <span>Dúvidas, elogios ou solicitação</span>
              <FaPhoneAlt className="ml-2" />
            </button>
            <button className="bg-gray-800 flex items-center px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
              <span>Peça seu Cartão</span>
              <FiDownload className="ml-2" />
            </button>
            <button className="bg-gray-800 flex items-center px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
              <span>Parceiros</span>
              <FiDownload className="ml-2" />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 mb-2">
              <FaApple className="mr-2" /> App Store
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
              <FaGooglePlay className="mr-2" /> Google Play
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2">Contato</h3>
            <p className="mb-1">Suporte, compras</p>
            <p className="font-bold mb-2">+55 (35) 9 8426-5018</p>
            <p className="flex items-center mb-1">
              <FaEnvelope className="mr-2" /> contato@cartaodescontolegal.com.br
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Rua Irmã Irene, nº 40 - Camorim Grande
              <br />
              Angra dos Reis / RJ
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li className="mb-1">Parceiros</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Sobre Nós</h3>
            <ul>
              <li className="mb-1">Sobre Nós</li>
              <li className="mb-1">Política de Privacidade</li>
              <li className="mb-1">Política de Cookies</li>
              <li>LGPD</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Expediente</h3>
            <ul>
              <li className="mb-1">Segunda - Sexta: 9h - 18h</li>
              <li className="mb-1">Sábado - Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400 text-xs">
          <p>Copyright © 2025 <span className="text-orange-500">Cartão Desconto Legal</span>. Todos os Direitos Reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
