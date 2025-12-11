import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
export function Footer() {
  return (
    <section className="bg-[#14131a] py-16 text-white">
      <div className="container mx-auto px-4">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Curso de Detetive profissional.
            </h3>
            <p className="mb-4">
              21 Anos de Experiência. Formando detetives de verdade, com propósito e Lei.
            </p>
            <a
              href={`https://wa.me/5521981062487?text=Olá vim pelo site e gostaria de mais informações!`}
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (21) 98106-2487</p>
            {/* <p>Rua X, centro, Campo Grande | MS</p> */}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
            <div className="flex gap-2">
              {/* <a href="#" target="_blank">
                <FacebookLogo className="w-8 h-8" />
              </a> */}
              <a href="https://www.instagram.com/det.perito.nascimento" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
