import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ color: "#4CAF50" }}>Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name" style={{ color: "#4CAF50" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email" style={{ color: "#4CAF50" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message" style={{ color: "#4CAF50" }}>Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  style={{ borderColor: "#4CAF50", borderRadius: "10px" }}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                  style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", borderRadius: "10px" }}
                >
                  Send
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

export default ContactPage;
