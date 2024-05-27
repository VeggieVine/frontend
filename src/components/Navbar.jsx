import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.handleCart);

    const buttonStyle = {
        borderWidth: '2px',
        borderColor: '#28a745',
        transition: 'all 0.3s ease',
        color: '#28a745',
        backgroundColor: '#f8f9fa',
    };

    const hoverStyle = {
        backgroundColor: '#28a745',
        color: '#f8f9fa',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    };

    const customButtonStyle = {
        borderRadius: '15px',
        padding: '8px 15px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    <img src="/assets/logo.png" alt="Brand Logo" height="30" style={{ marginLeft: '-80px' }} />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav m-auto my-2 text-center" style={{ marginLeft: '50px' }}>{/* Adjusted left margin */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Manfaat</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink
                            to="/login"
                            className="btn m-2"
                            style={{...buttonStyle, ...customButtonStyle}}
                            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            <i className="fa fa-sign-in-alt mr-1"></i> Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="btn m-2"
                            style={{...buttonStyle, ...customButtonStyle}}
                            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            <i className="fa fa-user-plus mr-1"></i> Register
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="btn m-2"
                            style={{...buttonStyle, ...customButtonStyle, color: 'white', backgroundColor: '#28a745', borderColor: '#28a745'}}
                            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            <i className="fa fa-cart-shopping mr-1"></i> ({cartItems.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
