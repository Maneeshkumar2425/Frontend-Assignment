import React from 'react';
import './App.css';
import Sidebar from './stories/Sidebar/Sidebar';
import Tabs from './stories/Tabs/Tabs';
import ProgressBar from './stories/ProgressBar/ProgressBar';
import Timeline, { TimelineEvent } from './stories/Timeline/Timeline';

function App() {
  const sidebarItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' }
  ];

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="tab-content">
          <h2>Welcome to Dashboard</h2>
          <p>This is the overview section of your application.</p>
          <div className="progress-section">
            <h3>Task Progress</h3>
            <ProgressBar progress={75} />
            <h3>Project Completion</h3>
            <ProgressBar
              progress={60}
              height={30}
              color="#4caf50"
              backgroundColor="#e8f5e9"
            />
          </div>
        </div>
      )
    },
    {
      id: 'details',
      label: 'Details',
      content: (
        <div className="tab-content">
          <h2>Detailed Information</h2>
          <p>Here you can find more detailed information about your data.</p>
          <div className="progress-section">
            <h3>Loading Progress</h3>
            <ProgressBar
              progress={85}
              animated={true}
              striped={true}
            />
            <h3>Upload Status</h3>
            <ProgressBar
              progress={45}
              color="#ff9800"
              showPercentage={false}
            />
          </div>
        </div>
      )
    },
    {
      id: 'timeline',
      label: 'Timeline',
      content: (
        <div className="tab-content">
          <h2>Project Timeline</h2>
          <Timeline
            events={[
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
            ]}
            orientation="vertical"
            showConnectors={true}
          />
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="tab-content">
          <h2>Application Settings</h2>
          <p>Configure your application settings here.</p>
          <div className="progress-section">
            <h3>Storage Usage</h3>
            <ProgressBar
              progress={90}
              height={25}
              color="#f44336"
              backgroundColor="#ffebee"
            />
          </div>
        </div>
      )
    }
  ];

  const handleSidebarClick = (itemId: string) => {
    console.log(`Sidebar item clicked: ${itemId}`);
  };

  const handleTabChange = (tabId: string) => {
    console.log(`Tab changed to: ${tabId}`);
  };

  return (
    <div className="App">
      <Sidebar
        items={sidebarItems}
        activeItemId="home"
        onItemClick={handleSidebarClick}
      />
      <div className="main-content">
        <header className="app-header">
          <h1>My Application</h1>
          <button className="help-button">Help</button>
        </header>
        <Tabs
          items={tabItems}
          defaultActiveTab="overview"
          onChange={handleTabChange}
          color="#2196f3"
        />
      </div>
    </div>
  );
}

export default App;
