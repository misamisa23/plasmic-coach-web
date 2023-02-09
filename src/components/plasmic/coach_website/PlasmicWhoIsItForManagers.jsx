// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: CslIQr77kIH
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
import sty from "./PlasmicWhoIsItForManagers.module.css"; // plasmic-import: CslIQr77kIH/css
import whoitsforBg1PngUn0YXaAyX from "./images/whoitsforBg1Png.png"; // plasmic-import: un0yXAAyX/picture
import buttonCaretWhitesvg2S5Jbv6HmTb from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: S5jbv6HmTb/picture
import whoitsforBg2Png6Ezsola4F from "./images/whoitsforBg2Png.png"; // plasmic-import: 6Ezsola4F/picture
import coachManagerssvgRqDhaxaBv from "./images/coachManagerssvg.svg"; // plasmic-import: RqDhaxaBV/picture
import webManagers1PngEkDydkqcZ from "./images/webManagers1Png.png"; // plasmic-import: ekDydkqcZ/picture
import webManagers2PngX6MBdPqxW from "./images/webManagers2Png.png"; // plasmic-import: X6mBDPqxW/picture
import webManagers3Png2WLHdfo from "./images/webManagers3Png.png"; // plasmic-import: 2_wLHdfo_/picture
import webManagers4PngQ36Wj7Su7 from "./images/webManagers4Png.png"; // plasmic-import: q36Wj7Su7/picture
import phoneCutManagerspngRiB9WdHzJ from "./images/phoneCutManagerspng.png"; // plasmic-import: RiB9WdHzJ/picture

export const PlasmicWhoIsItForManagers__VariantProps = new Array();

export const PlasmicWhoIsItForManagers__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicWhoIsItForManagers__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.freeBox__tTGll)} />

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
            <div className={classNames(projectcss.all, sty.columns__nmdft)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column___5UgaU)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__e5B5Q)}
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
              ) : null}

              <div className={classNames(projectcss.all, sty.column__i9SaE)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2G39)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8ORd)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xoFS
                      )}
                    >
                      {"COACH FOR MANAGERS"}
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
                        : "Provide employees the training they deserve"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bOq1X
                    )}
                  >
                    {
                      "Keep employees motivated\nand get better evaluation results!"
                    }
                  </div>

                  <p.Stack
                    as={"a"}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__lAof1
                    )}
                    href={"https://calendly.com/kalina-t/30min"}
                    target={"_blank"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pXBw
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___679Kv)}
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

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__iq6FF)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___9S8Qq)}
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
              ) : null}
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__tOyVo)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "240px"
                  : "310px"
              }
              loading={"lazy"}
              src={{
                src: coachManagerssvgRqDhaxaBv,
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
            <div className={classNames(projectcss.all, sty.freeBox__izkR4)} />

            <div className={classNames(projectcss.all, sty.columns__eUk4D)}>
              <div className={classNames(projectcss.all, sty.column__pYmSj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e4Ev3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"Coach provides "}</React.Fragment>

                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"insights"}
                    </span>

                    <React.Fragment>
                      {
                        " into the knowledge your employees get from your trainings, and helps you "
                      }
                    </React.Fragment>

                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"improve"}
                    </span>

                    <React.Fragment>{" them!"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__zATdb)}
            >
              <div className={classNames(projectcss.all, sty.column__mu6OK)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dKXcu)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__bkrtx)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webManagers1PngEkDydkqcZ,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tpEui
                    )}
                  >
                    {"Easily save time on training creation"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qmeWy
                    )}
                  >
                    {
                      "Coach is here to save your time - so you can spend it where you need it the most. "
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___4680Z)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dKhtc)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qb0R)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webManagers2PngX6MBdPqxW,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1YRjw
                    )}
                  >
                    {"Stay aware of employees’\nknowledge gaps"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wzd2L
                    )}
                  >
                    {
                      "What you think your employees have learned from their training, isn't what it actually looks like. To really understand the knowledge acquired, Coach does the hard work for you."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___6MSn1)}
            >
              <div className={classNames(projectcss.all, sty.column___0CnQ)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__c5Gv3)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__fSwY)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webManagers3Png2WLHdfo,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ao3M3
                    )}
                  >
                    {"Keep employees motivated and engaged "}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eTcd
                    )}
                  >
                    {
                      "Building a fun working environment that is also productive is a challenge. A fun one, though! Coach lets you tap into the power of play and stimulate employees’ learning retention to improve company culture."
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__ltAk)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__j6X8F)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__fsnN0)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"400px"}
                    loading={"lazy"}
                    src={{
                      src: webManagers4PngQ36Wj7Su7,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wQxxo
                    )}
                  >
                    {"View insights and reports like flashlights"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t1Mhe
                    )}
                  >
                    {
                      "Create beautiful custom reports that executives don't need a Ph.D. to understand. Analyze your training reports and assign additional lessons to employees with knowledge gaps. Because knowledgeable teams make happy clients."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__x63Ij)} />
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__cOaT0)}>
            <div className={classNames(projectcss.all, sty.freeBox__ezw91)}>
              <div className={classNames(projectcss.all, sty.columns___80DK4)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column___6GiL1)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__atrCi
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sPIjD
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don’t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Let's take the next step and see why Coach is the best training tool that your team will use."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gor0)}
                  >
                    <p.Stack
                      as={"a"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__syG7R
                      )}
                      href={"https://calendly.com/kalina-t/30min"}
                      target={"_blank"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1NwgC
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___3DVzd)}
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

                <div className={classNames(projectcss.all, sty.column__yhNuX)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xi1OZ)}
                    displayHeight={"100%"}
                    displayMaxHeight={"100%"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "180px"
                        : "220px"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: phoneCutManagerspngRiB9WdHzJ,
                      fullWidth: 430,
                      fullHeight: 742,
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
          internalArgPropNames: PlasmicWhoIsItForManagers__ArgProps,
          internalVariantPropNames: PlasmicWhoIsItForManagers__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicWhoIsItForManagers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForManagers";
  } else {
    func.displayName = `PlasmicWhoIsItForManagers.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForManagers = Object.assign(
  // Top-level PlasmicWhoIsItForManagers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicWhoIsItForManagers
    internalVariantProps: PlasmicWhoIsItForManagers__VariantProps,
    internalArgProps: PlasmicWhoIsItForManagers__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForManagers;
/* prettier-ignore-end */
