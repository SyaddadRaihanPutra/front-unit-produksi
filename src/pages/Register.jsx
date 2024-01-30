import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgAuth from "../assets/images/bg-auth.svg";
import left from "../assets/images/rectangle.svg";
import ImageAuth from "../components/ImageAuth";
import { RiGoogleFill } from "react-icons/ri";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      alert("Login berhasil");
    } else {
      alert("Login gagal");
    }
  };

  const onClose = () => {
    window.history.back();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgAuth})` }}
    >
      <div className="flex w-full max-w-screen-lg overflow-hidden shadow-xl card card-side bg-base-100">
        <div
          className="hidden w-6/12 p-8 md:block"
          style={{ backgroundImage: `url(${left})`, backgroundSize: "cover" }}
        >
          <h3
            className="text-2xl text-white"
            style={{ fontFamily: "Rubik Mono One" }}
          >
            Gabung dan <br /> mulai bersama <br /> kami
          </h3>
          <ImageAuth />
        </div>
        <div className="w-full p-4 md:w-5/12 card-body md:p-8">
          <h2 className="mb-4 text-4xl font-extrabold text-center">
            Create Account
          </h2>
          <center>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full max-w-xs py-2 mt-5 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full max-w-xs py-2 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-full max-w-xs py-2 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
            </div>
          </center>
          <div className="flex items-center mt-4 md:mt-8">
            <input type="checkbox" className="mr-1" />
            <span className="text-xs">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                terms and conditions
              </a>
            </span>
          </div>

          <div className="flex flex-col justify-center mt-8">
            <button
              className="w-2/3 mx-auto text-white rounded-full btn"
              style={{ backgroundColor: "#465E76" }}
            >
              Sign Up
            </button>

            <p className="py-3 text-xs text-center">OR</p>
            <button className="w-2/3 mx-auto rounded-full btn btn-outline">
              <RiGoogleFill /> Login with Google
            </button>
            <p className="mt-4 text-sm text-center">
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
