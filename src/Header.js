import "./assets/css/Header.css";
import "./assets/css/Nav.css";
import Exp from "./Exp";
import Hobbies from "./Hobbies";
import Nav from "./Nav";
function Header(){
    return (
        <>
        <header>


<section id="head" className="sec-head">
  <article id="header-1">
<img src={require("./assets/images/profile.png")}  alt="img 1" className="profile-1"/>
</article>
<article id="header-2">
    <div>
  <h1 id="head-1">
    YOUR NAME
  </h1>
  <h3 id="head-3" >Title</h3>
  <hr></hr>
  <p id="para-1">
  Lorem ipsum dolor sit amet consectetur. 
  Nibh diam lorem commodo cras. 
  Neque scelerisque tempor porttitor sed magna ac egestas in. 
  Quis risus egestas sagittis lobortis sed aliquam orci adipiscing. 
  In nulla risus condimentum orci aliquet tellus turpis.
  </p>
  </div>
  </article>
</section>
        </header>

        <Nav/>
        <Exp/>
        <Hobbies/>
        </>
      );
}
export default Header;