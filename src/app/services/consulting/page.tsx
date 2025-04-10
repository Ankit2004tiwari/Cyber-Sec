'use client';

import React from 'react';

const ConsultingPage = () => {
    const services = [
        'Risk Assessment',
        'Security Audits',
        'Compliance Consulting',
        'Incident Response Planning',
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #e0f7fa, #f3e5f5)',
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
                    background: 'linear-gradient(to right, #ffffff, #f9fbe7)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    padding: '3rem',
                    transition: 'all 0.3s ease',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#6a1b9a',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    🌐 Consulting Services
                </h1>

                <p
                    style={{
                        fontSize: '1.2rem',
                        color: '#555',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                    }}
                >
                    We provide expert guidance to strengthen your cybersecurity posture, reduce risks, and help you stay compliant with the latest standards.
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
                    {services.map((service, index) => (
                        <li
                            key={index}
                            style={{
                                background: '#f3e5f5',
                                padding: '1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                textAlign: 'center',
                                fontWeight: '500',
                                color: '#4a148c',
                            }}
                        >
                            {service}
                        </li>
                    ))}
                </ul>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        style={{
                            background: 'linear-gradient(to right, #ab47bc, #ec407a)',
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
                        📩 Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsultingPage;
