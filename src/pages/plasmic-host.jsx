import { PlasmicCanvasHost } from "@plasmicapp/host";
import registerComponent from "@plasmicapp/host/registerComponent";
import { Header } from "components/Header/Header";
import React from "react";
import { ShowcaseComponent } from "../components/Showcase/ShowcaseComponent";
import { WebShowcaseComponent } from "../components/Showcase/WebShowcaseComponent";

registerComponent(ShowcaseComponent, {
  name: "ShowcaseComponent",
  importPath: "components/Showcase/ShowcaseComponent",
  props: {
    isLight: "boolean",
  },
});

registerComponent(WebShowcaseComponent, {
  name: "WebShowcaseComponent",
  importPath: "components/Showcase/WebShowcaseComponent",
  props: {
    isLight: "boolean",
  },
});

registerComponent(Header, {
  name: "Header",
  importPath: "components/Header/Header",
  props: {
    isDark: "boolean",
    data: "object",
  },
});

function Index() {
  return <PlasmicCanvasHost />;
}

export default Index;
