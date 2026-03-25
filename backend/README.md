# Project Name

User Management REST API

## Overview

This project is backend-only REST API for user management, built using Node.js, Express.js. It is structured and support CRUD(Create, Read, Update, Delete) operations and follows a clean, scalable architecture using controllers, services, and models.

The project is currently in initial setup phase, with core structure and dependencies in place. Database integration and API implementation added in subsequent stages.

# Tech Stack

- Node.js
- Express.js
- Sqlite

# Project Structure

```text
   user_management_REST_API/
   |---backend/
   |   |---src/
   |   |   |---controllers/   # Handles request and response
   |   |   |---database/      # Database config, schema
   |   |   |---models/        # Database queries and models
   |   |   |---routes/        # API route definitions
   |   |   |---services/      # Business logic
   |   |
   |   |---scripts/           # Utility scripts(eg., seed)
   |   |---sever.js           # Entry point 
   |   |
   |   |---.gitignore
   |   |---package.json
   |   |---README.md
   |
```

# Setup Instructions
FOllow the steps below to run the project locally

## 1. Clone the repository
```bash
    git clone <https://github.com/BommishettyVamshi/user_management_REST_API>
```
## 2. Navigate to the project directory
```bash
    cd backend
```
## 3. Install dependencies
```bash
    npm install
```
## 4. Run the development server
```bash
    npm run dev
```

# Notes
-1. Make sure Node.js is installed on your system.
-2. The project is currently in the initial setup phase.