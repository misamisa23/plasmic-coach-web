// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FooterIconFbsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 33"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#7PEyX68nVa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M28.479 28.933a7.357 7.357 0 001.73-2.657c.37-.954.624-2.044.697-3.64.072-1.6.09-2.112.09-6.185 0-4.074-.018-4.585-.09-6.185-.073-1.596-.327-2.686-.697-3.641a7.362 7.362 0 00-1.73-2.657 7.346 7.346 0 00-2.657-1.73c-.954-.37-2.044-.624-3.64-.697-1.6-.073-2.111-.09-6.184-.09s-4.584.017-6.183.09c-1.597.073-2.688.327-3.642.697a7.344 7.344 0 00-2.655 1.73 7.355 7.355 0 00-1.73 2.657c-.372.955-.625 2.045-.697 3.64C1.017 11.867 1 12.378 1 16.452c0 4.073.017 4.584.09 6.184.073 1.597.326 2.687.698 3.641a7.35 7.35 0 001.73 2.657 7.346 7.346 0 002.655 1.73c.954.371 2.045.624 3.642.698 1.599.073 2.11.09 6.183.09s4.584-.017 6.184-.09c1.596-.074 2.686-.327 3.64-.697a7.348 7.348 0 002.657-1.73zm-10.324-17.32h1.932V8.268h-2.471c-2.656 0-3.853 1.26-3.853 3.671v2.57h-1.857v3.263h1.857v6.859h3.568v-6.9h2.49l.266-3.222H17.33v-1.836c0-.76.142-1.06.824-1.06z"
          }
          fill={"#11253E"}
        ></path>
      </g>

      <defs>
        <clipPath id={"7PEyX68nVa"}>
          <path
            fill={"#fff"}
            transform={"translate(1 1.451)"}
            d={"M0 0h30v30H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FooterIconFbsvgIcon;
/* prettier-ignore-end */
