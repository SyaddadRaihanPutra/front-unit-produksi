import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgAuth from "../assets/images/bg-auth.svg";
import left from "../assets/images/rectangle.svg";
import ImageAuth from "../components/ImageAuth";
import { RiGoogleFill } from "react-icons/ri";

export default function Login() {
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
      <div
        className="flex flex-row-reverse w-full max-w-screen-lg m-5 overflow-hidden shadow-xl card card-side"
        style={{ backgroundColor: "#DBDFE2" }}
      >
        <div
          className="hidden w-6/12 p-8 md:block"
          style={{ backgroundImage: `url(${left})`, backgroundSize: "cover" }}
        >
          <ImageAuth />
        </div>
        <div className="w-full p-4 md:w-5/12 card-body md:p-8">
          <h2 className="pt-10 mb-4 text-4xl font-extrabold text-center">Login</h2>
          <center>
            <div className="p-5">
              <input
                type="text"
                placeholder="Email"
                style={{ backgroundColor: "#DBDFE2" }}
                className="w-full max-w-xs py-2 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Password"
                style={{ backgroundColor: "#DBDFE2" }}
                className="w-full max-w-xs py-2 mt-8 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
            </div>
          </center>

          <div className="flex flex-col justify-center mt-8">
            <button
              className="w-2/3 mx-auto text-white rounded-full btn"
              style={{ backgroundColor: "#465E76" }}
            >
              Sign In
            </button>

            <p className="py-3 text-xs text-center">OR</p>
            <button className="w-2/3 mx-auto rounded-full btn btn-outline">
              <RiGoogleFill /> Login with Google
            </button>
            <p className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
