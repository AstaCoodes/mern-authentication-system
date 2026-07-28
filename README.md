# 🔐 MERN Authentication System

A secure user authentication system built using the MERN stack. This project allows users to register, log in, and access protected routes using JSON Web Tokens (JWT).

## 📌 Features

- User Registration
- User Login
- Password Hashing with bcrypt
- JWT Authentication
- Protected Profile Route
- MongoDB Database Integration
- React Frontend
- Express Backend
- Secure API Communication using Axios

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt

---

## 📁 Project Structure

```
mern-authentication-system/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AstaCoodes/mern-authentication-system.git
```

```bash
cd mern-authentication-system
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a file named `.env` inside the `backend` folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd frontend
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### Register

```
POST /api/register
```

### Login

```
POST /api/login
```

### Profile (Protected)

```
GET /api/profile
```

Requires JWT token in the Authorization header.

---

## 🔒 Authentication Flow

1. User registers with email and password.
2. Password is securely hashed using bcrypt.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. Token is stored on the client.
6. Protected routes verify the token before granting access.

---

## 📷 Screenshots

Screenshots will be added soon.

---

## 👨‍💻 Author

**AstaCoodes**

GitHub:
https://github.com/AstaCoodes

---

## 📄 License

This project was developed as part of a MERN Stack Internship Task for learning and evaluation purposes.