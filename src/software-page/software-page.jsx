// this page re-uses the same structure as the news page, therefore the styling is in the same sheet
// all of the components are the same names as the news page for this purpose 

import React, { useState } from 'react';
import projectData from '/data/software';

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='newsPage'>
            <div className='news-heading'>
                <hr className="news-line" />
                <div className='news-subtitle'>
                    AIMS Software
                </div>
                <hr className="news-line" />
            </div>
            <div className='news-cont'>
                {projectData.map((project, index) => {
                    return (
                        <div className='news-indv'>
                            <div className='news-title'>{project.title}</div>
                            <div className='news-cont-indv'>
                                <div className='news-img'>
                                    <img src={project.img} alt={`${project.img}`} className='news-pic' />
                                </div>
                                <div className='newsWords'>
                                    <div className='news-date'><strong>Author(s):</strong> {project.authors}</div>
                                    {project.paper && (
                                        <div className='news-link'>
                                            <strong>Paper:</strong> <a href={project.paper} target="_blank" rel="noopener noreferrer">Paper</a>
                                        </div>
                                    )}
                                    {project.github && (
                                        <div className='news-link'>
                                            <strong>Github:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    )}
                                    <div className='news-about'><strong>Description: </strong>{project.subheading}</div>
                                    <button className='read-more' onClick={() => openModal(project)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedProject && (
                <div className="news-modal-overlay" onClick={closeModal}>
                    <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>✖</button>
                        <div className="news-modal-header">
                            <div className='news-modal-title'>{selectedProject.title}</div>
                            <img src={selectedProject.img} alt={`${selectedProject.title}`} className="news-modal-image" />
                        </div>
                        <div className='news-date'><strong>Author(s):</strong> {selectedProject.authors}</div>
                        {selectedProject.paper && (
                            <div className='news-link'>
                                <strong>Paper:</strong> <a href={selectedProject.paper} target="_blank" rel="noopener noreferrer">Paper</a>
                            </div>
                        )}
                        {selectedProject.github && (
                            <div className='news-link'>
                                <strong>Github:</strong> <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                        )}
                        <div className="news-modal-body">
                            <div className='about-section'>{selectedProject.content}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ProjectPage;