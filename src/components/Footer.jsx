import React from "react";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 text-left">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Address: Jakarta</li>
              <li>Phone: 08514444444</li>
              <li>Hours: 08.00-18.00</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 text-left">
            <h5>Kategori Populer</h5>
            <ul className="list-unstyled">
              <li>Sayur</li>
              <li>Buah</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 text-left">
            <h5>My Account</h5>
            <ul className="list-unstyled">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 text-left">
            <h5>Secured Payment Gateway</h5>
            <ul className="list-unstyled">
              <li>Pembayaran aman dan terpercaya.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;