/* eslint-disable react/button-has-type */

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { Tooltip } from '@chakra-ui/react';

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed w-full h-16 z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        style={{ scaleX }}
        className=" bg-sky-300 h-1 w-full origin-top-left"
      />
      <div className=" flex justify-between h-full items-center px-6">
        <div>TaesooKim.dev</div>
        <div className="flex gap-4">
          <Tooltip>
          <button >github</button>
          </Tooltip>
          
          <button>velog</button>
          <button>email</button>
        </div>
      </div>
      
    </motion.div>
  );
}

export default Navbar;
