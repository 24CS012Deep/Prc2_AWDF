import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * NavBar Component
 * Client-side routing with NavLink active states and theme switching toggle.
 */
function NavBar({ isDarkMode, onToggleTheme }) {
  return (
    <nav className="navbar-container">
      <Link to="/" className="brand-link">
        Deep.dev
      </Link>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-item-link ${isActive ? 'active-route' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-item-link ${isActive ? 'active-route' : ''}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-item-link ${isActive ? 'active-route' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        type="button"
        onClick={onToggleTheme}
        className="theme-toggle-btn"
        title="Toggle Light/Dark Theme"
      >
        <span>{isDarkMode ? '☀️' : '🌙'}</span>
        <span>{isDarkMode ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  );
}

export default NavBar;
