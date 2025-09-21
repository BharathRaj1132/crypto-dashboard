import React from 'react'

export default function CryptoCard({coin}){
  const up = coin.change && coin.change.startsWith('+')
  return (
    <div className="crypto-row mb-2">
      <div className="crypto-left">
        <div className="crypto-img">
          {/* if you have images put <img src={`/assets/${coin.symbol.toLowerCase()}.png`} .../> */}
          {coin.symbol}
        </div>
        <div>
          <div style={{fontWeight:600}}>{coin.name} <small className="badge-muted">({coin.symbol})</small></div>
          <div className="badge-muted" style={{fontSize:12}}>Market Cap • 24h</div>
        </div>
      </div>

      <div className="text-end">
        <div style={{fontWeight:700}}>{coin.price}</div>
        <div className={up ? 'price-up' : 'price-down'}>{coin.change}</div>
      </div>
    </div>
  )
}
