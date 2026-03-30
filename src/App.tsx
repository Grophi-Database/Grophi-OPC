/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Footer } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { GrophiApp } from "./pages/GrophiApp";
import { Process } from "./pages/Process";
import { Careers } from "./pages/Careers";
import { Governance } from "./pages/Governance";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="noise" />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/app" element={<GrophiApp />} />
            <Route path="/process" element={<Process />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/governance" element={<Governance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
