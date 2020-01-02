import React, { Component } from "react";
import PopularMovie from "./PopularMovie.jsx";
import MovieList from "./MovieList.jsx";
import Pagination from "./Pagination.jsx";
import MovieInfo from "./MovieInfo.jsx";


class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null
        }
        this.apiKey = `1d4f6fdf4545c2198450ca7bde6aa41d`
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=1`)
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
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], currentPage: pageNumber })
            })
    }

    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id == id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        this.setState({ currentMovie: newCurrentMovie })
    }

    closeMovieInfo = () => {
        this.setState({ currentMovie: null })
    }

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20);

        return (

            <div>
                {this.state.currentMovie == null ?
                    <div>
                        <PopularMovie handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                        <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
                    </div>
                    :
                    <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
                }

                {
                    this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''
                }
            </div>
        );
    }
}




export default Home;