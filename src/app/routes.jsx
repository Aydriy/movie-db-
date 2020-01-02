import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageMovie from "./components/PageMovie";
import Movie from "./components/Movie";

class Routes extends Component {


  render() {
    return (

      <Router>
        <div className="flex-wrapper">
          <Header />
            
          <Route exact path="/home" component={Home}  />
          <Route path="movie/:id" children={<Movie />} />
          <Route path="/oneMoviePage" component={PageMovie} />
          
          <Footer />
        </div>


      </Router>
    );
  }
}




export default Routes;