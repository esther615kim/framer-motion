import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Consultation", "Dermal Fillers", "Profhilo Skin Booster"];

  return (
    <motion.div className="base container"
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{type:'spring', delay:0.3, duration:0.2}}>
      <h3>Step 1</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x:0 }}
          transition={{duration:0.2}}
          >
          <Link
            to="/toppings"
            >
            <motion.button
            whileHover={{
              scale:1.05,
              textShadow:"0px 0px 5px rgb(255,255,255)",
              boxShadow:"0px 0px 5px rbg(255,255,255)"
            }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
