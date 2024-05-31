import { Tooltip, Progress } from "@chakra-ui/react";
import React from "react";
import FlutterIcon from "../images/flutterIcon";
import JavaScriptIcon from "../images/javasriptIcon";
import IconColor from "../model/colors";
import ReactIcon from "../images/reactIcon";
import TypescriptIcon from "../images/typescriptIcon";
import ReactqueryIcon from "../images/reactqueryIcon";
import NextdotjsIcon from "../images/nextdotjsIcon";
import ViteIcon from "../images/viteIcon";
import TailwindIcon from "../images/tailwindIcon";
import PrismaIcon from "../images/prismaIcon";
import ReduxIcon from "../images/reduxIcon";

function FrontStack() {
  return (
    <div className="flex gap-4 px-4">
      <Tooltip label="Javascript">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <JavaScriptIcon fill={`fill-[#F7DF1E] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="Typescript">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TypescriptIcon fill={`fill-[#3178C6] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="React">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReactIcon fill={`fill-[#61DAFB] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Redux">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReduxIcon fill={`fill-[#764ABC] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="React Query">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReactqueryIcon fill={`fill-[#FF4154] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Next.js">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <NextdotjsIcon fill={`fill-[#2D3748] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Prisma">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <PrismaIcon fill={`fill-[#000000] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Vite">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ViteIcon fill={`fill-[#646CFF] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="TailwindCSS">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TailwindIcon fill={`fill-[#06B6D4] w-6 h-6`} />
        </div>
      </Tooltip>
    </div>
  );
}

export default FrontStack;
