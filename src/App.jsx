import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import Intro from "./components/intro/intro";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./context";
import ProductList from "./components/productList/ProductList";
import Home from "./components/home/home";
import Toggle from "./components/toggle/Toggle";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
          
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <Header />
        <Toggle />
          <Switch>
            <Route path="/intro" component={Intro} exact />
            <Route path="/about" component={About} exact />
            <Route path="/product" component={ProductList} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/intro" component={Intro} exact />
            <Route path="/" component={Home} />
            <Contact />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
