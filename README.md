# User Management REST API

## Overview

This project is a backend-only REST API for user management, built using **Node.js** and **Express.js**. It supports CRUD (Create, Read, Update, Delete) operations and follows a clean, scalable architecture using **controllers, services, and models**.

---

## Tech Stack

* Node.js
* Express.js
* SQLite

---

## Project Structure

```text
user_management_REST_API/
│── backend/
│   │── src/
│   │   │── controllers/
|   |   |   |-- userController.js   # Handles the request and response 
│   │   │── database/
│   │   │   │── db.js               # Handles Database config
│   │   │── models/
|   |   |   |-- userModel.js        # Handles DB queries of user table
│   │   │── routes/
|   |   |   |-- userRoutes.js       # Handles routes config of users
│   │   │── services/
|   |   |   |-- userService.js      # Handles business logic 
│   │
│   │── scripts/
│   │   │── seed.js                 # Seeds the Database 
│   │
│   │── server.js                   # Entry point 
│   │── package.json
│   │── .gitignore
│
│── README.md
```

---

## Setup Instructions

```bash
git clone https://github.com/BommishettyVamshi/user_management_REST_api
cd backend
npm install
npm run seed
npm run dev
```

---

## Server

```
http://localhost:5000
```

---

## API Endpoints

## Base URL

```
http://localhost:5000/api/users
```

---

### Get All Users

**GET** `/api/users`

**Description:** Fetch all users

**Response**

```json
{
  "message": "Users fetched successfully",
  "data": [
    {
      "username": "JOHN_DOE",
      "email": "john.doe@example.com",
      "first_name": "JOHN",
      "last_name": "DOE",
      "is_active": 1
    }
  ]
}
```

---

### Filter Users

**GET** `/api/users?search=j&sort=name&order=desc`

**Description:** Filter users by search, sort, and order

**Response**

```json
{
  "message": "Users fetched successfully",
  "data": [
    {
      "username": "JANE_SMITH",
      "email": "jane.smith@example.com",
      "first_name": "JANE",
      "last_name": "SMITH",
      "is_active": 1
    }
  ]
}
```

---

### Create User

**POST** `/api/users`

**Request**

```json
{
  "username": "ram",
  "email": "ram@gmail.com",
  "password": "123",
  "first_name": "ram charan",
  "last_name": "Goud"
}
```

**Response**

```json
{
  "message": "User created successfully",
  "data": {
    "id": 5
  }
}
```

---

### Update User

**PUT** `/api/users/{userId}`

**Request**

```json
{
  "password": "12345"
}
```

**Response**

```json
{
  "message": "User updated successfully",
  "data": {
    "id": 6,
    "username": "RAM",
    "email": "ram@gmail.com",
    "first_name": "RAM CHARAN",
    "last_name": "GOUD",
    "is_active": 1
  }
}
```

---

### Delete User

**DELETE** `/api/users/{userId}`

**Response**

```json
{
  "message": "User deleted successfully"
}
```

---

## Error Handling

| Status Code | Description           |
| ----------- | --------------------- |
| 400         | Bad Request           |
| 404         | User not found        |
| 409         | Duplicate user        |
| 500         | Internal server error |

---

## Notes

* Follows MVC architecture
* Uses singleton pattern for DB connection
* Designed for scalability

---

## Future Improvements

* JWT Authentication
* Role-Based Access Control (RBAC)
* Input validation (Joi / Zod)

---

## Author

**Vamshi**
