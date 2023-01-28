import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Footer() {
  return (
    <>
       <div className='footer_main'>
                <div className='footer'>
                    <div className='footer_links'>
                    <ul>
                            <li><Link className='stil' to={"/"}>Home</Link></li>
                            <li><Link className='stil' to={"/addpage"}>AddPage</Link></li>
                            <li><Link className='stil' to={"/sdada"}>Shortcodes</Link></li>
                            <li><Link className='stil' to={"/asdasd"}>About</Link></li>
                            <li><Link className='stil' to={"/adadada"}>Languages</Link></li>
                        </ul>
                    </div>
                    <div className='footer_yazi'>
                      <p><a href='#'>Dazzling Demo</a> All rights reserved. Theme by <a href='#' >Colorlib</a> Powered by <a href='#'>WordPress</a></p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer