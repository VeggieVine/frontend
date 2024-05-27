import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-3">
        <h1 className="text-center mb-5" style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Mengapa Harus Konsumsi Sayur dan Buah?</h1>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center" style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', border: 'none' }}>
              <img className="card-img-top img-fluid" src="/assets/sawi.jpg" alt="Sawi" style={{ borderRadius: '15px 15px 0 0' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'green', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Kaya akan Nutrisi</h5>
              </div>
            </div>
            <p className="text-center mt-3" style={{ fontSize: '1rem', color: 'black' }}> Sayur dan buah merupakan sumber alami vitamin, mineral, serat, dan antioksidan yang penting untuk menjaga kesehatan tubuh secara keseluruhan.</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center" style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', border: 'none' }}>
              <img className="card-img-top img-fluid" src="/assets/brokoli.jpg" alt="Brokoli" style={{ borderRadius: '15px 15px 0 0' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'green', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mendukung Sistem Pencernaan</h5>
              </div>
            </div>
            <p className="text-center mt-3" style={{ fontSize: '1rem', color: 'black' }}>Serat yang tinggi dalam sayur dan buah membantu menjaga kesehatan saluran pencernaan, mencegah sembelit, dan mengurangi risiko penyakit usus besar.</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center" style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', border: 'none' }}>
              <img className="card-img-top img-fluid" src="/assets/alpukat.jpg" alt="Alpukat" style={{ borderRadius: '15px 15px 0 0' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'green', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mengoptimalkan Fungsi Otak</h5>
              </div>
            </div>
            <p className="text-center mt-3" style={{ fontSize: '1rem', color: 'black' }}>Beberapa nutrisi dalam sayur dan buah, seperti vitamin C, vitamin K, dan antioksidan, dapat meningkatkan fungsi otak, kognisi, dan memori.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;