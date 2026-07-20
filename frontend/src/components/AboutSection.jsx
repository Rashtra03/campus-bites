import React, { useState, useEffect } from 'react';

export default function AboutSection() {
  const [stats, setStats] = useState({
    samosas: 15240,
    chai: 42800,
    xerox: 89450,
    addas: 2400
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        samosas: prev.samosas + Math.floor(Math.random() * 2),
        chai: prev.chai + Math.floor(Math.random() * 3),
        xerox: prev.xerox + Math.floor(Math.random() * 4),
        addas: prev.addas + (Math.random() > 0.98 ? 1 : 0)
      }));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-collage reveal">
            <div className="collage-big">
              <img src="Veg Noodles.jpg" alt="Veg Noodles" />
            </div>
            <div className="collage-small-col">
              <div className="collage-sm"><img src="Tea.jpg" alt="Tea" /></div>
              <div className="collage-sm"><img src="Veg momo.jpg" alt="Momo" /></div>
            </div>
            <div className="about-tag-float">Est. 2024</div>
          </div>
          <div className="about-text-side reveal">
            <span className="section-tag">About Us</span>
            <h2 className="section-title left">Serving Happiness<br />Since 2024</h2>
            <p className="about-desc">
              Campus Bites is the heart of SPNREC college life. From early morning chai to late-night momo sessions before exams — we've been fueling student dreams. Fresh, hygienic and always affordable!
            </p>
            <div className="about-features">
              <div className="about-feat">
                <div className="feat-icon">
                  <img src="Tea.jpg" alt="" />
                </div>
                <span>Open 7 AM – 10 PM</span>
              </div>
              <div className="about-feat">
                <div className="feat-icon">
                  <img src="Veg momo.jpg" alt="" />
                </div>
                <span>Hygienic &amp; Fresh</span>
              </div>
              <div className="about-feat">
                <div className="feat-icon">
                  <img src="samosa.jpg" alt="" />
                </div>
                <span>Student-Friendly Prices</span>
              </div>
              <div className="about-feat">
                <div className="feat-icon">
                  <img src="Dosa.jpg" alt="" />
                </div>
                <span>Super Fast Service</span>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="about-stats-grid reveal">
          <div className="about-stat-card">
            <span className="stat-icon">☕</span>
            <span className="stat-num">{stats.chai.toLocaleString()}</span>
            <span className="stat-label">Cups of Chai</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-icon">🥟</span>
            <span className="stat-num">{stats.samosas.toLocaleString()}</span>
            <span className="stat-label">Samosas Eaten</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-icon">📄</span>
            <span className="stat-num">{stats.xerox.toLocaleString()}</span>
            <span className="stat-label font-bold">Notes Printed</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-icon">🎓</span>
            <span className="stat-num">{stats.addas.toLocaleString()}</span>
            <span className="stat-label font-bold">Addas Hosted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
