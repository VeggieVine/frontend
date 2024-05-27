import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5"style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Tidak ada item di Keranjang</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Lanjutkan Belanja
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4 shadow-lg" style={{ borderRadius: "15px", borderColor: "#4CAF50" }}>
                <div className="card-header py-3 bg-success">
                  <h5 className="mb-0 text-white">Ringkasan Pesanan</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Produk ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Pengiriman
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total jumlah</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4 shadow-lg" style={{ borderRadius: "15px", borderColor: "#4CAF50" }}>
                <div className="card-header py-3 bg-success">
                  <h4 className="mb-0 text-white">Alamat Penagihan</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-12 my-1">
                        <label htmlFor="firstName" className="form-label" style={{ color: "#000" }}>
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                          style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                        />
                        <div className="invalid-feedback">
                          Nama lengkap diperlukan.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label" style={{ color: "#000" }}>
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                          style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                        />
                        <div className="invalid-feedback">
                          Harap masukkan alamat email yang valid untuk update pengiriman.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label" style={{ color: "#000" }}>
                          Alamat
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Alamat Lengkap"
                          required
                          style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                        />
                        <div className="invalid-feedback">
                          Harap masukkan alamat pengiriman.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label" style={{ color: "#000" }}>
                          Nomor Telepon
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="No. Whatsapp aktif"
                          style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                        />
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="country" className="form-label" style={{ color: "#000" }}>
                          Kota
                        </label>
                        <br />
                        <select className="form-select" id="country" required style={{ borderColor: "#4CAF50", borderRadius: "10px" }}>
                          <option value="">Pilih...</option>
                          <option>DKI Jakarta</option>
                          <option>Bogor</option>
                          <option>Depok</option>
                          <option>Tangerang</option>
                          <option>Bekasi</option>
                        </select>
                        <div className="invalid-feedback">
                          Pilih Kota Kamu.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary"
                      type="submit"
                      disabled
                      style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", borderRadius: "10px" }}
                    >
                      Lanjutkan ke Checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
