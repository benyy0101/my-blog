"use client";

import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/outline";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import FlutterIcon from "./images/flutterIcon";
import IconColor from "./model/colors";
import StackTooltip from './component/StackTooltip';

function Home() {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      {scroll && <Navbar />}
      {/* 첫페이지 */}
      <div className="flex h-[100vh]">
        <div className="h-full flex-grow-[1] flex flex-col justify-center items-end w-full">
          <Intro />
          <div>
            <Tooltip label="hover me">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <HomeIcon />
              </motion.div>
            </Tooltip>
          </div>
        </div>
        <div className="h-full flex-grow-[1] flex justify-start items-center w-full">
          temptemptemp
        </div>
      </div>

      {/* 두번째 페이지 */}

      <div className="flex h-[100vh] justify-center items-center">
        <StackTooltip/>
      </div>
    </div>
  );
}

export default Home;
