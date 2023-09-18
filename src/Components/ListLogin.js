import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';
const List = () => {
    return (
        <>
            <header>
              
                <nav>
                    <div className="list">
                        <NavLink exact to="/user-login" className="listItem" activeClassName="activeItem">User Login</NavLink>
                        <NavLink to="/admin-login" className="listItem" activeClassName="activeItem">Admin</NavLink>
                        <NavLink to="/officers-login" className="listItem" activeClassName="activeItem">Officers Login</NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default List;
