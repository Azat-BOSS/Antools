import React, { useState } from "react";

import headerStyle from "./header.module.css"

import headerLogo from "../../images/icons/logo.svg"
import headerSearch from "../../images/icons/search.svg"

import facebookIcon from "../../images/icons/facebook.svg"
import instagramIcon from "../../images/icons/instagram.svg"
import twitterIcon from "../../images/icons/twitter.svg"
import headerArrow from "../../images/icons/arrowHeader.svg"
import { motion } from "framer-motion"

const Header = () => {
  const [link, setLink] = useState("one")

  const changeColorLink = (textLinkNum) => {
    setLink(() => textLinkNum)
  }

  const textAnimationHeader = {
    hidden: {
      x: -100,
      opacity: 0,
      visibility: "hidden"
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.6,
        type: "spring"
      },
    }),
  };

  return ( 
    <motion.header 
    className={headerStyle.header}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}>
      <div className={headerStyle.header__upper}>
        <div className={headerStyle.header__logo__block}>
          <img src={headerLogo} alt="Logo" className={headerStyle.header__logo} />
          <h3 className={headerStyle.header__logo__text}>antools.</h3>
        </div>
        <nav className={headerStyle.header__nav}>
          <a href="/#" 
          className={link === "one" ? headerStyle.header__link_active : headerStyle.header__link} 
          onClick={() => changeColorLink("one")}>Home</a>
          <a href="/#"  
          className={link === "two" ? headerStyle.header__link_active : headerStyle.header__link} 
          onClick={() => changeColorLink("two")}>Categories</a>
          <span className={headerStyle.header__link__block}>
            <a href="/#" 
            className={link === "three" ? headerStyle.header__link_active : headerStyle.header__link} 
            onClick={() => changeColorLink("three")}>My Collections</a>
            <img src={headerArrow} alt="arrow" className={headerStyle.header__link__arrow}/>
           </span>
          <a href="/#" 
           className={link === "four" ? headerStyle.header__link_active : headerStyle.header__link} 
           onClick={() => changeColorLink("four")}>Blog</a>
        </nav>
        <div className={headerStyle.header__buttons__block}>
          <button type="button" className={headerStyle.header__button__login}>Login</button>
          <button type="button" className={headerStyle.header__button__reg}>Sign Up</button>
        </div>
        <button className={headerStyle.header__brg__button} type="button">
          <span className={headerStyle.header__brg__element}></span>
          <span className={headerStyle.header__brg__element}></span>
          <span className={headerStyle.header__brg__element}></span>
        </button>
      </div>

      <div className={headerStyle.header__intro}>
        <div className={headerStyle.header__intro__block__text}>
          <motion.h1 custom={2} variants={textAnimationHeader} className={headerStyle.header__intro__title}>Awesome tools for Designer & Developer.</motion.h1>
          <motion.p custom={3} variants={textAnimationHeader} className={headerStyle.header__intro__text}>Antool is a web collection of information on
           paid or free Design and Development tools
          </motion.p>
          <motion.div custom={4} variants={textAnimationHeader} className={headerStyle.header__search__block}>
            <img src={headerSearch} alt="search" className={headerStyle.header__search__image}/>
            <input type="text" className={headerStyle.header__input} placeholder="find more than 430+ tools..."/>
            <button className={headerStyle.header__search__button}>Search</button>
          </motion.div>
          <motion.ul custom={5} variants={textAnimationHeader} className={headerStyle.header__block__media}>
          <li className={headerStyle.header__li}>
            <a href="/#">
              <img src={facebookIcon} alt="facebook" className={headerStyle.header__fcb}/>
            </a>
          </li>
          <li className={headerStyle.header__li}>
            <a href="/#">
              <img src={instagramIcon} alt="instagram" className={headerStyle.header__inst}/>
            </a>
          </li>
          <li className={headerStyle.header__li}>
            <a href="/#">
              <img src={twitterIcon} alt="twitter" className={headerStyle.header__twit}/>
            </a>
          </li>
        </motion.ul>
        </div>
        <div className={headerStyle.header__bg__image}></div>
      </div>
    </motion.header>
  );
}
 
export default Header;