import React from 'react';
import './Sidebar.css';

function Sidebar({ setActivePage, activePage, isOpen, toggleSidebar }) {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="logo">User Feedback System</h2>
        <button
          className={activePage === 'dashboard' ? 'active' : ''}
          onClick={() => {
            setActivePage('dashboard');
            toggleSidebar(false);
          }}
        >
          Feedback Dashboard
        </button>
        <button
          className={activePage === 'form' ? 'active' : ''}
          onClick={() => {
            setActivePage('form');
            toggleSidebar(false);
          }}
        >
          Submit Feedback
        </button>
      </div>

      <button className="hamburger" onClick={() => toggleSidebar(!isOpen)}>
        ☰
      </button>
    </>
  );
}

export default Sidebar;
