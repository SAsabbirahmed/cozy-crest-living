import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side  */}
            <div className="flexColStart f-left">
                <img src="./Cozy_Crest_Living.png" alt="logo" width={150}/>
                <span className="secondaryText">
                Our vision is to make all people
the best        <br/>place to live for them.
                </span>
            </div>

            {/* Right Side  */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Plot# 06, Avenue# 06, Sector# 17/H-1, Uttara, Dhaka-1230</span>
            
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer