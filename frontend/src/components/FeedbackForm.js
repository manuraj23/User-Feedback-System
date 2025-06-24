import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    feedbackText: '',
    category: 'Suggestion',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(formData);
      alert('Feedback submitted successfully');
      setFormData({ userName: '', email: '', feedbackText: '', category: 'Suggestion' });
    } catch (error) {
      console.error(error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="feedback-form">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          placeholder="Name"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedbackText"
          placeholder="Your Feedback"
          value={formData.feedbackText}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Suggestion</option>
          <option>Bug Report</option>
          <option>Feature Request</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
