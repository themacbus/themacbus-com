import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import RoutesPage from "./pages/RoutesPage";
import InvestPage from "./pages/InvestPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import ShuttlePricing from "./pages/ShuttlePricing";
import About from "./pages/About"; 
import NowHiring from "./pages/NowHiring";
import AyeLetsRide from "./pages/AyeLetsRide"; // ✅ redirect page

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/shuttle-pricing" element={<ShuttlePricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/now-hiring" element={<NowHiring />} />

        {/* ✅ Main Ride Request page */}
        <Route path="/ayeletsride" element={<AyeLetsRide />} />

        {/* ✅ Redirects so nothing breaks */}
        <Route path="/aye-lets-ride" element={<Navigate to="/ayeletsride" replace />} />
        <Route path="/ride" element={<Navigate to="/ayeletsride" replace />} />
      </Routes>
    </Router>
  );
}
