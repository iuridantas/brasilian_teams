import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Home1 } from "./pages/SeriesD/home1"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seried" element={<Home1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);