// import { render } from "@testing-library/react";
import React from "react";
// import logo from 'src/course/logo.svg';

function Funfact() {
    return(
    <div>
        <h1>Fun facts about React JS</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
        </ul>
    </div>
    )
}

function Header() {
    return(
        <nav>
            <img src="./src/course/Capture d’écran 2022-07-19 171913.png" alt="logo" width={"40px"}/>
            <h1>Create your CV</h1>
            <ul>
                <li>Home</li>
                <li>CV</li>
                <li>Login</li>
                <li>About</li>
            </ul>
        </nav>
        );
}

function Footer() {
    return(
        <p>c 2023 Wiltek development. All rights reserved</p>
    )
    
}

function Tag() {

    const funfact = <div>{<Funfact/>}</div>

    const header = <header>{<Header/>}</header>

    const footer = <footer>{<Footer/>}</footer>
    
    // const element1 = <ul><li>Thing1</li><li>Thing2</li><li>Thing3</li></ul>
    return(
        <div className="Tag">
            {/* <div> */}
                {header}
            {/* </div> */}
            {/* <div> */}
                {funfact}
            {/* </div> */}
            {/* <div> */}
                {footer}
            {/* </div> */}
        </div>
    )
}


export default Tag;