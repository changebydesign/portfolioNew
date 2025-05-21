/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.404 8.31L0 16.621v14.636c0 14.2.025 14.667.839 15.689.58.73 1.22 1.054 2.083 1.054 1.064 0 2.17-.902 7.595-6.2 5.153-5.032 6.563-6.2 7.483-6.2.92 0 2.33 1.168 7.483 6.2 5.426 5.298 6.53 6.2 7.595 6.2.863 0 1.502-.323 2.083-1.054.814-1.022.839-1.489.839-15.69V16.622l-8.404-8.31C20.463 1.255 19.012 0 18 0c-1.012 0-2.463 1.256-9.596 8.31zm16.613 4.052l6.13 6.362v10.05c0 8.84-.079 10.08-.648 10.296-.465.177-3.808-2.88-11.932-10.91C12.36 22.026 7.28 16.828 7.28 16.609 7.28 15.936 17.542 6 18.236 6c.358 0 3.41 2.863 6.78 6.362zM10.169 26.675c2.194 2.131 3.988 4.07 3.988 4.307 0 .238-1.803 2.21-4.008 4.382-2.793 2.752-4.204 3.875-4.652 3.705-.557-.211-.643-1.279-.643-7.99 0-4.26.121-7.866.27-8.012.58-.573 1.193-.135 5.045 3.608z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
