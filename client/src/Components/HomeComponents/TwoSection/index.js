import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
function TwoSection() {
    return (
        <>
            <div className='twosection_main'>
                <div className='twosection'>
                    <div className='twosection_yazi'>
                        <h3>Do you like this awesome and free WordPress WooCommerce theme?
                        </h3>
                    </div>
                    <div className='twosection_btn'>
                        <button className='wada'><Link className='sow' to={"/sdamdsa"}>DOWNLOAD NOW</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoSection