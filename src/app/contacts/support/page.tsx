'use client';

import React from 'react';
import { HelpCircle, MessageSquare, BookOpenCheck, Headphones } from 'lucide-react';

const SupportPage = () => {
    const supportItems = [
        {
            icon: <HelpCircle size={30} color="#7e57c2" />,
            title: 'FAQs',
            description: 'Browse common questions with clear answers.',
        },
        {
            icon: <MessageSquare size={30} color="#ec407a" />,
            title: 'Submit a Ticket',
            description: 'Reach out directly for personalized support.',
        },
        {
            icon: <Headphones size={30} color="#42a5f5" />,
            title: '24/7 Chat or Call',
            description: 'Instant support from our experts anytime.',
        },
        {
            icon: <BookOpenCheck size={30} color="#66bb6a" />,
            title: 'Documentation',
            description: 'Explore detailed user guides and tech docs.',
        },
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(to right, #f3e5f5, #e1f5fe)',
                minHeight: '100vh',
                padding: '3rem 1rem',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    background: '#fff',
                    padding: '3rem',
                    borderRadius: '24px',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 style={{ textAlign: 'center', color: '#4527a0', marginBottom: '2rem' }}>
                    🛟 Support & Help Center
                </h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {supportItems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'linear-gradient(to right, #ffffff, #f3e5f5)',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            <div style={{ marginBottom: '0.8rem' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', color: '#5e35b1' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
