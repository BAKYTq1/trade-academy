import React from 'react'
import './Footer.scss'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { LiaTelegram } from "react-icons/lia"
import { FaXTwitter } from "react-icons/fa6"
import icon from "../../widgets/assets/image/Mirbek_img/icon.svg"

function Footer() {
  return (
    <footer>
      <div className='up-footer'>
        <ul className='footer-icons'>
          <li className="icon-animation">
            <a href="https://wa.me/2348100000000" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </li>
          <li className="icon-animation delay-1">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </li>
          <li className="icon-animation delay-2">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li className="icon-animation delay-3">
            <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
              <LiaTelegram />
            </a>
          </li>
        </ul>
        <img src={icon} alt="" />
      </div>
      
      <div className='down-footer'>
        <p className="text-animation ">Академия Трейдинга</p>
        <p className="text-animation ">Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer