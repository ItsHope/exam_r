import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {

    const {isResponsive,setIsResponsive} = useState(false)
    return (
      <nav className="navbar"> 
        <h3 className= "logo">LuxLens </h3>
        <ul className={isResponsive? "nav-links-responsive": "nav-links"}
        onClick={() => setIsResponsive(false)}
        > 


     


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
        <button className="responsive-menu-icon"
        onClick={() => setIsResponsive(!isResponsive)}
        >
            {isResponsive ?
            (
            <i className="fas fa-times"></i> 
            ) : 
            (
            <i className="fas fa-bars"></i>
            )}
        </button>
      </nav>
    )
}

export default Navbar