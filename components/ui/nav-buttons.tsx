import React from "react";

export default function NavButtons({ onClick, mobileNavOpen }) {
  const clickHandler = (id: string) => {
    if (mobileNavOpen) {
      onClick();
    }
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around w-full">
      <button
        className="text-gray-700 hover:text-gray-800 mt-2 hover:cursor-pointer sm:w-full"
        onClick={() => {
          clickHandler("productos");
        }}
      >
        Productos
      </button>
      <button
        className="text-gray-700 hover:text-gray-800 mt-2 hover:cursor-pointer sm:w-full"
        onClick={() => {
          clickHandler("nosotros");
        }}
      >
        Nosotros
      </button>
      <button
        className="text-gray-700 hover:text-gray-800 mt-2 hover:cursor-pointer sm:w-full"
        onClick={() => {
          clickHandler("contacto");
        }}
      >
        Contacto
      </button>
    </div>
  );
}
