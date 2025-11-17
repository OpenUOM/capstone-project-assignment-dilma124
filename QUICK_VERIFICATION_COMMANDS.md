# Quick Verification Commands

## Current System Status

### Check if Servers are Running
```powershell
# Check Backend (Port 3000)
netstat -ano | findstr :3000

# Check Frontend (Port 4200)
netstat -ano | findstr :4200
```

### Test Backend Health
```powershell
# Health Check Endpoint
Invoke-WebRequest -Uri "http://localhost:3000/" -Method GET

# List Teachers
Invoke-WebRequest -Uri "http://localhost:3000/listTeachers" -Method GET

# List Students
Invoke-WebRequest -Uri "http://localhost:3000/listStudents" -Method GET
```

### Test Frontend
```powershell
# Open in browser
Start-Process "http://localhost:4200"
```

---

## Starting the Application

### Terminal 1: Backend
```powershell
cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
$env:NODE_ENV="test"
node backend/index.js
```

### Terminal 2: Frontend
```powershell
cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124\frontend
npm start
```

### Terminal 3: Tests (Optional)
```powershell
cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
npm test
```

---

## Quick Troubleshooting

### Port Already in Use
```powershell
# Kill process on port 3000
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object { taskkill /PID $_.OwningProcess /T /F }

# Kill process on port 4200
Get-NetTCPConnection -LocalPort 4200 -ErrorAction SilentlyContinue | ForEach-Object { taskkill /PID $_.OwningProcess /T /F }
```

### Clear Node Modules and Reinstall
```powershell
# For root
cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
rm -r node_modules -Force
npm install

# For frontend
cd frontend
rm -r node_modules -Force
npm install
```

### Clear Database
```powershell
cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
npm run delete-db
npm run db
```

---

## Application URLs

| Component | URL | Status |
|-----------|-----|--------|
| Frontend | http://localhost:4200 | ✅ Running |
| Backend | http://localhost:3000 | ✅ Running |
| API Health | http://localhost:3000/ | ✅ Working |
| Teachers List | http://localhost:3000/listTeachers | ✅ Working |
| Students List | http://localhost:3000/listStudents | ✅ Working |

---

## Available npm Scripts

### Root Directory
```powershell
npm test              # Run all tests
npm run delete-db     # Delete database
npm run migrate       # Run migrations
npm run seed          # Seed database with dummy data
npm run db            # Migrate and seed
```

### Frontend Directory
```powershell
npm start             # Start dev server (port 4200)
npm run build         # Production build
npm test              # Run frontend tests
npm run lint          # Lint code
```

---

## Features Verified

### Teacher Management
- ✅ Add new teacher with validation
- ✅ View all teachers in table
- ✅ Search teachers by name
- ✅ Edit teacher details
- ✅ Delete teacher with confirmation
- ✅ Database persistence

### Student Management
- ✅ Add new student with validation
- ✅ View all students in table
- ✅ Search students by name
- ✅ Edit student details
- ✅ Delete student with confirmation
- ✅ Database persistence

### Navigation
- ✅ Switch between Teacher and Student views
- ✅ Navigation to add/edit pages
- ✅ Redirect after operations
- ✅ Error notifications

---

## Browser Testing

### Recommended Steps to Test Frontend

1. **Start Application**
   ```powershell
   # Terminal 1
   cd c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
   $env:NODE_ENV="test"
   node backend/index.js
   
   # Terminal 2
   cd frontend
   npm start
   ```

2. **Open Browser**
   ```
   http://localhost:4200
   ```

3. **Test Teacher Features**
   - Click "Teachers" (should be visible)
   - Click "Add New" button
   - Fill in: ID: T001, Name: John Smith, Age: 35
   - Click "Create"
   - Verify teacher appears in table
   - Click edit button for teacher
   - Modify name and age
   - Click "Edit & Save"
   - Search for teacher
   - Delete teacher with confirmation

4. **Test Student Features**
   - Click "Students" in navbar
   - Click "Add New" button
   - Fill in: ID: S001, Name: Jane Doe, Age: 20, Hometown: New York
   - Click "Create"
   - Verify student appears in table
   - Click edit button for student
   - Modify details
   - Click "Edit & Save"
   - Search for student
   - Delete student with confirmation

---

## File Structure Reference

```
capstone-project-assignment-dilma124/
├── backend/
│   ├── server.js         (✅ CORS enabled)
│   ├── database.js       (✅ All operations working)
│   ├── index.js          (✅ Server listening on 3000)
│   └── test/
│       └── test.js       (✅ Backend tests)
├── frontend/
│   ├── src/app/
│   │   ├── app.module.ts     (✅ All imports correct)
│   │   ├── app-routing.module.ts (✅ Routes configured)
│   │   ├── app-service.service.ts (✅ Service working)
│   │   └── components/
│   │       ├── teacher-table/
│   │       ├── add-new-teacher/
│   │       ├── edit-teacher/
│   │       ├── student-table/
│   │       ├── add-new-student/
│   │       └── edit-student/
│   ├── proxy.conf.json (✅ Proxy routes configured)
│   └── package.json    (✅ Build fixed)
├── package.json        (✅ CORS added)
└── SYSTEM_VERIFICATION_REPORT.md (✅ This report)
```

---

## Success Indicators

When everything is working correctly, you should see:

1. **Backend Console**
   ```
   TEST DB
   Capstone Project Backend is running on http://localhost:3000
   ```

2. **Frontend Console**
   ```
   ✔ Compiled successfully.
   Angular Live Development Server is listening on localhost:4200
   ```

3. **Browser**
   - Application loads without errors
   - Navigation bar visible with Teachers and Students links
   - Tables display correctly
   - Forms work and submit data
   - Search functionality works
   - Edit and delete operations succeed

---

## Quick Test of Teacher Add Feature

```powershell
# PowerShell script to test teacher add API
$body = @{
    id = "T_$(Get-Random)"
    name = "Test Teacher"
    age = 40
} | ConvertTo-Json

$response = Invoke-WebRequest `
    -Uri "http://localhost:3000/addTeacher" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"

Write-Host "Status: $($response.StatusCode)"
Write-Host "Response: $($response.Content)"
```

---

## Report Files Generated

- `SYSTEM_VERIFICATION_REPORT.md` - Comprehensive technical report
- `FINAL_STATUS_REPORT.md` - Executive summary
- `QUICK_VERIFICATION_COMMANDS.md` - This file

---

## Support

If you encounter any issues:

1. Check that both servers are running
2. Verify ports 3000 and 4200 are not in use
3. Check browser console (F12) for frontend errors
4. Check terminal for backend errors
5. Verify database is initialized (check for db.sqlite file)
6. Clear browser cache (Ctrl+Shift+Delete)
7. Restart both servers

---

**Last Updated:** 2025-11-17
**Status:** ✅ All Systems Operational
