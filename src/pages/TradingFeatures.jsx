import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function TradingFeatures() {
  return (
    <div className="features-section d-flex flex-column flex-lg-row align-items-center justify-content-between py-5 container">
      {/* Left order panel image */}
      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img
          src="/assets/trade-panel.png"
          alt="Trading Panel"
          className="img-fluid rounded"
        />
      </div>

      {/* Right text */}
      <div className="col-lg-6 text-light">
        <h2 className="fw-bold mb-3">Trade Smarter, Trade Faster</h2>
        <p className="mb-4 text-muted">
          Buy and sell crypto seamlessly with real-time price tracking, deep liquidity, and ultra-low fees.
        </p>
        <ul className="list-unstyled mb-4">
          {[
            "Real-Time Market Prices",
            "Low Trading Fees",
            "Secure & Fast Transactions",
            "Trade 100+ Crypto Pairs",
          ].map((t, i) => (
            <li key={i} className="d-flex align-items-center mb-2">
              <FaCheckCircle className="text-success me-2" /> {t}
            </li>
          ))}
        </ul>
        <button className="btn btn-pink px-4">Start Trading Now</button>
      </div>
    </div>
  );
}
