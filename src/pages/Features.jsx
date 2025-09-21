import React from "react";

export default function Features() {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <h5>Insta Trade - Buy / Sell</h5>
            <p>Trade your favorite crypto pairs instantly at lightning speed.</p>
            <img src="/assets/insta-trade.png" alt="Insta Trade" />
          </div>
          <div className="feature-card">
            <h5>Spot Trade – Power for the Pros</h5>
            <p>Dive deep into live order books, advanced charting, and real-time trades.</p>
            <img src="/assets/spot-trade.png" alt="Spot Trade" />
          </div>
          <div className="feature-card">
            <h5>Buy Now, Pay Later</h5>
            <p>Buy crypto instantly and pay later in easy installments — flexible & secure.</p>
            <img src="/assets/bnpl.png" alt="BNPL" />
          </div>
          <div className="feature-card wide">
            <h5>Secure Wallet — Your Crypto, Your Control</h5>
            <p>Manage and receive crypto securely with multi-layer encryption.</p>
            <img src="/assets/wallet.png" alt="Wallet" />
          </div>
          <div className="feature-card">
            <h5>Seamless Crypto Trading Experience</h5>
            <p>Fast & transparent transactions with cutting-edge security.</p>
            <img src="/assets/experience.png" alt="Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
