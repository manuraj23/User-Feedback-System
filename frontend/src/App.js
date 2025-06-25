
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import './App.css';
function App() {
  return (
    <div className="app-container">
      <div className="left"><FeedbackDashboard /></div>
      <div className="right"><FeedbackForm /></div>
    </div>
  );
}

export default App;


