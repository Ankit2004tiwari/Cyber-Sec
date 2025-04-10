'use client';

import React from 'react';

const GetInTouchPage = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #fce4ec, #e3f2fd)',
                padding: '3rem 1rem',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: '#fff',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                }}
            >
                <h1 style={{ textAlign: 'center', color: '#6a1b9a', marginBottom: '1.5rem' }}>
                    🤝 Get in Touch
                </h1>
                <form>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label>Message</label>
                        <textarea placeholder="Your Message..." rows={5} style={inputStyle} />
                    </div>
                    <button type="submit" style={btnStyle}>📤 Send Message</button>
                </form>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    marginTop: '0.3rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
};

const btnStyle = {
    background: 'linear-gradient(to right, #8e24aa, #1e88e5)',
    color: 'white',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
};

export default GetInTouchPage;