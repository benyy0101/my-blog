import { Tooltip } from "@chakra-ui/react";
import React from "react";
import GitIcon from "../images/gitIcon";
import GithubIcon from "../images/githubIcon";
import JiraIcon from "../images/jiraIcon";
import FigmaIcon from "../images/figmaIcon";

function ToolStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="Flutter">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GitIcon fill={`fill-[#F05032] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Github">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GithubIcon fill={`fill-[#181717] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Flutter">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <FigmaIcon fill={`fill-[#F24E1E] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="Flutter">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <JiraIcon fill={`fill-[#0052CC] w-6 h-6`} />
        </div>
      </Tooltip>
    </div>
  );
}

export default ToolStack;
