import { useState } from 'react';
import { Button } from '@mui/material';

const CardSwap = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSwapping, setIsSwapping] = useState(false);

    const handleSwap = () => {
        if (isSwapping) return;
        setIsSwapping(true);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
            setIsSwapping(false);
        }, 600);
    };

    const getCardClass = (index) => {
        const diff = (index - currentIndex + cards.length) % cards.length;

        if (isSwapping && diff === 0) return 'swap-card swapping';

        if (diff === 0) return 'swap-card position-0';
        if (diff === 1) return 'swap-card position-1';
        if (diff === 2) return 'swap-card position-2';

        return 'swap-card d-none'; // Hide other cards
    };

    return (
        <div className="card-swap-wrapper">
            <div className="card-stack-container">
                {cards.map((card, index) => (
                    <div key={index} className={getCardClass(index)}>
                        <div className="card h-100 shadow-lg border-0">
                            <div className="card-body d-flex flex-column text-center p-4">
                                <div className="mb-3">
                                    <i className={`bi ${card.icon} display-4`} style={{ color: card.color }}></i>
                                </div>
                                <h5 className="mb-3">{card.title}</h5>
                                <p className="small text-muted flex-grow-1">{card.description}</p>
                                <Button variant="outlined" size="small" sx={{ borderColor: card.color, color: card.color, '&:hover': { background: card.color, color: '#000' } }}>
                                    View Mission
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card-swap-controls">
                <button
                    className="btn-swap"
                    onClick={() => {
                        if (isSwapping) return;
                        setIsSwapping(true);
                        setTimeout(() => {
                            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
                            setIsSwapping(false);
                        }, 600);
                    }}
                    disabled={isSwapping}
                    title="Previous Quest"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className="btn-swap"
                    onClick={handleSwap}
                    disabled={isSwapping}
                    title="Next Quest"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default CardSwap;
