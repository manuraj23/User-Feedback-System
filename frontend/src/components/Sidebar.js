import React from 'react';
import './Sidebar.css';

function Sidebar({ setActivePage, activePage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">User Feedback System</h2>
      <button
        className={activePage === 'dashboard' ? 'active' : ''}
        onClick={() => setActivePage('dashboard')}
      >
        Feedback Dashboard
      </button>
      <button
        className={activePage === 'form' ? 'active' : ''}
        onClick={() => setActivePage('form')}
      >
        Submit Feedback
      </button>
    </div>
  );
}

export default Sidebar;
