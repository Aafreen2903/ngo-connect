import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(
    localStorage.getItem("user")
  );

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
      style={{ backgroundColor: "rgb(15, 29, 16)" }}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex flex-column"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <span className="fw-bold fs-4">
            NGO CONNECT
          </span>

          <small
            style={{
              fontSize: "12px",
              color: "#d4a437",
              marginTop: "-3px",
              fontFamily: "-apple-system",
            }}
          >
            plant today, protect tomorrow
          </small>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* Dashboard */}
            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {/* Events */}
            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/events"
                >
                  Events
                </Link>
              </li>
            )}

            {/* Profile */}
            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            )}

            {/* Contact */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            {/* Login */}
            {!user && (
              <li className="nav-item">
                <Link
                  className="login-btn text-decoration-none"
                  to="/login"
                >
                  Login / Sign Up
                </Link>
              </li>
            )}

            {/* Logout */}
            {user && (
              <li className="nav-item ms-2">
                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;