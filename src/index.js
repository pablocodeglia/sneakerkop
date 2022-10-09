import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import CartContextProviderWrapper from "./components/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <CartContextProviderWrapper>
    <App />
  </CartContextProviderWrapper>
  // </React.StrictMode>
);
