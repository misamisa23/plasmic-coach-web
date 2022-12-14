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
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MenuHeaderDesktop from "../../MenuHeaderDesktop"; // plasmic-import: RhmfQLZ342T/component
import { ShowcaseComponent } from "components/Showcase/ShowcaseComponent"; // plasmic-import: yBETKiGCDw/codeComponent
import { WebShowcaseComponent } from "components/Showcase/WebShowcaseComponent"; // plasmic-import: eVMkkH0Avy/codeComponent
import Footer from "../../Footer"; // plasmic-import: 0UCZXj9Zumd/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicFeatures.module.css"; // plasmic-import: O4MESrAuYA/css
import buttonCaretWhitesvg2S5Jbv6HmTb from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: S5jbv6HmTb/picture

export const PlasmicFeatures__VariantProps = new Array();

export const PlasmicFeatures__ArgProps = new Array();

function PlasmicFeatures__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
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
          <MenuHeaderDesktop
            data-plasmic-name={"menuHeaderDesktop"}
            data-plasmic-override={overrides.menuHeaderDesktop}
            className={classNames("__wab_instance", sty.menuHeaderDesktop)}
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

          <div className={classNames(projectcss.all, sty.freeBox__hRn9)}>
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
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#000000" }}
                >
                  {"App - Main features"}
                </span>
              </React.Fragment>
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox__cbVw4)} />

            <div className={classNames(projectcss.all, sty.freeBox__pAf6W)}>
              <ShowcaseComponent
                data-plasmic-name={"showcaseComponent"}
                data-plasmic-override={overrides.showcaseComponent}
                className={classNames("__wab_instance", sty.showcaseComponent)}
                isLight={true}
              />
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__ebQBr)}>
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
                  {"Admin - Main features"}
                </span>
              </React.Fragment>
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox___4D6Rd)} />

            <div className={classNames(projectcss.all, sty.freeBox__oBlHg)}>
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
                "Experience the full power of Coach in action, and see why microlearning is your company???s future."
              }
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mnFQh)}
            >
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__c4NYb
                )}
              >
                {"BOOK A DEMO"}
              </button>

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
    "menuHeaderDesktop",
    "section1",
    "columns",
    "copy",
    "showcaseComponent",
    "webShowcaseComponent",
    "cta",
    "footer"
  ],

  menuHeaderDesktop: ["menuHeaderDesktop"],
  section1: ["section1", "columns", "copy"],
  columns: ["columns", "copy"],
  copy: ["copy"],
  showcaseComponent: ["showcaseComponent"],
  webShowcaseComponent: ["webShowcaseComponent"],
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
    menuHeaderDesktop: makeNodeComponent("menuHeaderDesktop"),
    section1: makeNodeComponent("section1"),
    columns: makeNodeComponent("columns"),
    copy: makeNodeComponent("copy"),
    showcaseComponent: makeNodeComponent("showcaseComponent"),
    webShowcaseComponent: makeNodeComponent("webShowcaseComponent"),
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
