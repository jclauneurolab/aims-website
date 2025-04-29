import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './nav-bar/nav-bar';
import HomePage from './home-page/home-page';
import PeoplePage from './people-page/people-page';
import PaperPage from './paper-page/paper-page';
import NewsPage from './news-page/news-page';
import ProjectPage from './project-page/project-page';
import ContactPage from './contact-us-page/contact-page';
import TitleManager from './TitleManager'; // <-- new import
import './nav-bar/nav-bar.css';

const App = () => {
    return (
        <Router>
            <TitleManager />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/papers" element={<PaperPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
