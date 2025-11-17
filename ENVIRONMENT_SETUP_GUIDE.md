# Environment Setup Guide - Student Management System

This guide documents the setup process for the Capstone Project. All required tools have been installed and verified.

## 1. Setting up the Environment

Before starting to implement the Student Management System, the following environment setup is required.

### 1.1. Installing Node.js

**Status:** ✅ **INSTALLED**

Node.js and npm package manager are required for this project.

**Check Installation:**
```powershell
node -v
npm -v
```

**Your Environment:**
- **Node.js Version:** v22.20.0 ✅ (Required: v14 or higher)
- **npm Version:** 10.9.3 ✅

Node.js can be downloaded from: https://nodejs.org/

If not installed, follow the guided Node.js installation in Course 4 - Front-End Web Development, Section 4.3.

---

### 1.2. Installing Angular CLI

**Status:** ✅ **INSTALLED**

Angular CLI is required for frontend development.

**Check Installation:**
```powershell
ng --version
```

**Your Environment:**
- **Angular CLI Version:** 20.3.10 ✅

**Installation Command (if needed):**
```powershell
npm install -g @angular/cli
```

---

### 1.3. Installing Dependencies

**Status:** ✅ **COMPLETED**

Dependencies have been installed for both backend and frontend.

**Backend Dependencies Installation:**
```powershell
npm install
```
- **Status:** ✅ 611 packages installed
- **Location:** Root directory
- **File:** package.json

**Frontend Dependencies Installation:**
```powershell
cd frontend
npm install
```
- **Status:** ✅ 1861 packages installed
- **Location:** frontend/ directory
- **File:** frontend/package.json

---

### 1.4. Database Migration and Seeding

**Status:** ✅ **COMPLETED**

Database tables have been created and populated with dummy data.

#### Database Migration (Create Tables)
```powershell
npm run migrate
```
- **Status:** ✅ Successfully completed
- **Output:** Batch 1 run: 1 migrations
- **Database:** db.sqlite (created in root directory)

#### Database Seeding (Populate with Dummy Data)
```powershell
npm run seed
```
- **Status:** ✅ Successfully completed
- **Output:** Ran 3 seed files
- **Seeds included:**
  - Dummy data seed
  - Students seed
  - Teachers seed

---

### 1.5. Installing Git

**Status:** ✅ **INSTALLED**

Git is used for version control and maintaining project code.

**Check Installation:**
```powershell
git --version
```

**Your Environment:**
- **Git Version:** 2.51.2.windows.1 ✅

Git can be downloaded from: https://git-scm.com/

---

## Summary of Environment Setup

| Component | Version | Status | Requirements |
|-----------|---------|--------|--------------|
| Node.js | v22.20.0 | ✅ | ≥ v14 |
| npm | 10.9.3 | ✅ | Latest |
| Angular CLI | 20.3.10 | ✅ | Latest |
| Git | 2.51.2 | ✅ | Latest |
| Backend Dependencies | 611 packages | ✅ | Installed |
| Frontend Dependencies | 1861 packages | ✅ | Installed |
| Database | SQLite | ✅ | Created & Seeded |

---

## Running the Application

After successful environment setup, you can start the application:

### Start Backend Server
```powershell
npm start
```
The backend server will run on `http://localhost:5000`

### Start Frontend Development Server
```powershell
cd frontend
ng serve
```
The frontend will be available at `http://localhost:4200`

### Run Tests

**Backend Tests:**
```powershell
npm test
```

**Frontend Tests:**
```powershell
cd frontend
npm test
```

---

## Quick Reference Commands

| Task | Command | Location |
|------|---------|----------|
| Install backend dependencies | `npm install` | Root |
| Install frontend dependencies | `npm install` | frontend/ |
| Run database migration | `npm run migrate` | Root |
| Run database seeding | `npm run seed` | Root |
| Start backend server | `npm start` | Root |
| Start frontend server | `ng serve` | frontend/ |
| Run backend tests | `npm test` | Root |
| Run frontend tests | `npm test` | frontend/ |

---

## Troubleshooting

### Dependencies Installation Issues
If you encounter issues during npm install:
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Database Issues
If you need to reset the database:
```powershell
npm run migrate
npm run seed
```

### Port Already in Use
If port 5000 (backend) or 4200 (frontend) is already in use, you can specify a different port:

**Backend:**
Edit `backend/server.js` to change the port

**Frontend:**
```powershell
ng serve --port 4201
```

---

## Next Steps

1. Verify all installations are working
2. Start the backend server: `npm start`
3. In a new terminal, start the frontend: `cd frontend && ng serve`
4. Navigate to `http://localhost:4200` in your browser
5. Begin implementing the Student Management System features

---

**Setup Date:** November 17, 2025  
**Status:** ✅ Environment Ready for Development
