import React from 'react';
import '../App.css';
const NavBar=()=>{
    return(
        <nav>
    <div className="nav-wrapper">
        <a href="/" className="brand-logo left">ACADZA Assignment </a>                                                                                                                                                                                                                                                                                            
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/first">FIRST</a></li>
        <li><a href="/second">SECOND</a></li>


      </ul>
    </div>
  </nav>
    );
}                                                                                           

export default NavBar