import React from "react";

export default function productos() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">TIPOS DE ABERTURAS</h2>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white  border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                CORREDIZAS
              </h4>
              <img
                src="images/CORREDIZA.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                BATIENTES
              </h4>
              <img
                src="images/BATIENTES.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                OSCILOBATIENTES
              </h4>
              <img
                src="images/OSCILOBATIENTE.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                FIJAS
              </h4>
              <img
                src="images/FIJAS.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                TABAQUERAS
              </h4>
              <img
                src="images/TABAQUERAS.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white border-2 border-gray-900 rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                PROYECTANTES
              </h4>
              <img
                src="images/PROYECTANTE.webp"
                alt=""
                className="h-48"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
