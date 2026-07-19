import React from 'react';

const SLIDE_IMAGES = [
  'Veg Noodles.jpg',
  'Veg momo.jpg',
  'Dosa.jpg',
  'Coffee.jpg',
  'Egg Roll.jpg',
];

export default function Hero({ currentSlide, goToSlide, featured, onAddHero }) {
  return (
    <section className="hero" id="home">
      {}
      <div className="hero-slideshow" id="heroSlideshow">
        {SLIDE_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`slide${idx === currentSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      {}
      <div className="slide-dots" id="slideDots">
        {SLIDE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            className={`dot${idx === currentSlide ? ' active' : ''}`}
            data-slide={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>

      {}
      <div className="hero-content">
        {}
        <div className="college-badge">
          <span className="badge-dot"></span>
          SPNREC, Araria &nbsp;|&nbsp; Official Campus Canteen
        </div>

        <h1 className="hero-title">
          Your <span className="highlight-word">Favourite</span><br />
          Campus Canteen
        </h1>

        <p className="hero-subtitle">
          Hot meals · Refreshing drinks · Crunchy snacks · Xerox services<br />
          Everything you need — right here on campus!
        </p>

        <div className="hero-cta">
          <a href="#menu" className="btn btn-primary" id="exploreMenuBtn">
            Explore Menu
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#xerox" className="btn btn-outline" id="xeroxBtn">
            Xerox Services
          </a>
        </div>

        {}
        <div className="hero-food-strip">
          <div className="food-chip">
            <img src="Tea.jpg" alt="Tea" />
            <span>Tea ₹10</span>
          </div>
          <div className="food-chip">
            <img src="samosa.jpg" alt="Samosa" />
            <span>Samosa ₹10</span>
          </div>
          <div className="food-chip">
            <img src="Veg momo.jpg" alt="Momo" />
            <span>Momo ₹50</span>
          </div>
          <div className="food-chip">
            <img src="chips.jpg" alt="Chips" />
            <span>Chips ₹10</span>
          </div>
        </div>
      </div>

      {}
      <div className="hero-right-panel">
        <div className="featured-dish-card" id="featuredCard">
          <div className="featured-label">Today's Special</div>
          <img src={featured?.img} alt="Featured dish" className="featured-img" id="featuredImg" />
          <div className="featured-info">
            <span className="featured-name" id="featuredName">{featured?.name}</span>
            <span className="featured-price" id="featuredPrice">{featured?.price}</span>
          </div>
          <button className="btn btn-primary featured-add-btn" id="featuredAddBtn" onClick={onAddHero}>
            Add to Cart
          </button>
        </div>

        {}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">12+</span>
            <span className="stat-label">Menu Items</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-num">5★</span>
            <span className="stat-label">Student Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-num">7AM</span>
            <span className="stat-label">Opens Daily</span>
          </div>
        </div>
      </div>

      {}
      <div className="scroll-indicator">
        <div className="scroll-ring">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
