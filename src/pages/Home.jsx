import React from "react";
import Navbar from "../component/Navbar";
import bannerImage from "../assets/banner.png";
import person from "../assets/personn.png";
import person2 from "../assets/personn2.png";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="banner py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="fw-medium text-slate-200">
                Tingkatkan kemampuan literasimu bersama{" "}
                <span className="text-sky-500">
                  Suka<span className="fw-bold">Baca</span>
                </span>
              </h1>
              <p>Platform pendukung dalam meningkatkan kemampuan literasi membaca</p>
              <button className="button btn-sky shadow-sm">Bergabung</button>
            </div>
            <div className="col-lg-7">
              <img src={bannerImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="desc py-4" id="about">
        <div className="container bg-sky-200 border-sky-300 p-3 rounded text-slate-500">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 d-flex justify-content-center">
              <img src={person} alt="" className="desc-img" />
            </div>
            <div className="col-lg-7 mt-3 box-description">
              <h2 className="fw-bold">Kenapa harus kami?</h2>
              <p>
                Literasi merupakan sebuah kemampuan yang harus diasah sejak usia muda.{" "}
                <span className="text-sky-500">
                  Suka<span className="fw-bold">Baca</span>
                </span>{" "}
                merupakan sebuah aplikasi yang ikut berkontribusi dalam upaya meningkatkan kemampuan membaca dengan
                fitur-fitur yang menarik
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="feature py-4" id="feature">
        <div className="container text-slate-200">
          <h2 className="fw-bold">Apa yang kami tawarkan</h2>
          <p>
            {/* Untuk menunjang kemampuan literasi,  */}
            Kami menawarkan beberapa fitur yang disediakan pada aplikasi{" "}
            <span className="text-sky-500">
              Suka<span className="fw-bold">Baca</span>
            </span>
          </p>
          <div className="row d-flex align-items-center">
            <div className="col-lg-7">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="box rounded pt-5 px-3 pb-3">
                    <div className="f-icon rounded d-flex justify-content-center align-items-center">
                      <i className="bi bi-bell-fill"></i>
                    </div>
                    <h5 className="fw-bold">Notifikasi</h5>
                    <p>Notifikasi yang diberikan ketika terdapat informasi penting terkait platform SukaBaca</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box rounded pt-5 px-3 pb-3">
                    <div className="f-icon rounded d-flex justify-content-center align-items-center">
                      <i className="bi bi-book-half"></i>
                    </div>
                    <h5 className="fw-bold">Teks Literasi & Kuis</h5>
                    <p>Teks literasi dan kuis yang diberikan untuk menginkatkan kemampuan literasi membaca</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box rounded pt-5 px-3 pb-3">
                    <div className="f-icon rounded d-flex justify-content-center align-items-center">
                      <i className="bi bi-bookmark-star-fill"></i>
                    </div>
                    <h5 className="fw-bold">Artikel Favorit</h5>
                    <p>Artikel artikel pilihan untuk menunjang pengetahuan tentang pentingnya literasi membaca</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box rounded pt-5 px-3 pb-3">
                    <div className="f-icon rounded d-flex justify-content-center align-items-center">
                      <i className="bi bi-gift"></i>
                    </div>
                    <h5 className="fw-bold">Reward</h5>
                    <p>Sistem reward yang akan kamu dapatkan setelah menyelesaikan beberapa kuis literasi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={person2} alt="" className="img-fluid my-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="article py-4" id="article">
        <div className="container">
          <h2 className="text-center fw-bold text-slate-500">Artikel</h2>
          <p className="text-center text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eligendi?
          </p>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <div className="img-cover">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-glossary-illustration_23-2150272542.jpg?w=740&t=st=1693183541~exp=1693184141~hmac=749733bb72d5d486896077c01c711f279916cc704e28c3a28e1b328a8decbb77"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-slate-500">Manfaat Membaca di Era Modern</h5>
                  <p className="card-text text-slate-200">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="text-center mb-3">
                  <a href="#" className="card-link text-center">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <div className="img-cover">
                  <img
                    src="https://img.freepik.com/free-vector/hands-text-books-icons_18591-77103.jpg?w=1060&t=st=1693183512~exp=1693184112~hmac=6fb3db51e31a8a909b67213a8ae272b439133c3c0ea519babea8fa73424be437"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-slate-500">Pentingkah Kemampuan Literasi Membaca?</h5>
                  <p className="card-text text-slate-200">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="text-center mb-3">
                  <a href="#" className="card-link text-center">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <div className="img-cover">
                  <img
                    src="https://img.freepik.com/free-vector/top-view-hands-holding-books-flat-illustration_74855-17930.jpg?w=900&t=st=1693183479~exp=1693184079~hmac=ab4e13d42a7d3767a565ee6b4da4232f91227085ac4c7c81625a7a4ccfc371ec"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-slate-500">5 Tips Meningkatkan Kemampuan Literasi</h5>
                  <p className="card-text text-slate-200">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="text-center mb-3">
                  <a href="#" className="card-link text-center">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <div className="img-cover">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-bookmark-template_23-2149334870.jpg?w=740&t=st=1693183567~exp=1693184167~hmac=135a18c1ceab73ce4756ca6b7ad82814828c1582be5881d4816d3da2f514118b"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-slate-500">Belajarmu Cepat Bosan?, Lakukan Hal Ini</h5>
                  <p className="card-text text-slate-200">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="text-center mb-3">
                  <a href="#" className="card-link text-center">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3 mb-2">
            <a href="" className="decoration-none text-sky-500">
              Lihat artikel lainnya
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
