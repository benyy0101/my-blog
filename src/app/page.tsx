/* eslint-disable react/button-has-type */

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Education from "./section/Education";
import Stack from "./section/Stack";
import Projects from "./section/Projects";
import SideNav from "./component/SideNav";
import Preloader from "./component/Preloader";

function Home() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {scroll && <Navbar />}
      {/* 첫페이지 */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="flex h-[100vh]">
        <div className="h-full flex-grow-[1] flex flex-col justify-center items-end w-full">
          <Intro />
        </div>
        <div className="h-full flex-grow-[1] flex justify-start items-center w-full">
          temptemptemp
        </div>
      </div>

      {/* 1.5번째 페이지: 프로필 */}

      {/* 두번째 페이지: 스택 */}
      <section className="flex relative flex-grow-[1] h-[800vh] min-w-[100vw] gap-20 p-20">
        {/* navBar */}
        <SideNav />

        <div className="flex flex-col min-h-[100vh] w-[100vw] items-start justify-start">
          <Stack />
          <Education />
          <Projects />

          {/* 세번째 페이지: 프로젝트 */}
        </div>
      </section>
    </div>
  );
}

export default Home;
