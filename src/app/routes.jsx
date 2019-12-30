import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageMovie from "./components/PageMovie";



class Routes extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results] })
      })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (

      <Router>

        <Header />
        
        <Route exact path="/home" component={Home} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Route path="/oneMoviePage" component={PageMovie} />
        
        <Footer />

      </Router>
    );
  }
}




export default Routes;