import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Landing page overview with expandable academic profile and feature highlights.
 */
function Home() {
  const [showAcademicBio, setShowAcademicBio] = useState(false);

  return (
    <div className="home-page">
      <div className="page-header-wrap">
        <h1 className="page-title">Welcome to My Portfolio</h1>
        <p className="page-desc">
          Building responsive web applications with React, Express, and MongoDB.
        </p>
      </div>

      <div className="glass-box" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Deep Chauhan</h2>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Roll No: 24CS012 • B.Tech Computer Science & Engineering
            </p>
          </div>
          <button
            type="button"
            className="toggle-banner-btn"
            onClick={() => setShowAcademicBio(!showAcademicBio)}
          >
            {showAcademicBio ? 'Hide Academic Details ▲' : 'Show Academic Details ▼'}
          </button>
        </div>

        {showAcademicBio && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              borderRadius: '10px',
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid var(--border-color)',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              Academic Profile & Coursework
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Charotar University of Science and Technology (CHARUSAT) — CSPIT / DEPSTAR.<br />
              <strong>Enrolled Course:</strong> ITUE301 / CSE304 — Advanced Web Development Frameworks.<br />
              <strong>Specialization:</strong> Full Stack Cloud-Native Application Engineering.
            </p>
          </div>
        )}

        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.7' }}>
          A multi-page Single Page Application (SPA) demonstrating client-side routing with
          <strong> React Router v6</strong> and reactive state management using <strong>useState</strong>.
          Navigation between pages happens instantly without browser page reloads.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link to="/projects" className="submit-btn">
            Explore Projects →
          </Link>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.85rem 1.6rem',
              borderRadius: '10px',
              background: 'rgba(125, 125, 125, 0.1)',
              border: '1px solid var(--border-color)',
              fontWeight: 600
            }}
          >
            Send a Message
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>⚡ State-Driven UI</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Built with React's <code>useState</code> hook for reactive UI elements, controlled form inputs, and real-time character counters.
          </p>
        </div>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🧭 Client-Side Routing</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Instant page transitions without full-page reloads using React Router v6 route configuration.
          </p>
        </div>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🌓 Dynamic Theming</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            State-managed theme toggle switching between high-contrast dark mode and clean light mode.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
