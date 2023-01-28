import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function FourSection() {
    return (
        <>
            <div className='foursection_main'>
                <div className='foursection'>
                    <div className='soldaki'>
                        <h4>Other Pages</h4>
                        <div>
                            <ul>
                                <ul>
                                    <li><Link className='stil' to={"/"}>Home</Link></li>
                                    <hr className='awa'/>
                                    <li><Link className='stil' to={"/addpage"}>AddPage</Link></li>
                                    <hr className='awa'/>
                                    <li><Link className='stil' to={"/sdada"}>Shortcodes</Link></li>
                                    <hr className='awa'/>
                                    <li><Link className='stil' to={"/asdasd"}>About</Link></li>
                                    <hr className='awa'/>
                                    <li><Link className='stil' to={"/adadada"}>Languages</Link></li>
                                    <hr className='awa'/>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className='sagdaki'>
                    <img src='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png'/>
                    <p className='wr'>Awesome and completely free WordPress WooCommerce themes to take your ecommerce website to the next level.</p>
                    <p className='wr'>If you are having problems with theme setup, please feel free to use Colorlib support forum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourSection