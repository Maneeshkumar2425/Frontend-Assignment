import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
    component: ProgressBar,
    title: 'UI/ProgressBar',
};

export default meta;

const DefaultProgressBar: StoryObj<typeof ProgressBar> = {
    args: {
        progress: 75,
    },
};

const CustomStyledProgressBar: StoryObj<typeof ProgressBar> = {
    args: {
        progress: 60,
        height: 30,
        color: '#ff5722',
        backgroundColor: '#ffebee',
    },
};

const AnimatedProgressBar: StoryObj<typeof ProgressBar> = {
    args: {
        progress: 85,
        animated: true,
    },
};

const StripedProgressBar: StoryObj<typeof ProgressBar> = {
    args: {
        progress: 45,
        striped: true,
    },
};

const WithoutPercentage: StoryObj<typeof ProgressBar> = {
    args: {
        progress: 90,
        showPercentage: false,
    },
};

export const Default = DefaultProgressBar;
export const CustomStyled = CustomStyledProgressBar;
export const Animated = AnimatedProgressBar;
export const Striped = StripedProgressBar;
export const NoPercentage = WithoutPercentage; 