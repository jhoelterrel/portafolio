import React, { useState } from "react";
import { Link } from "react-scroll";
import foto from "../../public/Foto_Perfil.jpg";
const NavBar = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);

  const opens = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen1(false);
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <i
          onClick={opens}
          className="fa-sharp fa-solid fa-bars w-10 h-10 rounded-full text-xl bg-[#1337ff] fixed top-6 right-6 leading-[42px] text-center hidden max-[1050px]:block z-50 cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={opens}
          className="fa-sharp fa-solid fa-xmark w-10 h-10 rounded-full text-xl bg-[#1337ff] fixed top-6 right-6 leading-[42px] text-center hidden max-[1050px]:block   z-50 cursor-pointer"
        ></i>
      )}

      <header
        className={`h-screen bg-gradient-to-r from-[#000000] to-[#242433] w-[300px] fixed top-0 left-0 bottom-0 py-8 px-6 z-40 transition-all duration-500 overflow-y-auto  ${
          open ? "max-[1050px]:left-[-300px]" : "max-[1050px]:left-[0px] "
        } `}
      >
        <div className="flex flex-col justify-center items-center ">
          <img
            className="w-40 h-40 rounded-full object-cover border-4 border-[#0cfff3]"
            src={foto}
            alt=""
          />
          <h1 className="font-Roboto  text-3xl font-bold m-4">
            Jhoel Terrel
          </h1>
          <div className="flex gap-2 text-2xl  ">
            <a
              className="w-9 h-9 rounded-full bg-[#fcfcfc]  flex justify-center items-center p-3 hover:bg-[#0cfff3]	"
              href="https://www.linkedin.com/in/jhoelterrel/"
              target="_blank"
            >
               <i class="fa-brands fa-linkedin-in text-xl text-[#000000] "></i>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-[white]  flex justify-center items-center p-3	 hover:bg-[#0cfff3] 	"
              href="https://github.com/jhoelterrel/"
              target="_blank"
            >
              <i className="fa-brands fa-github  text-2xl text-[black] "></i>
            </a>
           
            <a
              className="w-9 h-9 rounded-full bg-[white]  flex justify-center items-center p-3 hover:bg-[#0cfff3]"
              href="https://www.facebook.com/jhoel.terrel/"
              target="_blank"
            >
              <i class="fa-brands fa-facebook text-2xl text-[black]  "></i>
            </a>
          </div>
        </div>

        <nav className="mt-[50px]">
          <ul
            className={
              open1 ? "active flex  flex-col gap-6" : "flex  flex-col gap-6"
            }
          >
            <li>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
                className="hover:text-[#00dfd8] cursor-pointer"
              >
                <i className="fa-solid fa-house text-xl mr-[10px] "></i>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
                className="hover:text-[#00dfd8]    cursor-pointer"
              >
                <i className="fa-solid fa-user text-xl mr-[10px] "></i>
                Acerca de Mí
              </Link>
            </li>

            <li>
              <Link
                to="Resume"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
                className="hover:text-[#00dfd8]  cursor-pointer "
              >
                <i className="fa-sharp fa-solid fa-graduation-cap text-xl mr-[10px] "></i>
                Educacion
              </Link>
            </li>

            <li>
              <Link
                to="Project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
                className="hover:text-[#00dfd8]  cursor-pointer "
              >
               <i class="fa-solid fa-diagram-project text-xl mr-[10px]"></i>
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
                className="hover:text-[#00dfd8] cursor-pointer"
              >
                 <i class="fa-regular fa-address-card text-xl mr-[10px]"></i>
                Contactos
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`text-center w-[300px] fixed   bottom-0 mb-0  left-0 transition-all duration-500 z-50 bg-gradient-to-r from-[#000000] to-[#242433] ${
            open ? "max-[1050px]:left-[-300px]" : "max-[1050px]:left-[0px]"
          }`}
        >
          <p className="mb-4">
            &copy;copyright{"  "} {"  "}
            <span className="font-semibold text-[#00dfd8]">Jhoel Terrel</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default NavBar;
