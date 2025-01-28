import Image from "next/image";

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

      <div className="relative flex items-center justify-center bg-blackSite text-white p-10">
        <Image
          src="/products.jpg"
          alt="Produtos"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl font-bold">Produtos</h2>
          <p className="mt-4 text-lg font-bold">
            Conheça todas as lojas que oferecem os melhores produtos, com descontos de 5% à 60%.
          </p>
          <button className="mt-6 px-6 py-3 font-bold border border-white rounded-lg flex items-center space-x-2 hover:bg-white hover:text-darkGreen transition">
            <span>Conferir Lojas</span>
            <span className="text-lg">➜</span>
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center bg-blackSite text-white p-10">
        <Image
          src="/services.jpg"
          alt="Serviços"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl font-bold">Serviços</h2>
          <p className="mt-4 text-lg font-bold">
            Precisa de prestação de serviços? Conheça os serviços cadastrados em nossa plataforma.
          </p>
          <button className="mt-6 px-6 py-3 font-bold border border-white rounded-lg flex items-center space-x-2 hover:bg-white hover:text-darkGreen transition">
            <span>Conferir Serviços</span>
            <span className="text-lg">➜</span>
          </button>
        </div>
      </div>
    </div>
  );
}
