export default function Advantage() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-bigOrange font-semibold">Bem vindo à um mundo de vantagens</p>
        <h2 className="text-3xl font-bold mt-2">Cartão Desconto Legal</h2>
        <p className="text-gray-500 mt-2">
          Confira as vantagens em ter nosso cartão para suas compras.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <img src="/store.png" alt="Desconto em Lojas" className="w-36 h-36" />
            </div>
          </div>
          <h3 className="text-lg font-bold">Descontos em Lojas</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Obtenha descontos em suas compras de 5% à 60%. Compre com tranquilidade e segurança.
          </p>
        </div>

        <div className="bg-shineYellow text-white p-6 rounded-lg shadow-lg relative">
          <div className="flex justify-center mb-4">
            <img src="/products.png" alt="Produtos e Serviços" className="w-36 h-36 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-blackSite">Produtos e Serviços</h3>
          <p className="text-blackSite mt-2 text-sm">
            Compre produtos de qualidade ou usufrua de serviços diversos, como dentistas, oftalmologistas, ou até cursos!
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <img src="/buy.png" alt="Aumentar o poder de compra" className="w-36 h-36" />
            </div>
          </div>
          <h3 className="text-lg font-bold">Aumenta o poder de compra</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Com os descontos obtidos, você pode comprar ainda mais, ou economizar para seu dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}
