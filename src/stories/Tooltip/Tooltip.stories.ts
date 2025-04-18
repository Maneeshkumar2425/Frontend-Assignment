import React from 'react';
import Tooltip from './Tooltip';
import './ToolTip.css';
import { Meta, StoryFn } from '@storybook/react';

type TooltipProps = {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
};

const meta: Meta<TooltipProps> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: ['top', 'bottom', 'left', 'right'],
            },
            description: 'Position of the tooltip relative to the trigger element',
        },
        delay: {
            control: {
                type: 'number',
                min: 0,
                max: 1000,
                step: 100,
            },
            description: 'Delay in milliseconds before showing the tooltip',
        },
        content: {
            control: 'text',
            description: 'Content to display in the tooltip',
        },
        className: {
            control: 'text',
            description: 'Additional CSS class to apply to the tooltip',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A tooltip component that displays additional information when hovering over an element.',
            },
        },
    },
};

export default meta;

const Template: StoryFn<TooltipProps> = (args: TooltipProps) => {
    const buttonStyle = {
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const containerStyle = {
        padding: '50px',
        textAlign: 'center' as const
    };

    return React.createElement(
        'div',
        { style: containerStyle },
        React.createElement(
            Tooltip,
            args,
            React.createElement(
                'button',
                { style: buttonStyle },
                'Hover me'
            )
        )
    );
};

export const Default = Template.bind({});
Default.args = {
    content: 'This is a tooltip',
    position: 'top',
    delay: 200,
};

export const Bottom = Template.bind({});
Bottom.args = {
    content: 'Tooltip at bottom',
    position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
    content: 'Tooltip on left',
    position: 'left',
};

export const Right = Template.bind({});
Right.args = {
    content: 'Tooltip on right',
    position: 'right',
};

export const WithDelay = Template.bind({});
WithDelay.args = {
    content: 'Tooltip with delay',
    position: 'top',
    delay: 500,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
    content: React.createElement(
        'div',
        null,
        React.createElement('h4', null, 'Custom Content'),
        React.createElement('p', null, 'This tooltip contains custom HTML content'),
        React.createElement(
            'button',
            { style: { marginTop: '8px' } },
            'Click me'
        )
    ),
    position: 'top',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
    content: 'Tooltip with custom style',
    position: 'top',
    className: 'custom-tooltip',
}; 