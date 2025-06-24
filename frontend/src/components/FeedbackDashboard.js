import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/feedbackService';

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
    <div>
      <h2>Feedback Dashboard</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>

      <ul>
        {feedbacks.map((fb) => (
          <li key={fb._id}>
            <strong>{fb.userName}</strong> ({fb.email}) [{fb.category}]: {fb.feedbackText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDashboard;
