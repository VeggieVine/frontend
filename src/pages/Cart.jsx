import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container my-3 py-3">
        <h1 className="text-center"style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Keranjang Anda Kosong</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="card p-4 bg-light">
              <p className="text-center">Lanjutkan Belanja?</p>
              <div className="text-center">
                <Link to="/" className="btn btn-outline-success">
                  <i className="fa fa-arrow-left"></i> Lanjut Belanja
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <div className="container my-3 py-3">
        <h1 className="text-center"style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Keranjang</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-8">
            <div className="card p-4 bg-light">
              <h5 className="mb-4">Daftar Item</h5>
              {state.map((item) => {
                return (
                  <div key={item.id} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={75}
                          className="me-3"
                        />
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm mx-1"
                          onClick={() => {
                            removeItem(item);
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <p className="mx-1">{item.qty}</p>
                        <button
                          className="btn btn-sm mx-1"
                          onClick={() => {
                            addItem(item);
                          }}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <p>
                        <strong>${item.price * item.qty}</strong>
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 bg-light">
              <h5 className="mb-4">Ringkasan Pesanan</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Produk ({totalItems})<span>${subtotal}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Pengiriman<span>${shipping}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total jumlah</strong>
                  </div>
                  <span>
                    <strong>${subtotal + shipping}</strong>
                  </span>
                </li>
              </ul>
              <Link
                to="/checkout"
                className="btn btn-success btn-lg btn-block mt-4"
                style={{
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                  borderRadius: "10px"
                }}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      <Footer />
    </>
  );
};

export default Cart;
