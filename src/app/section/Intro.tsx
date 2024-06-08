/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import {
  DocumentTextIcon,
  EnvelopeIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import GithubIcon from "../icons/githubIcon";

function Intro() {
  return (
    <div className="flex h-screen">
      {/* left section */}
      <div className="h-full flex-grow-[1] flex flex-col justify-center items-center w-full text-main ">
        <div className="space-y-8">
          <div className="text-2xl space-y-4">
            <div>안녕하세요!</div>
            <div className="text-6xl">프론트앤드 개발자</div>
            <div>
              <span className="font-bold">김태수</span> 입니다.
            </div>
          </div>

          <div className="w-fit">
            <div>항상 몰입하여 배우고, 꼬리를 잇는 학습으로 성장합니다.</div>
            <div>사용자 경험을 위해 어떤 도전도 마다하지 않습니다. </div>
            <div>혼자가 아닌, 같이 성장함에 기쁨을 느낍니다.</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/benyy0101">
              <Tooltip label="깃허브">
                <div className="border rounded-full border-gray-300 p-2">
                  <GithubIcon />
                </div>
              </Tooltip>
            </a>
            <a href="https://velog.io/@kts9534/posts">
              <Tooltip label="블로그">
                <div className="border rounded-full border-gray-300 p-2">
                  <HomeIcon className="w-6 h-6" />
                </div>
              </Tooltip>
            </a>

            <a href="https://drive.google.com/file/d/1LdvfC4jT2g9KlhFcErwhEV0Jt0--woij/view?usp=sharing">
              <Tooltip label="이력서">
                <div className="border rounded-full border-gray-300 p-2">
                  <DocumentTextIcon className="w-6 h-6" />
                </div>
              </Tooltip>
            </a>

            <a href="https://drive.google.com/file/d/1waIJ3h-j8EOSq4LVVjJhatuuF5RZAFej/view?usp=sharing">
              <Tooltip label="포트폴리오 PDF">
                <div className="border rounded-full border-gray-300 p-2">
                  <PresentationChartBarIcon className="w-6 h-6" />
                </div>
              </Tooltip>
            </a>

            <Tooltip label="이메일">
              <div className="border rounded-full border-gray-300 p-2">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="h-full flex-grow-[1] flex justify-start items-center w-full">
        사진이 준비중에 있습니다!
      </div>
    </div>
  );
}

export default Intro;
