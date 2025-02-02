import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import { FaTiktok } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>VCTRY</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contacts'>Contacts</a></li> 
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/johnson-victory-1b19591b1/' target="_blank"><BsLinkedin className='footer__option-icon'/></a>
        <a href='https://www.instagram.com/genz_dev/' target="_blank"><AiFillInstagram /></a>
        <a href='https://twitter.com' target="_blank"><BsTwitter /></a>
        <a href='https://www.tiktok.com/@genz_dev?is_from_webapp=1&sender_device=pc' target="_blank"><FaTiktok /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; johnson Victory's Portfoio. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer