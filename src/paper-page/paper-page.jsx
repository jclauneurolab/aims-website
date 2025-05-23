import React, { useState, useEffect, useRef } from 'react';
import './paper-page.css';
import paperData from '/data/paper.json';

const PaperPage = () => {

    const [selectedYear, setSelectedYear] = useState("Select Year");
    const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016 - Earlier"];
    const years_dropdown = ["Select Year", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016 - Earlier"];
    const paperRefs = useRef({});

    useEffect(() => {
        if (selectedYear === "2016 - Earlier") {
            if (paperRefs.current["2016"]) {
                paperRefs.current["2016"].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (paperRefs.current[selectedYear]) {
            paperRefs.current[selectedYear].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedYear]);

    return (
        <div className='paperPage'>
            <div className="year-cont large-screen">
                <ul className='list-cont'>
                    {years.map((year) => (
                        <li key={year}>
                            <button 
                                className="year-button"
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="year-cont small-screen">
                Year: 
                <select 
                    className="year-dropdown" 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    {years_dropdown.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div className='paper-cont'>
                {paperData.map((paper, index) => {
                   const paperYear = paper.date.split("-")[0]; 
                
                    return (
                        <div 
                            className='paper-indiv' 
                            key={index}
                            id={`paper-${paperYear}`} 
                            ref={(el) => {
                                if (!paperRefs.current[paperYear]) {
                                    paperRefs.current[paperYear] = el;
                                }
                            }}
                        >
                            <div className='paper-indv-top'>
                            <div className='paper-logo'>
                                {paper.img ? (
                                        <img loading="lazy" src={paper.img} alt="Paper" />
                                ) : null}
                                </div>
                                <div className='paperWords'>
                                    <div className='paper-title'>{paper.title}</div>
                                    <div className='paper-authors'>{paper.authors}</div>
                                    <div className='paper-link'>
                                        <a href={paper.link} target="_blank" rel="noopener noreferrer">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <hr className="paper-line" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PaperPage;


