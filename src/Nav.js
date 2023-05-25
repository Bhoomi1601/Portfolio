// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./assets/css/Nav.css";


function Nav(){
    return(
<>
<nav className="nav-main">
<ul className="Nav-tag">
<li className="main-li" id="li-1">
          <Link to="#" className="main-a" id="a-1">Contact</Link>
        </li>
        <li className="main-li"id="li-2" >
          <a href="mailto:boomika596@gmail.com" id="a-2" className="main-a">Email <i className="fa fa-link" aria-hidden="true"></i></a>
        </li>
        <li className="main-li" id="li-3">
          <Link to="https://www.linkedin.com/in/bhoomika-257310243/"  id="a-3" className="main-a" target="_blank" rel="noopener noreferrer">LinkedIn <i className="fa fa-link" aria-hidden="true"></i></Link>
        </li>
        <li className="main-li" id="li-4">
          <Link to="https://github.com/Bhoomi1601" className="main-a" id="a-4" target="_blank" rel="noopener noreferrer">GitHub <i className="fa fa-link" aria-hidden="true"></i></Link>
        </li>
</ul>
</nav>
</>
 );
}
export default Nav;