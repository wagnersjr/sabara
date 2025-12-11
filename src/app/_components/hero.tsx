"use client";

import { useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import fotoDetetive from "../../../public/foto-detetive.webp";

import Image from "next/image";
import logoImg from "../../../public/logo.png";

export function Hero() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="bg-[#0A0A0A] text-white relative overflow-hidden">
      <div>
        <Image
          src={fotoDetetive}
          alt="background-image"
          fill
          quality={100}
          sizes="100vw"
          priority
          className="object-cover opacity-45 lg:hidden"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-55 md:hidden"></div>

      <div className="container mx-auto pb-16 md:pb-2 px-4 relative">
        <header className="w-full flex items-center justify-between py-4 mb-6">
          <div className="relative z-20">
            <Image
              data-aos="fade-down"
              data-aos-delay="1"
              src={logoImg}
              alt="Logo"
              width={130}
              height={50}
              quality={100}
              priority
              className="
                object-contain
                w-[90px]
                sm:w-[110px]
                md:w-[90px]
              "
            />
          </div>

          <nav
            className="hidden md:flex gap-6 font-semibold"
            data-aos="fade-down"
            data-aos-delay="1"
          >
            <a href="#curso" className="hover:opacity-70">Curso</a>
            <a href="#certificacao" className="hover:opacity-70">Certificação</a>
            <a href="#contato" className="hover:opacity-70">Contato</a>
          </nav>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex flex-col gap-1 md:hidden z-50"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </header>

       
        <div
          className={`
            md:hidden absolute right-4 top-20
            bg-black/90 backdrop-blur-sm
            rounded-md shadow-lg
            transition-all duration-300 overflow-hidden z-40
            ${openMenu ? "opacity-100 max-h-40 py-4 px-6" : "opacity-0 max-h-0 py-0 px-6"}
          `}
        >
          <nav className="flex flex-col gap-4 text-white font-semibold">
            <a href="#curso" onClick={() => setOpenMenu(false)}>Curso</a>
            <a href="#certificacao" onClick={() => setOpenMenu(false)}>Certificação</a>
            <a href="#contato" onClick={() => setOpenMenu(false)}>Contato</a>
          </nav>
        </div>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-7">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              O MELHOR CURSO DE DETETIVE PROFISSIONAL DO BRASIL
            </h1>

            <p className="lg:text-lg font-semibold" data-aos="fade-right">
              Torne-se um Detetive Profissional com uma Formação de Referência no Brasil
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/5521981062487?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p
                className="text-sm mb-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                O Detetive Profissional pode trabalhar em todo o território nacional, com o amparo da Lei Federal 13.432/17.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              data-aos="fade-up"
              data-aos-delay="1"
              src={fotoDetetive}
              alt="photo-detetive"
              className="object-contain"
              fill
              sizes="(max-width:768px) 0vw, 60vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}