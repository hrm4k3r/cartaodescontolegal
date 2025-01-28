import Image from "next/image";

export default function Companies() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-10">

      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/businessman.jpg"
          alt="Business Man"
          width={400}
          height={500}
          className="rounded-lg shadow-lg"
        />

        <div className="absolute top-10 left-10 bg-white p-3 shadow-md rounded-lg flex items-center">
          <span className="text-blue-600 text-lg">🔹</span>
          <p className="ml-2 text-gray-700">Melhores Produtos</p>
        </div>
        <div className="absolute top-28 left-20 bg-white p-3 shadow-md rounded-lg flex items-center">
          <span className="text-blue-600 text-lg">💳</span>
          <p className="ml-2 text-gray-700">Grandes Descontos</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:pl-12">
        <p className="text-bigOrange font-bold text-sm">Cartão Desconto Legal</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Grandes empresas, <br /> descontos atrativos
        </h2>
        <p className="text-gray-600 mt-4">
          Economize e faça suas compras com o <span className="font-bold">Cartão Desconto Legal</span>, e obtenha descontos progressivos, de 5% à 60%. Compre produtos ou contrate serviços para seu bem estar.
        </p>

        <div className="flex space-x-4 mt-6">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center">
            🏦 <span className="ml-2">Conheça as lojas cadastradas</span>
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center">
            🏦 <span className="ml-2">Navegue pelos serviços</span>
          </button>
        </div>

        <blockquote className="italic text-gray-700 border-l-4 border-bigOrange pl-4 mt-6">
          São mais de 300 lojas e/ou serviços, disponíveis para você!
        </blockquote>

        <button className="mt-6 bg-bigOrange text-white px-6 py-3 rounded-lg shadow-md flex items-center">
          Peça o seu cartão <span className="ml-2">➡️</span>
        </button>
      </div>
    </section>
  );
}
