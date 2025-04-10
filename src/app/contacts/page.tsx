'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Headset, Briefcase } from 'lucide-react';

const ContactMainPage = () => {
    const router = useRouter();

    const contactOptions = [
        {
            icon: <Mail size={32} color="#8e24aa" />,
            title: 'Get in Touch',
            description: 'Reach out for partnerships, questions, or feedback.',
            route: '/contacts/get-in-touch',
            bg: 'linear-gradient(to right, #f3e5f5, #ede7f6)',
        },
        {
            icon: <Headset size={32} color="#039be5" />,
            title: 'Support',
            description: 'Find help articles or get live assistance.',
            route: '/contacts/support',
            bg: 'linear-gradient(to right, #e1f5fe, #e3f2fd)',
        },
        {
            icon: <Briefcase size={32} color="#43a047" />,
            title: 'Careers',
            description: 'Explore job openings and internships.',
            route: '/contacts/careers',
            bg: 'linear-gradient(to right, #e8f5e9, #f1f8e9)',
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #e3f2fd, #f3e5f5)',
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
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#5e35b1',
                        marginBottom: '2rem',
                    }}
                >
                    📞 Contact Us
                </h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {contactOptions.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(option.route)}
                            style={{
                                background: option.bg,
                                padding: '1.5rem',
                                borderRadius: '16px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <div style={{ marginBottom: '1rem' }}>{option.icon}</div>
                            <h3 style={{ color: '#6a1b9a', marginBottom: '0.5rem' }}>{option.title}</h3>
                            <p style={{ color: '#555', fontSize: '0.95rem' }}>{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactMainPage;
