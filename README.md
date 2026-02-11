# HRMS Lite

## Project Overview

HRMS Lite is a Full Stack Human Resource Management System designed to manage employee records and attendance efficiently.

The application allows administrators to:

- Add and delete employees
- Mark and track attendance
- View employee data in a structured interface
- Maintain clean separation between frontend and backend

This project demonstrates full-stack development with proper state management, REST API integration, and structured UI design.

---

## Tech Stack Used

### Frontend
- React (Vite)
- JavaScript (ES6+)
- CSS
- Axios (for API calls)

### Backend
- FastAPI
- Python
- MongoDB (Database)

### Version Control
- Git
- GitHub

---

## Steps to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/saurabhvictus/hrms-lite.git
cd hrms-lite
```

---

### 2. Setup and Run Backend

Navigate to backend folder:

```bash
cd backend
```

Create a virtual environment (recommended):

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will start at:

```
http://127.0.0.1:8000
```

---

### 3. Setup and Run Frontend

Open a new terminal and navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## Assumptions / Limitations

- The system assumes a single admin user (no authentication implemented).
- Role-based access control is not included.
- Attendance records remain stored even if an employee is deleted (data integrity assumption).
- The project is configured primarily for local development.
- Production deployment and environment configuration are not included.
- Advanced validation and security hardening are not implemented.

---

## Author

Saurabh Singh  
GitHub: https://github.com/saurabhvictus
