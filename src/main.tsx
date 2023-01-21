import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./components/pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/pages/products/products";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
