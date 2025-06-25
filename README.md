# User Feedback System

This is a full-stack web application built to collect, store, and manage user feedback effectively. It leverages the MERN stack — MongoDB, Express.js, React, and Node.js — to provide a seamless experience to users.

### Dashboard
![image](https://github.com/user-attachments/assets/8d67a839-cfdc-4a37-90e6-de854cd147c5)


### Feedback Form
![image](https://github.com/user-attachments/assets/f01a28eb-0b46-4e32-9a8f-38c83ec03a25)



### Responsive Look:
<p align="center">
  <img src="https://github.com/user-attachments/assets/d317cefe-5ac6-4ede-a191-c248491a487b" alt="Image 1" width="45%" />
  <img src="https://github.com/user-attachments/assets/17e5de8e-4648-40dc-aca5-07931eb8497f" alt="Image 2" width="45%" />
</p>




# 📖 Project Overview

The **User Feedback System** allows users to submit feedback through a frontend form. The feedback is stored in a database and displayed on a dashboard where users can view and interact with it.


## Prerequisites
- Node instlled
- MongoDB
- Git

---
# 🚀 Key Features

- **✍️ Feedback Submission:**: Users can submit feedback with details like name, email, category, and message.
- **📊 Dashboard Display**:  A real-time dashboard lists all submitted feedback with filtering and sorting capabilities.
- **📂 Category-Based Filtering** *(Optional)*: View feedback by categories like Bug, Suggestion, Improvement, etc.
- **🔐 Secure Data Handling:** Data is securely sent to and stored in MongoDB via a Node.js backend.
- **Scalability**: Backend built to handle multiple simultaneous submissions efficiently.
- **Clean Code Structure**: Modular and follows standard coding practices for maintainability.

---

# 🛠 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Environment Variables**: `.env` file for configuration
- **Version Control**: Git

---

#  Project Structure

**Frontend Components:**
- `App.js`: Main React component that serves as the entry point for the frontend.
- `FeedbackForm.js`: Component for submitting user feedback.
- `FeedbackDashboard.js`: Component to display feedback with filtering and sorting options.

**Backend Files:**
- `db.js`: Establishes connection to MongoDB database.
- `feedbackModel.js`: Defines the schema for storing feedback data.
- `feedbackRoutes.js`: Defines the API routes.
- `server.js`: Entry point for the backend server, initializes the app and connects to the database.


---

# ⚙️ Setup Instructions

## Prerequisites

- Node.js and npm installed
- MongoDB instance set up
- Git installed

## Steps to Set Up

### 1. Clone the repository

```bash
git clone https://github.com/manuraj23/User-Feedback-System.git
cd User-Feedback-System
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory with the following:

```env
DB_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the backend server

```bash
node server.js
```

The backend will be running at `http://localhost:5000`.

### 5. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 6. Start the frontend development server

```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

### 7. Access the Application

Open your browser and navigate to `http://localhost:3000` to interact with the **User Feedback System**.


---

# 🎯 Additional Features

- Categorization of feedback entries
- Filtering by feedback category
- Responsive design for mobile and desktop

---

## Upcoming Features
- **User Authentication**: Implement user login and registration.
- **Admin Dashboard**: Create an admin interface to manage feedback.
- **Role-Based Access Control**: Differentiate access levels for users and admins.
- **Email Notifications**: Send email notifications for new feedback submissions.
- **Analytics Dashboard**: Visualize feedback trends and statistics.
- **Search Functionality**: Allow users to search feedback by keywords.

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your fork and submit a pull request.

---
## License
This project is licensed under the MIT License.

## Contact
For queries, reach out to [Manu Raj](mailto:manuraj082004@gmail.com).
---




