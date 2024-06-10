"use client";

import React from "react";
import "github-markdown-css/github-markdown.css";
import Navbar from "@/app/component/Navbar";
import ReactIcon from "../../icons/reactIcon";
import NextdotjsIcon from "@/app/icons/nextdotjsIcon";
import FramerIcon from "@/app/icons/framerIcon";

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-20 pt-40 gap-10">
        <div className="flex flex-col w-3/4 gap-10">
          <div className="text-main font-black text-5xl">포트폴리오 사이트</div>
          <div className="text-des text-2xl">
            저를 담아낸 간단한 사이트입니다!
          </div>

          <div className="bg-slate-300 h-[1px] w-full" />
          <div className="text-main font-black text-3xl">Overview 🤔</div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Idea</div>
              <div className="bg-slate-100 rounded-lg p-4 min-w-20">
                PDF로는 보여드리지 못하는 부분까지 보여드리고자 만들었습니다.
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
                <div className="flex items-center gap-1 text-sub border border-slate-300 w-auto rounded-full p-1 min-w-20 text-xs px-2">
                  <FramerIcon /> Motion Framer
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Period</div>
              <div>2024.05.20 ~ 진행중</div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Members</div>
              <div>FE 1명</div>
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
                  PreLoader 컴포넌트 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  Motion Framer를 이용한 다양한 효과 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  Custom Carousel을 이용한 프로젝트 디스플레이
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  마크다운 형식의 프로젝트 상세페이지 직접 구현
                </div>
              </div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Challenges ⚔️</div>

          <div className="space-y-6">
            <div className="text-xl text-main">1. Deployments & Domains</div>
            <div className="pl-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                클라우드 서버를 구성하기에 비용과 알아야 할 점들이 많아서
                차선택으로 Vercel을 사용하여 간단하게 배포 진행
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                도메인 구매를 위해 DNS, 네임서버 및 URL과의 차이점 스터디
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                데일리 스크럼, 스프린트 미팅 및 개인 미팅 주도
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-xl text-main">
              2. Deep Dive into Motion Framer
            </div>
            <div className="pl-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                클라우드 서버를 구성하기에 비용과 알아야 할 점들이 많아서
                차선택으로 Vercel을 사용하여 간단하게 배포 진행
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                도메인 구매를 위해 DNS, 네임서버 및 URL과의 차이점 스터디
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                데일리 스크럼, 스프린트 미팅 및 개인 미팅 주도
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
