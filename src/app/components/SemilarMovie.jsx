import React, { Component } from "react";
import SemilarMovie from "./SemilarMovie.jsx";
import MovieList from "./MovieList.jsx";
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

    handleSubmitSimilar = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], totalResults: data.total_results })
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


        return (

            <div>
                {this.state.currentMovie == null ?
                    <div>
                        <SemilarMovie handleSubmitSimilar={this.handleSubmitSimilar}  />
                        <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
                    </div>
                    :
                    <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
                }

            </div>
        );
    }
}




export default Home;