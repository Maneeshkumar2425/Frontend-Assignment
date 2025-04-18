import React from 'react';
import './Timeline.css';

export type TimelineEvent = {
    id: string;
    title: string;
    description: string;
    date: string;
    icon?: React.ReactNode;
    color?: string;
};

export type TimelineProps = {
    events: TimelineEvent[];
    orientation?: 'vertical' | 'horizontal';
    showConnectors?: boolean;
    connectorColor?: string;
    className?: string;
};

const Timeline: React.FC<TimelineProps> = ({
    events,
    orientation = 'vertical',
    showConnectors = true,
    connectorColor = '#e0e0e0',
    className = '',
}) => {
    const timelineClassName = `timeline ${orientation} ${className}`.trim();

    return React.createElement(
        'div',
        { className: timelineClassName },
        events.map((event, index) => {
            const isLast = index === events.length - 1;
            const eventStyle = {
                '--event-color': event.color || '#2196F3',
                '--connector-color': connectorColor,
            } as React.CSSProperties;

            return React.createElement(
                'div',
                {
                    key: event.id,
                    className: 'timeline-event',
                    style: eventStyle,
                },
                [
                    React.createElement(
                        'div',
                        { className: 'event-content' },
                        [
                            React.createElement(
                                'div',
                                { className: 'event-icon' },
                                event.icon || React.createElement('div', { className: 'event-dot' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'event-details' },
                                [
                                    React.createElement('h3', { className: 'event-title' }, event.title),
                                    React.createElement('p', { className: 'event-date' }, event.date),
                                    React.createElement('p', { className: 'event-description' }, event.description),
                                ]
                            ),
                        ]
                    ),
                    !isLast && showConnectors && React.createElement('div', { className: 'event-connector' }),
                ]
            );
        })
    );
};

export default Timeline; 