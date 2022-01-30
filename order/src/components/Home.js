import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div  className="home container"
    initial ={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.6,duration:0.2}}
    >
      <h2>
        Private London Clinic
      </h2>
      <Link to="/base">
        <motion.button
                    whileHover={{
                      scale:1.01,
                      textShadow:"0px 0px 10px rgb(255,255,255)",
                      boxShadow:"0px 0px 10px rbg(255,255,255)"
                    }}
        >
          Book your appointment
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;