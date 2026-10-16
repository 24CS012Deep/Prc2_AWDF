import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p2-footer">
      <p>
        © {currentYear} Deep Chauhan (Roll No: 24CS012) — CHARUSAT CSPIT/DEPSTAR
      </p>
      <p style={{ marginTop: '0.4rem', fontSize: '0.8rem', opacity: 0.7 }}>
        Practical 2: React Router v6 & Reactive State Management (useState)
      </p>
    </footer>
  );
}

export default Footer;
