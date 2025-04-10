'use client';

import React from 'react';
import { motion } from 'framer-motion';

const webinars = [
    {
        title: 'AI in Cybersecurity: Threat Detection & Response',
        date: 'May 25, 2025',
        speaker: 'Dr. Anjali Verma (AI Security Researcher)',
        link: '#',
        type: 'Live',
    },
    {
        title: 'Zero Trust Architecture Explained',
        date: 'April 10, 2025',
        speaker: 'Rahul Mehta (Cyber Defense Specialist)',
        link: '#',
        type: 'Recorded',
    },
    {
        title: 'Building Secure Web Applications',
        date: 'March 5, 2025',
        speaker: 'Neha Bansal (Security Consultant)',
        link: '#',
        type: 'Recorded',
    },
];

const WebinarsPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #e1f5fe, #ede7f6)',
                minHeight: '100vh',
                padding: '3rem 1rem',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '3rem',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '2.7rem',
                        color: '#01579b',
                        marginBottom: '2rem',
                    }}
                >
                    🎤 Expert Webinars & Sessions
                </h1>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {webinars.map((webinar, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.015 }}
                            style={{
                                background: '#e3f2fd',
                                borderLeft: '5px solid #7e57c2',
                                borderRadius: '12px',
                                padding: '1.5rem 2rem',
                                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            <h2 style={{ color: '#6a1b9a', marginBottom: '0.4rem' }}>
                                {webinar.title}
                            </h2>
                            <p><strong>📅 Date:</strong> {webinar.date}</p>
                            <p><strong>🎙️ Speaker:</strong> {webinar.speaker}</p>
                            <p>
                                <strong>📡 Type:</strong>{' '}
                                <span
                                    style={{
                                        backgroundColor: webinar.type === 'Live' ? '#d50000' : '#4caf50',
                                        color: '#fff',
                                        padding: '2px 10px',
                                        borderRadius: '4px',
                                        fontSize: '0.9rem',
                                        marginLeft: '8px',
                                    }}
                                >
                                    {webinar.type}
                                </span>
                            </p>

                            <a
                                href={webinar.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginTop: '1rem',
                                    display: 'inline-block',
                                    background: 'linear-gradient(to right, #1e88e5, #7b1fa2)',
                                    color: '#fff',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background =
                                        'linear-gradient(to right, #7b1fa2, #1e88e5)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background =
                                        'linear-gradient(to right, #1e88e5, #7b1fa2)')
                                }
                            >
                                ▶️ Watch Now
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebinarsPage;
