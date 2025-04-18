import React, { useState } from 'react';
import './Tabs.css';

type TabItem = {
    id: string;
    label: string;
    content: React.ReactNode | string;
    icon?: React.ReactNode;
    disabled?: boolean;
};

type TabsProps = {
    items: TabItem[];
    defaultActiveTab?: string;
    onChange?: (tabId: string) => void;
    variant?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    color?: string;
    activeColor?: string;
    disabledColor?: string;
    className?: string;
};

const Tabs: React.FC<TabsProps> = ({
    items,
    defaultActiveTab,
    onChange,
    variant = 'horizontal',
    size = 'medium',
    color = '#2196f3',
    activeColor,
    disabledColor = '#ccc',
    className = '',
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id);

    const handleTabClick = (tabId: string) => {
        if (items.find(tab => tab.id === tabId)?.disabled) return;
        setActiveTab(tabId);
        onChange?.(tabId);
    };

    const renderContent = (content: React.ReactNode | string) => {
        if (typeof content === 'string') {
            return <div>{content}</div>;
        }
        return content;
    };

    const getSizeClass = () => {
        switch (size) {
            case 'small': return 'tabs-small';
            case 'large': return 'tabs-large';
            default: return 'tabs-medium';
        }
    };

    return (
        <div
            className={`tabs-container ${variant} ${getSizeClass()} ${className}`}
            style={{
                '--tab-color': color,
                '--tab-active-color': activeColor || color,
                '--tab-disabled-color': disabledColor,
            } as React.CSSProperties}
        >
            <div className="tabs-header">
                {items.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                        disabled={tab.disabled}
                    >
                        {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {renderContent(items.find(tab => tab.id === activeTab)?.content)}
            </div>
        </div>
    );
};

export default Tabs; 