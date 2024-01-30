import React, { useRef } from "react";
import HeroImage from "../assets/images/wicara-hero.png";
import "../assets/styles/AnimatedTypingFade.css";

export default function Hero() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-gray-800" style={{ zIndex: "-" }}>
      <div className="container relative flex flex-col items-center px-6 py-16 mx-auto sm:flex-row">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5 lg:order-last">
          <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Mulai{" "}
            <span className="underline decoration-wavy decoration-teal-500">
              Obrolan
            </span>
            <span className="cursor-blink">|</span>
          </h1>
          <p className="mt-5 text-sm text-gray-700 sm:text-base dark:text-white font-inter lg:tracking-wide">
            Kami akan membantu Anda dalam berkomunikasi dengan orang lain secara
            langsung dalam berbagai bahasa. Anda hanya perlu mengetikkan
            kata-kata yang ingin Anda ucapkan, lalu kami akan mengucapkannya
            untuk Anda.
          </p>
          <div className="flex mt-8">
            <a
              href="#_"
              className="px-8 text-white transition-transform transform border-2 border-gray-800 rounded-full dark:text-white btn bg-cst-orange dark:border-white hover:scale-105 hover:shadow-md hover:text-cst-orange-light hover:bg-transparent"
            >
              Coba Sekarang
            </a>
          </div>
        </div>
        <div className="lg:w-3/5">
          <img
            src={HeroImage}
            className="w-full h-auto mx-auto"
            alt="Hero Image"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}
