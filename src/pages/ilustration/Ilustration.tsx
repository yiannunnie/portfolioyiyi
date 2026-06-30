
import { useEffect, useState } from "react";
import { Footer } from "../../components";

const BASE_URL = "/portfolioyixuan/";
const images = [
  { principal: `${BASE_URL}images/background.png`, losdemas: [`${BASE_URL}images/background.png`] },
  {
    principal: `${BASE_URL}images/portada.png`,
    losdemas: [
      `${BASE_URL}images/alice.png`,
      `${BASE_URL}images/portada.png`,
      `${BASE_URL}images/guarda1.png`,
      `${BASE_URL}images/guarda2.png`,
      `${BASE_URL}images/pagina.png`,
      `${BASE_URL}images/alicia.png`,
      `${BASE_URL}images/ca.png`,
      `${BASE_URL}images/ma.png`,
      `${BASE_URL}images/ma1.png`,
    ],
  },
  { principal: `${BASE_URL}images/nena.png`, losdemas: [`${BASE_URL}images/nena.png`, `${BASE_URL}images/nena1.png`] },
  { principal: `${BASE_URL}images/conejo.png`, losdemas: [`${BASE_URL}images/conejo.png`] },
  { principal: `${BASE_URL}images/o.png`, losdemas: [`${BASE_URL}images/o.png`, `${BASE_URL}images/c.png`, `${BASE_URL}images/v.png`] },
];

export const Ilustration = () => {
  const [bigImagen, setBigImagen] = useState(false);
  const [losDemas, setLosDemas] = useState<string[]>([]);
  const [queImagen, setQueImagen] = useState(0);

  const openBigImagen = (imagenes: string[], index = 0) => {
    setLosDemas(imagenes);
    setQueImagen(index);
    setBigImagen(true);
  };

  const closeBigImagen = () => {
    setBigImagen(false);
    setLosDemas([]);
    setQueImagen(0);
  };

  const siguienteImagen = () => {
    setQueImagen((prev) => (prev + 1) % losDemas.length);
  };

  const anteriorImagen = () => {
    setQueImagen((prev) => (prev - 1 + losDemas.length) % losDemas.length);
  };

//   para q no se mueva el fondo o sea el scroll cuando le dooy a ver una imagen

  useEffect(() => {
  if (bigImagen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [bigImagen]);


  return (
    <>
      <div
        className=""
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "130vh",
        }}
      >
        <section
          id="design"
          className=" flex flex-col justify-center items-center md:px-20 pt-55 md:pt-58 lg:pt-65 pb-15"
          style={{
            minHeight: "90vh",
            background:
              "linear-gradient(to bottom, black 50%, white 100%)",
          }}
        >

          <div className="container p-6 md:p-0 lg:p-0">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={"mb-10 break-inside-avoid overflow-hidden img-hover-zoom cursor-pointer"}
                  onClick={() => openBigImagen(image.losdemas)}
                >
                  <div className="relative w-full">
                    <img
                      src={image.principal}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


            {/* -----------------------------imagenes de dentro losDemas---------------------------------- */}


      {bigImagen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/10 flex items-center justify-center">

          <button
            onClick={closeBigImagen}
            className="absolute top-4 right-4 opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300 bg-black lg:p-2 p-3 rounded-full"
          >
            <img src={`${BASE_URL}icons/close.png`} className="w-3 lg:w-4"></img>
          </button>

          {losDemas.length > 1 && (
            <>
              <div
                onClick={anteriorImagen}
                className="absolute left-0 top-12 h-full w-1/2 cursor-pointer z-40 lg:hidden"
              />

              <div
                onClick={siguienteImagen}
                className="absolute right-0 top-12 h-full w-1/2 cursor-pointer z-40 lg:hidden"
              />
            </>
          )}

          {losDemas.length > 1 && (
            <>
              <button
                onClick={siguienteImagen}
                className="absolute left-4 opacity-0 lg:opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300 "
              >
                <img src="/icons/next.png" className="rotate-180 w-10"></img>
              </button>

              <button
                onClick={anteriorImagen}
                className="absolute right-4 opacity-0 lg:opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300"
              >
                <img src={`${BASE_URL}icons/next.png`} className=" w-10"></img>
              </button>
            </>
          )}

          <img
            src={losDemas[queImagen]}
            className="max-w-[85vw] max-h-[85vh] object-contain z-30"
          ></img>
        </div>
      )}
        <Footer />
    </>
  );
};
