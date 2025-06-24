# User Feedback System

This project is a full-stack application designed to collect, store, and display user feedback. It uses **Node.js** for the backend, **React** for the frontend, and **MongoDB** for storing the feedback data.

The application allows users to submit feedback, which is stored securely and displayed on a dashboard with options to filter and sort the feedback.

---

# 📚 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Additional Features](#additional-features)
- [Evaluation Criteria](#evaluation-criteria)

---

# 📖 Project Overview

The **User Feedback System** allows users to submit feedback through a frontend form. The feedback is stored in a database and displayed on a dashboard where users can view and interact with it.

### Application Components:
- **Frontend**: A form for submitting feedback and a dashboard for viewing the collected feedback.
- **Backend**: A server to handle feedback submissions and retrievals.
- **Database**: A database to store feedback securely.

---

# ✨ Features

- **Feedback Submission**: Users can submit feedback with their name, email, and feedback text.
- **Dashboard**: Displays submitted feedback with filtering and sorting options.
- **Feedback Categorization** *(Optional)*: Users can categorize feedback into suggestions, bug reports, or feature requests.
- **Scalability**: Backend built to handle multiple simultaneous submissions efficiently.
- **Clean Code Structure**: Modular and follows standard coding practices for maintainability.

---

# 🛠 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB (or PostgreSQL)
- **Environment Variables**: `.env` file for configuration
- **Styling**: Basic CSS (optionally extendable with Bootstrap)

---

# 🏗️ Project Structure

**Frontend Components:**
- `App.js`: Main React component that serves as the entry point for the frontend.
- `FeedbackForm.js`: Component for submitting user feedback.
- `FeedbackDashboard.js`: Component to display feedback with filtering and sorting options.

**Backend Files:**
- `db.js`: Establishes connection to MongoDB database.
- `feedbackModel.js`: Defines the schema for storing feedback data.
- `feedbackRoutes.js`: Defines the API routes.
- `app.js`: Sets up the Express server and integrates routes.

---

# ⚙️ Setup Instructions

## Prerequisites

- Node.js and npm installed
- MongoDB or PostgreSQL instance set up
- Git installed

## Steps to Set Up

### 1. Clone the repository

```bash
git clone url
cd fullstack
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
npm start
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
- Sorting by timestamp
- Filtering by feedback category
- Responsive design for mobile and desktop

---

# 📝 Evaluation Criteria

| Criteria         | Description                                                      |
| ---------------- | ----------------------------------------------------------------- |
| Code Quality     | Clean, maintainable, modular code                                 |
| Functionality    | Complete feedback submission and dashboard functionalities       |
| User Experience  | Responsive and user-friendly interface                            |
| Scalability      | Backend handles multiple submissions without issues              |
| Innovation       | Additional features like categorization, analytics, etc.          |

---




