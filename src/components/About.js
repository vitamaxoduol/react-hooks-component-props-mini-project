import React from "react";

function About(props) {
    const defaultImage = "https://via.placeholder.com/215"
    return (
        <aside>
            <img src={props.image || defaultImage} alt="blog logo" />
            <p>{props.aboutText}</p>
        </aside>
    )
}
export default About;