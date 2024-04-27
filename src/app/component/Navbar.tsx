"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed w-full h-16 bg-green-500"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className=" flex justify-between h-full items-center px-6">
        <div>김태수 포트폴리오</div>
        <div className="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <motion.div
        style={{ scaleX }}
        className=" bg-red-500 h-2 w-full origin-top-left"
      />
    </motion.div>
  );
}

export default Navbar;
