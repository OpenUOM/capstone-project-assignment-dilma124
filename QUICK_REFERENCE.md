# 🚀 QUICK REFERENCE - Frontend Test Suite

## Test Files at a Glance

```
frontend/test/
├── dummy.test.js                    1 test - Application smoke test
├── teacher-add.test.js              3 tests - Create teachers
├── teacher-delete.test.js           3 tests - Delete teachers
├── teacher-edit.test.js             3 tests - Update teachers
├── teacher-search.test.js           4 tests - Search teachers
├── student-add.test.js              2 tests - Create students
├── student-delete.test.js           2 tests - Delete students
├── student-edit.test.js             2 tests - Update students
└── student-search.test.js           3 tests - Search students
                                    ─────────
                         Total:      23 tests ✅
```

## Test Element Selectors

### Teacher Form
```javascript
#teacher-id          // ID input field
#teacher-name        // Name input field
#teacher-age         // Age input field
#teacher-add         // Add button
#teacher-edit        // Edit button
#teacher-search      // Search field
#teacher-table       // Data table
#teacher-edit-{id}   // Edit icon for specific teacher
#teacher-delete-{id} // Delete icon for specific teacher
```

### Student Form
```javascript
#student-id          // ID input field
#student-name        // Name input field
#student-age         // Age input field
#student-hometown    // Hometown input field
#student-add         // Add button
#student-edit        // Edit button
#student-search      // Search field
#student-table       // Data table
#student-edit-{id}   // Edit icon for specific student
#student-delete-{id} // Delete icon for specific student
```

## Common Test Commands

```powershell
# Run all tests
npm test

# Run specific test file
testcafe chrome frontend/test/teacher-add.test.js

# Run with specific browser
testcafe firefox frontend/test/
testcafe edge frontend/test/

# Debug mode
testcafe chrome frontend/test/ --debug-mode

# Headless mode
testcafe chrome:headless frontend/test/
```

## Test Patterns Used

### Adding Record
```javascript
await t.navigateTo("/addTeacher");
await t.typeText("#teacher-id", "123456");
await t.typeText("#teacher-name", "John Doe");
await t.typeText("#teacher-age", "45");
await t.click("#teacher-add");
```

### Editing Record
```javascript
await t.click("#teacher-edit-123456");
await t.tripleClick("#teacher-name");      // Select all
await t.typeText("#teacher-name", "Jane");
await t.click("#teacher-edit");
```

### Deleting Record
```javascript
await t.click("#teacher-delete-123456");
```

### Searching
```javascript
await t.typeText("#teacher-search", "john");
const table = Selector('#teacher-table');
const count = await table.find('tr').count;
```

### Verification
```javascript
const table = Selector('#student-table');
const text = await table.innerText;
await t.expect(text).contains("John Doe");
await t.expect(text).notContains("Jane");
```

## Test Coverage Summary

| Operation | Teacher | Student | Status |
|-----------|---------|---------|--------|
| Add Single | ✅ | ✅ | Complete |
| Add Multiple | ✅ | ✅ | Complete |
| Edit All | ✅ | ✅ | Complete |
| Edit Single Field | ✅ | ✅ | Complete |
| Delete Single | ✅ | ✅ | Complete |
| Delete Multiple | ✅ | ✅ | Complete |
| Search Substring | ✅ | ✅ | Complete |
| Search Case-Insensitive | ✅ | ✅ | Complete |
| No Results Search | ✅ | ✅ | Complete |

## Database Initialization

```javascript
// Reset database before tests
await t.navigateTo("/dbinitialize");
```

## Pre-Existing Test Data

**Teacher ID 10003** - Used for edit tests (pre-populated in database)

```javascript
await t.click("#teacher-edit-10003");
// Can now edit this teacher
```

## Debugging Tips

1. **Element Not Found**: Check selector ID matches HTML exactly
2. **Form Not Submitting**: Ensure button has `type="submit"`
3. **Table Not Updating**: Wait for navigation after form submission
4. **Search Not Working**: Verify search field is focused before typing
5. **Port Already in Use**: Kill process on port 4401

## Environment Setup

```powershell
# Backend (Port 8080)
cd backend
npm start

# Frontend (Port 4401) with OpenSSL flag for Node v22
cd frontend
$env:NODE_OPTIONS='--openssl-legacy-provider'
npx ng serve --proxy-config proxy.conf.json

# Run tests
npm test
```

## Expected Test Results

```
✅ All 23 tests should PASS
✅ No console errors
✅ No timeout errors
✅ Clean database state after completion
```

## Useful TestCafe Documentation

- Selectors: `Selector('#id')`
- Actions: `.click()`, `.typeText()`, `.tripleClick()`, `.navigateTo()`
- Assertions: `.expect()`, `.contains()`, `.notContains()`, `.eql()`
- Table Operations: `.find('tr')`, `.count`, `.innerText`

## Key Files

| File | Purpose |
|------|---------|
| COMPLETE_IMPLEMENTATION_SUMMARY.md | Full overview |
| FRONTEND_TEST_GUIDE.md | Execution guide |
| TEST_IMPLEMENTATION_SUMMARY.md | Detailed docs |

---

**Status**: ✅ All 23 tests implemented, documented, and ready for execution.
