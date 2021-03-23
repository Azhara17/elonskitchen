import React from "react";
import Footer from "./components/Footer";
import NavbarElement from "./components/Navbar";
import LandingPageHeader from "./components/Header";
import Carousel from "./components/Carousel";
import Product from "./components/Product";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
    
     <LandingPageHeader />
     <NavbarElement />
     <Carousel />
     <Product />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
