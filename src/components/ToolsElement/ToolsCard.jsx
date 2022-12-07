import React, { useState } from "react";
import toolsCardStyle from "./toolscard.module.css"

const ToolsCard = ({image, title, service, text, heart, heartActive, folder}) => {
  const [state, setState] = useState(false)
  const changeStateCard = () => {
    setState(prevState => !prevState)
  }

  return (  
  <div className={toolsCardStyle.tools__card }>
    <div className={toolsCardStyle.tools__card__upper}>
      <img src={image} alt={title} className={toolsCardStyle.tools__main__image}/>
    <div className={toolsCardStyle.tools__card__tool__info}>
      <h4 className={toolsCardStyle.tools__tool__name}>{title}</h4>
      <p className={toolsCardStyle.tools__tool__service}>{service}</p>
    </div>
    </div>
      <p className={toolsCardStyle.tools__tool__info__text}>{text}</p>
      <div className={toolsCardStyle.tools__card__down}>
        <div className={toolsCardStyle.tools__card__down__images}>
          <button type="button">
            <img src={state === true ? heartActive : heart} alt="heart" className={toolsCardStyle.tools__heart__icon} onClick={() => changeStateCard()}/>
          </button>
          <button type="button">
            <img src={folder} alt="folder" className={toolsCardStyle.tools__heart__folder}/>
          </button>
        </div>
        <button className={toolsCardStyle.tools__card__button}>Visit</button>
      </div>
  </div>
  );
}
 
export default ToolsCard;