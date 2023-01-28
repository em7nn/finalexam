import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Navbar() {
    return (
        <>
            <div className='navbar_main'>
                <div className='navbar'>
                    <div className='navbar_logo'>
                        <h2>Dazzling Demo</h2>
                    </div>
                    <div className='navbar_links'>
                        <ul>
                            <li><Link className='stil' to={"/"}>Home</Link></li>
                            <li><Link className='stil' to={"/addpage"}>AddPage</Link></li>
                            <li><Link className='stil' to={"/sdada"}>Shortcodes</Link></li>
                            <li><Link className='stil' to={"/asdasd"}>About</Link></li>
                            <li><Link className='stil' to={"/adadada"}>Languages</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar