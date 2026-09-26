# EvaluaTech | Online Examination & Assessment System

A professional, full-stack **MERN (MongoDB, Express.js, React, Node.js)** Online Examination & Assessment System engineered for educational institutions and technical interviews.

---

## 🌟 Project Overview

EvaluaTech is an enterprise-ready online examination platform featuring role-based dashboards (Student and Administrator), distraction-free test-taking environments, live countdown timers, Question Palettes, and **secure server-side scoring** where exam answer keys are never leaked to client network traffic before submission.

---

## ✨ Features

### 👨‍🎓 Candidate / Student Features
* **Authentication & Profiles**: Secure student registration and login with bcrypt hashing and JWT tokens. Editable profile name with immutable email and registration date.
* **Student Dashboard**: Real-time KPI cards displaying *Available Exams*, *Completed Exams*, *Average Score*, and *Recent Result*, accompanied by quick action links and recent attempt summaries.
* **Published Exams Directory**: Browse available tests, filter by keywords, and view question count, allotted duration, and total marks.
* **Pre-Exam Instructions**: Comprehensive test guidelines and exam parameters before timer initiation.
* **Distraction-Free Exam Interface**:
  * Real-time countdown timer that smoothly persists between questions and triggers **automatic submission** at `00:00`.
  * Interactive **Question Palette** showing live question states (*Answered*, *Current Active*, *Unanswered*).
  * Option selector (A, B, C, D) with instant answer state preservation.
  * *Previous*, *Save & Next*, and *Submit Exam* controls.
  * Confirmation dialog summarizing answered vs. unanswered questions.
* **Instant Evaluation & Detailed Reports**:
  * Accurate score calculations and percentages.
  * Comprehensive question-by-question review displaying chosen options vs. correct answer keys and marks awarded.
* **Results History**: Dedicated table tracking all previous exam attempts and passing statuses.

### 🛡️ Administrator Features
* **Admin Executive Dashboard**: 6 metric cards (*Total Exams*, *Published Exams*, *Total Students*, *Total Questions*, *Total Attempts*, *Average Performance*) with recent exams and candidate submissions.
* **Exam Management**:
  * Create, edit, and delete examinations.
  * One-click publication toggle between `Draft` and `Published`.
* **Question Bank Management**:
  * Dedicated question authoring with prompt text, 4 options, correct answer key, and individual mark weightings.
  * Interactive question preview cards with inline edit modal and delete confirmation.
  * Automatic exam `totalMarks` recalculation on question changes.
* **Candidate Gradebook & Submissions**:
  * View all student attempts across all exams.
  * Filter submissions by exam and search by student name/email.
* **Student Directory**:
  * List all registered candidates, joined dates, total attempted exams, and cumulative average performance.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, React Router v6, Axios, Lucide React, Custom CSS Design System |
| **Backend** | Node.js, Express.js, REST APIs, CORS, dotenv |
| **Database** | MongoDB, Mongoose ORM, MongoMemoryServer (Zero-setup development fallback) |
| **Security** | JSON Web Tokens (JWT), bcryptjs password encryption, role authorization middleware |

---

## 🏗️ Project Architecture

```
online-examination/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection with auto-embedded fallback
│   ├── controllers/
│   │   ├── authController.js     # User registration, login, and profile fetching
│   │   ├── examController.js     # Exam CRUD and publish/draft status toggling
│   │   ├── questionController.js # Question bank management with answer key security
│   │   ├── resultController.js   # Server-side score evaluation and gradebooks
│   │   └── userController.js     # Student directory and dashboard metrics
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT Bearer token authentication
│   │   ├── adminMiddleware.js    # Role enforcement for administrator routes
│   │   └── errorMiddleware.js    # Safe error handling & 404 handler
│   ├── models/
│   │   ├── User.js               # Name, email, hashed password, role
│   │   ├── Exam.js               # Title, description, duration, marks, status
│   │   ├── Question.js           # Question text, options, correctAnswer, marks
│   │   └── Result.js             # Answers array, score, percentage, submissionType
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── examRoutes.js
│   │   ├── questionRoutes.js
│   │   ├── resultRoutes.js
│   │   └── userRoutes.js
│   ├── scripts/
│   │   ├── seed.js               # Database population script
│   │   └── verify_system.js      # 20-point automated integration test suite
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env                      # Local environment configuration
│   ├── .env.example
│   ├── package.json
│   └── server.js                 # Express server entry point
│
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConfirmModal.jsx  # Submission & deletion dialogs
│   │   │   ├── ExamCard.jsx      # Exam catalog presentation card
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx        # Responsive navigation header
│   │   │   ├── ProtectedRoute.jsx# Role & session routing guard
│   │   │   ├── QuestionPalette.jsx # Question navigation grid
│   │   │   ├── Sidebar.jsx       # Admin navigation panel
│   │   │   ├── StatCard.jsx      # KPI display card
│   │   │   └── Timer.jsx         # Live countdown with auto-submit
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Global user state & token persistence
│   │   ├── pages/
│   │   │   ├── public/           # Home, Login, Register
│   │   │   ├── student/          # Dashboard, Exams, Instructions, TakeExam, Result, MyResults, Profile
│   │   │   └── admin/            # Dashboard, ManageExams, CreateExam, EditExam, ManageQuestions, Results, Students
│   │   ├── services/
│   │   │   ├── api.js            # Axios client with JWT interceptor
│   │   │   ├── authService.js
│   │   │   ├── examService.js
│   │   │   └── resultService.js
│   │   ├── styles/
│   │   │   ├── index.css         # Design tokens, variables & typography
│   │   │   ├── auth.css
│   │   │   ├── dashboard.css
│   │   │   ├── exam.css
│   │   │   └── admin.css
│   │   ├── App.jsx               # Routes setup & layout manager
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── package.json                  # Root runner script
```

---

## ⚙️ Environment Variables

Create or configure `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/online-examination
JWT_SECRET=super_secret_jwt_key_exam_system_2026_secure
NODE_ENV=development
ADMIN_NAME=System Administrator
ADMIN_EMAIL=admin@exam.com
ADMIN_PASSWORD=Admin@12345
```

> **Note on MongoDB Setup:**
> If a local MongoDB daemon or Atlas URI is reachable at `MONGO_URI`, EvaluaTech connects to it automatically.
> If no MongoDB service is running on the host machine, EvaluaTech's resilient database connector automatically provisions an embedded in-memory MongoDB instance with automatic development seeding. **Zero manual database installation is required to start developing immediately!**

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Seed Database & Create Initial Admin
```bash
cd backend
npm run seed
```

This provisions:
* **Administrator Account**: `admin@exam.com` / `Admin@12345`
* **Demo Student Account**: `student@exam.com` / `Student@12345`
* **Sample Exams**:
  * *Python Basics Test* (Published, 10 Questions, 20 Marks, 30 Mins)
  * *JavaScript & Modern Web Concepts* (Published, 5 Questions, 15 Marks, 25 Mins)
  * *Database Architecture & SQL* (Draft, 2 Questions, 10 Marks, 35 Mins)

### 3. Run the Backend API
```bash
cd backend
npm start
# Backend runs on http://localhost:5000
```

### 4. Run the Frontend Client
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 🧪 Automated Testing

EvaluaTech includes a 20-point automated integration test suite that verifies end-to-end security, evaluation correctness, and cross-role protection:

```bash
cd backend
node scripts/verify_system.js
```

### Scenarios Covered:
1. API Health Check
2. Student Registration
3. Duplicate Registration Rejection (400)
4. Student Authentication & JWT Token Issuance
5. Invalid Credentials Rejection (401)
6. Admin Authentication & Role Assignment
7. Route Authorization (Student blocked from admin endpoints with 403)
8. Admin Exam Creation (Draft status)
9. Draft Exam Visibility (Hidden from students)
10. Admin Question Bank Authoring
11. Admin Exam Publishing
12. Published Exam Visibility (Visible to students)
13. **Exam Security**: Verification that `correctAnswer` is stripped from student responses
14. Admin Question Key Access: Verification that `correctAnswer` is available to instructors
15. **Backend Scoring Evaluation**: Real comparison against DB questions and score calculation
16. Candidate Result Review
17. **Privacy Isolation**: Verification that students cannot access other candidates' results (403)
18. Admin Submissions Analytics & Gradebook
19. Admin Candidate Directory Metrics
20. Student Profile Updates

---

## 🧭 Complete User Workflows

### Candidate / Student Workflow
1. Visit `http://localhost:5173/` and click **Take Assessment** or **Login**.
2. Click **Fill Student Account** (`student@exam.com` / `Student@12345`) and sign in.
3. Arrive at `/student/dashboard` displaying your metrics and available exams.
4. Click **Exams** (`/student/exams`) to browse published tests.
5. Click **View Instructions** on "Python Basics Test".
6. Read the instructions and click **Start Exam**.
7. The distraction-free interface opens with the active countdown timer.
8. Answer questions using option buttons (A, B, C, D) or navigate using the Question Palette.
9. Click **Submit Exam**; confirm your submission in the modal.
10. Instantly view your score, percentage, and detailed question breakdown on `/student/result/:resultId`.
11. Review historical attempts at `/student/results`.

### Instructor / Admin Workflow
1. Navigate to `/login` and click **Fill Admin Account** (`admin@exam.com` / `Admin@12345`).
2. Sign in to access the **Admin Dashboard** (`/admin/dashboard`) with complete platform KPIs.
3. Click **Create Exam** (`/admin/exams/create`) to create a new assessment.
4. Add questions with options and mark correct keys in **Question Management** (`/admin/exams/:id/questions`).
5. Toggle the status from `Draft` to `Published` in **Manage Exams** (`/admin/exams`).
6. Inspect student submissions in **Results** (`/admin/results`).
7. Monitor student enrollment and progress in **Students** (`/admin/students`).

---

## 📡 REST API Reference

### Authentication
* `POST /api/auth/register` - Register a new candidate (always assigns `role="student"`)
* `POST /api/auth/login` - Authenticate user & return JWT token
* `GET /api/auth/me` - Get authenticated user profile

### Examinations
* `GET /api/exams` - List exams (Students receive published only; Admin receives all)
* `GET /api/exams/:id` - Fetch single exam details
* `POST /api/exams` - Create exam (*Admin only*)
* `PUT /api/exams/:id` - Update exam (*Admin only*)
* `DELETE /api/exams/:id` - Delete exam and cascade delete associated questions (*Admin only*)
* `PATCH /api/exams/:id/status` - Toggle publication status (*Admin only*)

### Questions
* `GET /api/exams/:examId/questions` - List questions (*Strips correctAnswer for students*)
* `POST /api/exams/:examId/questions` - Add question (*Admin only*)
* `PUT /api/questions/:id` - Update question (*Admin only*)
* `DELETE /api/questions/:id` - Delete question (*Admin only*)

### Submissions & Results
* `POST /api/exams/:examId/submit` - Submit candidate answers and compute score
* `GET /api/results/my-results` - List logged-in student's completed exams
* `GET /api/results/:id` - View single result report (*Owner or Admin only*)
* `GET /api/admin/results` - Filter and search all submissions (*Admin only*)

### Analytics & Directory
* `GET /api/admin/stats` - Admin executive dashboard metrics (*Admin only*)
* `GET /api/admin/students` - Registered candidates list with performance stats (*Admin only*)
* `GET /api/users/student/stats` - Student dashboard KPIs
* `PUT /api/users/profile` - Update candidate profile name

---

## 🖼️ Screenshots Section

| Screen | Description |
|---|---|
| **Landing Page** | Hero section with dynamic simulation graphic, feature highlights, and How-It-Works workflow |
| **Student Dashboard** | KPI overview cards, available exams grid, and recent submissions table |
| **Exam Taking Room** | Distraction-free testing view with persistent countdown timer, question palette, and options |
| **Result Summary** | Overall score display, accuracy percentage badge, breakdown metrics, and question review |
| **Admin Console** | Executive analytics, exam CRUD management, question editor, and student directory |

---

## 🔮 Future Improvements

1. **Category & Tag Filtering**: Group examinations by subject areas (e.g., Computer Science, Mathematics, Language).
2. **Question Randomization**: Shuffle questions and options per candidate to discourage screen sharing.
3. **Webcam Proctoring**: Periodic snapshot verification and tab-switch detection logs.
4. **Certificate Generation**: Automated downloadable PDF certificates for scores above 75%.
5. **Rich Text / Code Block Support**: Syntax highlighting inside questions and options for coding assessments.
