import { Tooltip } from "@chakra-ui/react";
import React from "react";
import FlutterIcon from "../images/flutterIcon";
import GetxIcon from "../images/getxIcon";
import TensorFlowIcon from "../images/tensorflowIcon";

function AppStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="Flutter">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <FlutterIcon fill={`fill-[#02569B] w-6 h-6`} />
        </div>
      </Tooltip>
      <Tooltip label="GetX">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GetxIcon fill={`fill-[#8A2BE2] w-6 h-6`} />
        </div>
      </Tooltip>

      <Tooltip label="Tensorflow">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TensorFlowIcon fill={`fill-[#FF6F00] w-6 h-6`} />
        </div>
      </Tooltip>
    </div>
  );
}

export default AppStack;
