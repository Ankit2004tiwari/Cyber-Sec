'use client';

import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: 'Top 5 Cyber Threats to Watch in 2025',
        summary:
            'Discover the most dangerous cybersecurity threats emerging in 2025 and how to defend against them.',
        author: 'Ankit Tiwari',
        date: 'April 10, 2025',
    },
    {
        title: 'Understanding Zero Trust Security',
        summary:
            'Learn what Zero Trust means, how it works, and why companies are moving towards it rapidly.',
        author: 'CyberSec Team',
        date: 'April 2, 2025',
    },
    {
        title: 'Best Practices for Password Management',
        summary:
            'A guide on creating strong passwords, using password managers, and avoiding common pitfalls.',
        author: 'Security Analyst',
        date: 'March 27, 2025',
    },
];

const BlogPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #fce4ec, #e0f7fa)',
                minHeight: '100vh',
                padding: '2rem',
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
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem',
                        color: '#880e4f',
                        textAlign: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    📰 NexoraSec Blog
                </h1>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            style={{
                                background: '#f3e5f5',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
                                transition: '0.3s ease',
                            }}
                        >
                            <h2 style={{ color: '#6a1b9a', marginBottom: '0.5rem' }}>
                                {post.title}
                            </h2>
                            <p style={{ color: '#333', marginBottom: '1rem' }}>
                                {post.summary}
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.9rem',
                                    color: '#555',
                                }}
                            >
                                <span>👤 {post.author}</span>
                                <span>📅 {post.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
