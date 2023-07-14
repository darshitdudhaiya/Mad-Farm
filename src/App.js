import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />


     {/* <Header />
     <Carousel />
     <Banner />
     <About />
     <Fatcs />
     <Services />
     <Features />
     <Products />
     <Testimonial />
     <Team />
     <Blog />
     <Footer /> */}
    </>
  );
}

export default App;
