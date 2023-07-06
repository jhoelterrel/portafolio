import React, { useEffect } from "react";
import about from "../../public/Foto_Perfil.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="About"
      className=" py-[70px] px-[30px] max-[850px]:py-[50px]  max-[850px]:px-[15px] bg-gradient-to-r from-[#49499c] to-[#143170] text-white "
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#73f79f]"
        data-aos="flip-down"
      >
        <span>A</span>cerca de mí
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p
        className="text-base text-justify mt-4 font-medium   "
        data-aos="flip-down"
      >
        Mi nombre es <strong>Jhoel Terrel</strong> soy de Perú. Me gusta trabajar en equipo. En esta etapa de mi vida estoy en búsqueda de nuevos proyectos.
      </p>
      <div className="flex gap-5 mt-6  max-[850px]:flex-col ">
        <div className="basis-[30%] text-center h-[370px]  max-[850px]:flex  max-[850px]:justify-center  max-[850px]:items-center  max-[850px]:w-full ">
          <img
            className="w-full h-full object-cover   max-[850px]:w-[50%]   max-[450px]:w-[90%]  "
            src={about}
          />
        </div>

        <div
          className="basis-[70%]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="text-3xl font-bold  max-[850px]:text-2xl text-[#73f79f]  ">
           Gestor de Proyectos
          </h2>
          <p className="text-base italic font-normal mt-[15px]  text-justify">
          Tengo experiencia en el rubro de Gestión de Proyectos, Administración de Base de Datos, Recursos Humanos y Soporte en TI, con capacidad para trabajar en equipo y de rápida adaptación al lugar de trabajo.
          </p>

          <div className="my-[15px]">
            <ul className="flex flex-col gap-1 mt-5 max-[850px]:gap-0">
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-phone-volume mr-[4px] text-blue-500"></i>
                <strong className="font-semibold">Telefono:</strong>
                <span className="ml-1 font-medium "> (+51) 970-119-881</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-calendar-days mr-[4px] text-blue-500"></i>
                <strong className="font-semibold">Edad:</strong>
                <span className="ml-1 font-medium">31</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-location-dot mr-[4px] text-blue-500"></i>
                <strong className="font-semibold">Ubicación:</strong>
                <span className="ml-1 font-medium">Lima-Perú-Ate</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-envelope text-blue-500  mr-[5px]"></i>
                <strong className="font-semibold">Email:</strong>
                <span className="ml-1 font-medium">
                  jhoel00742@gmail.com
                </span>
              </li>
            </ul>
            <button className="bg-[#16ff9e] italic font-semibold cursor-pointer text-xl p-2 rounded transition-all duration-500 hover:translate-y-1 animate-bounce mt-[15px]">
              <a href="/cv.pdf" download={"CV.pdf"} target="_blank">
                <i className="fa-solid fa-download mr-2 bg-[#16ff9e]"></i>
                Descargar CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
