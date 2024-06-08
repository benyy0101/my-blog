import React from "react";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="text-main font-pretendard text-4xl ">
      <div>안녕하세요!</div>
      <div>
        <TypeAnimation
          style={{ fontSize: "1em", width: "7em" }}
          sequence={[
            "배움과 적용으로", // Types 'One'
            1000, // Waits 1s
            "꾸준한 몰입력으로", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
            () => {},
          ]}
          wrapper="span"
          repeat={Infinity}
          preRenderFirstString
        />
        <span>개발하는</span>
      </div>
      <div>
        개발자 <span className="font-bold">김태수</span> 입니다.
      </div>
    </div>
  );
}

export default Intro;
