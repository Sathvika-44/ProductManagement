import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from "./SearchContext";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const { setSearchQuery } = useContext(SearchContext);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(query.trim().toUpperCase()); 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info pe-3">
            <div className="container-fluid flex-row justify-content-around">
                <Link className="navbar-brand text-white" to="/">Product Management</Link>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item m-3">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link className="nav-link text-white" to="/addProduct">Add Product</Link>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSearch}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search Product Name" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                        aria-label="Search"
                    />
                    <button className="btn bg-primary text-white" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
