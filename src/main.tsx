import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FormEditProduct } from "./components/forms/product/form-editProduct";
import { FormProduct } from "./components/forms/product/form-products";
import { FormUser } from "./components/forms/user/form-user";
import { Login } from "./components/pages/login/login";
import { Products } from "./components/pages/products/products";
import { GlobalStyle, theme } from "./global-style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/form-user" element={<FormUser />} />
          <Route path="/create-product" element={<FormProduct />} />
          <Route path="/update-product/:id" element={<FormEditProduct />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
