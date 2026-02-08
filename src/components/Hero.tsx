
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import heroSneaker from '../assets/hero-sneaker.png';

const Hero: React.FC = () => {
  const shoeShowcaseRef = useRef<HTMLDivElement>(null);
  const burstTimerRef = useRef<number | null>(null);
  const [isHoveringShoe, setIsHoveringShoe] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [isBursting, setIsBursting] = useState(false);

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  useEffect(() => {
    return () => {
      if (burstTimerRef.current !== null) {
        window.clearTimeout(burstTimerRef.current);
      }
    };
  }, []);

  const resetShoePose = () => {
    if (!shoeShowcaseRef.current) return;

    shoeShowcaseRef.current.style.setProperty('--shoe-rotate-x', '0deg');
    shoeShowcaseRef.current.style.setProperty('--shoe-rotate-y', '0deg');
    shoeShowcaseRef.current.style.setProperty('--shoe-shift-x', '0px');
    shoeShowcaseRef.current.style.setProperty('--shoe-shift-y', '0px');
    shoeShowcaseRef.current.style.setProperty('--shoe-lift', '0px');
    shoeShowcaseRef.current.style.setProperty('--shoe-twist', '0deg');
    shoeShowcaseRef.current.style.setProperty('--shoe-proximity', '0');
    shoeShowcaseRef.current.style.setProperty('--shoe-glow-x', '0px');
    shoeShowcaseRef.current.style.setProperty('--shoe-glow-y', '0px');
  };

  const updateShoePose = (clientX: number, clientY: number) => {
    if (!shoeShowcaseRef.current) return;
    const bounds = shoeShowcaseRef.current.getBoundingClientRect();
    const normalizedX = clamp(((clientX - bounds.left) / bounds.width) * 2 - 1, -1, 1);
    const normalizedY = clamp(((clientY - bounds.top) / bounds.height) * 2 - 1, -1, 1);
    const proximity = clamp(1 - Math.hypot(normalizedX * 0.9, normalizedY * 1.1), 0, 1);

    const rotateY = normalizedX * 22;
    const rotateX = normalizedY * -18;
    const shiftX = normalizedX * 28;
    const shiftY = normalizedY * -24;
    const lift = proximity * 16;
    const twist = normalizedX * 7;
    const glowX = normalizedX * 16;
    const glowY = normalizedY * 12;

    shoeShowcaseRef.current.style.setProperty('--shoe-rotate-x', `${rotateX.toFixed(2)}deg`);
    shoeShowcaseRef.current.style.setProperty('--shoe-rotate-y', `${rotateY.toFixed(2)}deg`);
    shoeShowcaseRef.current.style.setProperty('--shoe-shift-x', `${shiftX.toFixed(2)}px`);
    shoeShowcaseRef.current.style.setProperty('--shoe-shift-y', `${shiftY.toFixed(2)}px`);
    shoeShowcaseRef.current.style.setProperty('--shoe-lift', `${lift.toFixed(2)}px`);
    shoeShowcaseRef.current.style.setProperty('--shoe-twist', `${twist.toFixed(2)}deg`);
    shoeShowcaseRef.current.style.setProperty('--shoe-proximity', proximity.toFixed(3));
    shoeShowcaseRef.current.style.setProperty('--shoe-glow-x', `${glowX.toFixed(2)}px`);
    shoeShowcaseRef.current.style.setProperty('--shoe-glow-y', `${glowY.toFixed(2)}px`);
  };

  const triggerBurst = () => {
    setIsBursting(true);
    if (burstTimerRef.current !== null) {
      window.clearTimeout(burstTimerRef.current);
    }
    burstTimerRef.current = window.setTimeout(() => {
      setIsBursting(false);
      burstTimerRef.current = null;
    }, 260);
  };

  const handleVisualMouseEnter = () => {
    setIsHoveringShoe(true);
  };

  const handleVisualMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveringShoe(true);
    updateShoePose(event.clientX, event.clientY);
  };

  const handleVisualTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    setIsHoveringShoe(true);
    updateShoePose(touch.clientX, touch.clientY);
  };

  const handleVisualPointerLeave = () => {
    setIsHoveringShoe(false);
    resetShoePose();
  };

  const handleShoeClick = () => {
    setIsBoosted((prev) => !prev);
    triggerBurst();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleShoeClick();
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="background-text">EXCLUSIVE</div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-dot"></span>
            Limited Edition • 2024 Collection
          </div>

          <h1 className="hero-title animate-fade-in-up">
            Elevate Your
            <span className="title-highlight">Velocity</span>
            <br />
            Beyond Limits
          </h1>

          <p className="hero-description animate-fade-in-up">
            Experience the pinnacle of footwear engineering. Our latest Air Jordan series
            combines revolutionary aesthetics with unmatched reactive cushioning.
          </p>

          <div className="hero-buttons animate-fade-in-up">
            <a href="#featured" className="btn btn-primary">
              Shop the Collection
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#categories" className="btn btn-secondary">
              View Lookbook
            </a>
          </div>

          <div className="hero-stats animate-fade-in-up">
            <div className="stat">
              <span className="stat-number">12.5k</span>
              <span className="stat-label">Sold this month</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">Fast</span>
              <span className="stat-label">Worldwide Delivery</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual animate-slide-right"
          onMouseEnter={handleVisualMouseEnter}
          onMouseMove={handleVisualMouseMove}
          onMouseLeave={handleVisualPointerLeave}
          onTouchMove={handleVisualTouchMove}
          onTouchEnd={handleVisualPointerLeave}
        >
          <div
            className={`shoe-showcase ${isHoveringShoe ? 'is-hovered' : ''} ${isBoosted ? 'is-boosted' : ''} ${isBursting ? 'is-bursting' : ''}`}
            ref={shoeShowcaseRef}
            onClick={handleShoeClick}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
            aria-pressed={isBoosted}
            aria-label="Interactive floating sneaker preview"
          >
            <div className="shoe-glow"></div>
            <div className="shoe-container">
              <img
                src={heroSneaker}
                alt="Floating sneaker"
                className="shoe-image"
                loading="eager"
              />
            </div>
            <div className="shoe-shadow"></div>
          </div>

          <div className="floating-card product-badge">
            <span className="card-icon">👑</span>
            <div className="badge-info">
              <span className="card-tag">Collector's Choice</span>
              <span className="card-text">Authentic Series</span>
            </div>
          </div>

          <div className="floating-card price-tag">
            <span className="card-price">$189.00</span>
            <span className="card-original">$245</span>
          </div>

          <div className="floating-card live-status">
            <div className="status-dot"></div>
            <span className="card-text">Limited Stock Available</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Discover More</span>
      </div>
    </section>
  );
};

export default Hero;
