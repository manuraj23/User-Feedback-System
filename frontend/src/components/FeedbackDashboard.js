import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/feedbackService';
import './FeedbackDashboard.css';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    loadFeedback();
  }, [category]);

  const loadFeedback = async () => {
    try {
      const response = await fetchFeedback(category);
      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Feedback Dashboard</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-filter"
      >
        <option value="">All</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>

      <div className="feedback-list">
        {feedbacks.map((fb) => (
          <div className="feedback-card" key={fb._id}>
            <div className="feedback-header">
              <strong>{fb.userName}</strong> ({fb.email})
            </div>
            <div className="feedback-category">{fb.category}</div>
            <div className="feedback-text">{fb.feedbackText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDashboard;
