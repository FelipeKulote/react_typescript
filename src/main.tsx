import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./components/pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/pages/products/products";
import { GlobalStyle, theme } from "./global-style";
import { ThemeProvider } from "styled-components";
import { FormUser } from "./components/forms/user/form-user";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/form-user" element={<FormUser />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
