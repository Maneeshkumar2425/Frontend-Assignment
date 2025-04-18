import React from 'react';
import Timeline from './Timeline';
import './Timeline.css';
import { Meta, StoryFn } from '@storybook/react';

type TimelineEvent = {
    id: string;
    title: string;
    description: string;
    date: string;
    icon?: React.ReactNode;
    color?: string;
};

type TimelineProps = {
    events: TimelineEvent[];
    orientation?: 'vertical' | 'horizontal';
    showConnectors?: boolean;
    connectorColor?: string;
    className?: string;
};

const meta: Meta<TimelineProps> = {
    title: 'Components/Timeline',
    component: Timeline,
    argTypes: {
        orientation: {
            control: {
                type: 'select',
                options: ['vertical', 'horizontal'],
            },
            description: 'Orientation of the timeline',
        },
        showConnectors: {
            control: 'boolean',
            description: 'Whether to show connecting lines between events',
        },
        connectorColor: {
            control: 'color',
            description: 'Color of the connecting lines',
        },
        className: {
            control: 'text',
            description: 'Additional CSS class to apply to the timeline',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A timeline component that displays a series of events in chronological order.',
            },
        },
    },
};

export default meta;

const sampleEvents: TimelineEvent[] = [
    {
        id: '1',
        title: 'Project Started',
        description: 'Initial planning and setup phase',
        date: '2023-01-01',
        color: '#4CAF50',
    },
    {
        id: '2',
        title: 'First Milestone',
        description: 'Completed core functionality',
        date: '2023-02-15',
        color: '#2196F3',
    },
    {
        id: '3',
        title: 'Beta Release',
        description: 'First public release with basic features',
        date: '2023-04-01',
        color: '#FFC107',
    },
    {
        id: '4',
        title: 'Version 1.0',
        description: 'Full feature release with documentation',
        date: '2023-06-01',
        color: '#F44336',
    },
];

const Template: StoryFn<TimelineProps> = (args: TimelineProps) => {
    const containerStyle = {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    };

    return React.createElement(
        'div',
        { style: containerStyle },
        React.createElement(Timeline, {
            ...args,
            events: sampleEvents,
        })
    );
};

export const Default = Template.bind({});
Default.args = {
    orientation: 'vertical',
    showConnectors: true,
    connectorColor: '#e0e0e0',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    orientation: 'horizontal',
    showConnectors: true,
    connectorColor: '#e0e0e0',
};

export const WithoutConnectors = Template.bind({});
WithoutConnectors.args = {
    orientation: 'vertical',
    showConnectors: false,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    orientation: 'vertical',
    showConnectors: true,
    connectorColor: '#ff0000',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    orientation: 'vertical',
    showConnectors: true,
    events: sampleEvents.map(event => ({
        ...event,
        icon: React.createElement('span', { style: { fontSize: '24px' } }, '📅'),
    })),
}; 