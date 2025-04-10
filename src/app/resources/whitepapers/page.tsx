'use client';

import React from 'react';
import { motion } from 'framer-motion';

const whitepapers = [
    {
        title: 'The Future of AI in Cybersecurity',
        description: 'An in-depth analysis of how AI is transforming modern security practices.',
        downloadLink: '#',
        published: 'March 2025',
    },
    {
        title: 'Zero Trust Architecture: A Complete Guide',
        description: 'Everything you need to know about Zero Trust—from principles to implementation.',
        downloadLink: '#',
        published: 'February 2025',
    },
    {
        title: 'Cloud Security: Risks & Remedies',
        description: 'Explore key challenges in securing cloud environments and how to overcome them.',
        downloadLink: '#',
        published: 'January 2025',
    },
];

const WhitepapersPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #f3e5f5, #e0f7fa)',
                minHeight: '100vh',
                padding: '3rem 1rem',
                fontFamily: 'Segoe UI, sans-serif',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <div
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                    padding: '3rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        color: '#4a148c',
                        marginBottom: '2rem',
                    }}
                >
                    📄 Cybersecurity Whitepapers
                </h1>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {whitepapers.map((paper, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.015 }}
                            style={{
                                background: '#ede7f6',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
                            }}
                        >
                            <h2 style={{ color: '#6a1b9a', marginBottom: '0.5rem' }}>
                                {paper.title}
                            </h2>
                            <p style={{ color: '#333', marginBottom: '1rem' }}>
                                {paper.description}
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>
                                    📅 Published: {paper.published}
                                </span>
                                <a
                                    href={paper.downloadLink}
                                    style={{
                                        background: 'linear-gradient(to right, #8e24aa, #d81b60)',
                                        padding: '0.5rem 1.2rem',
                                        color: 'white',
                                        borderRadius: '6px',
                                        fontSize: '0.95rem',
                                        textDecoration: 'none',
                                        transition: '0.3s',
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background =
                                            'linear-gradient(to right, #d81b60, #8e24aa)')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background =
                                            'linear-gradient(to right, #8e24aa, #d81b60)')
                                    }
                                >
                                    📥 Download
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhitepapersPage;
