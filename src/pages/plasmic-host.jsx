import { PlasmicCanvasHost } from "@plasmicapp/host";
import registerComponent from "@plasmicapp/host/registerComponent";
import React from "react";
import ShowcaseComponent from '../components/Showcase/ShowcaseComponent'

registerComponent(ShowcaseComponent, {
  name: "ShowcaseComponent",
  importPath: '../components/Showcase/ShowcaseComponent',
  props: {
    isLight: "boolean",
    
  },
});

function Index() {
  return <PlasmicCanvasHost />;
}

export default Index;
