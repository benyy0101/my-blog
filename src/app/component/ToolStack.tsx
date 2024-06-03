import { Tooltip } from "@chakra-ui/react";
import React from "react";
import GitIcon from "../icons/gitIcon";
import GithubIcon from "../icons/githubIcon";
import JiraIcon from "../icons/jiraIcon";
import FigmaIcon from "../icons/figmaIcon";

function ToolStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="Git">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GitIcon />
        </div>
      </Tooltip>
      <Tooltip label="Github">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GithubIcon />
        </div>
      </Tooltip>
      <Tooltip label="Figma">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <FigmaIcon />
        </div>
      </Tooltip>
      <Tooltip label="Jira">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <JiraIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default ToolStack;
