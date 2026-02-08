# Travel Agency Website (Final Project)

A Node.js + Express REST API for a Travel Agency system.
It supports:
- User Registration & Login (JWT Authentication)
- User Profile (Private)
- Travel Packages / Tours CRUD (Private)
- Validation + Global Error Handling
- MongoDB database (Mongoose)

---

## Tech Stack
- Node.js, Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- dotenv, cors

---

## Project Structure
final-project/
  server.js
  package.json
  .env
  config/
    db.js
  models/
    User.js
    Resource.js
  controllers/
    authController.js
    userController.js
    resourceController.js
  routes/
    authRoutes.js
    userRoutes.js
    resourceRoutes.js
  middleware/
    authMiddleware.js
    validate.js
    errorHandler.js
  public/
    index.html
    app.js
    style.css

---

## Setup & Installation (Local)

### 1) Install dependencies
```bash
npm install

## Deployment (Render)

**Live API:** https://final-project-1-3sr1.onrender.com

### Environment Variables (Render Dashboard)
This project uses environment variables on Render (the `.env` file is not used in production).

Set the following variables in Render:

- PORT=10000
- MONGO_URI=<your MongoDB Atlas connection string>
- JWT_SECRET=<your secret string>
- JWT_EXPIRES_IN=1h

### MongoDB Atlas Network Access
To allow Render to connect to MongoDB Atlas:

Atlas → Security → Network Access → Add IP Address → add:
- 0.0.0.0/0 (Allow access from anywhere)

### Render Commands
- Build Command: `npm install`
- Start Command: `npm start`

### Quick Postman Test
1) Register:
POST /api/auth/register

2) Login (get token):
POST /api/auth/login

3) Get profile (use token):
GET /api/users/profile
Header: Authorization: Bearer <token>