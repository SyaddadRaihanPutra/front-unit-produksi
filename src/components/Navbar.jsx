import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Link to="/login"></Link>
      <Link to="/register"></Link>
    </>
  );
}
