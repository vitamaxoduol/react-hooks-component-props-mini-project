import React from "react";


function Header(props) {
    return(
        <header>
            <h1>{props.blogName}</h1>
            <img src={props.logo} alt="logo"/>
        </header>

    );    
}

export default Header;