import { useState, useEffect } from 'react';

function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = height > 0 ? (winScroll / height) * 100 : 0;
          setScrollProgress(progress);

          const sections = ['home', 'about', 'skills', 'quests', 'epic-quests', 'ai', 'contact'];
          const viewportMid = window.innerHeight / 2;
          let activeSection = sections[0];

          sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top < viewportMid && rect.bottom > 100) {
                activeSection = id;
              }
            }
          });

          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            activeSection = 'contact';
          }

          setActive(activeSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Remove active from dependencies to avoid infinite loops or jitter

  const navClass = `navbar navbar-expand-lg navbar-dark fixed-top transition-all ${scrolled ? 'bg-dark shadow-sm py-2' : 'py-3'
    }`;

  const navStyle = {
    transition: '0.4s',
    backgroundColor: scrolled ? 'var(--bg-dark)' : 'rgba(11, 15, 20, 0.8)',
  };

  const linkClass = (id) =>
    `nav-link ${active === id ? 'active text-primary-custom fw-bold' : ''}`;

  return (
    <nav className={navClass} style={navStyle}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home" onClick={() => setActive('home')}>
          <i className="bi bi-controller me-2 text-primary-custom" style={{ fontSize: '1.5rem' }}></i>
          DevQuest
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={linkClass('home')} href="#home">
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('about')} href="#about">
                <i className="bi bi-person me-1"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('skills')} href="#skills">
                <i className="bi bi-tools me-1"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('quests')} href="#quests">
                <i className="bi bi-journal-text me-1"></i> Quests
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('epic-quests')} href="#epic-quests">
                <i className="bi bi-star me-1"></i> Epic
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('ai')} href="#ai">
                <i className="bi bi-robot me-1"></i> AI Sanctum
              </a>
            </li>
            <li className="nav-item">
              <a className={linkClass('contact')} href="#contact">
                <i className="bi bi-envelope me-1"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="scroll-progress-container"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.05)',
          overflow: 'hidden'
        }}
      >
        <div
          className="scroll-progress-bar"
          style={{
            width: `${scrollProgress}%`,
            height: '100%',
            background: 'var(--primary-gradient)',
            transition: 'width 0.1s ease-out',
            boxShadow: '0 0 10px var(--accent-glow)'
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
