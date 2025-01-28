import Image from "next/image";

export default function Getyourcard() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-10">

      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/model.png"
          alt="Peça seu Cartão"
          width={400}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <p className="text-bigOrange font-bold text-sm">Peça seu cartão</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Comece a economizar com o <br /> Cartão Desconto Legal
        </h2>
        <p className="text-gray-600 mt-4">
          O Cartão Desconto Legal, é o cartão de descontos da nossa cidade, que tem por objetivo, promover o acesso do cidadão Angrense aos pilares essenciais para uma melhor qualidade de vida, que são: Bem estar, lazer, educação e saúde.
          <br /><br />
          Com apenas <span className="font-bold">12x de R$ 10,00</span>, você tem descontos em diversos comércios de nossa cidade.
          <br /><br />
          <span className="font-bold">Formas de pagamento:</span> À vista, com 10% de desconto, ou pelo cartão de crédito parcelado (recorrência).
        </p>

        <button className="mt-6 bg-bigOrange text-white px-6 py-3 rounded-lg shadow-md flex items-center">
          Solicite seu cartão <span className="ml-2">➡️</span>
        </button>
      </div>
    </section>
  );
}
