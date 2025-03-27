import React from 'react';
import './news-page.css';

const NewsModal = ({ selectedNews, closeModal }) => {
    if (!selectedNews) return null;

    return (
        <div className="news-modal-overlay" onClick={closeModal}>
            <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>✖</button>
                <div className="news-modal-header">
                    <div className='news-modal-title'>{selectedNews.title}</div>
                    <img src={selectedNews.img} alt={selectedNews.title} className="news-modal-image" />
                </div>
                <div className='news-date'><strong>Date:</strong> {selectedNews.date}</div>
                {selectedNews.link && (
                    <div className='news-link'>
                        <strong>Link:</strong> <a href={selectedNews.link} target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                )}
                <div className="news-modal-body">
                    <div className='about-section'>{selectedNews.content}</div>
                </div>
            </div>
        </div>
    );
};

export default NewsModal;
