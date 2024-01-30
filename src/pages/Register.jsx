import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgAuth from "../assets/images/bg-auth.svg";
import left from "../assets/images/rectangle.svg";
import ImageAuth from "../components/ImageAuth";
import { RiGoogleFill } from "react-icons/ri";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post(
        "https://27d6-125-166-90-93.ngrok-free.app/api/auth/v1/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data) {
        alert("Registration berhasil");
        // Optionally, you can navigate the user to the login page after successful registration
        // history.push("/login");
      } else {
        alert("Registration gagal");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      alert("Registration gagal");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url(${bgAuth})` }}>
      <div className="flex w-full max-w-screen-lg m-5 overflow-hidden shadow-xl card card-side" style={{ backgroundColor: '#DBDFE2' }}>
        <div className="hidden w-6/12 p-8 md:block" style={{ backgroundImage: `url(${left})`, backgroundSize: "cover" }}>
          <h3 className="text-2xl text-white" style={{ fontFamily: "Rubik Mono One" }}>
            Gabung dan <br /> mulai bersama <br /> kami
          </h3>
          <ImageAuth />
        </div>
        <div className="w-full p-4 md:w-5/12 card-body md:p-8">
          <form onSubmit={handleRegister}>
            <h2 className="mt-5 mb-4 text-4xl font-extrabold text-center">
              Create Account
            </h2>
            <center>
              <div className="m-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ backgroundColor: '#DBDFE2' }}
                  className="w-full max-w-xs py-2 mt-5 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: '#DBDFE2' }}
                  className="w-full max-w-xs py-2 mt-5 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: '#DBDFE2' }}
                  className="w-full max-w-xs py-2 mt-5 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
                />
              </div>
            </center>
            <div className="flex items-center justify-center px-5 mt-4 md:mt-8" style={{ fontFamily: 'Poppins' }}>
              <input type="checkbox" className="mr-1" />
              <span className="text-xs">
                Saya setuju dengan <span className="text-blue-500">syarat</span> dan ketentuan serta {" "} 
                <a href="#" className="text-blue-500">
                  Kebijakan Privasi
                </a>
              </span>
            </div>
            <div className="flex flex-col justify-center mt-8">
              <button
                type="submit"
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
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
