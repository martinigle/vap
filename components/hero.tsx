"use client";

export default function Hero() {
  return (
    <section className="relative" id="hero">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <img src="images/logo.png" alt="" className="h-36 mb-4 mx-auto " />
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Nos especializamos en el asesoramiento técnico, la fabricación,
                venta, instalación y mantenimiento de aberturas de alta
                prestación. Nuestro compromiso es proporcionar soluciones de
                vanguardia que no solo embellezcan tu espacio sino que también
                ofrecerán funcionalidad superior y eficiencia energética.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button
                    className="btn text-white bg-gray-900 hover:bg-yellow-600 w-full sm:w-auto sm:ml-4"
                    onClick={()=>{document.getElementById("productos")!.scrollIntoView({ behavior: "smooth" })}}
                  >
                    Ver productos
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="images/vap_hero.webp" alt="VENTANASHERO" />
          </div>
        </div>
      </div>
    </section>
  );
}
