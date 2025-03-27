import React, { useState } from 'react';
import './people-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogleScholar, faXTwitter, faOrcid } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import peopleData from '/data/people.json';

const PeoplePage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <div className='peoplePage'>
      
        {/* Current Members Section */}
        <div className='people-heading'>Current Members</div>
        {Object.entries(peopleData).map(([section, members]) => {
        const activeMembers = members.filter((person) => person.active);
        if (activeMembers.length === 0) return null;

        return (
            <div key={section}>
            <div className="people-heading-wrapper">
                <hr className="line" />
                <div className="people-heading-item">{section}</div>
            </div>
            <div className='section-cont'>
                {activeMembers.map((person, index) => (
                <div className='person-cont' key={index}>
                    <div className='headshot-img-cont'>
                    <img src={person.img} alt={`${person.name} headshot`} className='head-shot' />
                    </div>
                    <div className='words-cont'>
                    <div className='person-name' onClick={() => openModal(person)}>
                        {person.name}
                    </div>
                    <div className='person-position'>{person.position}</div>
                    <div className='person-department'>{person.department}</div>
                    <div className='person-supervisor'>{person.supervisor}</div>
                    <div className='social-cont'>
                        {person.socialLinks && Object.entries(person.socialLinks).map(([key, link]) => (
                        link && (
                            <div className="item-cont" key={key}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                icon={
                                    key === "email" ? faEnvelope :
                                    key === "github" ? faGithub :
                                    key === "linkedin" ? faLinkedin :
                                    key === "orcid" ? faOrcid :
                                    key === "google_scholar" ? faGoogleScholar :
                                    key === "twitterx" ? faXTwitter :
                                    faEnvelope
                                }
                                className="icon-style"
                                />
                            </a>
                            </div>
                        )
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        );
        })}

        {/* Alumni Section */}
        <div className='people-heading alumni-heading'>Alumni</div>
        <div className='section-cont alumni-section'>
        {Object.values(peopleData)
            .flat()
            .filter((person) => !person.active)
            .map((person, index) => (
            <div className='person-cont' key={index}>
                <div className='headshot-img-cont'>
                <img src={person.img} alt={`${person.name} headshot`} className='head-shot' />
                </div>
                <div className='words-cont'>
                <div className='person-name' onClick={() => openModal(person)}>
                    {person.name}
                </div>
                <div className='person-position'>{person.position}</div>
                <div className='person-department'>{person.department}</div>
                <div className='person-supervisor'>{person.supervisor}</div>
                <div className='social-cont'>
                    {person.socialLinks &&
                    Object.entries(person.socialLinks).map(([key, link]) =>
                        link ? (
                        <div className="item-cont" key={key}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={
                                key === "email" ? faEnvelope :
                                key === "github" ? faGithub :
                                key === "linkedin" ? faLinkedin :
                                key === "orcid" ? faOrcid :
                                key === "google_scholar" ? faGoogleScholar :
                                key === "twitterx" ? faXTwitter :
                                faEnvelope
                                }
                                className="icon-style"
                            />
                            </a>
                        </div>
                        ) : null
                    )}
                </div>
                </div>
            </div>
            ))}
        </div>


        {/* Modal for Selected Person */}
        {selectedPerson && (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <div className="modal-header">
                <img src={selectedPerson.img} alt={`${selectedPerson.name} headshot`} className="modal-image" />
                <div className='modal-name'>{selectedPerson.name}</div>
            </div>
            <div className="modal-body">
                <div><strong>Position:</strong> {selectedPerson.position}</div>
                <div><strong>Department:</strong> {selectedPerson.department}</div>
                <div><strong>Supervisor:</strong> {selectedPerson.supervisor}</div>
                {selectedPerson.socialLinks && (
                <div className="social-links">
                    {selectedPerson.socialLinks.email && (
                    <div><strong>Email:</strong> <a href={selectedPerson.socialLinks.email} target="_blank" rel="noopener noreferrer">Email</a></div>
                    )}
                    {selectedPerson.socialLinks.github && (
                    <div><strong>GitHub:</strong> <a href={selectedPerson.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
                    )}
                    {selectedPerson.socialLinks.linkedin && (
                    <div><strong>LinkedIn:</strong> <a href={selectedPerson.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                    )}
                    {selectedPerson.socialLinks.google_scholar && (
                    <div><strong>Google Scholar:</strong> <a href={selectedPerson.socialLinks.google_scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
                    )}
                    {selectedPerson.socialLinks.orcid && (
                    <div><strong>Orcid:</strong> <a href={selectedPerson.socialLinks.orcid} target="_blank" rel="noopener noreferrer">Orcid</a></div>
                    )}
                    {selectedPerson.socialLinks.twitterx && (
                    <div><strong>X:</strong> <a href={selectedPerson.socialLinks.twitterx} target="_blank" rel="noopener noreferrer">X</a></div>
                    )}
                </div>
                )}
                <div className='about-section'><strong>About:</strong> {selectedPerson.bio}</div>
            </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default PeoplePage;
