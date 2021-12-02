import "./product.css";
import { Fade } from "react-awesome-reveal";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <Fade delay={500}>
        <div>
          <div className="p-browser">
            <div className="p-circle p-circle1"></div>
            <div className="p-circle p-circle2"></div>
            <div className="p-circle p-circle3"></div>
          </div>
          <a href={link} target="_blank">
            <img src={img} alt="" className="p-img" />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Product;
