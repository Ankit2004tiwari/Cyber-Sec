'use client';

import React from 'react';

const AnalyticsPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #e1f5fe, #e3f2fd)',
                minHeight: '100vh',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                color: '#263238',
            }}
        >
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    padding: '3rem',
                }}
            >
                <h1 style={{ textAlign: 'center', color: '#0288d1', marginBottom: '1.5rem' }}>
                    📊 Cybersecurity Analytics
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Our Analytics Service provides real-time dashboards and intelligent insights to help you monitor your cybersecurity performance. Track attack vectors, system vulnerabilities, user behavior, and more — all in one interactive platform.
                </p>
                <ul style={{ marginTop: '1.5rem', paddingLeft: '1.2rem' }}>
                    <li>✔ Real-time threat analytics and visualizations</li>
                    <li>✔ AI-based anomaly detection</li>
                    <li>✔ Weekly and monthly security reports</li>
                    <li>✔ Role-based dashboards for CISO, SOC, and IT teams</li>
                </ul>
            </div>
        </div>
    );
};

export default AnalyticsPage;