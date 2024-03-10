import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { CalculatorApp } from "./CalculatorApp";
import { Footer } from "./ui/Footer";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalculatorApp />
    <Footer />
  </React.StrictMode>,
);
