import React from "react";


const SemilarButton = (props) => {
    return (

        <div className="container main">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmitSimilar}>
                        <div className="input-field">
                            <button><a className="waves-effect waves-light btn-large">Semilar</a></button>

                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default SemilarButton;