

import style from "./style/project.module.css";

const Projects = () => {
  return (
    <section
      id="Project"
      className=" py-[50px] px-[15px] bg-gradient-to-r from-[#49499c] to-[#143170] text-blue-50"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#73f79f]"
        data-aos="flip-down"
      >
        Proyectos
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p
        className="text-lg text-justify mt-4 font-medium  "
        data-aos="flip-down"
      >
        Estos son algunos proyectos que he desarrollado.
      </p>
      {/* //?item 1 */}
      <div className="mt-[70px]  px-[20px] grid grid-cols-3 gap-9  max-[600px]:grid-cols-1 max-[1300px]:grid-cols-2">
       

        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg cursor-pointer`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src="/projects/ecommerce.png"
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative ">
              <h4 className="text-white text-center text-3xl font-bold">
                Ecommerce
              </h4>
              <p className=" mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                El sitio de comercio electrónico , el sitio web ofrece una
                interfaz de usuario dinámica para una experiencia de compra.
                Tecnologias y librerías utilizadas en el front React,
                Axios,React-Hook-Form React-Hook-Form, Redux toolkit ,
                React-Router-Dom, Javascript, HTML y css.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Jhoel00852/app-ecomerce"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://app-ecomece-team.netlify.app/#/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 2 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg cursor-pointer`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src="/projects/poke.png"
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                PokeApi
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Una version mas sencilla de la pokedex con un diseño amigable e
                intuitivo, muestra las caracteristicas de cada pokemon.
                Tecnologias utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Jhoel00852/app-pokemon"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://app-pokemon-jtc.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 3 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg cursor-pointer`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src="/projects/Riky.png"
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Rick and Morty App
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Realizada del consumo de una API, con sus caracteristicas,
                cuenta con una barra para busqueda personalizada por id de cada
                planeta. Tecnologias utilizadas React, Axios, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/jhoelterrel/app_rickandmorty"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://rick-and-morty-academlo-gen-25.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 4 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80 relative overflow-hidden rounded-lg cursor-pointer`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src="/projects/crud.png"
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Crud-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Proyecto donde ocupe herramientas de React con Axios mientras se
                consume una API con los metodos Get, Post, Delete. Tecnologias
                utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/jhoelterrel/app-crud"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://app-crud-jtc.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 5 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg cursor-pointer`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src="/projects/clima.png"
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Weather-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Construida para mostrar los datos del tiempo en tu localizacion
                ocupa una API que permite interactuar con estos datos.
                Tecnologias utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/jhoelterrel/app_clima"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://main--incomparable-dodol-9798d4.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 6 */}
        
      </div>
    </section>
  );
};

export default Projects;
