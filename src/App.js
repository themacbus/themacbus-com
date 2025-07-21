import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RoutesPage from "./pages/RoutesPage";
import InvestPage from "./pages/InvestPage";
import CommunityPage from "./pages/CommunityPage";
import SponsorPage from "./pages/SponsorPage";
import HomePage from "./pages/HomePage";
import ShuttlePricing from "./pages/ShuttlePricing";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/shuttle-pricing" element={<ShuttlePricing />} />
      </Routes>
    </Router>
  );
}
