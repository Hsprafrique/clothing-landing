// src/components/LandingPage.jsx
import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="landing-container">
      {/* Logo */}
      <img src="/logo.png" alt="Store Logo" className="logo" />

      {/* Background Video */}
      <video autoPlay muted loop className="video-bg">
        <source src="/runway.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay">
        <h1>Welcome to LOOK GOOD</h1>
        <div className="buttons">
          <a
            href="https://wa.me/<+15207656304>?text=Hi%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn shop-btn"
          >
            SHOP NOW
          </a>
          <button className="btn about-btn" onClick={() => setShowModal(true)}>
            About the Creator
          </button>
        </div>

        {/* Carousel */}
        <div className="carousel">
          <div className="carousel-inner">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`/clothing${n}.jpg`}
                alt={`Clothing ${n}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <h2>About the Creator</h2>
            <p>
              Hi, I’m HSPRAFRIQUE, creator of this clothing store. Passionate about
              style and quality fashion.
            </p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;