
import React from 'react';
import './Features.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Quality Guarantee',
    description: 'Every pair is crafted with premium materials and undergoes rigorous quality testing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Free Shipping',
    description: 'Enjoy complimentary shipping on all orders over $100. Fast and reliable delivery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Easy Returns',
    description: '30-day hassle-free returns. Not satisfied? Send it back, no questions asked.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Expert Support',
    description: 'Our knowledgeable team is here to help you find the perfect fit and style.',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '200+', label: 'Brand Partners' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">We're Different From Others</h2>
            <p className="features-description">
              At SoleVault, we're passionate about footwear. We believe that the right pair
              of shoes can transform your day, boost your confidence, and help you express
              your unique style.
            </p>

            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="features-visual">
            <div className="visual-card">
              <div className="visual-bg">
                <img
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=75&auto=format"
                  alt="Premium Sneaker Collection"
                  className="visual-bg-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="visual-bg-overlay"></div>
              </div>
              <div className="visual-content">
                <div className="experience-badge">
                  <span className="exp-number">15</span>
                  <span className="exp-text">Years of<br />Excellence</span>
                </div>

                <div className="visual-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="visual-stat">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
