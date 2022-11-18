// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: 0UCZXj9Zumd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsaAzWhvm6PjSv1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aAzWHVM6PJSv1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 0UCZXj9Zumd/css
import FooterIconFbsvgIcon from "./icons/PlasmicIcon__FooterIconFbsvg"; // plasmic-import: NEB4z9XxWS/icon
import FooterIconInstagramsvgIcon from "./icons/PlasmicIcon__FooterIconInstagramsvg"; // plasmic-import: amHUaBVUcW/icon
import FooterIconLinkedinsvgIcon from "./icons/PlasmicIcon__FooterIconLinkedinsvg"; // plasmic-import: 5eo7YEJwcw/icon
import coachlogoBlacksvgZ3Py0Ikf4 from "./images/coachlogoBlacksvg.svg"; // plasmic-import: Z3Py0ikf4/picture
import appStoreI1SvgLi4XsSx9I from "./images/appStoreI1Svg.svg"; // plasmic-import: li4XsSX9I/picture
import googlePlayI1SvgLcZljj7H3 from "./images/googlePlayI1Svg.svg"; // plasmic-import: LCZljj7H3/picture

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
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
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__rFfq1)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___5UfcT)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vL0Jw)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__gizOb)}
                displayHeight={"40px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"130px"}
                src={{
                  src: coachlogoBlacksvgZ3Py0Ikf4,
                  fullWidth: 300,
                  fullHeight: 99,
                  aspectRatio: 3.02439
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7VHy
                )}
              >
                {
                  "Coach helps you create and deliver\npersonalized reinforcement training, fast."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pdO)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xCnOs
                )}
              >
                {"GET OUR APP"}
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__faLEs)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__evmsG)}
                  displayHeight={"45px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: appStoreI1SvgLi4XsSx9I,
                    fullWidth: 300,
                    fullHeight: 105,
                    aspectRatio: 2.869565
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kUoz7)}
                  displayHeight={"45px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: googlePlayI1SvgLcZljj7H3,
                    fullWidth: 300,
                    fullHeight: 94,
                    aspectRatio: 3.195652
                  }}
                />
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pA)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nFP
                )}
              >
                {"FOLLOW US"}
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ir31E)}
              >
                <FooterIconFbsvgIcon
                  className={classNames(projectcss.all, sty.svg__yKxZ)}
                  role={"img"}
                />

                <FooterIconInstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__oaInP)}
                  role={"img"}
                />

                <FooterIconLinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg__dWhCk)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__jDvn6)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oMc2I)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4E5Ct
              )}
            >
              {"Product"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__n7J0
              )}
            >
              {"App features"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9YHgs
              )}
            >
              {"Admin panel"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3Pz
              )}
            >
              {"For Managers"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qhDb6
              )}
            >
              {"For IDs"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lHo0K
              )}
            >
              {"For CEOs"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3QGh
              )}
            >
              {"For Employees"}
            </div>
          </p.Stack>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column___9ExuQ)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___8EhbN)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yHv3L
              )}
            >
              {"INDUSTRIES"}
            </div>
          </p.Stack>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xH5Av
            )}
          >
            {"Consumer Electronics"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__chaju
            )}
          >
            {"Manufacturing"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bEyT2
            )}
          >
            {"Telecom"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5NYv
            )}
          >
            {"Pharmaceuticals"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qWAb
            )}
          >
            {"Luxury Goods"}
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column___7CksW)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eBp3J)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cLxQk
              )}
            >
              {"Company"}
            </div>
          </p.Stack>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uKbY0
            )}
          >
            {"Blog"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__czA2I
            )}
          >
            {"Who We Are"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xf1U1
            )}
          >
            {"Press"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__q55N
            )}
          >
            {"Careers"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__v5CeH
            )}
          >
            {"Contact Us"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__voQl9
            )}
          >
            {"FAQ"}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
