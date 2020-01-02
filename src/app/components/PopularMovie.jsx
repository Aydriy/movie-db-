import React from "react";


const PopularMovie = (props) => {
    return (

        <div className="container main">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <button><a className="waves-effect waves-light btn-large">Popular</a></button>

                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default PopularMovie;