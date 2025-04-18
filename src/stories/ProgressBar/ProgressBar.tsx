import React from 'react';
import './ProgressBar.css';

type ProgressBarProps = {
    progress: number;
    height?: number;
    color?: string;
    backgroundColor?: string;
    showPercentage?: boolean;
    animated?: boolean;
    striped?: boolean;
    className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    height = 20,
    color = '#2196f3',
    backgroundColor = '#f5f5f5',
    showPercentage = true,
    animated = false,
    striped = false,
    className = '',
}) => {

    const normalizedProgress = Math.min(100, Math.max(0, progress));

    return (
        <div
            className={`progress-bar-container ${className}`}
            style={{
                height: `${height}px`,
                backgroundColor
            }}
        >
            <div
                className={`progress-bar-fill ${animated ? 'animated' : ''} ${striped ? 'striped' : ''}`}
                style={{
                    width: `${normalizedProgress}%`,
                    backgroundColor: color
                }}
            >
                {showPercentage && (
                    <span className="progress-text">
                        {normalizedProgress}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar; 