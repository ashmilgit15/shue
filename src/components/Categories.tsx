
import React from 'react';
import './Categories.css';

interface Category {
  id: number;
  name: string;
  count: number;
  icon: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Running',
    count: 156,
    icon: '🏃',
    description: 'Engineered for speed and performance',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=75&auto=format',
  },
  {
    id: 2,
    name: 'Lifestyle',
    count: 243,
    icon: '👟',
    description: 'Everyday comfort meets style',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=75&auto=format',
  },
  {
    id: 3,
    name: 'Basketball',
    count: 89,
    icon: '🏀',
    description: 'Dominate the court with confidence',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&q=75&auto=format',
  },
  {
    id: 4,
    name: 'Training',
    count: 112,
    icon: '💪',
    description: 'Built for intense workouts',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=75&auto=format',
  },
  {
    id: 5,
    name: 'Skateboarding',
    count: 67,
    icon: '🛹',
    description: 'Durable kicks for skaters',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=75&auto=format',
  },
  {
    id: 6,
    name: 'Formal',
    count: 45,
    icon: '🎩',
    description: 'Elegant footwear for occasions',
    image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&q=75&auto=format',
  },
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="section categories">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Browse By</span>
          <h2 className="section-title">Shop Categories</h2>
          <p className="section-description">
            Find the perfect pair for every occasion and activity
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href="#"
              className="category-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <span className="category-count">{category.count} Products</span>
              </div>
              <div className="category-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
