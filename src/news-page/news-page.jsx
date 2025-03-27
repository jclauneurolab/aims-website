import React, { useState } from 'react';
import './news-page.css';
import newsData from '/data/news.json'
import NewsModal from './news-modal';

const NewPage = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (news) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    return (
        <div className='newsPage'>
            <div className='news-heading'>
                <hr className="news-line" />
                <div className='news-title'>
                    AIMS News
                </div>
                <hr className="news-line" />
            </div>
            <div className='news-cont'>
                {newsData.map((news, index) => {
                    return (
                        <div className='news-indv'>
                            <div className='news-title'>{news.title}</div>
                            <div className='news-cont-indv'>
                                <div className='news-img'>
                                    <img src={news.img} alt={`${news.img}`} className='news-pic' />
                                </div>
                                <div className='newsWords'>
                                    <div className='news-date'><strong>Date:</strong> {news.date}</div>
                                    { news.link && (
                                        <div className='news-link'>
                                            <strong>Link:</strong> <a href={news.link} target="_blank" rel="noopener noreferrer">Link</a>
                                        </div>
                                    )}
                                    <div className='news-about'><strong>Description: </strong>{news.subheading}</div>
                                    <button className='read-more'  onClick={() => openModal(news)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>

                <NewsModal selectedNews={selectedNews} closeModal={closeModal} />
        </div>
    );
};

export default NewPage;