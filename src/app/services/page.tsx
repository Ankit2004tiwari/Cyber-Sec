'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    ShieldCheck,
    BookOpen,
    FileText,
    Activity,
    BarChart2,
    Users,
} from 'lucide-react';

const ServicesMainPage = () => {
    const router = useRouter();

    const services = [
        {
            icon: <ShieldCheck size={30} color="#6a1b9a" />,
            title: 'Consulting',
            description: 'Expert guidance to strengthen your cybersecurity posture.',
            route: '/services/consulting',
            bg: 'linear-gradient(to right, #f3e5f5, #ede7f6)',
        },
        {
            icon: <BookOpen size={30} color="#0277bd" />,
            title: 'Training',
            description: 'Upskill your team with hands-on security training.',
            route: '/services/training',
            bg: 'linear-gradient(to right, #e1f5fe, #fce4ec)',
        },
        {
            icon: <FileText size={30} color="#2e7d32" />,
            title: 'Auditing',
            description: 'Comprehensive audits to ensure compliance and safety.',
            route: '/services/auditing',
            bg: 'linear-gradient(to right, #e8f5e9, #f1f8e9)',
        },
        {
            icon: <Activity size={30} color="#d81b60" />,
            title: 'Monitoring',
            description: '24/7 security monitoring for early threat detection.',
            route: '/services/monitoring',
            bg: 'linear-gradient(to right, #fce4ec, #f3e5f5)',
        },
        {
            icon: <BarChart2 size={30} color="#0288d1" />,
            title: 'Analytics',
            description: 'Real-time dashboards & reports to track security metrics.',
            route: '/services/analytics',
            bg: 'linear-gradient(to right, #e1f5fe, #e3f2fd)',
        },
        {
            icon: <Users size={30} color="#6a1b9a" />,
            title: 'Workshops',
            description: 'Interactive workshops for awareness and learning.',
            route: '/services/workshops',
            bg: 'linear-gradient(to right, #ede7f6, #e1bee7)',
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #f3e5f5, #e1f5fe)',
                padding: '3rem 1rem',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
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
                        marginBottom: '2.5rem',
                    }}
                >
                    🛡️ Our Services
                </h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(service.route)}
                            style={{
                                background: service.bg,
                                padding: '1.5rem',
                                borderRadius: '16px',
                                cursor: 'pointer',
                                boxShadow: '0 6px 12px rgba(0,0,0,0.06)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ color: '#4a148c', marginBottom: '0.5rem' }}>{service.title}</h3>
                            <p style={{ color: '#444', fontSize: '0.95rem' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesMainPage;