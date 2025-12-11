import Image from "next/image";
import salaDeAula from "../../../public/about-1.png";

import { Check } from "lucide-react";
import logoImg2 from "../../../public/logo2.png";
export function About() {
  return (
    <section className="bg-[#ffffffec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={salaDeAula}
                alt="sala-de-aula"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
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
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">
              Sobre o Curso de Detetive Profissional:
            </h2>

             <p className="text-lg leading-relaxed max-w-2xl">
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
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-red-500" />
                Experiência desde 2005 com conhecimento na área
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-red-500" />
                Aulas Presenciais
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Check className="text-red-500" />
                EAD- Ensino a Distância
              </li>
              
            </ul>

            
          </div>
        </div>
      </div>
    </section>
  );
}
