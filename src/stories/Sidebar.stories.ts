import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar/Sidebar';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'UI/Sidebar',
};

export default meta;

const defaultItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'analytics', label: 'Analytics' },
];

const DefaultSidebar: StoryObj<typeof Sidebar> = {
    args: {
        items: defaultItems,
        width: '250px',
        backgroundColor: '#2c3e50',
        textColor: '#ecf0f1',
    },
};

const CustomStyledSidebar: StoryObj<typeof Sidebar> = {
    args: {
        items: defaultItems,
        width: '300px',
        backgroundColor: '#1a237e',
        textColor: '#ffffff',
    },
};

const WithActiveItem: StoryObj<typeof Sidebar> = {
    args: {
        items: defaultItems,
        activeItemId: 'profile',
    },
};

export const Default = DefaultSidebar;
export const CustomStyled = CustomStyledSidebar;
export const ActiveItem = WithActiveItem; 