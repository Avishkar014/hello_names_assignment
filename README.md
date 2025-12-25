# Hello Names

Hello Names is a simple full-stack web application that allows users to submit names and view a list of all submitted names in real time.  
The project focuses on clean API design, React fundamentals, and thoughtful UX over unnecessary complexity.

---

## ✨ Features

- Add a name using a simple input form
- View all submitted names instantly
- Each name is stored with a timestamp
- Display “Added at HH:MM:SS” for every entry
- Clear all stored names with one click
- Toast notifications for user actions
- Loading and error states for better UX
- Keyboard support (Enter to submit)
- Clean, minimal UI with modern styling

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- JavaScript (ES6+)
- Custom CSS (no UI libraries)

**Backend**
- Node.js
- Express.js
- REST API

---

## 📁 Project Structure

hello-names/
├── backend/
│ ├── index.js
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Toast.jsx
│ │ │ ├── Loader.jsx
│ │ │ └── Error.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── package.json
│ ├── vite.config.js
│ └── .env
│
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm start
Backend runs on: http://localhost:5000
```
2️⃣ Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

🔌 API Endpoints
POST /api/names

Request Body

{
  "name": "John Doe"
}


Response

{
  "success": true,
  "message": "Name stored successfully"
}


GET /api/names

Response

{
  "success": true,
  "names": [
    {
      "name": "John Doe",
      "createdAt": "2025-01-01T12:34:56.789Z"
    }
  ]
}

DELETE /api/names

Clears all stored names.

Response

{
  "success": true
}

🌱 Environment Variables

Frontend uses an environment variable for the API URL:

VITE_API_URL=http://localhost:5000/api/names

Design & Development Notes

Data is stored in memory for simplicity (no database)

Clean separation between backend and frontend

Reusable UI components for clarity and maintainability

Focus on fundamentals and real-world developer practices

🔮 Future Improvements

Persist data using a database

Edit or delete individual names

Authentication

Improved accessibility

Animations and transitions

Unit and integration tests

👤 Author

Avishkar Tambe
GitHub: https://github.com/Avishkar014
