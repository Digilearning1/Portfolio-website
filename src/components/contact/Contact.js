import React, { useContext, useRef } from "react";

import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { ThemeContext } from "../../context";
import { Slide, Fade } from "react-awesome-reveal";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="cont">
        <div className="cont-bg"></div>
        <div className="cont-wrapper">
          <div className="cont-left">
            <Slide>
              <div>
              <h1 className="cont-title">Let's get in touch today!</h1>
              <p className="cont-desc">
                <b>Lorem ipsum dolor sit amet</b> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia, obcaecati?
              </p>
              <div className="cont-info">
                <div className="cont-info-item">
                  <img src={Phone} alt="" className="cont-icon" />
                  +91 9156428560
                </div>
                <div className="cont-info-item">
                  <img src={Email} alt="" className="cont-icon" />
                  contact@gmail.com
                </div>
                <div className="cont-info-item">
                  <img src={Address} alt="" className="cont-icon" />
                  20/41, Macload Nagam, Mumbai
                </div>
              </div>
              </div>
            </Slide>
          </div>
          <div
            className="cont-right"
            style={{ borderColor: darkMode && "#7105e4" }}
          >
            <Fade delay={500}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Full name"
                name="user_name"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button className="contact-form-submit">Submit</button>
            </form>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
