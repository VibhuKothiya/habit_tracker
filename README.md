# Habit Tracker Application Backend

## Features
1. **User Authentication**: 
    - Implement JWT-based authentication for secure login and registration.
2. **Habit Management**: 
    - Provide CRUD endpoints for habits, allowing users to create, update, delete, and view their habits.
    - Store user habit data with information like streaks, daily progress, and frequency settings.
3. **Reminders & Notifications**: 
    - Setup a daily notification scheduler to remind users of pending habits.
4. **Admin Controls**: 
    - Allow admin users to view all users and their habit completion stats.
    - Enable admin to create habit templates that users can adopt.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (Json Web Token)**
- **bcryptjs**
- **Helmet**
- **CORS**

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/VibhuKothiya/habit_tracker.git
    cd habit-tracker-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT = 3005
    MONGO_URI = mongodb://localhost:27017/habit_tracker
    JWT_SECRET = vibhuti123
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```

2. The server should be running on `http://localhost:3005`

### API Endpoints

#### User Endpoints
- **Register User**: `POST /api/users`
    ```json
    
    ```
- **Login User**: `POST /api/users/login`
    ```json
    
    ```
- **Get User Profile**: `GET /api/users/profile` (Protected)
    ```http
    Authorization: Bearer <JWT_TOKEN>
    ```

#### Habit Endpoints
- **Create Habit**: `POST /api/habits` (Protected)
    ```json
    {
      "title": "Daily Exercise",
      "frequency": "Daily"
    }
    ```
- **Get User Habits**: `GET /api/habits` (Protected)
- **Update Habit**: `PUT /api/habits/:id` (Protected)
    ```json
    {
      "title": "Morning Exercise",
      "frequency": "Daily"
    }
    ```
- **Delete Habit**: `DELETE /api/habits/:id` (Protected)


