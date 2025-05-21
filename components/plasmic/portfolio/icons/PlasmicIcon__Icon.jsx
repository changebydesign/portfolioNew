/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.5 2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10.67 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>

      <path
        d={"M18 14c-1.333-2.21-4.318-4-8-4-3.682 0-6.667 1.79-8 4"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
