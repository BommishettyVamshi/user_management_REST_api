# User Management REST API

## Overview

This project is a backend-only REST API for user management, built using Node.js and Express.js. It is designed to support CRUD (Create, Read, Update, Delete) operations and follows a clean, scalable architecture using controllers, services, and models.

The project is currently in the initial setup phase, with core structure and dependencies in place. Database integration and API implementation will be added in subsequent stages.

# Tech Stack

- Node.js
- Express.js
- Sqlite

## 📁 Project Structure

```text
user_management_REST_API/
│── backend/
│   │── src/
│   │   │── controllers/   # Handles request and response
│   │   │── database/      # Database config and schema
│   │   │   │── db.js      # Initializes SQLite DB and exports connection
│   │   │── models/        # Database queries
│   │   │── routes/        # API route definitions
│   │   │── services/      # Business logic
│   │
│   │── scripts/
│   │   │── seed.js        # Seeds database with initial data
│   │
│   │── server.js          # Entry point
│   │── package.json
│   │── .gitignore
│
│── README.md
```

# Setup Instructions

Follow the steps below to run the project locally

### 1. Clone the repository

```bash
    git clone <https://github.com/BommishettyVamshi/user_management_REST_api>
```

### 2. Navigate to the project directory

```bash
    cd backend
```

### 3. Install dependencies

```bash
    npm install
```

## 4. Seed the Database

```bash
    npm run seed
```

### 5. Run the development server

```bash
    npm run dev
```

# Database

- Database is initialized atuomatically when the server starts.
- To seed the database with initial data:

```bash
    npm run sedd
```

# Notes

- The project is currently in the database development phase.
- API endpoints will be implemented in the next phase.
