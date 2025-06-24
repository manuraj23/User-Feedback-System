import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

export const submitFeedback = (feedbackData) => {
  return axios.post(API_URL, feedbackData);
};

export const fetchFeedback = (category = '') => {
  const url = category ? `${API_URL}?category=${category}` : API_URL;
  return axios.get(url);
};
