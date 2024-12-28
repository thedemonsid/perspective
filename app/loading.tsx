"use client";

import React from "react";
import { motion } from "framer-motion";

const formulas = [
  "E = mc²",
  "F = ma",
  "a² + b² = c²",
  "PV = nRT",
  "F = G(m₁m₂)/r²",
];

const InteractiveLoader: React.FC = () => {
  const [currentFormula, setCurrentFormula] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFormula((prev) => (prev + 1) % formulas.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="text-4xl font-bold text-indigo-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Loading Knowledge...
      </motion.div>

      <motion.div
        className="relative w-40 h-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-indigo-500 rounded-full"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
          }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-purple-500 rounded-full"
          style={{
            borderLeftColor: "transparent",
            borderTopColor: "transparent",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border-4 border-pink-500 rounded-full"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        key={currentFormula}
        className="text-2xl font-semibold text-gray-700 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {formulas[currentFormula]}
      </motion.div>

      <div className="mt-8 text-gray-600">
        <p>Prepare for an interactive learning experience!</p>
      </div>
    </div>
  );
};

export default InteractiveLoader;
