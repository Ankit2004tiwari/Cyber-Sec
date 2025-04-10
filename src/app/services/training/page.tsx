'use client';

import React from 'react';

const TrainingPage = () => {
    const trainings = [
        'Cybersecurity Fundamentals',
        'Ethical Hacking Bootcamp',
        'Secure Coding Practices',
        'Cloud Security Essentials',
        'Incident Response Training',
        'Security Awareness for Employees',
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #fce4ec, #e0f2f1)',
                minHeight: '100vh',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '850px',
                    width: '100%',
                    background: 'linear-gradient(to right, #ffffff, #f1f8e9)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    padding: '3rem',
                    transition: 'all 0.3s ease',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#2e7d32',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    🎓 Cybersecurity Training Programs
                </h1>

                <p
                    style={{
                        fontSize: '1.2rem',
                        color: '#444',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                    }}
                >
                    Enhance your skills with our industry-ready cybersecurity training courses, tailored for beginners to advanced learners.
                </p>

                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '1.5rem 0',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                    }}
                >
                    {trainings.map((training, index) => (
                        <li
                            key={index}
                            style={{
                                background: '#e8f5e9',
                                padding: '1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                textAlign: 'center',
                                fontWeight: '500',
                                color: '#1b5e20',
                            }}
                        >
                            {training}
                        </li>
                    ))}
                </ul>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        style={{
                            background: 'linear-gradient(to right, #66bb6a, #43a047)',
                            color: 'white',
                            border: 'none',
                            padding: '0.9rem 2rem',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = 'scale(1.05)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = 'scale(1)')
                        }
                    >
                        🚀 Join Training
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
