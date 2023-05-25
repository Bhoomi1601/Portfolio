import {useState} from 'react';
import "./assets/css/Exp.css";

function Exp(){
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return(
      <div className="exp">
        
        <section className="wraper">
        <h1 className='h1-exp'>Experience</h1>
  <ul className="container">
    <li className="link" id="l-1"  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}><a href="#"><p className='a-1'>2013-2017</p><p className='a-1'>Job Position</p></a></li>
    <li className="link" id="l-2" onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}><a href="#"><p className='a-1'>2017-2019</p><p className='a-1'>Job Position</p></a></li>
    <li className="link" id="l-3" onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}><a href="#"><p className='a-1'>2019-present</p><p className='a-1'>Job Position</p></a></li>
  </ul>
  {isHovering && (
  <div className="hide1">
    <p className="p-hide" align="justify">
    Lorem ipsum dolor sit amet consectetur. Nibh diam lorem commodo cras. 
    Neque scelerisque tempor porttitor sed magna ac egestas in. 
    Quis risus egestas sagittis lobortis sed.

    </p>
    <p className='logo'>
  Logo</p>
    </div>
    )}
</section>

<section className="wraper">
<h1 className='h1-skill'>Skills</h1>

<div id='sec-2'>
<article>
<h2 className='h-p'>Skill-1</h2>
<div className="p-1">
  <div className="pg-1" ></div>
</div>
<h2 className='h-p'>Skill-3</h2>
<div className="p-1">
  <div className="pg-3"></div>
</div>


<h2 className='h-p'>Skill-5</h2>
<div className="p-1">
  <div className="pg-5" ></div>
</div>

<h2 className='h-p'>Skill-7</h2>
<div className="p-1">
  <div className="pg-7" ></div>
</div>
</article>





<article>
<h2 className='h-p'>Skill-2</h2>
<div className="p-1">
  <div className="pg-2" ></div>
</div>
<h2 className='h-p'>Skill-4</h2>
<div className="p-1">
  <div className="pg-4"></div>
</div>

<h2 className='h-p'>Skill-6</h2>
<div className="p-1">
  <div className="pg-6"></div>
</div>
<h2 className='h-p'>Skill-8</h2>
<div className="p-1">
  <div className="pg-8" ></div>
</div>

</article>
</div>
</section>
</div>

    );
}
export default Exp;