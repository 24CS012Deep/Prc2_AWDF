import React, { useState } from 'react';

/**
 * Contact Page Component
 * Controlled form managing inputs via useState, live character count,
 * interactive guidance toggle, and instant message preview.
 */
function Contact() {
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Collaboration');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const MAX_CHARS = 300;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!senderName || !message) {
      alert('Please fill out your name and message!');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setMessage('');
    setSenderName('');
    setSenderEmail('');
    setSubject('Collaboration');
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="page-header-wrap">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-desc">
          Feel free to reach out for project collaborations, software opportunities, or academic discussions.
        </p>
      </div>

      <button
        type="button"
        className="toggle-banner-btn"
        onClick={() => setShowGuidelines(!showGuidelines)}
      >
        <span>💡</span>
        <span>{showGuidelines ? 'Hide Message Guidelines' : 'Show Message Guidelines & Tips'}</span>
      </button>

      {showGuidelines && (
        <div className="help-tooltip-card">
          <div>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.3rem', fontSize: '0.98rem' }}>
              💡 Collaboration & Message Guidelines
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.5' }}>
              Please include your project timeline, specific technical stack preferences, and clear contact information.
              Form fields are synchronized directly with application state, updating the live preview card in real time.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowGuidelines(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0 0.5rem'
            }}
          >
            ×
          </button>
        </div>
      )}

      {isSubmitted ? (
        <div className="glass-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <span style={{ fontSize: '3rem' }}>🎉</span>
          <h2 style={{ fontSize: '1.8rem', margin: '1rem 0 0.5rem' }}>Message Captured!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Thank you, <strong>{senderName}</strong>. Your message has been received.
          </p>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto 2rem',
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid var(--border-color)',
              textAlign: 'left'
            }}
          >
            <p style={{ fontSize: '0.9rem' }}><strong>Email:</strong> {senderEmail || 'Not specified'}</p>
            <p style={{ fontSize: '0.9rem' }}><strong>Subject:</strong> {subject}</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}><strong>Message:</strong> {message}</p>
          </div>
          <button type="button" className="submit-btn" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="contact-layout-grid">
          {/* Left Column: Form */}
          <div className="glass-box">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name-input">Your Full Name</label>
                <input
                  id="name-input"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Deep Chauhan"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email-input">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  className="form-input"
                  placeholder="e.g. 24cs012@charusat.edu.in"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject-select">Topic / Category</label>
                <select
                  id="subject-select"
                  className="form-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="Collaboration">Collaboration / Project</option>
                  <option value="Internship">Internship Inquiry</option>
                  <option value="Academic">Academic Discussion</option>
                  <option value="General">General Inquiries</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message-input">
                  Your Message
                </label>
                <textarea
                  id="message-input"
                  className="form-textarea"
                  placeholder="Type your message here..."
                  value={message}
                  maxLength={MAX_CHARS}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <div className="char-counter-row">
                  <span>Live character tracker</span>
                  <span className="char-counter-badge">
                    {message.length} / {MAX_CHARS} characters
                  </span>
                </div>
              </div>

              <button type="submit" className="submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Message
              </button>
            </form>
          </div>

          {/* Right Column: Live Real-Time Preview Card */}
          <div>
            <div className="live-preview-box">
              <span className="preview-badge">Live Preview</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Real-Time Message Card</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                This card reflects the controlled component inputs in real time as you type.
              </p>

              <div style={{ marginTop: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div className="preview-field">
                  <div className="preview-field-label">Sender Name:</div>
                  <div className="preview-field-value">
                    {senderName || <em style={{ color: 'var(--text-muted)' }}>Waiting for input...</em>}
                  </div>
                </div>

                <div className="preview-field">
                  <div className="preview-field-label">Email:</div>
                  <div className="preview-field-value">
                    {senderEmail || <em style={{ color: 'var(--text-muted)' }}>Waiting for input...</em>}
                  </div>
                </div>

                <div className="preview-field">
                  <div className="preview-field-label">Category:</div>
                  <div className="preview-field-value">{subject}</div>
                </div>

                <div className="preview-field">
                  <div className="preview-field-label">Message Content:</div>
                  <div className="preview-field-value" style={{ minHeight: '60px', whiteSpace: 'pre-wrap' }}>
                    {message || <em style={{ color: 'var(--text-muted)' }}>Start typing in the message box to see the preview here...</em>}
                  </div>
                </div>

                <div className="preview-field">
                  <div className="preview-field-label">Length Counter:</div>
                  <div className="preview-field-value" style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    {message.length} characters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
