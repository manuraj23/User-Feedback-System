import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        setActivePage={setActivePage}
        activePage={activePage}
        isOpen={sidebarOpen}
        toggleSidebar={setSidebarOpen}
      />
      <div className="content">{activePage === 'dashboard' ? <FeedbackDashboard /> : <FeedbackForm />}</div>
    </div>
  );
}

export default App;
