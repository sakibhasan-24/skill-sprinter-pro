import React from "react";
import { motion } from "framer-motion";
export default function FAQ() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-12">
      <h1 className="text-center my-6 font-bold text-4xl">
        Most <span className="text-orange-500">Asked</span> Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <motion.div
          className="shadow-xl rounded-lg p-6 space-y-3"
          whileHover={{ scale: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-slate-600">
            How do I get started?
          </h2>
          <div className="font-sans">
            <p>
              You can get started by clicking the register button on the
              homepage.
            </p>
            <p>
              then log in .you can submit any assignment .also you can give
              marks others assignment
            </p>
          </div>
        </motion.div>
        <motion.div
          className="shadow-xl rounded-lg p-6 space-y-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-600">
            can someone edit my questions?
          </h2>
          <div className="font-sans">
            <p>No,we authorized you to edit your question only.</p>
            <p>we don't allow anyone to edit your question and vic versa.</p>
          </div>
        </motion.div>
        <motion.div
          className="shadow-xl rounded-lg p-6 space-y-3"
          animate={{ x: [20, 0, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-slate-600">
            Can i check my marks?
          </h2>
          <div className="font-sans">
            <p>Yes you can.</p>
            <p>By clicking profile you can see your marks.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
