import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/Pages/Home"
import Blogs from "./components/Pages/Blogs"
import Design from "./components/Pages/Design"
import InternetArtwork from "./components/Pages/InternetArtwork"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Blog1 from "./components/Pages/Blog1"
import Blog2 from "./components/Pages/Blog2"
import Blog3 from "./components/Pages/Blog3"
import Essay from "./components/Pages/Essay"







const App = () =>  {
  return (

    

    <Router>
       <Navbar/>

       

      <Switch>
        <Route path="/" compenent={Home} exact >
          <Home/>
          </Route>
          <Route path="/blogs" compenent={Blogs} exact >
          <Blogs/>
          </Route>
          <Route path="/design" compenent={Design} exact >
          <Design/>
          </Route>
          <Route path="/internetartwork" compenent={InternetArtwork} exact >
          <InternetArtwork/>
          </Route>
          <Route path="/blog1" compenent={Blog1} exact >
          <Blog1/>
          </Route>
          <Route path="/blog2" compenent={Blog2} exact >
          <Blog2/>
          </Route>
          <Route path="/blog3" compenent={Blog3} exact >
          <Blog3/>
          </Route>
          <Route path="/essay" compenent={Essay} exact >
          <Essay/>
          </Route>
      </Switch>

      
      <Footer/>

      
    </Router>
    
  );
}

export default App;
