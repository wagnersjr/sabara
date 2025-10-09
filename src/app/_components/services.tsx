"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsappLogo, MagnifyingGlass } from "@phosphor-icons/react";

const services = [
  {
    title: "Atuação Nacional Amparada por Lei",
    description:
      "O Detetive Profissional depois de formado pode atuar em todo o território brasileiro, com respaldo total da Lei Federal nº 13.432/17, que reconhece e protege o exercício da profissão. Liberdade e segurança para trabalhar em qualquer estado do país.",
    // duration: "Atuação legal em todo o Brasil.",
    // price: "$50",
    // icon: <Scissors />,
    // linkText:
    //   "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Diversas Áreas de Investigação",
    description:
      "Atue em investigações criminais, localizações de pessoas, dossiês patrimoniais, levantamento de endereços, empresas e veículos. Muitos serviços podem ser feitos sem sair de casa, com alta demanda e bons lucros.",
    // duration: "1h",
    // price: "$50",
    // icon: <Syringe />,
    // linkText:
    //   "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Apoio Jurídico e Social",
    description:
      "O Detetive Profissional é um grande aliado de advogados e famílias, auxiliando na busca por provas, localização de devedores, estelionatários e pessoas desaparecidas. Uma profissão que une justiça, propósito e resultados.",
    // duration: "2h",
    // price: "$80",
    // // icon: <CarTaxiFront />,
    // linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Renda Ilimitada e Oportunidades Reais",
    description:
      "Os ganhos variam de R$ 500.00 a R$ 100.000, pois tudo dependerá do ato assertivo entre o profissional e o cliente, finalizando a demanda proposta. desde levantamentos simples até grandes operações - o limite é o seu empenho e especialização. uma carreira com retorno financeiro constante e crescente.",
    // duration: "1h",
    // price: "$60",
    // // icon: <Hotel />,
    // linkText:
    //   "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblApi?.scrollPrev();
  }

  function scrollNext() {
    emblApi?.scrollNext();
  }

  return (
    <section>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#161e2c] text-white rounded-2xl p-6 space-y-1 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="gap-3">
                          <h3 className="font-bold text-xl my-4">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <MagnifyingGlass className="w-4 h-4" />
                          {/* <span> {item.duration}</span> */}
                        </div>

                        <a
                          target="_blank"
                          href={`https://wa.me/5521981062487?text=Olá vim pelo site e gostaria de mais informações!`}
                          className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogo className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                    
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-2 -translate-y/1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-8 -translate-y/1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
