import Logo from "./ui/logo";
import WppLogo from "./ui/wpp-logo";

export default function Testimonials() {
  return (
    <section className="relative" id="contacto">
      <hr className="absolute left-0 right-0 border-gray-400" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16">
          <div className="max-w-3xl mx-auto text-center md:pb-12 mt-12">
            <h2 className="h2">CONTACTO</h2>
          </div>
          <div className="relative flex flex-col items-center">
            <a
              href="mailto: vapventanas@gmail.com"
              className="h4 mb-4 text-yellow-600 underline hover:scale-110 transition ease-in-out"
            >
              vapventanas@gmail.com 
            </a>
            <WppLogo></WppLogo>
          </div>
        </div>
      </div>
      <hr className="absolute left-1/4 right-1/4 border-gray-400" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16">
          <div className="max-w-3xl mx-auto text-center md:pb-16">
            <h2 className="h2">VAP EN NÚMEROS</h2>
          </div>
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <h1 className="h4 text-yellow-600 mb-4">Personal</h1>
              <h2 className="h2 text-grey-600 mb-4">+30</h2>
            </div>

            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <h1 className="h4 text-yellow-600 mb-4">Clientes</h1>
              <h2 className="h2 text-grey-600 mb-4">+40</h2>
            </div>

            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <h1 className="h4 text-yellow-600 mb-4">Experiencia</h1>
              <h2 className="h2 text-grey-600 mb-4">+25</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="absolute left-1/3 w-1/3 border-gray-400" />
      <div className="w-fit m-auto py-4">
        <Logo></Logo>
      </div>
    </section>
  );
}
