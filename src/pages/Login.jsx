import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg p-5" style={{ borderRadius: "15px", border: "none", maxWidth: "500px", width: "100%" }}>
          <div className="card-body">
            <h1 className="text-center mb-4" style={{ color: "#4CAF50" }}>Login</h1>
            <hr />
            <form>
              <div className="my-3">
                <label htmlFor="email" className="form-label" style={{ color: "#4CAF50" }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                />
              </div>
              <div className="my-3">
                <label htmlFor="password" className="form-label" style={{ color: "#4CAF50" }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                />
              </div>
              <div className="my-3 text-center">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline" style={{ color: "#4CAF50" }}>
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-dark my-2 mx-auto" type="submit" style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", borderRadius: "10px" }}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
