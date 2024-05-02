import React from 'react'
import logo from './ip.jpg'
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src={logo} alt="" className='ms-5' width={50} />
                <ul>
                    <li>Holistic development of youth</li>
                    <li>Inculcation of traditional value system </li>
                    <li>Promotion of use of technology</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h3>Navigation</h3>
                <ul>
                    <li>Home </li>
                    <li>ADMISSION PORTAL</li>
                    <li>ALUMNI PORTAL</li>
                    <li>CONTACT US</li>
                    <li>COLLEGE IN NEWS</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h3>Contact us</h3>
                <ul>
                    <li><a href="https://ipcollegebsr.com/"><FaFacebook /></a></li>
                </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
