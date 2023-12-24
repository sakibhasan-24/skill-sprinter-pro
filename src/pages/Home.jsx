import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
