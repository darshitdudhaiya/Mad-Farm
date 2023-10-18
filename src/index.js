import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Products from "./components/AllProducts";
import Services from "./components/Services";
import About from "./components/About";
import Banner from "./components/Banner";
import MilkProduct from "./components/MilkProduct";
import CowProduct from "./components/CowProduct";
import FarmProduct from "./components/FarmProduct";
import AllProducts from "./components/AllProducts";
import Gallery from "./components/Gallery";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<Banner />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/MilkProduct" element={<MilkProduct />} />
          <Route path="/CowProduct" element={<CowProduct />} />
          <Route path="/FarmProduct" element={<FarmProduct />} />
          <Route path="/AllProduct" element={<AllProducts />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
