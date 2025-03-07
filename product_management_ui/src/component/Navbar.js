
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand m-auto" to="/">Product Management</Link>
                <ul className="navbar-nav flex-row m-auto">
                    <li className="nav-item m-3">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link className="nav-link" to="/addProduct">Add Product</Link>
                    </li>
                </ul>
                {/* </div> */}
            </div>
        </nav>
    );
}

export default Navbar;
