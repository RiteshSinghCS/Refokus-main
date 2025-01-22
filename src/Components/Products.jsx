import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const product = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description: `We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.`,
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description: `An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.`,
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: `We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.`,
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      description: `A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.`,
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description: `Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.`,
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-20 relative">
      {product.map((elem, index) => {
        return <Product key={index} count={index} mover={mover} val={elem} />;
      })}

      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-[30vw] h-[20rem] absolute top-0 left-1/2 -translate-x-[50%] overflow-hidden"
        >
          {[
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp",
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
            "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cfab581d98facecc35d_YIR2022%20-%20mobile.png",
           
          ].map((items)=>(
            <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          >
            <img
              className="w-full h-full object-cover"
              src={items}
              alt=""
              srcset=""
            />
          </motion.div>
          ))}
         
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
