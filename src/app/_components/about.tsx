import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { EnvelopeIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#faf4eb] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="photo-detetive"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="photo-detetive-2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">
              Sobre o Curso de Detetive Profissional:
            </h2>

            <p>
              O Detetive Profissional é especialista em descobrir a verdade e
              reunir informações com precisão e sigilo. Mais que investigação, é
              uma carreira cheia de oportunidades, ajudando pessoas, empresas e
              a Justiça. Formado, você poderá realizar levantamentos de
              endereços, dossiês, rastreamento de patrimônios, veículos,
              empresas e muito mais. Muitos trabalhos podem ser feitos online,
              sem sair de casa, com remuneração de R$500,00 a R$100.000 reais,
              ou seja não tem limite de ganhos. Dependendo do contrato de dias,
              semanas ou meses de trabalho acertado com o contratante. Ser
              detetive significa ter uma renda constante e ser um aliado
              importante de advogados, fornecendo informações estratégicas que
              fortalecem processos. Também ajuda famílias, como mães em busca de
              pensão alimentícia ou pessoas em busca de justiça. O melhor: o
              Detetive Profissional atua em todo o Brasil, sem limitações
              geográficas. Descubra uma carreira promissora, rentável e cheia de
              propósito. Aprenda com quem entende do assunto, são 21 anos de
              Experiência. Transforme sua vida hoje mesmo!
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Experiência desde 2005 com conhecimento na área
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aulas 100% Presenciais
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                EAD- Ensino a Distância
              </li>
              {/* <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Experiência e conhecimento na área
              </li> */}
            </ul>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <a
                target="_blank"
                href="https://wa.me/5521981062487?text=Olá vim pelo site e gostaria de mais informações!"
                className="bg-green-500 text-white flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2 rounded-md whitespace-nowrap text-xs sm:text-sm md:text-base transition-all"
              >
                <WhatsappLogo className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=seuemail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E84C3D] text-white flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2 rounded-md whitespace-nowrap text-xs sm:text-sm md:text-base transition-all"
              >
                <EnvelopeIcon className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                Contato via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
