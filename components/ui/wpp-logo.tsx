import React from "react";

export default function wppLogo() {
  return (
    <div>
      <a href="https://wa.me/59892177507" target="_blank" aria-label="WhatsApp Link" className="block w-fit mx-auto">
        <img src="images/wppLogo.svg" alt="" className="h-12 hover:scale-110 transition ease-in-out " />
      </a>
      <p className="text-md hidden md:block">WhatsApp</p>
    </div>
  );
}
