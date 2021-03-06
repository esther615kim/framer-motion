import React from 'react';
import {motion} from 'framer-motion';

// framer-motion varaint
const svgVariants ={
  initial:{rotate:-180},
  visible:{
    rotate:0,
    transition:{duration:0.5}
  }
}

const pathVariants= {
  initial:{
    opacity:0,
    pathLength:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}
const Header = () => {
  return (
    <header>
      <div className="logo">
        
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        variants={svgVariants}
        initial="initial"
        animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title"
          initial ={{y:-200}}
          animate={{y:0}}
          transition={{delay:0.3,duration:0.2}}
      >
        <h1>Your Appointment</h1>
      </motion.div>
    </header>
  )
}

export default Header;