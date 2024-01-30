import React from "react";
import footerImage from "../assets/images/footer.svg";
import { RiGithubFill, RiHeartFill, RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      className="text-white bg-gray-800 p-14 footer footer-center"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="md:block">
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/syaddadraihanputra">
            <RiGithubFill className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/syaddadraihanputra/">
            <RiLinkedinBoxFill className="text-2xl" />
          </a>
        </div>
      </nav>
      <aside className="md:block">
        <small>
          <p className="font-mono font-bold tracking-wide">
            Hak Cipta Oleh{" "}
            <a
              href="https://instagram.com/syaddadrhnp_"
              className="text-cst-orange"
              target="_blank"
            >
              @syaddadrhnp_
            </a>
          </p>
        </small>
        <p className="flex items-center mt-2 text-xs tracking-wider">
          <span className="mr-1 font-mono font-bold">Dibuat dengan</span>
          <span className="mr-1 text-red-500 ">
            <RiHeartFill />
          </span>
          <span className="font-mono font-bold ">di Jakarta</span>
        </p>
      </aside>
    </footer>
  );
}
