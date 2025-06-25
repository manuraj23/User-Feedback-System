import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/feedbackService';
import './FeedbackDashboard.css';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 🆕 Sorting state

  useEffect(() => {
    loadFeedback();
  }, [category, sortOrder]);

  const loadFeedback = async () => {
    try {
      const response = await fetchFeedback(category);
      const sortedData = response.data.sort((a, b) => {
        return sortOrder === 'asc'
          ? new Date(a.timestamp) - new Date(b.timestamp)
          : new Date(b.timestamp) - new Date(a.timestamp);
      });
      setFeedbacks(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Feedback Dashboard</h2>

      <div className="filters-row">
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

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="category-filter"
        >
          <option value="desc">Newest</option>
          <option value="asc">Oldest</option>
        </select>
      </div>

      <div className="feedback-list">
        {feedbacks.map((fb) => (
          <div className="feedback-card" key={fb._id}>
            <div className="feedback-category">{fb.category}</div>
            <div className="feedback-header">
              <span><strong>Name:</strong> {fb.userName}</span> &nbsp;&nbsp;
              <span><strong>Email:</strong> {fb.email}</span>
            </div>
            <div className="feedback-text"><span><strong>Feedback: </strong></span>{fb.feedbackText}</div>
            <div className="feedback-time">
              <span><strong>Date: </strong></span> {new Date(fb.timestamp).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })} <br />
              <span><strong>Time: </strong></span> {new Date(fb.timestamp).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDashboard;
