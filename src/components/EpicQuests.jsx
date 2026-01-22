import Reveal from './Reveal';
import CardSwap from './CardSwap';

const EPIC_QUESTS = [
    {
        title: "Master of Shadows",
        description: "Deep dive into advanced cybersecurity and ethical hacking. A path for the truly brave.",
        icon: "bi-incognito",
        color: "#a855f7"
    },
    {
        title: "The Cloud Navigator",
        description: "Conquer the vast expanse of cloud computing. Deploying fleets of microservices across the globe.",
        icon: "bi-cloud-lightning-fill",
        color: "#3b82f6"
    },
    {
        title: "Neural Alchemist",
        description: "Transform raw data into intelligence. Training deep neural networks to see the unseen.",
        icon: "bi-cpu-fill",
        color: "#10b981"
    }
];

function EpicQuests() {
    return (
        <Reveal id="epic-quests">
            <div className="container py-5 section-gap">
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <h4 className="mb-2 text-center">
                            <i className="bi bi-star-fill me-2 text-warning"></i>
                            Epic Quests
                        </h4>
                        <p className="text-muted text-center mb-5">
                            Legendary challenges that push the boundaries of technology.
                        </p>

                        <CardSwap cards={EPIC_QUESTS} />
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default EpicQuests;
