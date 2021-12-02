import "./about.css";
import polo from "../../components/img/polo.png";
import { Slide } from "react-awesome-reveal";
import aboutImage from '../img/about-img.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src={aboutImage}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <Slide delay={500} direction="right">
          <div>
            <h1 className="about-title">About Me</h1>
            <p className="about-sub">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique laborum consequuntur assumenda aliquid ipsum
              consequatur.
            </p>
            <p className="about-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              assumenda dicta accusantium aut mollitia illum recusandae suscipit
              dolore aperiam est labore repellendus accusamus adipisci
              perspiciatis quam asperiores ipsum consectetur, rem dolorum, non
              praesentium voluptatum placeat. Fugit fuga cumque labore
              perspiciatis doloribus commodi iusto? Repellat corporis corrupti
              eaque veritatis consectetur excepturi!
            </p>
            <div className="about-award">
              <img
                src={polo}
                loading="lazy"
                alt=""
                className="about-award-img"
              />
              <div className="about-award-texts">
                <h4 className="award-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, consequatur.
                </h4>
                <p className="about-award-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  illo architecto, ab minima possimus quam molestias! Eum
                  repudiandae repellat maiores alias, sint illum quae a!
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
