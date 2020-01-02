import React from "react";
import s from '../../sass/blocks/_navbar.module.sass';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerElements">

                    <div className="logo logoFooter">
                        <div className="movie">
                            <span className="footerUPQ">MOVIE</span>
                        </div>
                    </div>
                    <div className="navItemFooter">
                        <ul className="navelementFooter">
                            <li className="navElFooter"><NavLink to="/home" activeClassName={s.active}> Home</NavLink></li>
                            <li className="navElFooter"><NavLink to="/services" activeClassName={s.active}> Movie</NavLink></li>
                            <li className="navElFooter"><NavLink to="/team" activeClassName={s.active}> Team</NavLink></li>
                            <li className="navElFooter"><NavLink to="/contactus" activeClassName={s.active}> Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="footerEnd">
                        <p className="footerEndparagraph">© Movie 2020.  All Right Reserved.</p>
                    </div>

                </div>

            </div>

        </footer>


    );
}




export default Footer;