const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  try {
    const { userName, email, feedbackText, category } = req.body;
    const feedback = new Feedback({ userName, email, feedbackText, category });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { category } = req.query;
    let query = category ? { category } : {};
    
    const feedbacks = await Feedback.find(query).sort({ createdAt: -1 });

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
