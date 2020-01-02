import React from "react";
import SemilarMovie from "./SemilarMovie.jsx";

const MovieInfo = (props) => {

    return (

        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
                <i className="fas fa-arrow-left"></i>
                <span style={{ marginLeft: 10 }}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {
                        props.currentMovie.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="card image" style={{ width: "100%", height: 360 }} />
                            : <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{ width: 250, height: 360 }} />
                    }
                </div>
                <div className="col s12 m8">
                    <div className="info container">

                        <p >
                            {props.currentMovie.title}
                        </p>
                        <p >
                        Original language: {props.currentMovie.original_language}
                        </p>
                        <p>
                        Release date: {props.currentMovie.release_date}
                        </p>
                        <p>
                            {props.currentMovie.overview}
                        </p>
                        <SemilarMovie/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieInfo;



