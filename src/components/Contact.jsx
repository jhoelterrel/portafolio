import React, { useEffect } from "react";

import style from "./style/project.module.css";

const Contact = () => {
  return (
    <section
      className="py-[50px] px-[15px] pb-[150px]  bg-gradient-to-r from-[#49499c] to-[#143170]  text-white "
      id="Contact"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#73f79f]"
        data-aos="flip-down"
      >
        Contacto
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p className="text-lg text-justify mt-5 font-medium  ">
        Puedes contactarme con los siguientes datos.
      </p>

      <div className="mt-[80px] flex flex-col gap-8  md:flex-row  ">
        <div
          className={`${style.box} basis-[40%] 
            p-[30px] rounded-[5px] `}
        >
          <div className="flex gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="mailto:jhoel00742@gmail.com">
                <i
                  className="fa-sharp fa-solid fa-envelope w-[40px] h-[40px] rounded-full  text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 transition-all duration-200  hover:bg-[#ddd9d9] text-black bg-[#00dfd8]  cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold ">Email:</h2>
              <p className="text-white text-base">
                <a href="mailto:jhoel00742@gmail.com">
                  jhoel00742@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center ">
            <div>
              <i
                className="fa-sharp fa-solid fa-location-dot w-[40px] h-[40px] rounded-full  bg-[#00dfd8] hover:bg-[#ddd9d9] text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 text-black cursor-pointer"
              ></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Ubicacion:</h2>
              <span className=" text-base text-white">
                Lima-Perú-Ate
              </span>
            </div>
          </div>

          <div className="flex  gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="tel:+51970119881">
                <i
                  className="fa-sharp fa-solid fa-phone w-[40px] h-[40px] rounded-full   text-center leading-[36px] text-xl 
              border-solid border-2 border-sky-500 text-black bg-[#00dfd8] hover:bg-[#ddd9d9] cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Telefono:</h2>
              <a href="tel:+51">
                <span className=" text-base text-white">
                  {" "}
                  (+51) 970-119-881
                </span>
              </a>
            </div>
          </div>

          <div className="border-solid border-4 border-sky-100">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.1798121171505!2d-76.82168810105505!3d-12.01874456504275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c3d12afa9c23%3A0x8a9da7f852624412!2sAte!5e0!3m2!1ses!2spe!4v1682536947100!5m2!1ses!2spe" 
          width="100%" 
          height="250"  
          loading="lazy" >

          </iframe>
          </div>
        </div>
        <div className={`${style.box} basis-[60%]   p-[30px] rounded-[5px] `}>
          <form
            action="https://formsubmit.co/jhoel00742@gmail.com"
            method="POST"
            className="grid grid-cols-1   "
          >
            <div className="w-full mt-6 ">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium  text-black
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1 border border-[#5b5a5a]"
                type="text"
                placeholder="Nombre"
                name="text"
              />
            </div>
            <div className="w-full  mt-6">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium text-black
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="w-full  mt-6">
              <textarea
                className="w-full  text-black py-[10px] px-[20px] text-base rounded-[4px]  font-medium outline-none 
                focus:border-2  focus:border-[#00dfd8] focus:ring-[#00dfd8] focus:ring-1 resize-none"
                rows="12"
                placeholder="Mensaje"
                name="text"
              />
            </div>
            <div className="w-full  mt-6">
              <button
                className="w-full text-white font-bold  h-10  text-lg rounded-[4px] bg-[#73f79f]  cursor-pointer"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
