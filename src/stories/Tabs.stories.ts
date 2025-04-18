import { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs/Tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: 'UI/Tabs',
};

export default meta;

const defaultItems = [
    {
        id: 'tab1',
        label: 'Home',
        content: 'Content for Tab 1'
    },
    {
        id: 'tab2',
        label: 'Profile',
        content: 'Content for Tab 2'
    },
    {
        id: 'tab3',
        label: 'Settings',
        content: 'Content for Tab 3'
    },
    {
        id: 'tab4',
        label: 'Analytics',
        content: 'Content for Tab 4'
    }
];

const DefaultTabs: StoryObj<typeof Tabs> = {
    args: {
        items: defaultItems,
    },
};

const VerticalTabs: StoryObj<typeof Tabs> = {
    args: {
        items: defaultItems,
        variant: 'vertical',
    },
};

const CustomStyledTabs: StoryObj<typeof Tabs> = {
    args: {
        items: defaultItems,
        color: '#ff5722',
        activeColor: '#e91e63',
    },
};

const DisabledTabs: StoryObj<typeof Tabs> = {
    args: {
        items: [
            ...defaultItems,
            {
                id: 'tab5',
                label: 'Disabled Tab',
                content: 'This tab is disabled',
                disabled: true
            }
        ],
    },
};

const DifferentSizes: StoryObj<typeof Tabs> = {
    args: {
        items: defaultItems,
        size: 'large',
    },
};

export const Default = DefaultTabs;
export const Vertical = VerticalTabs;
export const CustomStyled = CustomStyledTabs;
export const WithDisabledTab = DisabledTabs;
export const LargeSize = DifferentSizes; 