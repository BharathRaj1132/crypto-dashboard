import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section pt-5">
      <div className="container text-center text-light">
        {/* Banner */}
        <div className="earn-banner mb-5">
          <h3>Earn up to ₹101</h3>
          <p>Discover how specific cryptocurrencies work. Get a bit of each crypto to try out.</p>
          <button className="btn btn-primary">Create Account</button>
        </div>

        {/* Footer grid */}
        <div className="footer-grid text-start">
          <div>
            <img src="/assets/logoipsum.png" alt="Logo" height="28" />
            <p>Experience seamless trading with global markets & real-time data.</p>
          </div>
          <div>
            <h6>Company</h6>
            <p>About us</p><p>Support</p><p>Product</p>
          </div>
          <div>
            <h6>Policy</h6>
            <p>KYC Policy</p><p>Terms of Use</p><p>Privacy Policy</p>
          </div>
          <div>
            <h6>More</h6>
            <p>Trading</p><p>BNPL</p><p>Referral & Reward</p>
          </div>
        </div>

        <div className="footer-bottom mt-4">
          <p>@ 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
