"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";

export default function card({ name, text, system }) {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className="mt-6 xl:max-w-sm sm:max-xl:max-w-md flex flex-col  items-center pt-10 pb-10 w-full border-2 border-gray-400 rounded-xl shadow-xl shadow-[#9999] hover:cursor-pointer hover:scale-110 transition ease-in-out"
      >
        <h3 className="h3 mb-4">{name}</h3>

        <img
          src={system.previewImage}
          alt=""
          className="w-full h-48 pointer-events-none rounded-md"
        />
        <p className="p-4">
          {text}
          <br />
          <button onClick={clickHandler} className="underline">
            Ver más...
          </button>
        </p>
      </div>

      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={clickHandler}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full h-fit w-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="h-3/6 w-full rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
            >
              <DialogTitle as="h2" className="h2 text-white">
                {name}
              </DialogTitle>
              <div className="w-9/12 h-full flex flex-col">
                <p className="mt-2 text-sm text-white self-center">{text}</p>
                <p className="mt-2 text-sm text-white self-center">
                  Para conocer más presione sobre los logos.
                </p>
                <div className="flex flex-col items-center justify-center w-full 2xl:w-2/3 md:flex-row  md:justify-around md:self-center mt-4">
                  {system.brands.map((brand) => (
                    <a
                      href={brand.info}
                      target="_blank"
                      className="mt-4 xl:mt-0 w-fit"
                    >
                      <img
                        src={brand.logo}
                        alt="logo"
                        className="h-auto max-h-10 xl:max-h-12"
                      />
                    </a>
                  ))}
                </div>
                {system.type == "CRISTALES" ? (
                  <></>
                ) : (
                  <p className="text-white self-center mt-6 ">
                    COLORES DISPONIBLES:
                  </p>
                )}
                <div className="grid grid-cols-2 lg:flex lg:flex-row  lg:justify-evenly w-fit self-center">
                  {system.colors.map((color) => (
                    <div className="flex flex-col w-12 m-4 ">
                      <div
                        className="rounded-full py-4 px-4 self-center"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-white self-center text-xs w-fit mt-2">
                        {color.name.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={clickHandler}
                >
                  VOLVER
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
