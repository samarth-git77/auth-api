# User Authentication & Role-Based Access API

A Node.js + Express + MongoDB backend that provides user authentication (Register, Login, Logout) and role-based access (User/Admin).  
This project demonstrates JWT-based authentication, secure password storage with bcrypt, and role-specific route access.

---

## 🚀 Features
- JWT-based authentication (Login/Register/Logout)
- Password hashing with bcrypt
- Role-based access control (User, Admin)
- Protected routes with middleware
- Error handling for invalid credentials, unauthorized access, expired/invalid tokens

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/auth-api.git
   cd auth-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/authdb
   JWT_SECRET=your_jwt_secret_here
   ```

4. Run the server:
   ```bash
   npm start
   ```

The server will run at: `http://localhost:5000`

---

## 📌 API Endpoints

### 🔑 Auth Routes

#### Register
- **POST** `/api/auth/register`
- Request body:
  ```json
  {
    "name": "John Doe",
    "email": "john@gmail.com",
    "password": "123456"
  }
  ```
- Response:
  ```json
  {
    "token": "jwt-token-here"
  }
  ```

#### Login
- **POST** `/api/auth/login`
- Request body:
  ```json
  {
    "email": "john@gmail.com",
    "password": "123456"
  }
  ```
- Response:
  ```json
  {
    "token": "jwt-token-here"
  }
  ```

#### Logout
- **POST** `/api/auth/logout`
- Response:
  ```json
  { "message": "Logged out successfully" }
  ```

---

### 👤 User Routes

#### Get Profile (User only)
- **GET** `/api/users/profile`
- Headers:
  ```
  Authorization: Bearer <jwt-token>
  ```
- Response:
  ```json
  {
    "_id": "68bac526dbef14425ad4c314",
    "name": "John Doe",
    "email": "john@gmail.com",
    "role": "user"
  }
  ```

---

## 👨‍💻 How to Create an Admin User
By default, all registered users are created with the role `user`.  

If you want to create an admin user directly, you can include the `role` field in the registration request:

- **POST** `/api/auth/register`  
- Request body:
  ```json
  {
    "name": "AdminUser1",
    "email": "admin1@gmail.com",
    "password": "123456",
    "role": "admin"
  }


---

### 🛠️ Admin Routes

#### Get All Users
- **GET** `/api/users`
- Headers:
  ```
  Authorization: Bearer <admin-jwt-token>
  ```
- Response:
  ```json
  [
    { "_id": "68bac526dbef14425ad4c314", "name": "John Doe", "email": "john@example.com", "role": "user" }
  ]
  ```

#### Delete User
- **DELETE** `/api/users/:id`
- Headers:
  ```
  Authorization: Bearer <admin-jwt-token>
  ```
- Response (if successful):
  ```json
  { "message": "User deleted successfully" }
  ```
- Response (if not found):
  ```json
  { "message": "User not found" }
  ```

---

## 🏆 Extra Features
- Middleware for JWT verification & role checking
- Secure password hashing with bcrypt
- Role-based route access
- Tracks unauthorized/invalid requests with clear error messages

---

## 🧪 Testing
- Use **Postman** or **cURL** to test routes.
- Example cURL request for profile:
  ```bash
  curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer <your_token_here>"
  ```

---

## 📂 Project Structure
```
.
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── server.js
└── README.md

```
