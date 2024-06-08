import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Preloader() {
  const [idx, setIdx] = useState<number>(0);
  const words = [
    "안녕하세요!",
    "김태수의",
    "포트폴리오에",
    "오신것을",
    "환영합니다",
  ];

  useEffect(() => {
    if (idx === words.length - 1) return;

    setTimeout(
      () => {
        setIdx(idx + 1);
      },
      idx === 0 ? 1000 : 150
    );
  }, [idx]);

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={{
        initial: {
          y: "0",
        },
        exit: {
          y: "-100vh",
          transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
          },
        },
      }}
      initial="initial"
      exit="exit"
      className="w-screen h-screen fixed top-0 left-0 z-50 bg-main text-white flex justify-center items-center"
    >
      <motion.p
        variants={opacity}
        initial="initial"
        animate="enter"
        className="text-4xl"
      >
        {words[idx]}
      </motion.p>
    </motion.div>
  );
}

export default Preloader;
