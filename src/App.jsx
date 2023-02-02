import Features from "components/Features";
import IndustryConsumerElectronics from "components/IndustryConsumerElectronics";
import IndustryLuxuryGoods from "components/IndustryLuxuryGoods";
import IndustryManufacturing from "components/IndustryManufacturing";
import IndustryPharmaceuticals from "components/IndustryPharmaceuticals";
import IndustryTelecommunication from "components/IndustryTelecommunication";
import WhoIsItForCeOs from "components/WhoIsItForCeOs";
import WhoIsItForEmployees from "components/WhoIsItForEmployees";
import WhoIsItForInstructionalDesigners from "components/WhoIsItForInstructionalDesigners";
import WhoIsItForManagers from "components/WhoIsItForManagers";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import PlasmicCanvasHost from "./pages/plasmic-host";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ScrollToTop from "./helpers/ScrollToTop";

export default function AppRoot() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
        <Route path="/features" element={<Features />} />
        <Route
          path="/industry-consumer-electronics"
          element={<IndustryConsumerElectronics />}
        />
        <Route
          path="/industry-luxury-goods"
          element={<IndustryLuxuryGoods />}
        />
        <Route
          path="/industry-manufacturing"
          element={<IndustryManufacturing />}
        />
        <Route
          path="/industry-pharmaceuticals"
          element={<IndustryPharmaceuticals />}
        />
        <Route
          path="/industry-telecommunication"
          element={<IndustryTelecommunication />}
        />
        <Route path="/who-is-it-for-ceos" element={<WhoIsItForCeOs />} />
        <Route
          path="/who-is-it-for-employees"
          element={<WhoIsItForEmployees />}
        />
        <Route
          path="/who-is-it-for-instructional-designers"
          element={<WhoIsItForInstructionalDesigners />}
        />
        <Route
          path="/who-is-it-for-managers"
          element={<WhoIsItForManagers />}
        />
      </Routes>
    </BrowserRouter>
  );
}
