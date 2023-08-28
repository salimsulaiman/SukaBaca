import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container">
        <a className="nav-brand fw-medium" href="#">
          Suka<span className="fw-bold">Baca</span>
        </a>
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
            <a className="nav-link" aria-current="page" href="#">
              Beranda
            </a>
            <a className="nav-link" href="#">
              Tentang Kami
            </a>
            <a className="nav-link" href="#">
              Fitur
            </a>
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
