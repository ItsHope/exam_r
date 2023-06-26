import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {

    return (
      <nav className="navbar"> 
        <h3 className= "logo"> </h3>
        


     
  <ul className="pages">

        <div class="flex flex2">
        <Link to="/" className="home">
        <li>HOME</li>
        </Link>

        <Link to="/blogs" className="blogs">
        <li>BLOGS</li>
        </Link>

        <Link to="/design" className="design">
        <li>DESIGN</li>
        </Link>

        <Link to="/internetartwork" className="internetartwork">
        <li>INTERNET <br></br>ARTWORK</li>
        </Link>

        

        
        </div>

        </ul>
        

       
       
      </nav>
    )
}

export default Navbar