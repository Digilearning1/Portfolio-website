import React from 'react'
import About from "../about/About";
import Intro from "../intro/intro";
import Contact from "../contact/Contact";
import ProductList from "../productList/ProductList";
import ServiceList from '../services/ServiceList';

const Home = () => {
    return (
      <>          
          <Intro />
          <About />
          <ProductList />
          <ServiceList />
          <Contact />
      </>
    );
  };
  
  export default Home;
