# Frontend Test Setup and Execution Guide

## Overview
This guide explains how to set up and run the frontend tests for the Student Management System capstone project.

## Prerequisites
- Node.js v14+ (tested with v22.20.0)
- npm v6+ (tested with 10.9.3)
- Angular CLI installed globally
- Both backend and frontend dependencies installed

## Test Framework
- **Test Framework**: TestCafe
- **Test Format**: End-to-end browser automation tests
- **Browser**: Chrome (headless mode for CI)

## Test Files Location
All test files are located in: `frontend/test/`

### Test Files:
1. `dummy.test.js` - Basic application load test
2. `teacher-add.test.js` - Teacher addition operations
3. `teacher-delete.test.js` - Teacher deletion operations
4. `teacher-edit.test.js` - Teacher editing operations
5. `teacher-search.test.js` - Teacher search functionality
6. `student-add.test.js` - Student addition operations
7. `student-delete.test.js` - Student deletion operations
8. `student-edit.test.js` - Student editing operations
9. `student-search.test.js` - Student search functionality

## Critical Setup Steps

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Step 2: Database Migration and Seeding

```bash
# Run database migrations
npm run migrate

# Seed the database with test data
npm run seed
```

### Step 3: Start Backend Server

The backend must be running on port 3000 for tests to work.

```bash
# From the backend directory
npm start
# or
node index.js
```

The backend should output:
```
Server running on port 3000
```

### Step 4: Start Frontend Development Server

Open a NEW terminal window and start the frontend server:

```bash
# From the frontend directory
npm start
```

The frontend should start on: `http://localhost:4200/`

You should see console output like:
```
✔ Compiled successfully.
✔ Build at: YYYY-MM-DD HH:MM:SS APP INDEX (app-version: x.x.x)
```

### Step 5: Run the Tests

In a THIRD terminal window (with both backend and frontend running):

```bash
# From the frontend directory
npm test
```

## What the Tests Do

### Test Flow:
1. **dummy.test.js**: Verifies the application loads and displays teacher/student tables
2. **Database Initialization**: Tests navigate to `/dbinitialize` which resets the database
3. **Add Operations**: Tests add new teachers/students and verify they appear in tables
4. **Edit Operations**: Tests edit existing records and verify changes are saved
5. **Delete Operations**: Tests delete records and verify they're removed from tables
6. **Search Operations**: Tests the search functionality with various keywords

### Critical Test Elements:

**HTML Element IDs** that must exist for tests to pass:
- `#teacher-table` - Main teacher table
- `#student-table` - Main student table
- `#teacher-search` - Teacher search input
- `#student-search` - Student search input
- `#teacher-link` - Navigation link to teachers page
- `#student-link` - Navigation link to students page
- `#teacher-id`, `#teacher-name`, `#teacher-age` - Teacher form inputs
- `#student-id`, `#student-name`, `#student-age`, `#student-hometown` - Student form inputs
- `#teacher-add`, `#student-add` - Add buttons
- `#teacher-edit`, `#student-edit` - Edit buttons
- `#teacher-edit-{id}`, `#student-edit-{id}` - Edit icon cells
- `#teacher-delete-{id}`, `#student-delete-{id}` - Delete icon cells

## Troubleshooting

### Tests Can't Connect to localhost:4200
**Problem**: Tests fail with "Failed to load the page at http://localhost:4200/"
**Solution**: 
- Ensure frontend dev server is running (`npm start` in frontend directory)
- Check that no other service is using port 4200
- Wait for frontend to fully compile before running tests

### Tests Can't Connect to Backend
**Problem**: Add/Edit operations fail when calling API
**Solution**:
- Ensure backend is running on port 3000
- Check proxy configuration in `frontend/proxy.conf.json`
- Verify the environment is set to development (production: false)

### Table Elements Not Found
**Problem**: Tests fail with "Teacher table should exist on home page"
**Solution**:
- Verify all HTML template files have the correct element IDs
- Check that components are properly declared in app.module.ts
- Ensure routing is configured correctly in app-routing.module.ts

### Database Not Initializing
**Problem**: Tests fail on first database access
**Solution**:
- Run migrations: `npm run migrate`
- Run seeding: `npm run seed`
- Verify `/dbinitialize` endpoint exists on backend
- Check backend logs for database errors

## Expected Test Results

With all three services running (backend, frontend, tests), you should see:

```
 Verify application loads successfully
 ✓ Test passed

 Testing Teacher Add Operations
 ✓ Test 1: Add a single teacher with all required fields
 ✓ Test 2: Add multiple teachers sequentially
 ✓ Test 3: Add teacher and verify it appears in table with correct data

 Testing Teacher Edit Operations
 ✓ Test 1: Edit teacher name and age fields
 ✓ Test 2: Edit teacher age field only
 ✓ Test 3: Verify teacher data persistence after edit

 [etc...]
```

## Important Notes

1. **Port Configuration**:
   - Frontend: Port 4200
   - Backend: Port 3000 (for tests) or 8080 (for development)

2. **Environment Variables**:
   - Development: `environment.ts` has `production: false`
   - This routes API calls to `/test/*` which proxies to backend on port 3000

3. **Test Execution**:
   - Tests must run sequentially (TestCafe default behavior)
   - Each test initializes the database at the start
   - Tests are isolated and can run independently

4. **Browser Requirements**:
   - Chrome must be installed for headless testing
   - Minimum version: Chrome 50+

## Running Tests Locally with GUI

To see the tests run in a visible Chrome window (helpful for debugging):

```bash
# From frontend directory
npm run test:headless
```

Or modify package.json test script to use Chrome instead of `chrome:headless`

## CI/CD Integration

For GitHub Actions or other CI systems:

1. Install dependencies: `npm install` (in both backend and frontend)
2. Run migrations: `npm run migrate`
3. Run seeds: `npm run seed`
4. Start backend: `node backend/index.js` (background)
5. Start frontend: `npm start` in frontend/ (background)
6. Wait for frontend build to complete
7. Run tests: `cd frontend && npm test`

## Additional Resources

- TestCafe Documentation: https://testcafe.io/documentation/
- Angular Testing Guide: https://angular.io/guide/testing
- Project README: See ../README.md for project overview
