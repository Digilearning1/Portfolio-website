import { useContext } from "react";
import "./intro.css";
import Me from "../img/me3.png";
import { ThemeContext } from "../../context";
import { Slide, Fade } from "react-awesome-reveal";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <Slide direction="right">
          <div className="intro-left-wrapper">
            <div className="intro-title">
              <Fade delay={1000}>
                <div className="intro-title-item">Web Developer</div>
              </Fade>
            </div>
            <h2 className="intro-intro">Hello, my name is</h2>
            <h1 className="intro-name">Deepak Chahar</h1>

            <p className="intro-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              dolores provident voluptatibus, similique quibusdam possimus saepe
              maxime a pariatur laboriosam?
            </p>
            <div className="btn-top-48px">
              <div
                className="button-container"
                style={{ borderColor: darkMode && "#edb8ff" }}
              >
                <a
                  href="###"
                  class="button-primary w-button"
                  style={{ color: darkMode && "#fff" }}
                >
                  Browse gallery
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <div className="intro-right">
        <Fade triggerOnce delay={500}>
          <div className="intro-bg"></div>
          <img src={Me} alt="image" className="intro-img" />
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
