import React from "react";
import Movie from "./Movie.jsx";
import PropTypes from "prop-types";

// import { withRouter } from "react-router";


// class ShowTheLocation extends React.Component {
//   static propTypes = {
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired,
//     history: PropTypes.object.isRequired
//   };

//   render() {
//     const { match, location, history } = this.props;

//     return <div>You are now at {location.pathname}</div>;
//   }
// }

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

const MovieList = (props) => {
    return (

        <div className="container movielist">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                
                                <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieList;