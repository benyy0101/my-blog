import { Tooltip } from "@chakra-ui/react";
import React from "react";
import FlutterIcon from "../icons/flutterIcon";
import GetxIcon from "../icons/getxIcon";
import KotlinIcon from "../icons/kotlinIcon";
import PwaIcon from "../icons/pwaIcon";

function AppStack() {
  return (
    <div className="flex gap-6">
      <Tooltip label="Flutter">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <FlutterIcon />
        </div>
      </Tooltip>

      <Tooltip label="Kotlin">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <KotlinIcon />
        </div>
      </Tooltip>
      <Tooltip label="GetX">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <GetxIcon/>
        </div>
      </Tooltip>

      <Tooltip label="PWA">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <PwaIcon />
        </div>
      </Tooltip>

      {/* <Tooltip label="Tensorflow">
        <div className="w-16 h-16 shadow-lg bg-slate-50 flex justify-center items-center rounded-lg">
          <TensorFlowIcon fill={`fill-[#FF6F00] w-6 h-6`} />
        </div>
      </Tooltip> */}
    </div>
  );
}

export default AppStack;
