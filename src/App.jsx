import React from "react";
import Home from "./pages/Home";
import TradingFeatures from "./pages/TradingFeatures";
import MarketUpdate from "./pages/MarketUpdate";
import TrackPrices from "./pages/TrackPrices";
import Track from "./pages/Track";
import Footer from "./pages/Footer";
import Features from "./pages/Features";

export default function App() {
  return (
    <div className="app">

      {/* Sections stacked vertically */}
      <section id="home">
        <Home />
      </section>

      <section id="features">
        <TradingFeatures />
      </section>

      <section id="market">
        <MarketUpdate />
      </section>

      <section id="track">
        <TrackPrices />
      </section>
      <Features />
      <Track />
      <Footer />

    </div>
  );
}
