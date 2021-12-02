import './header.css'
import { ThemeContext } from "../../context";
import { useContext } from 'react';
import Port1 from '../img/port-black-bg.png'
import Port2 from '../img/port-black.png'
import {  NavLink} from 'react-router-dom'
import { Slide } from 'react-awesome-reveal';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="container-header">
      <Slide direction="down" delay={100} >
       <div className="header">        
          <img src={darkMode ? Port2 : Port1} alt="" height="auto" width="200" style={{color: darkMode && "#fff", marginTop:"-10px"}} />
        
        <div className="header-right">
          <NavLink to="/" exact activeClassName="header active" style={{ color: darkMode && "#fff" }}>
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="header active" style={{ color: darkMode && "#fff" }}>About</NavLink>
          <NavLink to="/contact" exact activeClassName="header active" style={{ color: darkMode && "#fff" }}>Contact</NavLink>
          <NavLink to="/footer" exact activeClassName="header active" style={{ color: darkMode && "#fff" }}></NavLink>
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default Header;
