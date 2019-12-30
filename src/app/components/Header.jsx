import React from "react";
// import Mask from '../../image/header/mask.png';
import s from '../../sass/blocks/_navbar.module.sass';
import { NavLink } from 'react-router-dom';


function Header() {
    return (

        <div>


            <header className="header ">
                {/* <div className="maskdiv"><img src={Mask} alt="logo" className="mask" /></div> */}


                <div className="nav ">
                    <div className="containerNav ">
                        
                        <div className="navItem">
                            <ul className={s.navelement}>
                                <li className={s.navEl}><NavLink to="/home" activeClassName={s.active} > Home</NavLink></li>
                                <li className={s.navEl}><NavLink to="/oneMoviePage" activeClassName={s.active}> Movie </NavLink></li>
                            </ul>
                        </div>
                    </div>

                </div>
               
            </header>
            
        </div>

    );
}




export default Header;