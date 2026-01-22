import Reveal from './Reveal';

function Achievements() {
  return (
    <Reveal id="achievements">
      <div className="container py-5 section-gap">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-10">

            <h4 className="mb-4 text-center">
              <i className="bi bi-trophy me-2 text-warning"></i>
              Achievement Hall
            </h4>

            <div className="row g-4">

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h6>
                      <i className="bi bi-award me-2 text-warning"></i>
                      School Topper
                    </h6>
                    <p className="small text-muted mb-0">
                      Achieved 95.2% marks in Intermediate examinations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h6>
                      <i className="bi bi-compass me-2 text-primary-custom"></i>
                      Patrol Leader
                    </h6>
                    <p className="small text-muted mb-0">
                      Served as Patrol Leader in Scouts & Guides (2018–2020).
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h6>
                      <i className="bi bi-patch-check me-2 text-success"></i>
                      AI-900 Certification
                    </h6>
                    <p className="small text-muted mb-0">
                      Microsoft Azure AI Fundamentals certified.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h6>
                      <i className="bi bi-robot me-2 text-primary-custom"></i>
                      AI Engineer Badge
                    </h6>
                    <p className="small text-muted mb-0">
                      Earned by completing the RAG Documentation Assistant quest.
                    </p>
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

export default Achievements;
