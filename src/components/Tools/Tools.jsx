import React, { useEffect } from "react";
import toolsStyle from "./tools.module.css"

import ToolsCard from "../ToolsElement/ToolsCard";

import { getDataTools } from "../../services/actions/action";
import { dataTools } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion"
const Tools = () => {
  const dataCardInfo = useSelector(state => (state.cards.dataCardTool))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataTools(dataTools))
  }, [dispatch])

  const textAnimationTools = {
    hidden: {
      y: 50,
      opacity: 0,
      visibility: "hidden"
    },
    visible: (custom) => ({
      y: 0,
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
    <motion.div 
      className={toolsStyle.tools}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <div className={toolsStyle.tools__text__block}>
        <motion.h2 className={toolsStyle.tools__title} custom={1} variants={textAnimationTools}>Most Popular Tools</motion.h2>
        <motion.p className={toolsStyle.tools__paragraph} custom={2} variants={textAnimationTools}>Tools for the best Designers and Developer most popularly used in the world</motion.p>
      </div>
      <motion.div className={toolsStyle.tools__block__cards} custom={3} variants={textAnimationTools}>
        {dataCardInfo.map(el => (
          <ToolsCard 
            key={el.id}
            image={el.image}
            title={el.title}
            service={el.service}
            text={el.text}
            heart={el.heart}
            folder={el.folder}
            card={el}
            heartActive={el.heartActive}
            id={el.id}/>
        ))}
      </motion.div>
      <button type="button" className={toolsStyle.tools__button__load}>Load More</button>
    </motion.div>
  );
}
 
export default Tools;