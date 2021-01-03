import React, { useState, useEffect } from 'react'
import netflix from './netflixLogo.png'
import avatar from './netflixAvatar.png'
import "./CSS/Nav.css"

function Nav(){
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventlistener("scroll");
        }
    }, [])


    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img 
            className="nav-logo"
            src={netflix} 
            />
            <img 
            className="nav-avatar"
            src={avatar} />
        </div>
    );
}

export default Nav