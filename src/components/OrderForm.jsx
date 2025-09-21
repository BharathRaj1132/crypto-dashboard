import React, { useState } from 'react'

export default function OrderForm(){
  const [side, setSide] = useState('buy')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  const total = (() => {
    const p = parseFloat(price || 0)
    const a = parseFloat(amount || 0)
    if (isNaN(p) || isNaN(a)) return '0.00'
    return (p * a).toFixed(2)
  })()

  return (
    <div>
      <div className="mb-3 d-flex gap-2">
        <button className={`btn ${side==='buy' ? 'btn-success' : 'btn-outline-light'}`} onClick={()=>setSide('buy')}>Buy</button>
        <button className={`btn ${side==='sell' ? 'btn-danger' : 'btn-outline-light'}`} onClick={()=>setSide('sell')}>Sell</button>
      </div>

      <div className="mb-2">
        <label className="form-label">Price (INR)</label>
        <input className="form-control" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Enter price" />
      </div>

      <div className="mb-2">
        <label className="form-label">Amount</label>
        <input className="form-control" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount" />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <small className="badge-muted">Estimated Total</small>
          <div style={{fontWeight:700}}>{total} INR</div>
        </div>
        <div>
          <button className={`btn ${side==='buy' ? 'btn-success' : 'btn-danger'}`} style={{minWidth:120}}>
            {side === 'buy' ? 'Buy' : 'Sell'}
          </button>
        </div>
      </div>
    </div>
  )
}
