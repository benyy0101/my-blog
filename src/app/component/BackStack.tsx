import { Tooltip } from "@chakra-ui/react";
import React from "react";
import JavaScriptIcon from "../icons/javasriptIcon";
import SpringbootIcon from "../icons/springbootIcon";
import NodedotjsIcon from "../icons/nodedotjsIcon";
import MysqlIcon from "../icons/mysqlIcon";
import MongoIcon from "../icons/mongoIcon";

function BackStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="SpringBoot">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <SpringbootIcon />
        </div>
      </Tooltip>

      <Tooltip label="Node.js">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <NodedotjsIcon />
        </div>
      </Tooltip>

      <Tooltip label="Mysql">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <MysqlIcon />
        </div>
      </Tooltip>

      <Tooltip label="MongoDB">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <MongoIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default BackStack;
