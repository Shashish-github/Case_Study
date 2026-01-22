import { Button, LinearProgress } from '@mui/material';
import avatar from '../assets/avatars/avatar.png';
import { useState } from 'react';
import Reveal from './Reveal';

function Home() {
  const [xp, setXp] = useState(40);
  const [showXpGain, setShowXpGain] = useState(false);

  const handleGainXp = () => {
    if (xp < 100) {
      setXp(prev => Math.min(prev + 10, 100));
      setShowXpGain(true);
      setTimeout(() => setShowXpGain(false), 1500);
    }
  };

  return (
    <Reveal id="home" className="hero-section">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            {/* Player Card */}
            <div className="card text-center">
              <div className="card-body position-relative p-4">

                {/* XP gain popup */}
                {showXpGain && <div className="xp-float">+10 XP</div>}

                {/* Avatar */}
                <div className="position-relative d-inline-block mb-3">
                  <img
                    src={avatar}
                    alt="Player Avatar"
                    className="rounded-circle"
                    style={{ width: '120px', height: '120px', border: '3px solid var(--primary-color)' }}
                  />
                </div>

                {/* Player Name */}
                <h3 className="mb-1 fw-bold">Shashish Shekhar</h3>
                <p className="text-muted mb-4 px-3">
                  Software Developer Intern · Computer Science Undergraduate
                </p>

                {/* XP Bar */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1 px-1">
                    <small className="text-primary-custom fw-bold">Level 12</small>
                    <small className="text-muted">XP: {xp} / 100</small>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={xp}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        background: 'linear-gradient(90deg, #4dabf7, #007bff)'
                      }
                    }}
                  />
                </div>

                {/* Start Quest Button */}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component="a"
                  href="#about"
                  onClick={handleGainXp}
                  sx={{
                    borderRadius: '50px',
                    px: 5,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4dabf7, #339af0)'
                    }
                  }}
                >
                  Start Quest
                </Button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Home;
