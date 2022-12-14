import React from 'react'
import "../stylesheets/navbar.css";

const Navbar = () => {
    const ham = document.querySelector(".ham");
    const list = document.querySelector(".options");
    const btn = document.querySelector(".btn");
    const clickHandler =()=>{
        list.classList.toggle("options2");
        btn.classList.toggle("setBtn");
    }
    return (
        <article className="navbar">
            <div className="logo">
                <h1><a href="#"> H</a></h1>
            </div>
            <div className="ham" onClick={clickHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ol className="options ">
                <li><a className="about" href="#"> Home</a></li>
                <li><a className="experience" href="#about"> About</a></li>
                <li><a className="work" href="#work"> Work</a></li>
                <li><a className="contact" href="#contact"> Contact</a></li>
                <a href="https://drive.google.com/drive/u/0/folders/1NpELj7xYwSlkvwq8PQuJd4RKdUy2Y8L2"  target="_blank" rel="noopener noreferrer"><button className="resumeBtn">Resume</button></a>
            </ol>
        </article>
    )
}

export default Navbar;
