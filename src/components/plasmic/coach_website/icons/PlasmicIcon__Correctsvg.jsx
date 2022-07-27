// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CorrectsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.95 21.145c-.364 0-.715-.139-.98-.389l-5.269-5.342a1.368 1.368 0 010-1.849 1.386 1.386 0 011.96 0L11.95 17.8l9.576-9.577a1.392 1.392 0 111.96 1.979L12.93 20.756a1.368 1.368 0 01-.98.389z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CorrectsvgIcon;
/* prettier-ignore-end */
