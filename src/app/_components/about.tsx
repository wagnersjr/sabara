import Image from "next/image";
import salaDeAula3 from "../../../public/saladeaula3.png";
import salaDeAula2 from "../../../public/saladeaula2.jpg";
import bg from "../../../public/bg.jpg";

import { Check } from "lucide-react";
import logoImg2 from "../../../public/logo2.png";
export function About() {
  return (
    <section
      className="relative py-7 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-55"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden pointer-events-none select-none">
              <Image
                src={salaDeAula3}
                alt="sala-de-aula"
                fill
                quality={100}
                className="object-cover hover:scale-105 duration-500"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-3 -bottom-8 border-1 overflow-hidden rounded-lg pointer-events-none select-none">
              <Image
                src={logoImg2}
                alt="photo-detetive-2"
                fill
                quality={100}
                priority

                
                
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10 text-white"
            data-aos="fade-up-left"
            data-aos-delay="400"
          >
            <h2 className="text-2xl sm:text-4xl font-bold">
              Sobre o Curso de Detetive Profissional:
            </h2>

            <p className="text-base md:text-lg leading-snug md:leading-relaxed max-w-2xl">
              O{" "}
              <span className="font-bold text-yellow-400">
                Detetive Profissional
              </span>{" "}
              é especialista em descobrir a verdade e reunir informações com
              precisão e sigilo.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-yellow-500" />
                Experiência desde 2005 com conhecimento na área
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-yellow-500" />
                Aulas Presenciais
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-yellow-500" />
                EAD- Ensino a Distância
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
