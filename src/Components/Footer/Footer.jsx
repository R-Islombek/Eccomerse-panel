import React from 'react'
import logo from '../Images/logo.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="container">
            <div className="footer__container">
                <ul className='footer__list'>
                  <li className='footer__item'>
                    <img className='footer__img' src={logo} alt="" />
                  </li>
                  <li className='footer__item'></li>
                  <li className='footer__item'></li>
                  <li className='footer__item'></li>
                  <li className='footer__item'></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer