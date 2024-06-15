import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="container pb-[240px] pt-[80px]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
