import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './home-page.css';
import design from '/design.png';
import newsData from '/data/news.json'
import paperData from '/data/paper.json'
import GrantCarousel from './grant-carousel';
import NewsModal from '../news-page/news-modal';

const HomePage = () => {

    const latestNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const latestPapers = [...paperData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (news, event) => {
        event.preventDefault();
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

  return (
        <div className='homePage'>
            <div className='homePage-top'>
                <div className='homePage-left'>
                    <div className='big-text'>
                        <p>At AIMS Lab, we use diverse neuroscientific methods—including neuroimaging, intracranial recordings, 
                            behavioral studies, and computational approaches—to understand how brain computations drive decisions and actions.
                        </p>
                        <p>Our core themes are neuroanatomy, neuroinformatics, neuromodulation, and neurosurgery (hence the name AIMS!), 
                            guided by a commitment to open science, reproducibility, and collaboration.
                        </p>
                        <p>We focus on translating our research into better treatments for neurological disorders. 
                            By integrating diverse data and grounding our work in neuroanatomy, we aim to improve patient care.
                             Our mission emphasizes transparency, reproducibility, and supporting the broader research community.
                        </p>
                        <p>We foster a welcoming, intellectually stimulating environment where everyone is respected and encouraged to contribute. 
                            Join us as we explore the brain and work to enhance the lives of those with neurological conditions.
                        </p>
                    </div>
                    <div className='slogan'>
                        NEUROANATOMY, NEUROINFORMATICS, NEUROMODULATION, NEUROSURGERY
                    </div>
                </div>
                <div className='homePage-right'>
                    <div className='img-cont'>
                        <img src={design} alt='design' className='design' />
                    </div>
                </div>
            </div>
            <div className='homePage-bottom'>
                <div className='homePage-bottom-top'>
                    <div className="homePage-bottom-content">
                        <div className="homePage-bottom-left-home">
                            <div className="heading-wrapper">
                                <hr className="line" />
                                <div className="heading-item">Recent Papers</div>
                            </div>
                            <div className='paper-contain'>
                                {latestPapers.map((paper, index) => (
                                    <div className="paper-indiv-home" key={index} id={`paper-${index}`}>
                                        <div className="paperWords-home">
                                            <div className="paper-title-home">{paper.title}</div>
                                            <div className="paper-authors-home">{paper.authors}</div>
                                            <div className="paper-link-home">
                                                <a href={paper.link} target="_blank" rel="noopener noreferrer">Read More</a>
                                            </div>
                                        </div>
                                        <hr className="home-line" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="homePage-bottom-right-home">
                            <div className="heading-wrapper">
                                <hr className="line" />
                                <div className="heading-item">Recent News</div>
                            </div>
                            <div className='news-contain'>
                                {latestNews.map((news, index) => (
                                    <div className="news-indiv-home" key={index} id={`news-${index}`}>
                                        <div className="newsWords-home">
                                            <div className="news-title-home">{news.title}</div>
                                            <div className="news-date-home">{news.date}</div>
                                            <div className="news-link-home">
                                            <Link to={`/news?id=${news.id}`} onClick={(e) => openModal(news, e)}>
                                                Read More
                                            </Link>
                                            </div>
                                        </div>
                                        <hr className="home-line" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homePage-bottom-bottom'>
                    <GrantCarousel/>
                </div>
                <div className='footer'></div>
            </div>
            <NewsModal selectedNews={selectedNews} closeModal={closeModal} />
        </div>
    
    );
};

export default HomePage;