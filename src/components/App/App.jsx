import React from "react";

import appStyle from "./app.module.css"
import Header from "../Header/Header";
import Tools from "../Tools/Tools";
import Brands from "../Brands/Brands";
import NewTools from "../NewTools/NewTools";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className={appStyle.app}>
        <Header/>
      <main>
        <Tools/>
        <Brands/>
        <NewTools/>
        <Team/>
        <Contact/>
      </main>
        <Footer/>
    </div>
  );
}


export default App;
