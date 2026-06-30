import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Scroll } from "./components/Scroll";


export const Source = () => {
const BASE_URL = import.meta.env.BASE_URL;
const location = useLocation();
const flexBetween = "flex justify-center items-center";


const menuItems: { name: string; to: string }[] = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "DESIGN", to: "/design" },
    { name: "ILLUSTRATION", to: "/ilustration" },
    { name: "CONTACT", to: "/contact" },
];

const [MenuOpen, setMenuOpen] = useState<boolean>(false);
const [scrollY, setScrollY] = useState(0);
const [NavVisible, setNavVisible] = useState(true);
const [isVisible, setIsVisible] = useState(false);
const conFlechaTop = ["/", "/design", "/ilustration"];



useEffect(() => {
const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > scrollY && window.scrollY > 100) {
    setNavVisible(false);
    setMenuOpen(false);
    } else if (window.scrollY < scrollY && window.scrollY < 400) {
    setNavVisible(true);
    }
};

window.addEventListener("scroll", handleScroll);
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, [scrollY]);



  useEffect(() => {
    const botonHaciaTop = () => {
        if (!conFlechaTop.includes(location.pathname)) {
        setIsVisible(false);
        return;
      }
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        // si la suma del alto de la pagina + lo que he bajado es mayor o igual que el alto total de la pagina aparece el btoncito
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", botonHaciaTop);
    botonHaciaTop();

    return () => window.removeEventListener("scroll", botonHaciaTop);
  }, [location.pathname]);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-5 pb-5 bg-white transition-all duration-350 ease-in-out 
        ${
            NavVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-50px]"
        }`}
        >
        <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className="flex flex-col items-center w-full">
        <NavLink
            to="./"
            className="text-5xl tracking-widest text-black fonti font-medium p-3 cursor-pointer"
        >
            YIYI'S
        </NavLink>
        <p className="text-[1.4rem] md:text-2xl lg:text-2xl text-black pb-1 md:pb-4 lg:pb-4">
            PORTFOLIO
        </p>
        <div className="hidden text-lg md:flex gap-8 md:text-[1rem] text-black lg:text-[1rem] lg:gap-19">
            {menuItems.map((item, index) => (
            <NavLink
                key={index}
                to={item.to}
                className="cursor-pointer scale-100 hover:text-black hover:underline"
            >
                {item.name}
            </NavLink>
            ))}
        </div>

        <div className="md:hidden flex justify-center mt-3">
            <button onClick={() => setMenuOpen(!MenuOpen)}>
            <img
                className={`w-8 cursor-pointer transform transition-opacity duration-500
                ${MenuOpen ? "opacity-0" : "opacity-100"}
                ${
                    !MenuOpen? "transform rotate-180 transition-transform duration-500" : ""
                }`}
                src={`${BASE_URL}icons/menu.png`}
            />
            </button>
        </div>
        </div>
    </div>
    </div>


    <div
    className={`md:hidden fixed inset-0 bg-white text-black z-40 flex flex-col items-center justify-center
    transition-opacity duration-500 ease-in-out
    ${MenuOpen ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"}
    `}
    >
        {/* pointer-events-none es para que no se le pueda hacer click y el auto es el normal */}

    <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-5 right-5 text-black text-3xl font-bold cursor-pointer transform transition-all duration-300
            ${MenuOpen ? "opacity-100 rotate-90" : "opacity-0 rotate-0"}`}
    >
        <img src={`${BASE_URL}icons/x.png`} className="w-7 h-full" />
    </button>

    {menuItems.map((item, index) => (
        <NavLink
            key={index}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className=" text-xl py-3 px-6 cursor-pointer scale-100 hover:text-black hover:underline "
    >
            {item.name}
        </NavLink>
        ))}
    </div>


    {isVisible && (
        <button
          onClick={scroll}
          className="fixed w-8 bottom-25 left-1/2 transform -translate-x-1/2 md:hidden lg:hidden z-50 cursor-pointer hover:scale-110">
          <img src={`${BASE_URL}icons/top.png`}></img>
        </button>
      )}


    <Scroll/>
    <Outlet />

    </nav>
    );
};
