import React from "react";
import newToolsStyle from "./newtools.module.css"
import ToolsCard from "../ToolsElement/ToolsCard";
import { newCardToolsData } from "../../utils/data";

import { motion } from "framer-motion"
const NewTools = () => {
  const textAnimationNewTools = {
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
    <motion.div className={newToolsStyle.newTools}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.2, once: true}}>
      <div className={newToolsStyle.newTools__block__text}>
        <motion.h2 className={newToolsStyle.newTools__title} custom={1} variants={textAnimationNewTools}>Newcomer Tools</motion.h2>
        <motion.p className={newToolsStyle.newTools__text} custom={2} variants={textAnimationNewTools}>Wow! see the latest update of the most recommended tools from reliable designers and developers</motion.p>
        <motion.button className={newToolsStyle.newTools__button} custom={3} variants={textAnimationNewTools}>Explore more</motion.button>
      </div>
      <motion.div className={newToolsStyle.newTools__block__cards} custom={4} variants={textAnimationNewTools}>
        {newCardToolsData.map(el => (
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
    </motion.div>
  );
}
 
export default NewTools;