import Card from "./ui/card";

const system = [
  {
    type: "Aluminio",
    previewImage: "images/aluminioPreview.webp",
    colors: [
      { name: "aluminio", hex: "#707070" },
      { name: "blanco", hex: "#FFFFFF" },
      { name: "anolock", hex: "#723E18" },
      { name: "anodizado", hex: "#8F8F8F" },
      { name: "madera", hex: "#43250E" },
      { name: "negro", hex: "#0D0D0D" },
    ],
    brands: [
      {
        brand: "Probba",
        logo: "images/probba.png",
        info: "https://www.aluminios.com/probba/art-1/",
      },
      {
        brand: "Gala",
        logo: "images/gala.png",
        info: "https://www.aluminios.com/gala/art-2/",
      },
      {
        brand: "Summa",
        logo: "images/summa.png",
        info: "https://www.aluminios.com/summa/art-9/",
      },
    ],
  },
  {
    type: "PVC",
    previewImage: "images/pvcPreview.webp",
    colors: [
      { name: "gris", hex: "#8F8F8F" },
      { name: "blanco", hex: "#FFFFFF" },
      { name: "grafito", hex: "#41424C" },
      { name: "madera", hex: "#43250E" },
    ],
    brands: [
      {
        brand: "Winhouse",
        logo: "images/winhouse.png",
        info: "https://winhouse-chile.cl/linea-s60/",
      },
    ],
  },
  {
    type: "CRISTALES",
    previewImage: "images/glassPreview.webp",
    colors: [],
    brands: [
      {
        brand: "Vindeluz",
        logo: "images/vindeluz.png",
        info: "https://www.vindeluz.com.uy/",
      },
      {
        brand: "SILATEC",
        logo: "images/silatec.png",
        info: "https://www.silatecglass.com/es/cristal-antibalas/",
      },
    ],
  },
];

export default function Newsletter() {
  return (
    <section className="relative" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-24">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="h2 ">NUESTROS PRODUCTOS</h2>
        </div>
        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
          <p className="text-xl text-gray-600 text-center">
            Nos aseguramos de trabajar con los mejores materiales disponibles en
            el mercado para brindar la mayor satisfacción a nuestros clientes,
            explorá los productos que ofrecemos:
          </p>
        </div>
        <div>
          <div
            className="flex flex-col justify-between xl:flex-row sm:max-xl:items-center xl:flex-row md:max-w-none mx-auto "
            data-aos="fade-right"
          >
            <Card
              name="ALUMINIO"
              text="Línea Probba, Línea Gala, Línea Summa provistas por Aluminios
                del Uruguay"
              system={system[0]}
            ></Card>
            <Card
              name="PVC"
              text="Winhouse: Serie Sliding Puerta corredera, Serie Sliding Ventana
              corredera, Serie S60 Ventanas batientes provistas por Inverlux."
              system={system[1]}
            ></Card>
            <Card
              name="CRISTALES"
              text="Cristales DVH Vindeluz y antibalas SILATEC."
              system={system[2]}
            ></Card>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-2 m-auto w-px p-px h-20 bg-gray-700 transform translate-y-1/2"></div>
    </section>
  );
}
