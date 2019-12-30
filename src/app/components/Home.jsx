import React, { Component } from "react";
import SearchArea from "./SearchArea.jsx";
import MovieList from "./MovieList.jsx";
import Pagination from "./Pagination.jsx";


class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1
        }
        this.apiKey = `1d4f6fdf4545c2198450ca7bde6aa41d`
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], totalResults: data.total_results })
            })
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], currentPage: pageNumber })
            })
    }

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20);

        return (

            <div>
                <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MovieList movies={this.state.movies} />
                {
                    this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''
                }
            </div>
        );
    }
}




export default Home;