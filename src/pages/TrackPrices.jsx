import React from "react";

export default function TrackPrices() {
  const coins = [
    { name: "Ethereum", sym: "ETH", value: "₹2,36,771.26", change: "+3.73%" },
    { name: "Bitcoin", sym: "BTC", value: "₹92,36,771.26", change: "+0.73%" },
    { name: "ChainLink", sym: "LINK", value: "₹145.56", change: "+21.73%" },
    { name: "Solana", sym: "SOL", value: "₹223.21", change: "+10.26%" },
    { name: "Tron", sym: "TRX", value: "₹223.21", change: "+10.26%" },
  ];

  return (
    <div className="track-section d-flex flex-column flex-lg-row align-items-center justify-content-between py-5 container">
      <div className="col-lg-6 mb-4 mb-lg-0 text-center">
        <img src="/assets/crypto-network.png" alt="Crypto Network" className="img-fluid" />
      </div>

      <div className="col-lg-6 text-light">
        <h2 className="fw-bold mb-3">Track Crypto Prices in Real-Time</h2>
        <p className="mb-4 text-muted">
          Stay ahead in the crypto market with live updates on top-performing assets like Bitcoin, Ethereum, Solana, and more.
        </p>
        <div className="coin-list mb-4">
          {coins.map((c, i) => (
            <div key={i} className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>{c.name} ({c.sym})</span>
              <span>{c.value}</span>
              <span className="text-success">{c.change}</span>
            </div>
          ))}
        </div>
        <button className="btn btn-pink px-4">Start Tracking Now</button>
      </div>
    </div>
  );
}
