import { LinearProgress } from '@mui/material';
import Reveal from './Reveal';

function Skills() {
  const skills = [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'MERN Stack', level: 75 },
    { name: 'REST APIs & JWT', level: 80 },
    { name: 'SQL & DBMS', level: 85 },
    { name: 'Git & Linux', level: 70 },
  ];

  return (
    <Reveal id="skills">
      <div className="container py-5 section-gap">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">

            <h4 className="mb-5 text-center fw-bold">
              <i className="bi bi-lightning-charge me-2 text-primary-custom"></i>
              Skill Forge
            </h4>

            <div className="row g-4">
              {skills.map((skill, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0 fw-bold">{skill.name}</h6>
                        <small className="text-primary-custom fw-bold">{skill.level}%</small>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                      <small className="text-muted mt-2 d-block">Power Level</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Skills;
