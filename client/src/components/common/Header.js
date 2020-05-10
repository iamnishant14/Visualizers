import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <a href='/'>Home</a> || <a href='/welcomeUser'>Welcome</a>
        </nav>
    );
}

export default Header;