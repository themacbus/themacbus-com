import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RoutesPage from "./pages/RoutesPage";
import InvestPage from "./pages/InvestPage";
import CommunityPage from "./pages/CommunityPage";
import SponsorPage from "./pages/SponsorPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
<Route path="/" element={<HomePage />} />

        <Route
          path="/"
          element={
            <main className="p-6 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to TheMACBus.com</h1>
              <p>Use the menu above to explore.</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}
