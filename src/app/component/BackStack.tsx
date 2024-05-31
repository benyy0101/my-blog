import { Tooltip } from "@chakra-ui/react";
import React from "react";
import JavaScriptIcon from "../images/javasriptIcon";
import SpringbootIcon from "../images/springbootIcon";
import NodedotjsIcon from "../images/nodedotjsIcon";
import MysqlIcon from "../images/mysqlIcon";
import MongoIcon from "../images/mongoIcon";

function BackStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="SpringBoot">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <SpringbootIcon fill={`fill-[#6DB33F] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="Node.js">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <NodedotjsIcon fill={`fill-[#5FA04E] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="Mysql">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <MysqlIcon fill={`fill-[#4479A1] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="MongoDB">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <MongoIcon fill={`fill-[#6DB33F] w-6 h-6`} />
        </div>
      </Tooltip>
    </div>
  );
}

export default BackStack;
