import React from "react";

const coins = [
  { id: 1, name: "Bitcoin", sym: "BTC", price: "$56,623.54", change: "+1.41%", up: true },
  { id: 2, name: "Ethereum", sym: "ETH", price: "$4,267.90", change: "+2.22%", up: true },
  { id: 3, name: "Binance", sym: "BNB", price: "$587.74", change: "-0.82%", up: false },
  { id: 4, name: "Tether", sym: "USDT", price: "$0.9998", change: "-0.03%", up: false },
  { id: 5, name: "Solana", sym: "SOL", price: "$213.67", change: "-0.53%", up: false },
  { id: 6, name: "XRP", sym: "XRP", price: "$1.04", change: "-0.44%", up: false },
];

export default function MarketUpdate() {
  return (
    <div className="market-section container py-5">
      <h2 className="text-white mb-4">Market Update</h2>

      {/* Filter buttons */}
      <div className="d-flex gap-2 mb-3">
        {["All", "Gainer", "Loser", "New Listing"].map((c, i) => (
          <button key={i} className="btn btn-filter">
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-dark table-borderless align-middle">
          <thead>
            <tr>
              <th>NO</th>
              <th>NAME</th>
              <th>LAST PRICE</th>
              <th>CHANGE</th>
              <th>MARKET STATS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={`/assets/${c.sym.toLowerCase()}.png`} alt={c.name} width={28} />
                    <span>{c.name}</span>
                    <small className="text-muted">{c.sym}</small>
                  </div>
                </td>
                <td>{c.price}</td>
                <td className={c.up ? "text-success" : "text-danger"}>{c.change}</td>
                <td>
                  <div className={`sparkline ${c.up ? "spark-up" : "spark-down"}`}></div>
                </td>
                <td>
                  <button className="btn btn-trade">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="#" className="text-light mt-3 d-block">See All Coins</a>
    </div>
  );
}
