import React from "react";

import footerStyle from "./footer.module.css"
import footerLogo from "../../images/icons/logo.svg"
const Footer = () => {
  return ( 
    <footer className={`${footerStyle.footer} footer`}>
      <div className={footerStyle.footer__block}>
        <div className={footerStyle.footer__logo__block}>
          <img src={footerLogo} alt="Logo" className={footerStyle.footer__logo} />
          <h3 className={footerStyle.footer__logo__text}>antools.</h3>
        </div>
        <h5 className={footerStyle.footer__copyright__text}>Copyright 2021. Antools</h5>
        <p className={footerStyle.footer__text}>Antool is a web collection of information on paid or free Design and Development tools</p>
      </div>
      <div className={footerStyle.footer__block}>
        <h4 className={footerStyle.footer__title}>Contact Us</h4>
        <address className={footerStyle.footer__info__company}>
          <a href="tel:+621987463" className={footerStyle.footer__link}>+621987463</a>
          <a href="/#" className={footerStyle.footer__link}>M Building, No.10 A</a>
          <a href="mailto:antools@awesome.com" className={footerStyle.footer__link}>antools@awesome.com</a>
        </address>
        </div>
      <div className={footerStyle.footer__block}>
        <h4 className={footerStyle.footer__title}>Categories</h4>
        <address className={footerStyle.footer__info__company}>
          <a href="/#" className={footerStyle.footer__link}>Design</a>
          <a href="/#" className={footerStyle.footer__link}>Development</a>
        </address>
        </div>
      <div className={footerStyle.footer__block}>
        <h4 className={footerStyle.footer__title}>Company Info</h4>
        <address className={footerStyle.footer__info__company}>
          <a href="/#" className={footerStyle.footer__link}>About Us</a>
          <a href="/#" className={footerStyle.footer__link}>Our Partners</a>
          <a href="/#" className={footerStyle.footer__link}>Blog</a>
        </address>
        </div>
    </footer>
  );
}
 
export default Footer;