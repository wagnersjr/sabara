import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#0A0A0A] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="background-image"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50 lg:hidden"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-55 md:hidden"></div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6 ">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              O MELHOR CURSO DE DETETIVE PROFISSIONAL DO BRASIL
            </h1>

            <p className="lg:text-lg" data-aos="fade-right">
              Torne-se um Detetive Profissional com uma Formação de Referência
              no Brasil
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
              <p className="text-sm mb-4">
                O Detetive Profissional pode trabalhar em todo o território
                nacional, com o amparo da Lei Federal 13.432/17.
              </p>

              <div className="flex mt-4">
                <div className="w-32 mb-8 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="photo-detetive"
                    quality={100}
                    className="object-fill"
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="photo-detetive"
              className="object-contain"
              fill
              sizes="(max-width:768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}