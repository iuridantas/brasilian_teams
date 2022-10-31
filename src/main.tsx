import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { HomeSerieD } from "./pages/seriesD/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { HomeSerieA } from "./pages/seriesA/home";
import { HomeSerieB } from "./pages/seriesB/home";
import { HomeSerieC } from "./pages/seriesC/home";
import { HomeSerieDGroup1 } from "./pages/seriesD/seriesDgroup1/home";
import { HomeSerieDGroup2 } from "./pages/seriesD/seriesDgroup2/home";
import { HomeSerieDGroup3 } from "./pages/seriesD/seriesDgroup3/home";
import { HomeSerieDGroup4 } from "./pages/seriesD/seriesDgroup4/home";
import { HomeSerieDGroup5 } from "./pages/seriesD/seriesDgroup5/home";
import { HomeSerieDGroup6 } from "./pages/seriesD/seriesDgroup6/home";
import { HomeSerieDGroup7 } from "./pages/seriesD/seriesDgroup7/home";
import { HomeSerieDGroup8 } from "./pages/seriesD/seriesDgroup8/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seried" element={<HomeSerieD />} />
        <Route path="/seriea" element={<HomeSerieA />} />
        <Route path="/serieb" element={<HomeSerieB />} />
        <Route path="/seriec" element={<HomeSerieC />} />
        <Route path="/seriedgrupo1" element={<HomeSerieDGroup1 />} />
        <Route path="/seriedgrupo2" element={<HomeSerieDGroup2 />} />
        <Route path="/seriedgrupo3" element={<HomeSerieDGroup3 />} />
        <Route path="/seriedgrupo4" element={<HomeSerieDGroup4 />} />
        <Route path="/seriedgrupo5" element={<HomeSerieDGroup5 />} />
        <Route path="/seriedgrupo6" element={<HomeSerieDGroup6 />} />
        <Route path="/seriedgrupo7" element={<HomeSerieDGroup7 />} />
        <Route path="/seriedgrupo8" element={<HomeSerieDGroup8 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);