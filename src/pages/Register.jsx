import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 py-5 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg p-5" style={{ borderRadius: "15px", border: "none", maxWidth: "500px", width: "100%" }}>
                    <div className="card-body">
                        <h1 className="text-center mb-4" style={{ color: "#4CAF50" }}>Register</h1>
                        <hr />
                        <form>
                            <div className="form-group my-3">
                                <label htmlFor="Name" className="form-label" style={{ color: "#4CAF50" }}>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Email" className="form-label" style={{ color: "#4CAF50" }}>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Password" className="form-label" style={{ color: "#4CAF50" }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="my-3 text-center">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline" style={{ color: "#4CAF50" }}>Login</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-dark my-2 mx-auto" type="submit" style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", borderRadius: "10px" }} disabled>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
