"use client";

import React from "react";
import "github-markdown-css/github-markdown.css";
import Navbar from "@/app/component/Navbar";
import ReactIcon from "../../icons/reactIcon";
import NextdotjsIcon from "@/app/icons/nextdotjsIcon";
import FramerIcon from "@/app/icons/framerIcon";
import ReactqueryIcon from "@/app/icons/reactqueryIcon";
import PwaIcon from "@/app/icons/pwaIcon";
import TailwindIcon from "@/app/icons/tailwindIcon";

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-20 pt-40 gap-10">
        <div className="flex flex-col w-3/4 gap-10">
          <div className="text-main font-black text-5xl">앤디(Andy)</div>
          <div className="text-des text-2xl">
            AI를 이용한 활동성 있는 유아용 낱말퀴즈 게임
          </div>

          <div className="bg-slate-300 h-[1px] w-full" />
          <div className="text-main font-black text-3xl">Overview 🤔</div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Idea</div>
              <div className="bg-slate-100 rounded-lg p-4 min-w-20">
                수동적인 미디어 소비는 유아 발달에 치명적입니다! 그래서 활동성을
                높이면서 학습을 시킬까 고민하다 만들게 되었습니다.
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Stack</div>
              <div className="flex w-full gap-2">
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <NextdotjsIcon />
                  Next.js
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <ReactIcon /> React.js
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-12 text-xs px-2">
                  Zustand
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <FramerIcon /> Motion Framer
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <ReactqueryIcon />
                  React Query
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <PwaIcon />
                  PWA
                </div>
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <TailwindIcon />
                  TailwindCSS
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Period</div>
              <div>2024.02.19 ~ 2024.04.05</div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Members</div>
              <div>FE 3, BE 2, AI 총 6 명</div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Achievements 🎉</div>

          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-xl text-main">Frontend Developer</div>
              <div className="pl-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  UI 디자인
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  소셜 로그인(카카오) 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  찰칵퀴즈(메인 퀴즈) 페이지 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  Next.js 환경에 맞게 React Query Hydration 작업 및 캐싱키 관리
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  ErrorBoundary 및 Suspense를 이용한 선언전 프로그래밍 시도
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  PWA를 이용한 어플리케이션화
                </div>
              </div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Challenges ⚔️</div>

          <div className="space-y-6">
            <div className="text-xl text-main">
              1. Server Rendering & Hydration{" "}
            </div>
            <div className="pl-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                SSR 환경에서 React Query의 작동방식이 CSR과 다르다는 것을
                확인하였습니다.
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                React Query를 통해 서버에서 prefetch한 데이터를 dehydrate후
                클라이언트에서 hydrate 진행합니다.
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />이
                과정을 통해 데이터가 소실되거나, 재요청하는 경우를 방지합니다.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-xl text-main">2. MSW 도입기</div>
            <div className="pl-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                MSW는 통신을 하이재킹해 대신 목업 데이터를 전송해주는 툴입니다.
                이를 이용해 프론트엔드와 백엔드 병렬적 작업을 계획했었습니다.
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                하지만, Next.js 14 버전에 호환되지 않는 이슈가 있었고, express
                서버가 대안으로 사용되고 있었습니다.
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                목업 서버까지 구성하기 일정이 촉박했기 때문에 백앤드 팀과의
                협업은 문서를 통해 진행하였습니다.
              </div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Retrospective 🚩</div>
          <div className="flex items-center gap-4">업데이트 예정입니다!</div>
        </div>
      </div>
    </>
  );
}

export default Page;
