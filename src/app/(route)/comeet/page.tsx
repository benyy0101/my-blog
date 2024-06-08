"use client";

import React from "react";
import "github-markdown-css/github-markdown.css";
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

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Idea 🤔</div>
              <div className="bg-slate-100 rounded-lg p-4 min-w-20">
                왜 스터디를 모집하는 공간과 스터디를 진행하는 공간이
                분리되어야할까? 라는 불편함에서 시작하였습니다.
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Stack</div>
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

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Period</div>
              <div>2024.01.02 ~ 2024.02.18</div>
            </div>

            <div className="space-y-4">
              <div className="text-xl font-bold text-main">Members</div>
              <div>FE 3명, BE 3명</div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Achievements</div>

          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-xl text-main">1. Frontend Developer</div>
              <div className="pl-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  UI 디자인
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  소셜 로그인 및 회원가입 페이지 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  스터디방 목록 페이지 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  스터디룸 채널 및 라운지 구현
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  쪽지 및 팔로잉/팔로워 모달 구현
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-xl text-main">2. Product Manager</div>
              <div className="pl-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  아이디어, ERD, API, Figma 등 기획 및 설계 주도
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  Jira를 이용한 프로젝트 운영
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  Git Flow 방식으로 프로젝트 형상관리
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-1.5 h-1.5 rounded-full" />
                  데일리 스크럼, 스프린트 미팅 및 개인 미팅 주도
                </div>
              </div>
            </div>
          </div>

          <div className="text-main font-black text-3xl">Challenges</div>

          <div className="text-main font-black text-3xl">Retrospective</div>
        </div>
      </div>
    </>
  );
}

export default Page;
