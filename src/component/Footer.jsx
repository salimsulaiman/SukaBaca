import React from "react";

function Footer() {
  return (
    <div>
      <footer className="container-fluid bg-sky-200 pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="text-sky-500 fw-bold">Ilmu apa yang kamu dapat hari ini?</h3>
              <p className="text-slate-200">
                Platform pendukung dalam mengasah kemampuan literasi?{" "}
                <span className="text-sky-500">
                  Suka<span className="fw-bold">Baca</span>
                </span>{" "}
                solusinya
              </p>
            </div>
            <div className="col-lg-2 text-slate-200">
              <ul>
                <li className="fw-bold text-sky-500 mb-2">Navigasi</li>
                <li>
                  <a href="">Beranda</a>
                </li>
                <li>
                  <a href="">Fitur</a>
                </li>
                <li>
                  <a href="">Artikel</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 text-slate-200">
              <ul>
                <li className="fw-bold text-sky-500 mb-2">Lainnya</li>
                <li>
                  <a href="">Kebijakan Privasi</a>
                </li>
                <li>
                  <a href="">Term of Use</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-slate-200">
              <ul>
                <li className="fw-bold text-sky-500 mb-2">Kontak</li>
                <li className="">
                  <i className="bi bi-envelope-fill me-2"></i>sukabaca@gmail.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2"></i>0877-7788-7878
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>Semarang, Jalan Imam Bonjol, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-slate-200 d-flex justify-content-center">
              <i className="bi bi-github footer-icon me-4"></i>
              <i className="bi bi-twitter footer-icon me-4"></i>
              <i className="bi bi-linkedin footer-icon"></i>
            </div>
          </div>
          <div className="row">
            <hr className="mt-3" />
            <div className="col-lg-12 text-slate-200 d-flex justify-content-center">copyright © SukaBaca 2023</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
