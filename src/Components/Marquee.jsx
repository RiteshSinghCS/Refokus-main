import { motion } from "framer-motion";
import React from "react";

function Marquee({ imgsUrl,direction }) {
  return (
    <div className="flex items-center w-full relative overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        className="flex gap-20  flex-shrink-0 "
      >
        {imgsUrl.map((elem, index) => (
          <img
            key={index}
            className="w-24 py-8 h-18 pr-2 flex-shrink-0"
            src={elem}
            alt=""
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        className="flex gap-20  flex-shrink-0 "
      >
        {imgsUrl.map((elem, index) => (
          <img
            key={index}
            className="w-24 py-8 h-18 pr-2 flex-shrink-0"
            src={elem}
            alt=""
          />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
