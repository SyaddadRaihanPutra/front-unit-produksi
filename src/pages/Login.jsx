import React, { useState } from "react";
import { Link } from "react-router-dom"; // Alias useHistory
import bgAuth from "../assets/images/bg-auth.svg";
import left from "../assets/images/rectangle.svg";
import ImageAuth from "../components/ImageAuth";
import { RiGoogleFill } from "react-icons/ri";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://27d6-125-166-90-93.ngrok-free.app/api/auth/v1/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data) {
        alert("Login berhasil");
      } else {
        alert("Login gagal");
      }
    } catch (error) {
      // console.error("An error occurred during login:", error);
      alert("Login gagal");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url(${bgAuth})` }}>
      <div className="flex flex-row-reverse w-full max-w-screen-lg m-5 overflow-hidden shadow-xl card card-side" style={{ backgroundColor: "#DBDFE2" }}>
        <div className="hidden w-6/12 p-8 md:block" style={{ backgroundImage: `url(${left})`, backgroundSize: "cover" }}>
          <ImageAuth />
        </div>
        <div className="w-full p-4 md:w-5/12 card-body md:p-8">
          <h2 className="pt-10 mb-4 text-4xl font-extrabold text-center">Login</h2>
          <center>
            <div className="p-5">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: "#DBDFE2" }}
                className="w-full max-w-xs py-2 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: "#DBDFE2" }}
                className="w-full max-w-xs py-2 mt-8 mb-3 border-b-2 border-black focus:outline-none focus:border-indigo-500"
              />
            </div>
          </center>

          <div className="flex flex-col justify-center mt-8">
            <button
              onClick={handleLogin}
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
