import React from "react";
import { IconProps } from "../model/commons";

function KotlinIcon({ fill }: IconProps): React.JSX.Element {
  return (
    <svg
      className={fill}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kotlin</title>
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  );
}

export default KotlinIcon;
