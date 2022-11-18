// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: RhmfQLZ342T
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
import Button from "../../Button"; // plasmic-import: i2u7Uturkgt/component
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsaAzWhvm6PjSv1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aAzWHVM6PJSv1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicMenuHeaderDesktop.module.css"; // plasmic-import: RhmfQLZ342T/css
import coachlogoBlacksvgZ3Py0Ikf4 from "./images/coachlogoBlacksvg.svg"; // plasmic-import: Z3Py0ikf4/picture
import icons8Menusvg9TKQ8Sy from "./images/icons8Menusvg.svg"; // plasmic-import: 9tK_q8Sy_/picture

export const PlasmicMenuHeaderDesktop__VariantProps = new Array("base2");

export const PlasmicMenuHeaderDesktop__ArgProps = new Array();

function PlasmicMenuHeaderDesktop__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "base2",
        type: "private",
        initFunc: ($props, $state) => $props["base2"]
      }
    ],

    [$props]
  );

  const $state = p.useDollarState(stateSpecs, $props);
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaAzWhvm6PjSv1()
  });
  return (
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__u8Yv1, {
          [sty.freeBoxbase2__u8Yv1SkKnm]: hasVariant($state, "base2", "base2")
        })}
      >
        {(
          hasVariant($state, "base2", "base2")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : true
        ) ? (
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns, {
              [sty.columnsbase2]: hasVariant($state, "base2", "base2")
            })}
          >
            {(
              hasVariant($state, "base2", "base2")
                ? true
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__eklhN, {
                  [sty.columnbase2__eklhNSkKnm]: hasVariant(
                    $state,
                    "base2",
                    "base2"
                  )
                })}
              >
                {(
                  hasVariant($state, "base2", "base2")
                    ? true
                    : hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__krSpk, {
                      [sty.freeBoxbase2__krSpkSkKnm]: hasVariant(
                        $state,
                        "base2",
                        "base2"
                      )
                    })}
                  >
                    {(hasVariant($state, "base2", "base2") ? true : true) ? (
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__eH6V,
                          {
                            [sty.linkbase2__eH6VSkKnm]: hasVariant(
                              $state,
                              "base2",
                              "base2"
                            )
                          }
                        )}
                        href={`/`}
                      >
                        {(
                          hasVariant($state, "base2", "base2")
                            ? true
                            : hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : true
                        ) ? (
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__m7H1L, {
                              [sty.imgbase2__m7H1LSkKnm]: hasVariant(
                                $state,
                                "base2",
                                "base2"
                              )
                            })}
                            displayHeight={"39px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"123px"}
                            src={{
                              src: coachlogoBlacksvgZ3Py0Ikf4,
                              fullWidth: 300,
                              fullHeight: 99,
                              aspectRatio: 3.02439
                            }}
                          />
                        ) : null}
                      </a>
                    ) : null}
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__p3ZTa
                        )}
                      >
                        <button
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button__eYzpA
                          )}
                        >
                          {"Sign up"}
                        </button>

                        {true ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__z6Ldp
                            )}
                            color={"clear"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__uXt31
                              )}
                            >
                              {"Log in"}
                            </div>
                          </Button>
                        ) : null}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__qeunp, {
                  [sty.columnbase2__qeunpSkKnm]: hasVariant(
                    $state,
                    "base2",
                    "base2"
                  )
                })}
              >
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tyGcR)}
                  >
                    {true ? (
                      <button
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.button__mwCo7
                        )}
                      >
                        {"SIGN IN"}
                      </button>
                    ) : null}
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hOJf
                        )}
                      >
                        {"or"}
                      </div>
                    ) : null}

                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__rCqCq,
                        {
                          [sty.buttonbase2__rCqCqSkKnm]: hasVariant(
                            $state,
                            "base2",
                            "base2"
                          )
                        }
                      )}
                    >
                      {"REQUEST ACCESS"}
                    </button>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <NavigationBar
            brand={
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__taZr4
                )}
                href={"#"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__crzKm)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: coachlogoBlacksvgZ3Py0Ikf4,
                    fullWidth: 300,
                    fullHeight: 99,
                    aspectRatio: 3.02439
                  }}
                />
              </a>
            }
            className={classNames("__wab_instance", sty.navigationBar__wzCi7)}
            closeButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__yvq8G)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___6YlKd
                  )}
                  href={"/"}
                >
                  {"Home"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__dCqMa
                  )}
                  href={"/"}
                >
                  {"About"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___1Zzc
                  )}
                  href={"/"}
                >
                  {"Contact"}
                </a>
              </React.Fragment>
            }
            openButton={
              <p.PlasmicImg
                data-plasmic-name={"hamburgerMenu"}
                data-plasmic-override={overrides.hamburgerMenu}
                alt={""}
                className={classNames(sty.hamburgerMenu)}
                displayHeight={"25px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"25px"}
                src={{
                  src: icons8Menusvg9TKQ8Sy,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />
            }
            responsiveBreakpoint={768}
          />
        ) : null}
        {(hasVariant($state, "base2", "base2") ? true : true) ? (
          <NavigationBar
            brand={
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__cgk1B
                )}
                href={"#"}
              >
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__oey6J, {
                      [sty.imgbase2__oey6JSkKnm]: hasVariant(
                        $state,
                        "base2",
                        "base2"
                      )
                    })}
                    displayHeight={"39px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"123px"}
                    src={{
                      src: coachlogoBlacksvgZ3Py0Ikf4,
                      fullWidth: 300,
                      fullHeight: 99,
                      aspectRatio: 3.02439
                    }}
                  />
                ) : null}
              </a>
            }
            className={classNames("__wab_instance", sty.navigationBar__ehcn2, {
              [sty.navigationBarbase2__ehcn2SkKnm]: hasVariant(
                $state,
                "base2",
                "base2"
              )
            })}
            closeButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rr7Xk)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xgPPy
                  )}
                  href={"/"}
                >
                  {"Home"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__af3Ld
                  )}
                  href={"/"}
                >
                  {"About"}
                </a>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__cK0Jg
                  )}
                  href={"/"}
                >
                  {"Contact"}
                </a>

                <button
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    projectcss.__wab_text,
                    sty.button__b1Kal,
                    {
                      [sty.buttonbase2__b1KalSkKnm]: hasVariant(
                        $state,
                        "base2",
                        "base2"
                      )
                    }
                  )}
                >
                  {"REQUEST ACCESS"}
                </button>
              </React.Fragment>
            }
            openButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___8AMa9)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "hamburgerMenu"],
  columns: ["columns"],
  hamburgerMenu: ["hamburgerMenu"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMenuHeaderDesktop__ArgProps,
          internalVariantPropNames: PlasmicMenuHeaderDesktop__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMenuHeaderDesktop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuHeaderDesktop";
  } else {
    func.displayName = `PlasmicMenuHeaderDesktop.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuHeaderDesktop = Object.assign(
  // Top-level PlasmicMenuHeaderDesktop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    hamburgerMenu: makeNodeComponent("hamburgerMenu"),
    // Metadata about props expected for PlasmicMenuHeaderDesktop
    internalVariantProps: PlasmicMenuHeaderDesktop__VariantProps,
    internalArgProps: PlasmicMenuHeaderDesktop__ArgProps
  }
);

export default PlasmicMenuHeaderDesktop;
/* prettier-ignore-end */
