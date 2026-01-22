import Reveal from './Reveal';

function About() {
  return (
    <Reveal id="about">
      <div className="container py-5 section-gap">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">

            {/* NPC Card */}
            <div className="card">
              <div className="card-body">

                <h4 className="mb-3">
                  <i className="bi bi-person-badge me-2 text-primary-custom"></i>
                  Hall of Origins
                </h4>

                <p className="text-muted fst-italic">
                  NPC Mentor speaks:
                </p>

                <p>
                  “You are <strong>Shashish Shekhar</strong>, a Computer Science undergraduate
                  with strong foundations in backend development, databases, and secure system design.
                  Your journey is shaped by problem-solving, teamwork, and a passion for
                  scalable enterprise solutions.”
                </p>

                <hr className="border-secondary" />

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-mortarboard me-2 text-primary-custom"></i>
                    Bachelor of Engineering (Computer Science), Chandigarh University
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-calendar-event me-2 text-primary-custom"></i>
                    Academic Period: 2023 – 2027
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-award me-2 text-primary-custom"></i>
                    School Topper – Intermediate (95.2%)
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-compass me-2 text-primary-custom"></i>
                    Patrol Leader – Scouts & Guides (2018–2020)
                  </li>
                </ul>

                <div className="alert alert-secondary mt-4">
                  <i className="bi bi-chat-quote me-2"></i>
                  “Complete quests to unlock deeper knowledge and advanced skills.”
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default About;
