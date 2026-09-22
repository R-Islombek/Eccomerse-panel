import React from 'react'
import logo from '../Images/logo.png'
import { FaTelegram } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="container">
            <div className="footer__container">
                <ul className='footer__list'>
                  <li className='footer__item'>
                    <img className='footer__img' src={logo} alt="" />
                    <a className='footer__link' href="#">8 800 950-33-98 </a>
                    <a className='footer__link' href="#">г. Москва, ул. Ленина, д. 50</a>
                    <a className='footer__link' href="#">info@hodfutureacademy.ru</a>
                    <FaTelegram/>
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaYoutube/>
                    <a className='footer__link' href="#">© ХОД, Future Academy</a>
                  </li>
                  <li className='footer__item'>
                    <a className='footer__link' href="#">Детям</a>
                    <a className='footer__link' href="#">Робототехника</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                    <a className='footer__link' href="#">Шахматы</a>
                    <a className='footer__link' href="#">Блогинг</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                  </li>
                  <li className='footer__item'>
                    <a className='footer__link' href="#">Подросткам</a>
                    <a className='footer__link' href="#">Детям</a>
                    <a className='footer__link' href="#">Робототехника</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                    <a className='footer__link' href="#">Шахматы</a>
                    <a className='footer__link' href="#">Блогинг</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                  </li>
                  <li className='footer__item'>
                    <a className='footer__link' href="#">Взрослым</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                    <a className='footer__link' href="#">Шахматы</a>
                    <a className='footer__link' href="#">Блогинг</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                  </li>
                  <li className='footer__item'>
                    <a className='footer__link' href="#">Информация</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                    <a className='footer__link' href="#">Шахматы</a>
                    <a className='footer__link' href="#">Блогинг</a>
                    <a className='footer__link' href="#">Создание игр</a>
                    <a className='footer__link' href="#">Программирование</a>
                    <a className='footer__link' href="#">Мультимедиа</a>
                    <a className='footer__link' href="#">Soft skills</a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer