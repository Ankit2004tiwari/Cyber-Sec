'use client';

import React from 'react';

const WorkshopsPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #ede7f6, #e1bee7)',
                minHeight: '100vh',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                color: '#4a148c',
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
                <h1 style={{ textAlign: 'center', color: '#6a1b9a', marginBottom: '1.5rem' }}>
                    🧠 Interactive Workshops
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Our cybersecurity workshops are tailored to provide practical knowledge and experience for your team. From basic security awareness to advanced ethical hacking, we cover a wide range of engaging topics.
                </p>
                <ul style={{ marginTop: '1.5rem', paddingLeft: '1.2rem' }}>
                    <li>✔ Hands-on training and simulations</li>
                    <li>✔ Certified instructors with industry experience</li>
                    <li>✔ Customizable for corporate or academic settings</li>
                    <li>✔ Available in both online and on-site formats</li>
                </ul>
            </div>
        </div>
    );
};

export default WorkshopsPage;
