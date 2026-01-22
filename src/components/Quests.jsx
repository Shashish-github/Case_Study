import { useState } from 'react';
import { Button } from '@mui/material';
import Reveal from './Reveal';

function Quests() {
  const [completed, setCompleted] = useState({});

  const toggleComplete = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const questStyle = (id) =>
    `card border-0 shadow h-100 ${completed[id] ? 'quest-complete' : ''}`;

  return (
    <Reveal id="quests">
      <div className="container py-5 section-gap">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-10">

            <h4 className="mb-4 text-center">
              <i className="bi bi-journal-code me-2"></i>
              Quest Board
            </h4>

            <div className="row g-4">

              {/* Quest 1 */}
              <div className="col-md-6">
                <div className={questStyle('q1')}>
                  <div className="card-body d-flex flex-column">
                    <h5>
                      <i className="bi bi-bank me-2 text-primary-custom"></i>
                      Banking Management System
                    </h5>

                    <div className="mb-2">
                      <span className="badge bg-success me-2">Easy → Medium</span>
                      {completed['q1'] && <span className="badge bg-warning text-dark">COMPLETED</span>}
                    </div>

                    <p className="mt-2 flex-grow-1">
                      Design a command-line based system to manage customer data securely.
                    </p>

                    <Button
                      size="small"
                      variant={completed['q1'] ? "outlined" : "contained"}
                      color={completed['q1'] ? "success" : "primary"}
                      onClick={() => toggleComplete('q1')}
                    >
                      {completed['q1'] ? "Undo" : "Mark Complete"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quest 2 */}
              <div className="col-md-6">
                <div className={questStyle('q2')}>
                  <div className="card-body d-flex flex-column">
                    <h5>
                      <i className="bi bi-shield-check me-2 text-warning"></i>
                      AuthForge – RBAC
                    </h5>

                    <div className="mb-2">
                      <span className="badge bg-danger me-2">Hard</span>
                      {completed['q2'] && <span className="badge bg-warning text-dark">COMPLETED</span>}
                    </div>

                    <p className="mt-2 flex-grow-1">
                      Build a secure MERN-based system with JWT authentication and role-based access.
                    </p>

                    <Button
                      size="small"
                      variant={completed['q2'] ? "outlined" : "contained"}
                      color={completed['q2'] ? "success" : "primary"}
                      onClick={() => toggleComplete('q2')}
                    >
                      {completed['q2'] ? "Undo" : "Mark Complete"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quest 3 – AI */}
              <div className="col-md-12">
                <div className={questStyle('q3') + ' border border-info'}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">
                        <i className="bi bi-cpu me-2 text-primary-custom"></i>
                        RAG Documentation Assistant
                      </h5>
                      {completed['q3'] && <span className="badge bg-warning text-dark">ACHIEVED</span>}
                    </div>

                    <span className="badge bg-primary-custom mb-2">Expert · AI Quest</span>

                    <p className="mt-2">
                      An AI-assisted documentation system based on Retrieval-Augmented Generation (RAG).
                    </p>

                    <div className="alert alert-secondary small py-2">
                      <i className="bi bi-info-circle me-1"></i>
                      Simulated behavior using Material UI components.
                    </div>

                    <Button
                      fullWidth
                      variant={completed['q3'] ? "outlined" : "contained"}
                      color={completed['q3'] ? "success" : "primary"}
                      onClick={() => toggleComplete('q3')}
                    >
                      {completed['q3'] ? "Quest Finished" : "Complete AI Challenge"}
                    </Button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Quests;
