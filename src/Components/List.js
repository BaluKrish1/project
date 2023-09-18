import React from "react";
import logo from '../Images/logo.jpeg';
import { NavLink } from "react-router-dom";
const List = () => {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer ">
                        <img src={logo} alt="logo" className="logo" />
                    </div>       
                        <nav>
                            <div className="list">
                                <NavLink topath="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                                <NavLink topath="/About" className="listItem" activeClassName="activeItem">About Us</NavLink>
                                <NavLink topath="/contact" className="listItem" activeClassName="activeItem">Contact Us</NavLink>
                            </div>
                        </nav>
                    
                </div>

            </header>
        </>
    )
}

export default List;
