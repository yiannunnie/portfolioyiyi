import { useEffect, useState } from "react";
import { Footer } from "../../components";


const BASE_URL = import.meta.env.BASE_URL;

const images = [
  {
    principal: `${BASE_URL}images/cartel.png`,
    losdemas: [{ src: `${BASE_URL}images/cartel.png` }],
  },
  {
    principal: `${BASE_URL}images/transversal/carteld.png`,
    losdemas: [
      { src: `${BASE_URL}images/transversal/carteld.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
      { src: `${BASE_URL}images/transversal/post1.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
      { src: `${BASE_URL}images/transversal/post2.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
      { src: `${BASE_URL}images/transversal/dm1.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
      { src: `${BASE_URL}images/transversal/dm2.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
      { src: `${BASE_URL}images/transversal/dm3.png`, info: "Project for a campaign to raise the profile of women in science and encourage future generations of girls to pursue careers in this field. Group design project involving four people.", title:"Dones de ciencia" },
    ],
  },
  {
    principal: `${BASE_URL}images/CartelPAM.png`,
    losdemas: [
      { src: `${BASE_URL}images/CartelPAM.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/Banner.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM"},
      { src: `${BASE_URL}images/PostIG.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/Story.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/Vinilo.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/ViniloMockup.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/mockupCartel.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/MockupFolleto.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
      { src: `${BASE_URL}images/MockupFolleto1.png`, info: "Project to promote the exhibition (PAM) of master's students from the Faculty of Fine Arts. Design work focused on the adaptability of this project to different visual media. Group project of four people", title:"PAM" },
    ],
  },
  {
    principal: `${BASE_URL}images/alegria.png`,
    losdemas: [{ src: `${BASE_URL}images/alegria.png` }],
  },
  {
    principal: `${BASE_URL}images/cartel01.png`,
    losdemas: [
      { src: `${BASE_URL}images/cartel01.png`, info: "Project for a campaign focused on a summer camp located in Valencia's Central Park for teenagers aged 12 to 17. Group project of 4. My main contribution has been the website.", title:"Campus Central Valencia" },
      { src: `${BASE_URL}images/cartel02.png`, info: "Project for a campaign focused on a summer camp located in Valencia's Central Park for teenagers aged 12 to 17. Group project of 4. My main contribution has been the website.", title:"Campus Central Valencia" },
      { src: `${BASE_URL}images/cartel03.png`, info: "Project for a campaign focused on a summer camp located in Valencia's Central Park for teenagers aged 12 to 17. Group project of 4. My main contribution has been the website.", title:"Campus Central Valencia" },
      { src: `${BASE_URL}images/folletoC.png`, info: "Project for a campaign focused on a summer camp located in Valencia's Central Park for teenagers aged 12 to 17. Group project of 4. My main contribution has been the website.", title:"Campus Central Valencia" },
      { src: `${BASE_URL}images/folletoC1.png`, info: "Project for a campaign focused on a summer camp located in Valencia's Central Park for teenagers aged 12 to 17. Group project of 4. My main contribution has been the website.", title:"Campus Central Valencia" },
    ],
  },
  {
    principal: `${BASE_URL}images/m1.png`,
    losdemas: [
      { src: `${BASE_URL}images/m1.png` },
      { src: `${BASE_URL}images/m2.png` },
      { src: `${BASE_URL}images/m3.png` },
      { src: `${BASE_URL}images/m4.png` },
    ],
  },
  {
    principal: `${BASE_URL}images/boniches.png`,
    losdemas: [{ src: `${BASE_URL}images/big/cartel-1.png`}],
  },
];

export const Design = () => {
  const [bigImagen, setBigImagen] = useState(false);
  const [losDemas, setLosDemas] = useState<{ src: string; info?: string; title?: string }[]>(
    []
  );
  const [queImagen, setQueImagen] = useState(0);
  const [moreInfo, setMoreInfo] = useState(false);

  const openBigImagen = (
    imagenes: { src: string; info?: string; title?: string }[],
    index = 0
  ) => {
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

  // para que no se mueva el fondo o sea el scroll cuando le doy a ver una imagen
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
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "150vh",
      }}
    >
      <section
        id="design"
        className="flex flex-col justify-center items-center md:px-20 mb-20 pt-55 md:pt-58 lg:pt-65"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(to bottom, black 70%, white 100%)",
        }}
      >
        <div className="container p-6 md:p-0 lg:p-0">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
            {images.map((image, index) => {
              const Boniches = image.principal.includes("boniches.png");
              return (
                <div
                  key={index}
                  className={`mb-10 break-inside-avoid overflow-hidden img-hover-zoom cursor-pointer ${
                    Boniches ? "lg:pt-11 md:pt-11" : ""
                  }`}
                >
                  {Boniches ? (
                    <a
                      href="https://www.behance.net/gallery/225174819/Rediseno-Escudo-de-Boniches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full"
                    >
                      <img
                        src={image.principal}
                        className="w-full h-auto object-contain"
                      />
                    </a>
                  ) : (
                    <div
                      className="relative w-full"
                      onClick={() => openBigImagen(image.losdemas)}
                    >
                      <img
                        src={image.principal}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>


    {/* ----------------------------------cuandoLeDasACadaImagenSeAbre-------------------------------- */}

    {bigImagen && (
      <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/10 flex items-center justify-center">
        <button
          onClick={closeBigImagen}
          className="absolute top-4 right-4 opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300 bg-black p-3 lg:p-3 rounded-full"
        >
          <img src={`${BASE_URL}icons/close.png`} className="w-3 lg:w-4" />
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
              className="absolute left-4 opacity-0 lg:opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300"
            >
              <img src={`${BASE_URL}icons/next.png`} className="rotate-180 w-10" />
            </button>

            <button
              onClick={anteriorImagen}
              className="absolute right-4 opacity-0 lg:opacity-30 hover:opacity-100 cursor-pointer transition-all duration-300"
            >
              <img src={`${BASE_URL}icons/next.png`} className="w-10" />
            </button>
          </>
        )}

        <div className="relative flex items-center justify-center">
          <img
            src={losDemas[queImagen].src}
            className="max-w-[90vw] max-h-[90vh] object-contain z-30 p-4 md:p-4 lg:p-5"
          />


          {losDemas[queImagen].title === "Campus Central Valencia" && (
            <a
              href="https://webcampuscentral.netlify.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="fixed top-4 bg-white py-1 font-medium px-4 rounded-2xl shadow-md hover:underline transition cursor-pointer z-40 text-sm"
            >
              Website
            </a>
          )}

          {losDemas[queImagen].info && (
            <div className="fixed bottom-4 font-medium left-1/2 transform -translate-x-1/2 text-black text-sm z-40">
              <button
                onClick={() => setMoreInfo(true)}
                className="bg-white px-4 py-1 rounded-2xl shadow-md hover:underline transition cursor-pointer"
              >
                Info
              </button>
            </div>
          )}
        </div>
      </div>
    )}

    {moreInfo && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-[90%] relative">
          <button
            onClick={() => setMoreInfo(false)}
            className="absolute top-3 right-3 opacity-60 hover:opacity-100 cursor-pointer"
          >
            <img src={`${BASE_URL}icons/x.png`}className="w-5" />
          </button>

          <h2 className="text-xl font-bold mb-4 text-black">
            {losDemas[queImagen].title}
          </h2>
          <p className="text-black">{losDemas[queImagen].info}</p>
        </div>
      </div>
    )}

    <Footer />
  </>
);
};