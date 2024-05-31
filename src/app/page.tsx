"use client";

import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/outline";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import FlutterIcon from "./images/flutterIcon";
import IconColor from "./model/colors";
import StackTooltip from "./component/FrontStack";
import FrontStack from "./component/FrontStack";
import BackStack from "./component/BackStack";
import AppStack from "./component/AppStack";
import ToolStack from "./component/ToolStack";

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

      {/* 1.5번째 페이지: 프로필 */}

      {/* 두번째 페이지: 스택 */}
      <section className="flex relative flex-grow-[1] h-[400vh]">
        {/* navBar */}
        <div className="sticky top-10 flex flex-col h-screen">
          <button>123</button>
          <button>123</button>
          <button>123</button>
        </div>

        <div className="flex h-[100vh] w-[100vw] items-center justify-center">
          <div className="w-3/4 flex flex-col gap-4">
            <div className="text-3xl">Stack</div>
            <div className="text-lg">Frontend</div>
            <FrontStack />
            <div className="text-lg">Backend</div>
            <BackStack />
            <div className="text-lg">App & Etc.</div>
            <AppStack />
            <div className="text-lg">Tools</div>
            <ToolStack />
          </div>
        </div>
      </section>
      {/* 세번째 페이지: 프로젝트 */}
      <div className="flex h-[100vh]"></div>
    </div>
  );
}

export default Home;
