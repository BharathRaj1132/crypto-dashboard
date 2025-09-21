import React from "react";

export default function Track() {
  return (
    <section className="track-section py-5">
      <div className="container d-flex flex-column flex-lg-row align-items-center gap-5">
        <div className="track-graphics">
          <img src="/assets/crypto-network.png" alt="Crypto Network" className="img-fluid" />
        </div>
        <div className="track-text">
          <h2 className="fw-bold">Track Crypto Prices in Real-Time</h2>
          <p>
            Stay ahead in the crypto market with live updates on top-performing assets.
            Monitor price changes and trends instantly — all in one place.
          </p>
          <button className="btn btn-pink px-4">Start Tracking Now</button>
        </div>
      </div>
    </section>
  );
}
