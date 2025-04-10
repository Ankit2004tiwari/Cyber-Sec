'use client';

import React from 'react';

const MonitoringPage = () => {
    const monitoringServices = [
        'Network Traffic Monitoring',
        'Real-Time Threat Detection',
        'Breach Activity Alerts',
        'Cloud & Endpoint Monitoring',
        'SIEM Integration & Analytics',
        'Log Management & Forensics',
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #f1f8e9, #e0f2f1)',
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
                    background: 'linear-gradient(to right, #ffffff, #e0f7fa)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    padding: '3rem',
                    transition: 'all 0.3s ease',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#00695c',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    🛰️ Monitoring Services
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
                    Stay proactive with 24/7 monitoring solutions that detect and respond to cybersecurity threats before they cause damage.
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
                    {monitoringServices.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                background: '#b2dfdb',
                                padding: '1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                textAlign: 'center',
                                fontWeight: '500',
                                color: '#004d40',
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        style={{
                            background: 'linear-gradient(to right, #00897b, #004d40)',
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
                        📡 Request Monitoring
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MonitoringPage;
