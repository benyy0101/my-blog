'use client';

import React from 'react';
import 'github-markdown-css/github-markdown.css';
import Navbar from "@/app/component/Navbar";
import ReactIcon from "../../icons/reactIcon";
import ReduxIcon from "../../icons/reduxIcon";
import OpenViduIcon from "../../icons/openViduIcon";
import ReactqueryIcon from "../../icons/reactqueryIcon";

function Page() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center p-20 pt-40 gap-10">
				<div className="flex flex-col w-3/4 gap-10">
					<div className="text-main font-black text-5xl">코밋</div>
					<div className="text-des text-2xl">
						비대면 스터디 운영, 모임 그리고 관리를 한번에
					</div>

					<div className="bg-slate-300 h-[1px] w-full" />
					<div className="text-main font-black text-3xl">Overview</div>
					<div className="space-y-4">
						<div className="text-xl font-black text-main">Idea</div>
						<div className="bg-slate-100 rounded-lg p-4 min-w-20">왜 스터디를 모집하는 공간과 스터디를 진행하는 공간이 분리되어야할까? 라는 불편함에서 시작하였습니다.</div>
					</div>

					<div className="space-y-4">
						<div className="text-xl font-black text-main">Stack</div>
						<div className="flex w-full gap-2">
							<div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
								<ReactIcon />
								React.js
							</div>
							<div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
								<ReduxIcon /> Redux
							</div>
							<div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
								<OpenViduIcon />
								OpenVidu
							</div>
							<div className="flex items-center justify-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
								Stomp
							</div>
							<div className="flex items-center justify-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
								<ReactqueryIcon />
								React Query
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Page;
