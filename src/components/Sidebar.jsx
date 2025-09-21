import React from 'react'
import { FaHome, FaChartLine, FaWallet, FaUser } from 'react-icons/fa'

export default function Sidebar({ activePage, setActivePage }){
  const makeBtn = (key, Icon, label) => (
    <button
      onClick={() => setActivePage(key)}
      className={`nav-link d-flex align-items-center btn-plain ${activePage === key ? 'active' : ''}`}
    >
      <Icon className="me-2" /> {label}
    </button>
  )

  return (
    <aside className="sidebar d-flex flex-column">
      <div className="logo text-white">Bitzarr</div>

      <nav className="mt-3 d-flex flex-column">
        {makeBtn('home', FaHome, 'Home')}
        {makeBtn('markets', FaChartLine, 'Markets')}
        {makeBtn('wallet', FaWallet, 'Wallet')}
        {makeBtn('profile', FaUser, 'Profile')}
      </nav>

      <div className="mt-auto">
        <small className="badge-muted">© 2025 Bitzarr</small>
      </div>
    </aside>
  )
}
