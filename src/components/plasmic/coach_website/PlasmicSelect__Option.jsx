// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uu5v5CefeBFWJ3g58RuWZW
// Component: NSoGBrrbgF6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_coach_website.module.css"; // plasmic-import: uu5v5CefeBFWJ3g58RuWZW/projectcss
import sty from "./PlasmicSelect__Option.module.css"; // plasmic-import: NSoGBrrbgF6/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: NqsYigGE71r/render

export const PlasmicSelect__Option__VariantProps = new Array(
  "isSelected",
  "isHighlighted",
  "isDisabled"
);

export const PlasmicSelect__Option__ArgProps = new Array(
  "children",
  "value",
  "textValue"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSelect__Option__RenderFunc(props) {
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
        path: "isSelected",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isSelected : undefined
      },
      {
        path: "isHighlighted",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isHighlighted
          : undefined
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isDisabled : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };
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
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisHighlighted]: hasVariant(
            $state,
            "isHighlighted",
            "isHighlighted"
          ),

          [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected")
        }
      )}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Option",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisHighlighted]: hasVariant(
              $state,
              "isHighlighted",
              "isHighlighted"
            ),

            [sty.slotTargetChildrenisSelected]: hasVariant(
              $state,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useSelectOption(
    PlasmicSelect__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },
      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSelect__Option__ArgProps,
          internalVariantPropNames: PlasmicSelect__Option__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSelect__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Option";
  } else {
    func.displayName = `PlasmicSelect__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Option = Object.assign(
  // Top-level PlasmicSelect__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSelect__Option
    internalVariantProps: PlasmicSelect__Option__VariantProps,
    internalArgProps: PlasmicSelect__Option__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__Option;
/* prettier-ignore-end */
