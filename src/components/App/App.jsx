import React, { useEffect, useState } from "react";

import appStyle from "./app.module.css"
import Header from "../Header/Header";
import Tools from "../Tools/Tools";
import Brands from "../Brands/Brands";
import NewTools from "../NewTools/NewTools";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import errorIcon from "../../images/icons/Close.svg"
const App = () => {
  const [width, setWidth] = useState()
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width])
  return (
    <>
      {width > 1200 
      ?       
      (<div className={appStyle.app}>
        <Header/>
        <main>
          <Tools/>
          <Brands/>
          <NewTools/>
          <Team/>
          <Contact/>
        </main>
        <Footer/>
      </div>)
      :
      (<div className={appStyle.app__mobile}>
        <img src={errorIcon} alt="error" className={appStyle.app__mobile__image}/>
        <h3 className={appStyle.app__mobile__title}>Error</h3>
        <p className={appStyle.app__mobile__text}>Sorry, but the application does not work on non-desktop devices.</p>
        <p className={appStyle.app__mobile__author}>@2023 Created by Azat Frontend Developer</p>
      </div>)
      }
    </>
  );
}


export default App;
