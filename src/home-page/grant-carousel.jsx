import { useState, useEffect } from 'react';
import grants from '/data/grants.json';
import './grant-carousel.css';

const GrantCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const totalGrants = grants.length;

  const updateVisibleCount = () => {
    if (window.innerWidth <= 600) {
        setVisibleCount(1); 
    }
    else if (window.innerWidth > 600 && window.innerWidth <= 954) {
      setVisibleCount(3); 
    } else {
      setVisibleCount(5);
    }
  };

  useEffect(() => {
    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalGrants);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalGrants]);

  const visibleGrants = [
    ...grants,
    ...grants,
  ].slice(startIndex, startIndex + visibleCount);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleGrants.map((grant, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={grant.img} 
              alt={grant.title} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrantCarousel;


