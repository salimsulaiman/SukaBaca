import React from "react";
import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container">
        <Link to="#home" className="nav-brand fw-medium">
          Suka<span className="fw-bold">Baca</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="#home" className="nav-link">
              Beranda
            </Link>
            <Link to="#feature" className="nav-link">
              Fitur
            </Link>
            <Link to="#article" className="nav-link">
              Artikel
            </Link>
            <a className="nav-link" href="#">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
