import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}
