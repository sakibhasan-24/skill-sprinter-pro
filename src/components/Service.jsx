import React from "react";
import { motion } from "framer-motion";
export default function Service({ service }) {
  // console.log(service);
  return (
    <motion.div
      className="w-4/5 mx-auto shadow-lg p-2  my-6 rounded-lg flex  flex-col "
      animate={{ x: [50, 50, 50], opacity: 1, scale: 1 }}
      transition={{
        duration: 5,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
      <div className="w-full  flex-1 ">
        <img src={service.image} alt="image" />
      </div>
      <div className="text-center my-6">
        <h1 className="font-bold text-center text-xl text-slate-600">
          {service.title}
        </h1>
        <p className="text-slate-500 font-serif">{service.short_description}</p>
      </div>
    </motion.div>
  );
}
