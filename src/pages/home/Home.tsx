import { NavLink } from "react-router-dom";
import { Footer } from "../../components";
export const Home = () => {
  const BASE_URL = import.meta.env.BASE_URL;

const images = [
  { src: `${BASE_URL}images/background.png`, to: "./ilustration" },
  { src: `${BASE_URL}images/alegria.png`, to: "./design" },
  { src: `${BASE_URL}images/cartel.png`, to: "./design" },
  { src: `${BASE_URL}images/conejo.png`, to: "./ilustration" },
  { src: `${BASE_URL}images/Banner.png`, to: "./design" },
  { src: `${BASE_URL}images/alice.png`, to: "/ilustration" },
];


  return (
    <>
      <div
        className="bg-white"
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "150vh",
        }}
      >
        <section
          id="home"
          className="h-screen"
        >
          <div
            className="absolute inset-0 bg-center bg-cover mt-16 bg-no-repeat"
            style={{
              backgroundImage: `url(${BASE_URL}images/homeY.png)`,
              width: "100vw",
              left: 0,
              right: 0,
            }}
          ></div>
        </section>

        <section
          id="projects"
          className=" flex flex-col justify-center items-center md:px-20 lg:pb-20 "
          style={{
            minHeight: "90vh",
            background:
              "linear-gradient(to bottom, black 60%, white 100%)",
          }}
        >
          <div className="container p-6 mb-10 mt-20">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="mb-10 break-inside-avoid overflow-hidden img-hover-zoom"
                >
                  <NavLink to={image.to} className="relative w-full">
                    <img
                      src={image.src}
                      className="w-full h-auto object-contain"
                    />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
