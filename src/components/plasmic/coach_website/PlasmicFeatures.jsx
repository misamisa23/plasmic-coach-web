// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: O4MESrAuYA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ReusableHeader from "../../ReusableHeader"; // plasmic-import: OcmELIHcZf/component
import { ShowcaseComponentMobile } from "components/Showcase/ShowcaseComponentMobile"; // plasmic-import: x6LsJ1l76J/codeComponent
import { ShowcaseComponent } from "components/Showcase/ShowcaseComponent"; // plasmic-import: MpmSfV-HL-/codeComponent
import { WebShowcaseComponent } from "components/Showcase/WebShowcaseComponent"; // plasmic-import: FkLHZQYST3/codeComponent
import { WebShowcaseComponentMobile } from "components/Showcase/WebShowcaseComponentMobile"; // plasmic-import: k4-IeVmZfG/codeComponent
import Footer from "../../Footer"; // plasmic-import: 0UCZXj9Zumd/component
import { useScreenVariants as useScreenVariantsaAzWhvm6PjSv1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aAzWHVM6PJSv1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicFeatures.module.css"; // plasmic-import: O4MESrAuYA/css
import buttonCaretWhitesvg2S5Jbv6HmTb from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: S5jbv6HmTb/picture
import crookedBg4SvgXJa9D6Q77 from "./images/crookedBg4Svg.svg"; // plasmic-import: xJA9D6q77/picture

export const PlasmicFeatures__VariantProps = new Array();

export const PlasmicFeatures__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFeatures__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaAzWhvm6PjSv1()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__goK2K)} />

          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"section1"}
            data-plasmic-override={overrides.section1}
            hasGap={true}
            className={classNames(projectcss.all, sty.section1)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__sa8Tz)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qHSrH)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"copy"}
                    data-plasmic-override={overrides.copy}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.copy)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kHrdw)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__d3ULb
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <h1
                              className={classNames(
                                projectcss.all,
                                projectcss.h1,
                                projectcss.__wab_text,
                                sty.h1___934Az
                              )}
                            >
                              <React.Fragment>
                                <React.Fragment>
                                  {
                                    "Effortlessly train your employees with our "
                                  }
                                </React.Fragment>
                                <span
                                  className={
                                    "plasmic_default__all plasmic_default__span"
                                  }
                                  style={{ color: "#3E7CB1" }}
                                >
                                  {"powerful platform"}
                                </span>
                              </React.Fragment>
                            </h1>
                          }

                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__h1JiI
                        )}
                      >
                        {
                          "Everything you need to create and deploy effective training for your employees."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"button"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.button__kuk4A
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uaBbg
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__x9Qig)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"15px"}
                        loading={"lazy"}
                        src={{
                          src: buttonCaretWhitesvg2S5Jbv6HmTb,
                          fullWidth: 108,
                          fullHeight: 150,
                          aspectRatio: 0.722222
                        }}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__zglE2)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oBfS)}
                  />
                ) : null}
              </div>
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hRn9)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iTreO)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__vq0XS)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__vttdJ
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#000000" }}
                        >
                          {"App - Main features"}
                        </span>
                      </React.Fragment>
                    </h1>
                  ) : null}

                  <div
                    className={classNames(projectcss.all, sty.freeBox__cbVw4)}
                  />
                </p.Stack>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sAoYs)}
                  >
                    <ShowcaseComponentMobile
                      data-plasmic-name={"showcaseComponentMobile"}
                      data-plasmic-override={overrides.showcaseComponentMobile}
                      className={classNames(
                        "__wab_instance",
                        sty.showcaseComponentMobile
                      )}
                    />
                  </div>
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aIlXl)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__pAf6W)}
                    >
                      <ShowcaseComponent
                        data-plasmic-name={"showcaseComponent"}
                        data-plasmic-override={overrides.showcaseComponent}
                        className={classNames(
                          "__wab_instance",
                          sty.showcaseComponent
                        )}
                        isLight={true}
                      />
                    </div>
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__au2Jh)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: crookedBg4SvgXJa9D6Q77,
              fullWidth: 300,
              fullHeight: 14,
              aspectRatio: 20.869565
            }}
          />

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ebQBr)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__t8BtC)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__z5UGh
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Admin Panel - Main features"}
                      </span>
                    </React.Fragment>
                  </h1>

                  <div
                    className={classNames(projectcss.all, sty.freeBox___4D6Rd)}
                  />
                </p.Stack>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__roR2D)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oBlHg)}
                  >
                    <WebShowcaseComponent
                      data-plasmic-name={"webShowcaseComponent"}
                      data-plasmic-override={overrides.webShowcaseComponent}
                      className={classNames(
                        "__wab_instance",
                        sty.webShowcaseComponent
                      )}
                      isLight={true}
                    />
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___6WuKw)}
                >
                  <WebShowcaseComponentMobile
                    data-plasmic-name={"webShowcaseComponentMobile"}
                    data-plasmic-override={overrides.webShowcaseComponentMobile}
                    className={classNames(
                      "__wab_instance",
                      sty.webShowcaseComponentMobile
                    )}
                    isLight={false}
                  />
                </div>
              ) : null}
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"cta"}
            data-plasmic-override={overrides.cta}
            hasGap={true}
            className={classNames(projectcss.all, sty.cta)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__leZqB
              )}
            >
              {"READY TO START?"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2U0Vw
              )}
            >
              {
                "Experience the full power of Coach in action, and see why microlearning is your company’s future."
              }
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mnFQh)}
            >
              <p.Stack
                as={"button"}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  sty.button__kqBJc
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__udI1M
                  )}
                >
                  {"GET STARTED"}
                </div>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ourdy)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"15px"}
                  loading={"lazy"}
                  src={{
                    src: buttonCaretWhitesvg2S5Jbv6HmTb,
                    fullWidth: 108,
                    fullHeight: 150,
                    aspectRatio: 0.722222
                  }}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "reusableHeader",
    "section1",
    "columns",
    "copy",
    "showcaseComponentMobile",
    "showcaseComponent",
    "webShowcaseComponent",
    "webShowcaseComponentMobile",
    "cta",
    "footer"
  ],

  reusableHeader: ["reusableHeader"],
  section1: ["section1", "columns", "copy"],
  columns: ["columns", "copy"],
  copy: ["copy"],
  showcaseComponentMobile: ["showcaseComponentMobile"],
  showcaseComponent: ["showcaseComponent"],
  webShowcaseComponent: ["webShowcaseComponent"],
  webShowcaseComponentMobile: ["webShowcaseComponentMobile"],
  cta: ["cta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    section1: makeNodeComponent("section1"),
    columns: makeNodeComponent("columns"),
    copy: makeNodeComponent("copy"),
    showcaseComponentMobile: makeNodeComponent("showcaseComponentMobile"),
    showcaseComponent: makeNodeComponent("showcaseComponent"),
    webShowcaseComponent: makeNodeComponent("webShowcaseComponent"),
    webShowcaseComponentMobile: makeNodeComponent("webShowcaseComponentMobile"),
    cta: makeNodeComponent("cta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
