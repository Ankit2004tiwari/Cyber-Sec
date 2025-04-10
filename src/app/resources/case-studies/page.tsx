'use client';

import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
    {
        title: 'Preventing a Ransomware Attack on a Healthcare Network',
        client: 'MedSecure Hospitals',
        outcome: 'Reduced attack risk by 95% with AI Threat Detection.',
        link: '#',
        year: '2024',
    },
    {
        title: 'Strengthening Cloud Security for a FinTech Startup',
        client: 'FinTrack Solutions',
        outcome: 'Achieved 100% compliance with ISO 27001.',
        link: '#',
        year: '2023',
    },
    {
        title: 'Securing IoT Infrastructure for Smart Cities',
        client: 'UrbanTech Gov',
        outcome: 'Detected and mitigated 120+ vulnerabilities in smart grid systems.',
        link: '#',
        year: '2025',
    },
];

const CaseStudiesPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #fce4ec, #e3f2fd)',
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
                        color: '#1a237e',
                        marginBottom: '2rem',
                    }}
                >
                    📚 Cybersecurity Case Studies
                </h1>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.015 }}
                            style={{
                                background: '#f3e5f5',
                                borderRadius: '16px',
                                padding: '1.5rem 2rem',
                                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            <h2 style={{ color: '#6a1b9a', marginBottom: '0.5rem' }}>
                                {study.title}
                            </h2>
                            <p style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>
                                🏢 <strong>Client:</strong> {study.client}
                            </p>
                            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                                🎯 <strong>Outcome:</strong> {study.outcome}
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ fontSize: '0.9rem', color: '#555' }}>
                                    📅 Year: {study.year}
                                </span>
                                <a
                                    href={study.link}
                                    style={{
                                        background: 'linear-gradient(to right, #283593, #8e24aa)',
                                        color: 'white',
                                        padding: '0.6rem 1.4rem',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background =
                                            'linear-gradient(to right, #8e24aa, #283593)')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background =
                                            'linear-gradient(to right, #283593, #8e24aa)')
                                    }
                                >
                                    🔍 Read More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;
