import { Tooltip, Progress } from "@chakra-ui/react";
import React from "react";
import FlutterIcon from "../icons/flutterIcon";
import JavaScriptIcon from "../icons/javasriptIcon";
import IconColor from "../model/colors";
import ReactIcon from "../icons/reactIcon";
import TypescriptIcon from "../icons/typescriptIcon";
import ReactqueryIcon from "../icons/reactqueryIcon";
import NextdotjsIcon from "../icons/nextdotjsIcon";
import ViteIcon from "../icons/viteIcon";
import TailwindIcon from "../icons/tailwindIcon";
import PrismaIcon from "../icons/prismaIcon";
import ReduxIcon from "../icons/reduxIcon";
import FramerIcon from "../icons/framerIcon";

function FrontStack() {
  return (
    <div className="flex gap-4">
      <Tooltip label="Javascript">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <JavaScriptIcon />
        </div>
      </Tooltip>

      <Tooltip label="Typescript">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TypescriptIcon />
        </div>
      </Tooltip>

      <Tooltip label="React">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReactIcon/>
        </div>
      </Tooltip>
      <Tooltip label="Redux">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReduxIcon />
        </div>
      </Tooltip>

      <Tooltip label="React Query">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ReactqueryIcon />
        </div>
      </Tooltip>
      <Tooltip label="Next.js">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <NextdotjsIcon />
        </div>
      </Tooltip>
      <Tooltip label="Prisma">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <PrismaIcon  />
        </div>
      </Tooltip>
      <Tooltip label="Vite">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <ViteIcon />
        </div>
      </Tooltip>
      <Tooltip label="TailwindCSS">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TailwindIcon/>
        </div>
      </Tooltip>

      <Tooltip label="Framer motion">
        <div className="min-w-16 min-h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <FramerIcon/>
        </div>
      </Tooltip>
    </div>
  );
}

export default FrontStack;
