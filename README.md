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