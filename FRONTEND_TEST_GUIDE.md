# Frontend Test Execution Guide

## Quick Start

### Step 1: Start the Backend Server
```powershell
cd backend
npm start
# Server will listen on port 8080
```

### Step 2: Start the Frontend Dev Server
```powershell
cd frontend
$env:NODE_OPTIONS='--openssl-legacy-provider'
npx ng serve --proxy-config proxy.conf.json
# Application will be available at http://localhost:4401
```

### Step 3: Run Tests
```powershell
# From frontend directory
npm test
# or run TestCafe directly
testcafe chrome frontend/test/
```

## Test Files Overview

### 🧪 All Tests (9 files, 23 test cases)

#### Teacher Tests (4 files)
1. **teacher-add.test.js** (3 tests)
   - Add single teacher
   - Add multiple teachers
   - Verify teacher in table with correct data

2. **teacher-delete.test.js** (3 tests)
   - Delete single teacher
   - Delete multiple teachers
   - Verify count decreases

3. **teacher-edit.test.js** (3 tests)
   - Edit name and age
   - Edit name only
   - Edit age only

4. **teacher-search.test.js** (4 tests)
   - Search substring match
   - Search partial name
   - Non-existent teacher search
   - Case-insensitive search

#### Student Tests (4 files)
1. **student-add.test.js** (2 tests)
   - Add single student with all fields
   - Add multiple students

2. **student-delete.test.js** (2 tests)
   - Delete single student
   - Delete multiple students

3. **student-edit.test.js** (2 tests)
   - Edit all fields
   - Edit hometown only

4. **student-search.test.js** (3 tests)
   - Search substring match
   - Search by exact name substring
   - Non-existent student search

#### Application Tests (1 file)
1. **dummy.test.js** (1 test)
   - Verify application loads
   - Verify table navigation

## Individual Test Execution

### Run Specific Test File
```powershell
testcafe chrome frontend/test/teacher-add.test.js
testcafe chrome frontend/test/student-delete.test.js
```

### Run Specific Fixture
```powershell
testcafe chrome frontend/test/ -g "Testing Teacher Add"
```

### Run Specific Test
```powershell
testcafe chrome frontend/test/ -g "Test 1:"
```

## Test Database Setup

Tests automatically initialize the database on first run:
```
/dbinitialize → Resets database and runs migrations
```

## Debugging Tests

### Run with Debug Mode
```powershell
testcafe chrome frontend/test/ --debug-mode
```

### Run in Headless Mode
```powershell
testcafe chrome:headless frontend/test/
```

### Run with Specific Browser
```powershell
testcafe firefox frontend/test/
testcafe edge frontend/test/
```

## Expected Results

✅ All 23 tests should pass
- Teacher CRUD operations fully tested
- Student CRUD operations fully tested
- Search functionality verified
- Multiple record operations validated
- Database state management confirmed

## Common Issues & Solutions

### Issue: Tests can't find elements
**Solution**: Ensure element IDs match between HTML and test files:
- `#teacher-id`, `#teacher-name`, `#teacher-age`
- `#student-id`, `#student-name`, `#student-age`, `#student-hometown`
- `#teacher-search`, `#student-search`

### Issue: Form submission fails
**Solution**: Verify form buttons have correct IDs:
- `#teacher-add` for add form
- `#student-add` for add form
- `#teacher-edit` for edit form
- `#student-edit` for edit form

### Issue: Table verification fails
**Solution**: Ensure table IDs are correct:
- `#teacher-table`
- `#student-table`

### Issue: Database not initializing
**Solution**: Make sure backend is running on port 8080

### Issue: Port 4401 already in use
**Solution**: 
```powershell
# Find process using port 4401
netstat -ano | findstr :4401
# Kill the process
taskkill /PID <PID> /F
```

## Test Data Reference

### Teacher Test IDs Used
- 123456: Mohan Perera (Add test)
- 789101: Kelum Silva (Add test)
- 789102: Sampath Kumar (Add test)
- 111222: Ravi Shankar (Add test)
- 300000: Hasitha Fernando (Delete test)
- 400001, 400002: Delete multiple test
- 500000: Count decrease test
- 600001: Edit name test
- 600002: Edit age test
- 700001: Search test
- 10003: Pre-existing edit test

### Student Test IDs Used
- 999999: Main CRUD test
- 111111: John Doe (Add multiple)
- 222111: Jane Smith (Add multiple)
- 222222: Delete test
- 333333, 444444: Delete multiple
- 555555: Edit hometown test
- 666666: Search test

## CI/CD Integration

### Package.json Test Script
```json
{
  "scripts": {
    "test": "testcafe chrome frontend/test/ --reporter spec"
  }
}
```

Run with:
```powershell
npm test
```

## Next Steps

After all tests pass:
1. ✅ Run backend verification scripts
2. ✅ Test frontend manually in browser
3. ✅ Verify API endpoints with curl/Postman
4. ✅ Check database migrations and seeds
5. ✅ Review error handling and validation

## Contact & Support

For issues or questions about the test suite, refer to:
- TEST_IMPLEMENTATION_SUMMARY.md (detailed documentation)
- backend/test/ (backend test scripts)
- README.md (project overview)
