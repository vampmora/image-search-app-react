import React from "react";
import "./styles.css";
import Header from "./components/Header";
import axios from "axios";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}
