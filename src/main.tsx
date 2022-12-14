import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { HomeSerieD } from './pages/home/homeD';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { HomeSerieA } from './pages/home/homeA';
import { HomeSerieB } from './pages/home/homeB';
import { HomeSerieC } from './pages/home/homeC';
import { HomeSerieDGroup1 } from './pages/home/homeD1';
import { HomeSerieDGroup2 } from './pages/home/homeD2';
import { HomeSerieDGroup3 } from './pages/home/homeD3';
import { HomeSerieDGroup4 } from './pages/home/homeD4';
import { HomeSerieDGroup5 } from './pages/home/homeD5';
import { HomeSerieDGroup6 } from './pages/home/homeD6';
import { HomeSerieDGroup7 } from './pages/home/homeD7';
import { HomeSerieDGroup8 } from './pages/home/homeD8';
import { CreateseriesA } from './pages/creatTeams/createseriesA';
import { CreateseriesB } from './pages/creatTeams/createseriesB';
import { CreateseriesC } from './pages/creatTeams/createseriesC';
import { CreateseriesDGroup1 } from './pages/creatTeams/createseriesDgroup1';
import { CreateseriesDGroup2 } from './pages/creatTeams/createseriesDgroup2';
import { CreateseriesDGroup3 } from './pages/creatTeams/createseriesDgroup3';
import { CreateseriesDGroup4 } from './pages/creatTeams/createseriesDgroup4';
import { CreateseriesDGroup5 } from './pages/creatTeams/createseriesDgroup5';
import { CreateseriesDGroup7 } from './pages/creatTeams/createseriesDgroup7';
import { CreateseriesDGroup6 } from './pages/creatTeams/createseriesDgroup6';
import { CreateseriesDGroup8 } from './pages/creatTeams/createseriesDgroup8';
import { Login } from './pages/login/login';
import Register from './pages/register/register';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
        <Route path="/cadastrartimeserieA" element={<CreateseriesA />} />
        <Route path="/cadastrartimeserieB" element={<CreateseriesB />} />
        <Route path="/cadastrartimeserieC" element={<CreateseriesC />} />
        <Route
          path="/cadastrartimeserieDgrupo1"
          element={<CreateseriesDGroup1 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo2"
          element={<CreateseriesDGroup2 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo3"
          element={<CreateseriesDGroup3 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo4"
          element={<CreateseriesDGroup4 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo5"
          element={<CreateseriesDGroup5 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo6"
          element={<CreateseriesDGroup6 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo7"
          element={<CreateseriesDGroup7 />}
        />
        <Route
          path="/cadastrartimeserieDgrupo8"
          element={<CreateseriesDGroup8 />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seriea/update/:_id" element={<CreateseriesA />} />
        <Route path="/serieb/update/:_id" element={<CreateseriesB />} />
        <Route path="/seriec/update/:_id" element={<CreateseriesC />} />
        <Route
          path="/seried/grupo1/update/:_id"
          element={<CreateseriesDGroup1 />}
        />
        <Route
          path="/seried/grupo2/update/:_id"
          element={<CreateseriesDGroup2 />}
        />
        <Route
          path="/seried/grupo3/update/:_id"
          element={<CreateseriesDGroup3 />}
        />
        <Route
          path="/seried/grupo4/update/:_id"
          element={<CreateseriesDGroup4 />}
        />
        <Route
          path="/seried/grupo5/update/:_id"
          element={<CreateseriesDGroup5 />}
        />
        <Route
          path="/seried/grupo6/update/:_id"
          element={<CreateseriesDGroup6 />}
        />
        <Route
          path="/seried/grupo7/update/:_id"
          element={<CreateseriesDGroup7 />}
        />
        <Route
          path="/seried/grupo8/update/:_id"
          element={<CreateseriesDGroup8 />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
