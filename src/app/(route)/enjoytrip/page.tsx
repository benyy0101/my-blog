"use client";

import { Tooltip } from "@chakra-ui/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import React from "react";

function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-8">
      <div className="text-8xl text-main text-bold">404</div>
      <div className="text-des flex flex-col items-center">
        <div>죄송합니다! 페이지 준비중에 있습니다</div>
        <div>불편하시더라도 포트폴리오 PDF를 참고해 주세요</div>
      </div>
      <a href="https://drive.google.com/file/d/1waIJ3h-j8EOSq4LVVjJhatuuF5RZAFej/view?usp=sharing">
        <Tooltip label="포트폴리오 PDF">
          <div className="border rounded-full border-gray-300 p-2 w-fit px-4">
            포트폴리오 PDF 바로가기
          </div>
        </Tooltip>
      </a>
    </div>
  );
}
export default Page;
