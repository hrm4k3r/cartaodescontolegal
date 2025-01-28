"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const testimonials = [
  {
    name: "Alexandra",
    text: "Sou parceira do Cartão Desconto Legal e usuária também, não me arrependo de ter adquirido o cartão, pois            aproveitamos muito os descontos no petshop, barbearia, salão, pizzaria e etc....amei esse cartão e indico a todos! Cartão de Desconto Legal um cartão com benefício real.",
    image: "/cliente1.jpeg",
  },
  {
    name: "Bruno",
    text: "Com esse cartão eu consigo economizar em minhas compras e sobra mais dinheiro no final do mês, foi realmente algo maravilhoso para nossa cidade.Cartão TOP.",
    image: "/cliente2.jpeg",
  },
  {
    name: "Felipe",
    text: "O Cartão Desconto Legal é muito top, pois com ele eu tenho vários descontos no comércio da cidade e isso faz toda a diferença.Valeu Desconto Legal.",
    image: "/cliente3.jpeg",
  },
  {
    name: "Vitória",
    text: "Eu amei esse cartão, salão com desconto, lojas com descontos, Dentista com desconto, gás mais barato, valeu muito a pena adquirir o Cartão Desconto Legal, tem me ajudado muito.",
    image: "/cliente4.jpeg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-6">O que nossos clientes dizem</h2>

      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          pauseOnHover: false,
          arrows: false,
          pagination: true,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
