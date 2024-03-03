import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './ekam-innocations-favicon-color (1).png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const redirect = () => {
    window.location.href = '/';
  };

  const WorkshopsDropdown = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        <ul className="dropdown-list">
        <Link to="/AudioBooks" onClick={handleMenuClose}>

          <li>
              AudioBooks
          </li>
          </Link>
          <Link to="/E-Books" onClick={handleMenuClose}>
          <li>
            
              E-Books
           
          </li>
          </Link>
          <Link to="/Seminars" onClick={handleMenuClose}>
          <li>
           
              Seminars
              </li>
            </Link>
          
          {/* Add more workshop categories as needed */}
        </ul>
      </motion.div>
    );
  };

  return (
    <>
      <div>
        <TopHeader />

        <nav className={`nav-container ${menuOpen ? 'nav-open' : ''}`}>
          <div onClick={redirect} className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span>
              Ekam Innocations
              <span className="slogen">
                Innovating Education Educating innovations
              </span>
            </span>
          </div>
          <motion.div>
            <ul className={`nav-list ${menuOpen ? 'nav-open' : ''}`}>
              <li>
                <Link to="/" onClick={handleMenuClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleMenuClose}>
                  About Us
                </Link>
              </li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="dropdown-container"
              >
                <span>Workshops</span>
                <AnimatePresence>
                  {true && <WorkshopsDropdown />}
                </AnimatePresence>
              </motion.div>
              <li>
                <Link to="/Gallery" onClick={handleMenuClose}>
                  Gallery
                </Link>
              </li>
              <li>
              <Link to="/Resources" onClick={handleMenuClose}>
                  Resources
                </Link>
              </li>
              <li>
              
                <Link to="/User/Contact" onClick={handleMenuClose}>
                  Contact
                </Link>
              </li>
              {token ? (
                <>
                  <li className="display-content">
                    <Link
                      to="/User/dashboard"
                      className="bg-gradinat-one auth-buttons"
                      style={{ color: '#fff' }}
                      onClick={handleMenuClose}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="display-content">
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="bg-gradinat-one auth-buttons"
                      style={{ color: '#fff' }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="display-content">
                    <Link
                      to="/User/Login"
                      className="bg-gradinat-one auth-buttons"
                      style={{ color: '#fff' }}
                      onClick={handleMenuClose}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="display-content">
                    <Link
                      to="/User/Register"
                      className="bg-gradinat-one auth-buttons"
                      style={{ color: '#fff' }}
                      onClick={handleMenuClose}
                    >
                      SignUp for Free
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>

          <div className="mobile-icons" onClick={handleMenuToggle}>
            {menuOpen ? (
              <ion-icon name="close-circle-outline"></ion-icon>
            ) : (
              <ion-icon name="menu-outline"></ion-icon>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
