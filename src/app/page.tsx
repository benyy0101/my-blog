"use client";

import { useEffect, useState } from "react";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Education from "./section/Education";
import Stack from "./section/Stack";
import Projects from "./section/Projects";

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

				</div>
				<div className="h-full flex-grow-[1] flex justify-start items-center w-full">
					temptemptemp
				</div>
			</div>

			{/* 1.5번째 페이지: 프로필 */}

			{/* 두번째 페이지: 스택 */}
			<section className="flex relative flex-grow-[1] h-[400vh] min-w-[100vw] gap-20">
				{/* navBar */}
				<div className="sticky top-20 flex flex-col h-screen text-6xl font-black items-start gap-4 z-30">
					<button className="text-main">Stacks</button>
					<button className="text-main">Education</button>
					<button className="text-main">Projects</button>
				</div>

				<div className="flex flex-col min-h-[100vh] w-[100vw] items-start justify-start">
					<Stack/>
					<Education/>
					<Projects/>
					{/* 세번째 페이지: 프로젝트 */}
					
				</div>
			</section>
		</div>
	);
}

export default Home;
