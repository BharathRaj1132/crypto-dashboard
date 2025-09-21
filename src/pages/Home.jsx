import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Home({ setActivePage }) {
  return (
    <div className="home-page text-light">
      <div className="nav-bg">
      <div className="home-topnav d-flex align-items-center justify-content-between mb-4 p-3">
        <div className="d-flex align-items-center gap-2">
          <img src="/assets/logoipsum.png" alt="Logo" height="28" />
          <span className="fw-bold fs-5">Logoipsum</span>
        </div>

        <ul className="nav-links d-flex align-items-center gap-4 mb-0">
          <li><button className="link-btn"><a href="#home" className="link-btn">Home</a></button></li>
          <li><button className="link-btn"><a href="#market" className="link-btn">Market</a></button></li>
          <li><button className="link-btn">Trade ▾</button></li>
          <li><button className="link-btn">BNPL</button></li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <button className="icon-btn" title="Notifications">🔔</button>
          <button className="link-btn"><a href="#wallet" className="link-btn">Wallet</a></button>
            <img src="/assets/avatar.png" alt="user" style={{width:30, height:30, borderRadius:999}} />
            <a href="#profile" className="link-btn">Bharath</a>
        </div></div>
      </div>

      {/* Hero Section */}
      <section className="hero d-flex flex-column flex-lg-row align-items-center justify-content-between py-5">
        <div className="hero-text col-lg-6">
          <h1 className="fw-bold mb-3">Trade Smarter,<br />Not Harder</h1>
          <p className="mb-4 text">
            Experience seamless trading with our advanced platform. Access global
            markets, trade cryptocurrencies, stocks, and more with professional
            tools and real-time data.
          </p>
          <div className="d-flex gap-3 mb-3">
            <button className="btn btn-primary px-4">Start Trading</button>
            <button className="btn btn-outline-light px-4" onClick={()=> setActivePage('markets')}>View Live Market</button>
          </div>
          <div className="dmb-4 text">
            <FaCheckCircle className="text-success" />
            <span>   Trusted by over 1M+ traders worldwide</span>
          </div>
        </div>

        <div className="hero-image col-lg-6 text-center mt-4 mt-lg-0">
          <img
            src="/assets/devices.png"
            alt="Trading platform"
            className="img-fluid"
            style={{ maxHeight: "420px" }}
          />
        </div>
        
      </section>

      {/* Coin Cards */}
      <section className="coins d-flex flex-wrap gap-3 mt-5">
        {[
          { sym: "BTC", name: "Bitcoin", price: "₹56,623.54", change: "+1.41%" },
          { sym: "ETH", name: "Ethereum", price: "₹56,623.54", change: "-1.41%" },
          { sym: "BNB", name: "Binance", price: "₹56,623.54", change: "+1.41%" },
          { sym: "TRX", name: "Tron", price: "₹56,623.54", change: "+1.41%" },
          { sym: "USDT", name: "Tether", price: "₹56,623.54", change: "-1.41%" },
        ].map((c) => (
          <div key={c.sym} className="coin-card p-3 flex-grow-1">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="coin-icon">{c.sym}</div>
              <span className="fw-semibold">{c.name}</span>
            </div>
            <div className="fw-bold">{c.price}</div>
            <div className={c.change.startsWith("+") ? "text-success" : "text-danger"}>
              {c.change}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
