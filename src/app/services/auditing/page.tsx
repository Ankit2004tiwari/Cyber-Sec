'use client';

import React from 'react';

const AuditingPage = () => {
    const auditServices = [
        'Internal Audit',
        'IT Audit & Risk Review',
        'Regulatory Compliance Audit',
        'Cybersecurity Control Assessment',
        'Data Privacy Audit (GDPR, CCPA)',
        'Operational & Financial Audits',
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #ede7f6, #e3f2fd)',
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
                    background: 'linear-gradient(to right, #ffffff, #f3e5f5)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    padding: '3rem',
                    transition: 'all 0.3s ease',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#283593',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    🕵️‍♂️ Auditing Services
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
                    Ensure your organization's systems, operations, and compliance are secure and optimized through our expert auditing solutions.
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
                    {auditServices.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                background: '#e8eaf6',
                                padding: '1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                textAlign: 'center',
                                fontWeight: '500',
                                color: '#1a237e',
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        style={{
                            background: 'linear-gradient(to right, #5c6bc0, #3949ab)',
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
                        📝 Request Audit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuditingPage;
