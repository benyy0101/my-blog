"use client";

import { Progress, Tooltip } from "@chakra-ui/react";
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
      <section className="flex relative flex-grow-[1] h-[400vh] min-w-[100vw] gap-20">
        {/* navBar */}
        <div className="sticky top-20 flex flex-col h-screen text-6xl font-black items-start gap-4">
          <button className="text-main">Stacks</button>
          <button className="text-main">Education</button>
          <button className="text-main">Projects</button>
        </div>

        <div className="flex flex-col min-h-[100vh] w-[100vw] items-start justify-start">
          <div className="flex flex-col gap-6 min-h-[150vh]">
            <div className="font-bold text-4xl text-main">Frontend</div>
            <FrontStack />
            <div className="text-sub">
              정적 타입과 커스텀 훅, 그리고 적절한 랜더링 방식으로 필요한
              페이지를 구성 할 수 있습니다
            </div>
            <div className="font-bold text-4xl text-main">Backend</div>
            <BackStack />
            <div className="text-sub">
              MVC패턴을 중심으로 서버를 이해하고, 테이블간의 관계를 파악할 수
              있습니다
            </div>
            <div className="font-bold text-4xl text-main">App</div>
            <AppStack />
            <div className="text-sub">
              기초적인 코틀린 네이티브를 이해하고, 플러터를 통해 앱을 만들 수
              있습니다.
            </div>
            <div className="font-bold text-4xl text-main">Tools</div>
            <ToolStack />
            <div className="text-sub">
              Git Flow를 사용하여 버전관리를 하고, Jira 티켓을 통해 프로젝트를
              관리합니다.
            </div>
          </div>

          {/* 세번째 페이지: 프로젝트 */}
          <div className="flex min-h-[100vh] flex-col gap-20">
            <div className="text-4xl text-main font-bold">Education</div>
            <div className="bg-main h-3 w-3 rounded-full">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
