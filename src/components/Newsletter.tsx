
import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="section newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-bg">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80" 
              alt=""
              className="newsletter-bg-image"
              aria-hidden="true"
            />
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="bg-shape shape-3"></div>
          </div>
          
          <div className="newsletter-content">
            <div className="newsletter-text">
              <span className="section-subtitle">Stay Updated</span>
              <h2 className="section-title">Get 20% Off Your First Order</h2>
              <p className="newsletter-description">
                Subscribe to our newsletter and be the first to know about new arrivals, 
                exclusive deals, and style tips. Plus, enjoy a special discount on your first purchase!
              </p>
            </div>
            
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}>
                  {isSubmitted ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20" height="20">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              <p className="form-note">
                By subscribing, you agree to our Privacy Policy. We respect your privacy.
              </p>
            </form>
          </div>
          
          <div className="newsletter-decoration">
            <div className="shoe-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80" 
                alt="Featured Sneaker"
                className="decoration-shoe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
