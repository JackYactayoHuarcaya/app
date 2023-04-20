import { useRef } from "react";
import { Link } from "react-router-dom";
import Hamburguer from "../components/Hamburguer";
import logoJack from "../img/JACK-LOGO.svg";
import logoReact from "../img/react.svg";
import tecnologias from "../img/tecnologias.png";

let App = () => {
  let nav = useRef();
  return (
    <div className="sm:container m-auto">
      <div className="w-full flex justify-center">
        <img
          className="max-w-sm sm:w-2/5 xl:w-2/6"
          src={logoJack}
          alt="logo-jack"
        />
      </div>
      <header>
        <nav
          ref={nav}
          id="nav-container-app"
          className="
        fixed w-full top-0 left-0
        md:relative
        md:text-white md:w-full md:flex justify-center"
        >
          <ul
            className="
          flex flex-col bg-slate-700 w-full
          text-white
          md:w-2/3 md:flex  md:flex-row md:bg-transparent md:justify-around text-lg sm:text-2xl "
          >
            <li className="p-4 hover:bg-slate-500 md:hover:bg-transparent md:hover:text-slate-400">
              <Link
                to="/"
                onClick={() => {
                  nav.current.style.top = "-100%";
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="p-4 hover:bg-slate-500 md:hover:bg-transparent md:hover:text-slate-400">
              <Link>Proyectos</Link>
            </li>
            <li className="p-4 hover:bg-slate-500 md:hover:bg-transparent md:hover:text-slate-400">
              <Link>Información</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="m-4 md:m-auto md:w-4/5">
        <div className=" flex flex-col xl:flex-row xl:justify-around">
          <div className="md:mt-4 xl:mt-16">
            <h2 className="w-full xl:w-3/4">
              <b className="text-gray-400 text-4xl md:text-5xl xl:text-6xl">
                Soy un desarrollador de sitios web con React
              </b>
              <br />
              <span className="text-3xl md:text-4xl xl:text-5xl text-gray-300">
                Seré tu compañero de trabajo
              </span>
            </h2>
            <div className="pt-4">
              <button
                className="p-2 bg-slate-700 md:text-2xl rounded-md text-white 
            shadow-sm shadow-slate-900"
              >
                Mensaje
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <img
              className="react-logo-efect w-60 md:w-80 z-0"
              src={logoReact}
              alt="react"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 relative flex justify-center">
        <img className="max-w-full sm:max-w-xl z-10" src={tecnologias} alt="" />
      </div>
      <Hamburguer />
    </div>
  );
};
export default App;
