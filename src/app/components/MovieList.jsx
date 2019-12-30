import React from "react";
import Movie from "./Movie.jsx";

const MovieList = (props) => {
    return (

        <div className="container movielist">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie key={i} image={movie.poster_path} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieList;