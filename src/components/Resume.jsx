import React from "react";

const Resume = () => {
  return (
    <section
      id="Resume"
      className="py-[50px] px-[15px] uppercase sm:px-[30px] bg-gradient-to-r from-[#49499c] to-[#143170]  text-white"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#73f79f]"
        data-aos="flip-down"
      >
        Educacion y Experiencia
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>

      <div className="flex flex-col gap-5 mt-9 sm:justify-between  sm:flex-row   ">
        <div className="basis-[50%]">
          <div className="cols">
            <h2 className="text-[#73f79f] font-semibold text-xl my-4 mx-0">
              Resumen{" "}
            </h2>

            <div
              className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative

              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
                Jhoel Terrel
              </h3>
              <p className="font-semibold italic text-sm my-[10px] mx-0 text-justify">
              Bachiller en Ingeniería de Software de la Universidad Peruana de Ciencia Aplicadas; con experiencia en el rubro de Gestión de Proyectos, Administración de Base de Datos, Recursos Humanos y Soporte en TI, con capacidad para trabajar en equipo y de rápida adaptación al lugar de trabajo.
              </p>
              <ul className="pb-2">
                <li className="my-2 ml-3 text-base font-medium">
                  Perú-Lima-Ate
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  (+51) 970-119-881
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  jhoel00742@gmail.com
                </li>
              </ul>
            </div>

            <h3 className="text-base font-bold uppercase text-[#00dfd8]">
              Educación
            </h3>

            <div data-aos="fade-up" data-aos-duration="3000">
              <div
                className="pt-0 pr-[20px] pb-0  pl-[20px] mt-5 mx-0   border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              >
                <h3 className="text-[#00dfd8] uppercase font-semibold">
                  Programación Web Full-Stack y Ciencias de Computación Bootcamp
                </h3>
                <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
                  2022 - 2023
                </span>
                <p className="mb-4 italic font-medium">Academlo, México</p>
                <p className="font-normal text-base pb-4 text-justify">
                  Adquirí sólidos conocimientos en los fundamentos del
                  desarrollo web, incluidos HTML, CSS y JavaScript. También
                  desarrollé habilidades en la creación de aplicaciones web
                  usando la biblioteca ReactJS y la implementación de backend
                  usando NodeJS. A través de proyectos prácticos, pude aplicar
                  este conocimiento en la creación de aplicaciones web
                  funcionales.
                </p>
              </div>

             
            </div>
          </div>
        </div>
        <div className="basis-[50%]">
          <h2
            className="text-[#00dfd8]  text-xl my-4 mx-0   font-bold
          "
          >
            Experiencia Profesional
          </h2>
          <div
            className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
             Jefe de Desarrollo de Aplicaciones
            </h3>
            <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
              2019 - Actualidad
            </span>
            <p className="text-base italic font-normal">
              CELER SAC, Perú
            </p>
            <ul className="pb-1">
              <li className="my-[10px] mx-0 text-base text-justify font-normal ">
              Liderar y asegurar la ejecución oportuna y eficiente de los servicios de soporte y mantenimiento evolutivo de las aplicaciones que administramos para nuestros clientes.
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              Gestionar el grupo de aplicaciones en la correcta atención de los tickets de soporte levantados por nuestros clientes, coordinando el análisis, estimación y priorización de los mismos, aplicando principios de agilidad orientados a generar mayor valor a nuestros clientes.
              </li>

              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              Gestionar el entendimiento de las necesidades de nuestros clientes, planteando soluciones optimas y eficientes para mantener las aplicaciones estables, escalables y robustas.
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              Crear un ambiente comunicativo, colaborativo y preventivo con nuestros clientes para la atención de los incidentes, problemas y requerimientos evolutivos que sean presentados como parte del servicio de soporte y mantenimiento.
              </li>
              <li className="text-right mx-0 text-lg text-[#00dfd8] font-semibold ">
                <a
                  href="#"
                  target={"_blank"}
                >
                  Dar click aquí para visualizar mis Proyectos Realizados
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
