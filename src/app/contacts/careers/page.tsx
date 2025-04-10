'use client';

import React from 'react';

const CareersPage = () => {
    const jobs = [
        {
            title: 'Frontend Developer (React.js)',
            location: 'Remote / India',
            type: 'Full-Time',
            link: '#',
        },
        {
            title: 'Cybersecurity Analyst',
            location: 'Bangalore, India',
            type: 'Full-Time',
            link: '#',
        },
        {
            title: 'AI Prompt Engineer - Threat Detection',
            location: 'Remote',
            type: 'Internship',
            link: '#',
        },
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #ede7f6, #fce4ec)',
                minHeight: '100vh',
                padding: '3rem 1rem',
            }}
        >
            <div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    background: '#ffffff',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                }}
            >
                <h1 style={{ textAlign: 'center', color: '#4a148c', marginBottom: '2rem' }}>
                    🚀 Join Our Team
                </h1>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '1.2rem',
                                border: '1px solid #ccc',
                                borderRadius: '12px',
                                backgroundColor: '#f3e5f5',
                            }}
                        >
                            <h3 style={{ margin: '0 0 0.5rem', color: '#6a1b9a' }}>{job.title}</h3>
                            <p>📍 {job.location} | 📌 {job.type}</p>
                            <a
                                href={job.link}
                                target="_blank"
                                style={{
                                    marginTop: '0.8rem',
                                    display: 'inline-block',
                                    background: '#7b1fa2',
                                    color: 'white',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                }}
                            >
                                🔎 View Details
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;