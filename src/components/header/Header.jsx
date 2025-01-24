import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Header.css"
import navlogo from "../../assets/click.png"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {pathname} = useLocation()
  const bg = pathname === "/login" ? "bg-slate-800 backdrop-blur-sm text-white" : "bg-slate-200"
  const links = ["Каталог", "Доставка", " Условия", "Контакты"]
  const number = ["+ 375 736 463"]
  return (
    <header id= 'header' className={`header h-[80px] backdrop-blur-sm flex gap-5 p-5 items-center ${bg}`}>
      <div className='container w-5/6'>
        <nav className="navbar py-5 flex items-center justify-between">
        <div className="navbar__logo">
          <Link to={"/"}>
          <img src={navlogo}  alt=""/>
              </Link>
          </div>
          <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar__collection flex gap-7">
              <Link  to={"/about"}>
                About
              </Link>
              <Link  to={"/contact"}>
                Contact
              </Link>
              <Link  to={"/blog"}>
                Blog
              </Link>
              <Link   to={"/login"}>
              Login
              </Link>
            </ul>
          </div>
        <div className=' flex gap-6 text-[20px] items-center'>
          <div class="langs text-[18px]">
                    <select name="langs" id="langs text-[20px]">
                        <option value="English">English</option>
                        <option value="Russia">Russia</option>
                        <option value="Korea">Korea</option>
                        <option value="Mongolia">Mongolia</option>
                    </select>
            </div>
            <div className="navbar__icon">
            <FaCartArrowDown />
            <FaRegHeart />
            </div>
        </div>
          
          <div onClick={toggleMenu} className="navbar__menu text-2xl">
          <AiOutlineMenuUnfold />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header