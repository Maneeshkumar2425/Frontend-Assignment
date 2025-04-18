import React from 'react';
import './Sidebar.css';

type MenuItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};

type SidebarProps = {
    items: MenuItem[];
    width?: string;
    backgroundColor?: string;
    textColor?: string;
    activeItemId?: string;
    onItemClick?: (itemId: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
    items,
    width = '250px',
    backgroundColor = '#2c3e50',
    textColor = '#ecf0f1',
    activeItemId,
    onItemClick,
}) => {
    return (
        <div
            className="sidebar"
            style={{
                width,
                backgroundColor,
                color: textColor
            }}
        >
            <div className="sidebar-menu">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`sidebar-item ${activeItemId === item.id ? 'active' : ''}`}
                        onClick={() => {
                            item.onClick?.();
                            onItemClick?.(item.id);
                        }}
                    >
                        {item.icon && <span className="sidebar-icon">{item.icon}</span>}
                        <span className="sidebar-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar; 