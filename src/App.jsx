import Features from "components/Features";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import PlasmicCanvasHost from "./pages/plasmic-host";

export default function AppRoot() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your other routes... Some comment */}
        <Route path="/" element={<Homepage />} />
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}
