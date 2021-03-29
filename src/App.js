import React  from "react";
import Footer from "./components/Footer";
import NavbarElement from "./components/Navbar";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import About from "./components/About";
import Features from "./components/Features";


function App() {
  return (
    <React.Fragment>
    <NavbarElement />
    <Intro />
    <Product />
    <Features />
    <About />
    <Contact />
    <Footer />
    {/*<Router>
    <Switch>
        <NavbarElement exact path="#"  component={NavbarElement} />
        <Route exact path="#"  component={Intro} />
        <Route exact path="/product"  component={Product}  />
        <Route exact path="#about"  component={About} />
        <Route exact path="#contact"  component={Contact} />
        <Footer />
      </Switch>
    </Router>*/}
    </React.Fragment>
  );
}

export default App;
