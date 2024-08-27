"use client";
export default function Logo() {
  return (
    <button onClick={()=>{document.getElementById("hero")!.scrollIntoView({ behavior: "smooth" })}} className="block">
      <img src='images/logo_header.png' alt="amogs" className='h-8 md:h-16'/>
    </button>
  )
}
