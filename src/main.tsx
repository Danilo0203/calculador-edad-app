import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { CalculatorApp } from "./CalculatorApp";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>,
);
