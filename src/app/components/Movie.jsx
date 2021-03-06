import React from "react";


const Movie = (props) => {
    return (

        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light" onClick={() => props.viewMovieInfo(props.movieId)}>
                    {
                        props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width: "100%", height: 360 }} /> : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width: "100%", height: 360 }} />

                    }

                </div>
                <div className="card-content" onClick={() => props.viewMovieInfo(props.movieId)} style={{ cursor: "pointer", paddingTop: 50 }}>
                    <i className="fas fa-arrow-right"></i>
                    
                    <span style={{ marginLeft: 10 }}>Info</span>
                    

                </div>
                
            </div>
        </div>

    )
}

export default Movie;