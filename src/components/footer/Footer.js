import "./footer.css";
import React from "react";
import Port2 from '../img/port-black.png'
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
      <Fade delay={500}>
         <div>
          <img src={Port2} alt="" height="auto" width="200" />
        </div>
        <div className="footer_copyright">
          Copyright &copy; 2021 all rights reserved{" "}
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;


