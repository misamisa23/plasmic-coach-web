// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: teoAA_M6SM2
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
import Footer from "../../Footer"; // plasmic-import: 0UCZXj9Zumd/component
import { useScreenVariants as useScreenVariantsaAzWhvm6PjSv1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aAzWHVM6PJSv1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicWhoIsItForCeOs.module.css"; // plasmic-import: teoAA_M6SM2/css
import whoitsforBg1PngUn0YXaAyX from "./images/whoitsforBg1Png.png"; // plasmic-import: un0yXAAyX/picture
import buttonCaretWhitesvg2S5Jbv6HmTb from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: S5jbv6HmTb/picture
import whoitsforBg2Png6Ezsola4F from "./images/whoitsforBg2Png.png"; // plasmic-import: 6Ezsola4F/picture
import coachSeossvgXSpyNpbVc from "./images/coachSeossvg.svg"; // plasmic-import: xSpyNpbVC/picture
import webCeos1PngSxlAkzLyQ from "./images/webCeos1Png.png"; // plasmic-import: SxlAKZLyQ/picture
import webCeos2PngZYDzHNqL from "./images/webCeos2Png.png"; // plasmic-import: Z_YDzHNqL/picture
import webCeos3PngVnpNHmRzv from "./images/webCeos3Png.png"; // plasmic-import: vnpNHmRZV/picture
import webCeos4PngN3AKgplxq from "./images/webCeos4Png.png"; // plasmic-import: n3aKGPLXQ/picture
import phoneCutCeospngIoHbUnIpe from "./images/phoneCutCeospng.png"; // plasmic-import: ioHbUnIPE/picture

export const PlasmicWhoIsItForCeOs__VariantProps = new Array();

export const PlasmicWhoIsItForCeOs__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicWhoIsItForCeOs__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

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
          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            hasGap={true}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div className={classNames(projectcss.all, sty.columns__vCrVl)}>
              <div className={classNames(projectcss.all, sty.column__mnRrs)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__aXge6)}
                  displayHeight={"280px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: whoitsforBg1PngUn0YXaAyX,
                    fullWidth: 507,
                    fullHeight: 667,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__aewV)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__q6Sq4)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kjZgh)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__q7IXu
                      )}
                    >
                      {"COACH FOR CEOs"}
                    </div>

                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "The training tool \nthat helps you learn"
                        : "Cost-effective\n employee training"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4JYh
                    )}
                  >
                    {
                      "Give your employees the knowledge they need\nto excel at their jobs."
                    }
                  </div>

                  <p.Stack
                    as={"button"}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      sty.button__vrC8V
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5MgFo
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__aajfz)}
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
              </div>

              <div className={classNames(projectcss.all, sty.column__kiYib)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__xwShF)}
                  displayHeight={"280px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: whoitsforBg2Png6Ezsola4F,
                    fullWidth: 482,
                    fullHeight: 667,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__qfMak)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"285px"}
              loading={"lazy"}
              src={{
                src: coachSeossvgXSpyNpbVc,
                fullWidth: 203,
                fullHeight: 150,
                aspectRatio: 1.354839
              }}
            />
          </p.Stack>

          <div
            data-plasmic-name={"section2"}
            data-plasmic-override={overrides.section2}
            className={classNames(projectcss.all, sty.section2)}
          >
            <div className={classNames(projectcss.all, sty.columns__tnKvp)}>
              <div className={classNames(projectcss.all, sty.column__nKx7)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kNYba
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"With Coach, "}</React.Fragment>

                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"save money and resources"}
                    </span>

                    <React.Fragment>{" on training and "}</React.Fragment>

                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"maximise the potential"}
                    </span>

                    <React.Fragment>{" of your employees!"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__kn13O)} />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__sYwsK)}
            >
              <div className={classNames(projectcss.all, sty.column__zpTn3)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__o0HSp)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zy4Ka)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webCeos1PngSxlAkzLyQ,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__r66Qm
                    )}
                  >
                    {"Drive discovery\n with insights"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6IHbz
                    )}
                  >
                    {
                      "You used to have ideas about the efficiency of your training. Now you have proof. \nWith data-driven insights, Coach shows whether your expectations match reality. \nBecause we only like surprises on birthdays!"
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__yThLc)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__paTcn)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__vdpIa)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webCeos2PngZYDzHNqL,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xdCgt
                    )}
                  >
                    {"Save time and money by getting employees ready"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wYcRb
                    )}
                  >
                    {
                      "It took some time and money to find the best hire, right? Coach helps you prepare the new employees for real tasks 5x faster and get the best ROI from that hiring - without removing them from the field to do their trainings."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__pddub)}
            >
              <div className={classNames(projectcss.all, sty.column___40WG8)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fIraV)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__caBxe)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webCeos3PngVnpNHmRzv,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pw2Fb
                    )}
                  >
                    {"Hire better professionals \nin the field"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nY52T
                    )}
                  >
                    {
                      "Knowledgeable employees = happy & motivated employees. \nAnd the word of mouth spreads fast - almost as fast as creating training in Coach. "
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__q2520)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___1IntC)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__kbIeh)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webCeos4PngN3AKgplxq,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zxzCr
                    )}
                  >
                    {"Get the most out of each employees’ potential"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0Xg3X
                    )}
                  >
                    {
                      "People forget 70% of it in just after 2 weeks - no matter how good the training is.\nIt’s nobody’s fault, it's science. Coach is built with this fact in mind and works with each employee until the information is placed in the long-term memory. "
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__ni6Qg)} />

          <div className={classNames(projectcss.all, sty.freeBox___4JFhM)}>
            <div className={classNames(projectcss.all, sty.freeBox__io0Et)}>
              <div className={classNames(projectcss.all, sty.columns___4Cp7O)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__mDk1U)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p5ALj
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gHgXh
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don’t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Together, let’s ensure your company is full of capable and happy employees who thrive at their jobs."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bgnIx)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__x1Sg
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
                        sty.button___7Dyrw
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jxIid
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__di3IM)}
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

                <div className={classNames(projectcss.all, sty.column__whOb1)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__kthjm)}
                    displayHeight={"100%"}
                    displayMaxHeight={"100%"}
                    displayMaxWidth={"220px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: phoneCutCeospngIoHbUnIpe,
                      fullWidth: 430,
                      fullHeight: 743,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

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
  root: ["root", "reusableHeader", "hero", "h1", "section2", "footer"],
  reusableHeader: ["reusableHeader"],
  hero: ["hero", "h1"],
  h1: ["h1"],
  section2: ["section2"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWhoIsItForCeOs__ArgProps,
          internalVariantPropNames: PlasmicWhoIsItForCeOs__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicWhoIsItForCeOs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForCeOs";
  } else {
    func.displayName = `PlasmicWhoIsItForCeOs.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForCeOs = Object.assign(
  // Top-level PlasmicWhoIsItForCeOs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicWhoIsItForCeOs
    internalVariantProps: PlasmicWhoIsItForCeOs__VariantProps,
    internalArgProps: PlasmicWhoIsItForCeOs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForCeOs;
/* prettier-ignore-end */
