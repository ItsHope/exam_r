import React from 'react'
import "../Styles/blogs.css"

import {Link} from 'react-router-dom'
import Video from "../Video"

const Blogs = () => {
  return (

    

    <div className="blogs component__space" id="blogs">
            <div className="heading">
                <h1 className="heading">My Blogs</h1>
                
               
            </div>

          

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="blogs__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="blogs__meta">
                            <Link to="/blog1" className="blog1"> 
                                <h1 className="blogs__text">Blog 1(Javascript & The Work of Art in the Age of the Internet)</h1>
                                <p className="p blogs__text p__color">
                                The Javascript videos personally helped me
                                </p>
                                <p className="p blogs__text p__color">
                                I took down notes and had
                                </p>
                                <p className="p blogs__text p__color">
                                a lot of aha moments about...
                                </p>

                                </Link>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="blogs__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  
                >
                 
                
                </svg>
                            </div>
                            <div className="blogs__meta">
                            <Link to="/blog2" className="blog2">
                                <h1 className="blogs__text">Blog 2(API's & Convention and Concept)</h1>
                                <p className="p blogs__text p__color">
                                The API videos were informative
                                </p>
                                <p className="p blogs__text p__color">
                                the real test for full understanding will be me actually
                                </p>
                                <p className="p blogs__text p__color">
                                working with API's and extracting data...
                                </p>
                                </Link>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="blogs__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                </svg>
                            </div>
                            <div className="blogs__meta">
                            <Link to="/blog3" className="blog3">
                                <h1 className="blogs__text">Blog 3(Internet Analysis) </h1>
                                <p className="p blogs__text p__color">
                                My choice of net/web art to analyze is Indirect Flights
                                </p>
                                <p className="p blogs__text p__color">
                                This piece of art is one I had to grow to understand
                                </p>
                                <p className="p blogs__text p__color">
                                At first glance it is chaotic...
                                </p>
                                </Link>
                            </div>
                         </div>
                    </div>


                    <div className="col__3">
                         <div className="blogs__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                </svg>
                            </div>
                            <div className="blogs__meta">
                            <Link to="/essay" className="essay">

                                <h1 className="blogs__text">My essay </h1>
                                <p className="p blogs__text p__color">
                                In this paper I do an analysis on the net art called "SCREENFULL"
                                </p>
                                <p className="p blogs__text p__color">
                                by Abe Linkoln and Jimpunk developed in 2004 till 2005
                                </p>
                                <p className="p blogs__text p__color">
                                This is net art addresses my area of interest conceptually...
                                </p>
                                </Link>
                            </div>
                         </div>
                    </div>

                    

                    

                    </div>

                    


        </div>


        
        <Video/>
       </div>
    
  )
}

export default Blogs