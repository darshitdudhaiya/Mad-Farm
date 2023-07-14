import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Blog from "./components/Blog";
// import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Products from "./components/Products";
// import Features from "./components/Features";
import Services from "./components/Services";
// import Fatcs from "./components/Fatcs";
// import Banner from "./components/Banner";
import About from "./components/About";
// import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index  element={<Banner />} />
          {/* <Route path="/Banner" element= {< Banner/>} /> */}
          <Route path="/About" element={<About />} />
          {/* <Route path="/Facts" element= {< Fatcs/>} /> */}
          <Route path="/Services" element={<Services />} />
          {/* <Route path="/Features" element= {< Features/>} /> */}
          <Route path="/Products" element={<Products />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          {/* <Route path="/Team" element= {< Team/>} /> */}
          {/* <Route path="/Blog" element= {< Blog/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
