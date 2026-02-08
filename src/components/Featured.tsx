
import React, { useState } from 'react';
import './Featured.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  colors: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    category: 'Running',
    price: 165,
    rating: 4.8,
    reviews: 324,
    isNew: true,
    colors: ['#1a1a2e', '#ff6b35', '#ffffff'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=75&auto=format',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 23',
    category: 'Running',
    price: 190,
    originalPrice: 230,
    rating: 4.9,
    reviews: 512,
    isBestseller: true,
    colors: ['#16213e', '#e94560', '#0f3460'],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=75&auto=format',
  },
  {
    id: 3,
    name: 'New Balance 990v5',
    category: 'Lifestyle',
    price: 185,
    rating: 4.7,
    reviews: 189,
    colors: ['#808080', '#2d4059', '#f8f9fa'],
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=75&auto=format',
  },
  {
    id: 4,
    name: 'Puma RS-X Tech',
    category: 'Lifestyle',
    price: 120,
    originalPrice: 150,
    rating: 4.6,
    reviews: 267,
    isNew: true,
    colors: ['#ff6b35', '#1a1a2e', '#f8f9fa'],
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=75&auto=format',
  },
  {
    id: 5,
    name: 'Jordan 1 Retro High',
    category: 'Basketball',
    price: 180,
    rating: 4.9,
    reviews: 876,
    isBestseller: true,
    colors: ['#e94560', '#1a1a2e', '#f8f9fa'],
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&q=75&auto=format',
  },
  {
    id: 6,
    name: 'Converse Chuck 70',
    category: 'Lifestyle',
    price: 85,
    rating: 4.5,
    reviews: 1205,
    colors: ['#f8f9fa', '#1a1a2e', '#e94560'],
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=75&auto=format',
  },
  {
    id: 7,
    name: 'ASICS Gel-Kayano 29',
    category: 'Running',
    price: 160,
    originalPrice: 180,
    rating: 4.7,
    reviews: 423,
    colors: ['#0f3460', '#ff6b35', '#16213e'],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=75&auto=format',
  },
  {
    id: 8,
    name: 'Vans Old Skool',
    category: 'Lifestyle',
    price: 70,
    rating: 4.6,
    reviews: 2341,
    isBestseller: true,
    colors: ['#1a1a2e', '#f8f9fa', '#808080'],
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=75&auto=format',
  },
];

const filters = ['All', 'Running', 'Lifestyle', 'Basketball'];

const Featured: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
    ));
  };

  const handleImageLoad = (id: number) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="featured" className="section featured">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Shop Now</span>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-description">
            Handpicked selection of our most popular and trending footwear
          </p>
        </div>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="product-image">
                <div className={`image-skeleton ${imageLoaded[product.id] ? 'hidden' : ''}`}></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`product-img ${imageLoaded[product.id] ? 'loaded' : ''}`}
                  onLoad={() => handleImageLoad(product.id)}
                  loading="lazy"
                />

                {product.isNew && <span className="badge new">New</span>}
                {product.isBestseller && <span className="badge bestseller">Bestseller</span>}
                {product.originalPrice && <span className="badge sale">Sale</span>}

                <div className={`quick-actions ${hoveredProduct === product.id ? 'visible' : ''}`}>
                  <button className="action-btn" aria-label="Add to wishlist">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <button className="action-btn primary" aria-label="Add to cart">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </button>
                  <button className="action-btn" aria-label="Quick view">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="reviews">({product.reviews})</span>
                </div>

                <div className="product-footer">
                  <div className="price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>

                  <div className="colors">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="color-dot"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="btn btn-primary">
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
