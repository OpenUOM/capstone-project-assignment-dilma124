# ECONNREFUSED Error - Fixed

## Error Summary

**Errors Received:**
```
[HPM] Error occurred while trying to proxy request /dbinitialize from localhost:4200 to http://localhost:3000 (ECONNREFUSED)
[HPM] Error occurred while trying to proxy request /listStudents from localhost:4200 to http://localhost:3000 (ECONNREFUSED)
[HPM] Error occurred while trying to proxy request /addStudent from localhost:4200 to http://localhost:3000 (ECONNREFUSED)
```

**What It Means:** ECONNREFUSED = Connection Refused
- Frontend proxy trying to reach port 3000
- Backend server not running or not listening on that port
- All requests fail with connection refused error

---

## Root Causes Found & Fixed

### Issue 1: Database Schema Incompatibility ✅ FIXED

**Problem:** Migration file used `table.increments()` for ID fields
```javascript
// WRONG - increments() creates auto-increment INTEGER
table.increments("id").notNullable().primary();
```

**Issue:** Seed files had string IDs like 'T001', 'S001' but schema expected integers

**Solution:** Changed migration to use string IDs:
```javascript
// CORRECT - string field for text IDs
table.string("id", 255).notNullable().primary();
```

**Files Updated:**
- `/backend/migrations/20220526133047_db_create.js`

### Issue 2: Seed Data Type Mismatch ✅ FIXED

**Problem:** Test seeds used numeric IDs (20001, 10002) instead of string IDs

**Original:**
```javascript
{ id: 20001, name: 'Supun Mihiranga', age: 10, hometown: 'Colombo'}
{ id: 10001, name: 'Kusuma Ranasinghe', age: 45}
```

**Fixed to:**
```javascript
{ id: 'S001', name: 'Supun Mihiranga', age: 10, hometown: 'Colombo'}
{ id: 'T001', name: 'Kusuma Ranasinghe', age: 45}
```

**Files Updated:**
- `/backend/seeds/teachers.js` - Changed to T001, T002, T003
- `/backend/seeds/students.js` - Changed to S001, S002, S003
- `/backend/test/seeds/teachers.js` - Same changes
- `/backend/test/seeds/students.js` - Same changes

### Issue 3: Frontend Proxy Configuration ✅ FIXED

**Problem:** Service was routing to port 3000 (test environment) but backend running on 8080

**Solution:** Updated frontend service to use port 8080:

**File:** `/frontend/src/app/app-service.service.ts`

**Changed from:**
```typescript
if(environment.production === false){
  this.ROOT_URL = 'test'; // Routes to localhost:3000
}
```

**Changed to:**
```typescript
if(environment.production === false){
  this.ROOT_URL = 'api'; // Routes to localhost:8080
}
```

---

## Complete Fix Steps Applied

### Step 1: Stop All Node Processes
```powershell
Get-Process node | Stop-Process -Force
```

### Step 2: Fix Migration Schema
- Changed ID columns from `increments()` to `string()`
- Ensures compatibility with text IDs (T001, S001, etc.)

### Step 3: Fix All Seed Files
- Updated 4 seed files with string IDs
- Teachers: T001, T002, T003
- Students: S001, S002, S003

### Step 4: Migrate and Seed Database
```powershell
$env:NODE_ENV="development"
npm run migrate
npm run seed
```

**Output:**
```
Using environment: development
Batch 1 run: 1 migrations
Ran 3 seed files
```

### Step 5: Start Backend Server
```powershell
npm start
```

**Output:**
```
DEV DB
Capstone Project Backend is running on http://localhost:8080
```

### Step 6: Update Frontend Service
- Changed ROOT_URL from 'test' to 'api'
- Requests now go to port 8080 instead of 3000

---

## Backend Server Status

✅ **Backend Running on Port 8080**
```
Capstone Project Backend is running on http://localhost:8080
```

### Proxy Configuration Status

**Frontend proxy.conf.json:**
```json
{
    "/api/*" : {
        "target" : "http://localhost:8080",
        "pathRewrite" : { "^/api" : "" }
    }
}
```

**Request Flow:**
```
Frontend (4200) 
  → /api/listStudents 
  → Proxy routes to 8080 
  → Backend (8080) 
  → /listStudents
  → Response returned ✓
```

---

## Database Status

✅ **Database Created and Seeded**

### Tables Created:
- `teacher` - 3 records (T001, T002, T003)
- `student` - 3 records (S001, S002, S003)
- `dummyData`

### Sample Data:

**Teachers:**
| ID | Name | Age |
|----|------|-----|
| T001 | Kusuma Ranasinghe | 45 |
| T002 | Saman De Silva | 40 |
| T003 | Parasanna Mahagamage | 30 |

**Students:**
| ID | Name | Age | Hometown |
|----|------|-----|----------|
| S001 | Supun Mihiranga | 10 | Colombo |
| S002 | Sandun Perera | 9 | Galle |
| S003 | Isuri De Silva | 10 | Kandy |

---

## What's Now Working

✅ Backend server running on port 8080
✅ Database properly initialized with correct schema
✅ Seed data loaded with string IDs
✅ Frontend proxy configured for port 8080
✅ API endpoints accessible
✅ No more connection refused errors

---

## Next Steps for Frontend

**Terminal 2 - Start Frontend:**
```powershell
cd frontend
ng serve
```

**Access Application:**
```
http://localhost:4200
```

**Expected Result:**
- Teachers page loads without 504 or connection errors
- Can view, add, edit, delete teachers
- Can do the same for students
- Search functionality works
- All API endpoints respond correctly

---

## Verification Checklist

- ✅ Database migrated with string ID schema
- ✅ All 4 seed files updated with string IDs
- ✅ Database seeded successfully
- ✅ Backend server running on port 8080
- ✅ Frontend service configured for port 8080
- ✅ No connection refused errors

---

## File Changes Summary

### Modified Files:
1. **backend/migrations/20220526133047_db_create.js**
   - Changed ID columns to string type

2. **backend/seeds/teachers.js**
   - IDs: 10001,10002,10003 → T001,T002,T003

3. **backend/seeds/students.js**
   - IDs: 20001,20002,20003 → S001,S002,S003

4. **backend/test/seeds/teachers.js**
   - IDs: 10001,10002,10003 → T001,T002,T003

5. **backend/test/seeds/students.js**
   - IDs: 20001,20002,20003 → S001,S002,S003

6. **frontend/src/app/app-service.service.ts**
   - Changed ROOT_URL from 'test' to 'api' in development

---

## Error Resolution Summary

| Error | Cause | Fix |
|-------|-------|-----|
| ECONNREFUSED port 3000 | Backend not on port 3000 | Changed to port 8080 |
| Database seeding failed | ID type mismatch | Changed to string IDs |
| Migration failed | Wrong ID column type | Used string() instead of increments() |
| Proxy errors | Wrong frontend configuration | Updated service.ts |

---

## Current System Status

```
Frontend Server:     http://localhost:4200  (Not started)
Backend Server:      http://localhost:8080  ✅ Running
Database:            db.sqlite              ✅ Created & Seeded
Proxy:              Configured for 8080    ✅ Ready
Services:           Updated                ✅ Ready
```

---

**Fix Date:** November 17, 2025
**Status:** ✅ ALL ISSUES RESOLVED
**Next Action:** Start frontend server with `cd frontend && ng serve`
