import React, { useState, useRef, useEffect } from 'react';
import './ToolTip.css';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: TooltipPosition;
    delay?: number;
    className?: string;
};

const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    delay = 0,
    className = '',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const showTooltip = () => {
        if (delay) {
            setTimeout(() => setIsVisible(true), delay);
        } else {
            setIsVisible(true);
        }
    };

    const hideTooltip = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (isVisible && tooltipRef.current && triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let style: React.CSSProperties = {};

            // Calculate available space
            const spaceAbove = triggerRect.top;
            const spaceBelow = viewportHeight - triggerRect.bottom;
            const spaceLeft = triggerRect.left;
            const spaceRight = viewportWidth - triggerRect.right;

            // Determine best position if auto-positioning is needed
            let finalPosition = position;
            if (position === 'top' && spaceAbove < tooltipRect.height + 10) {
                finalPosition = 'bottom';
            } else if (position === 'bottom' && spaceBelow < tooltipRect.height + 10) {
                finalPosition = 'top';
            } else if (position === 'left' && spaceLeft < tooltipRect.width + 10) {
                finalPosition = 'right';
            } else if (position === 'right' && spaceRight < tooltipRect.width + 10) {
                finalPosition = 'left';
            }

            // Set position based on available space
            switch (finalPosition) {
                case 'top':
                    style = {
                        bottom: `${triggerRect.height + 10}px`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        maxWidth: 'min(300px, calc(100vw - 20px))',
                    };
                    break;
                case 'bottom':
                    style = {
                        top: `${triggerRect.height + 10}px`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        maxWidth: 'min(300px, calc(100vw - 20px))',
                    };
                    break;
                case 'left':
                    style = {
                        right: `${triggerRect.width + 10}px`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        maxWidth: 'min(200px, calc(100vw - 20px))',
                    };
                    break;
                case 'right':
                    style = {
                        left: `${triggerRect.width + 10}px`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        maxWidth: 'min(200px, calc(100vw - 20px))',
                    };
                    break;
            }

            setTooltipStyle(style);
        }
    }, [isVisible, position]);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            ref={triggerRef}
        >
            {children}
            {isVisible && (
                <div
                    ref={tooltipRef}
                    className={`tooltip ${position} ${className}`}
                    style={tooltipStyle}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip; 