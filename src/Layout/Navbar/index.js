
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

function Navbar() {
    return (
        <>
            <div className='navcomp'>
                <div>
                    <div className='navLogo'>
                        <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="icon" />
                    </div>
                    <div className="navLink">
                        <Link className="li" to={"/"}>Home</Link>
                        <Link className="li" to={"/add"}>Add</Link>
                    </div>
                    <div className='btn'><button>Buy Now</button></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;

