import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero pb-3" style={{ borderBottom: '1px solid #ddd' }}>
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png"
            alt="Fresh Produce"
            height={500}
            style={{ opacity: 0.85 }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title display-5 fw-bold">
                Menyediakan Berbagai<br/>
                Macam Pilihan Sayur<br/>
                Dan Buah-buahan Segar
              </h1>
              <p className="card-text fs-5 d-none d-sm-block mt-3">
                Kami membantu memenuhi kebutuhan<br/>
                harian Anda dengan sayur dan buah berkualitas terjamin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
