import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <h1>Cyber Blogs</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {user && (
          <div className="navbar-user">
            <img src={user.profileImage} alt={user.name} className="user-avatar" />
            <span className="user-name">{user.name}</span>
          </div>
        )}
      </div>

      <div className={`navbar-bottom ${menuOpen ? 'active' : ''}`}>
        <div className="filter-label">Filters</div>
        <div className="filter-options">
          <label htmlFor="author">Created By:</label>
          <select className="filter-select">
            <option value="all">All</option>
            <option value="author1">Author 1</option>
            <option value="author2">Author 2</option>
          </select>
          <label htmlFor="date">Published Date:</label>
          <input type="date" className="filter-date" />
        </div>
        <div className="search-bar">
          <label htmlFor="search"className='search-label'>Search:</label>
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
