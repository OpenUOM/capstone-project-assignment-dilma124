# Troubleshooting: 504 Gateway Timeout Error

## Error Summary

**Error Message:** `Http failure response for http://localhost:4200/test/addTeacher: 504 Gateway Timeout`

**Status Code:** 504 Gateway Timeout

**What It Means:** The frontend (running on port 4200) is trying to reach a backend server through a proxy (on port 3000), but the backend server is not responding within the timeout period.

---

## Root Cause Analysis

### The Problem

The frontend is configured to proxy requests to different backends:
- `/api/*` → `http://localhost:8080` (development backend)
- `/test/*` → `http://localhost:3000` (test backend)

**The request is being routed to:** `http://localhost:3000/addTeacher`

**Why it fails:** The backend server on port 3000 is **NOT RUNNING**.

### Proxy Configuration

```json
{
    "/test/*" : {
        "target" : "http://localhost:3000",
        "pathRewrite" : {
            "^/test" : ""
        }
    }
}
```

This means:
- Frontend URL: `http://localhost:4200/test/addTeacher`
- Gets proxied to: `http://localhost:3000/addTeacher`
- If port 3000 is not running → 504 Timeout

---

## Solution

### Option 1: Start Backend Server on Port 3000 (Test Mode) ✅ RECOMMENDED

#### Step 1: Open a Terminal in Project Root

```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
```

#### Step 2: Start Backend Server in Test Mode

```powershell
$env:NODE_ENV="test"; npm start
```

**Expected Output:**
```
Capstone Project Backend is running on http://localhost:3000
```

This sets the environment variable to "test" which makes the backend listen on port 3000.

#### Step 3: Verify Backend is Running

```powershell
# In a new terminal
Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing
```

**Expected Response:**
```
Status Code: 200
Content: { "status": "OK", "message": "Backend server is running" }
```

#### Step 4: Test the API Endpoint

```powershell
$body = @{
    "id" = "T999"
    "name" = "Test Teacher"
    "age" = 35
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/addTeacher" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

**Expected Response:** 200 OK with success message

#### Step 5: Use Frontend

Now when you use the frontend on `http://localhost:4200`, the requests should work correctly and be proxied to port 3000.

---

### Option 2: Use Development Mode (Port 8080)

If you want to use port 8080 instead of port 3000, you need to change how the frontend service makes requests.

#### Step 1: Update app-service.service.ts

**File:** `frontend/src/app/app-service.service.ts`

**Current Code:**
```typescript
if(environment.production === false){
    this.ROOT_URL = 'test'; // Routes through proxy to localhost:3000
}else{
    this.ROOT_URL = 'api'; // Routes through proxy to localhost:8080
}
```

**Change to:**
```typescript
if(environment.production === false){
    this.ROOT_URL = 'api'; // Routes through proxy to localhost:8080
}else{
    this.ROOT_URL = 'api'; // Routes through proxy to localhost:8080
}
```

#### Step 2: Start Backend Server on Port 8080

```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
npm start
```

**Expected Output:**
```
Capstone Project Backend is running on http://localhost:8080
```

#### Step 3: Make Sure Frontend is Running

```powershell
cd frontend
ng serve
```

Now requests will be routed to port 8080 instead of port 3000.

---

## Quick Fix Steps (Copy & Paste)

### For Port 3000 (Test Mode)

**Terminal 1 - Backend:**
```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
$env:NODE_ENV="test"; npm start
```

**Wait for:**
```
Capstone Project Backend is running on http://localhost:3000
```

**Terminal 2 - Frontend (if not already running):**
```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124\frontend"
ng serve
```

**Access the app:**
```
http://localhost:4200
```

### For Port 8080 (Development Mode)

**Terminal 1 - Backend:**
```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
npm start
```

**Wait for:**
```
Capstone Project Backend is running on http://localhost:8080
```

**Terminal 2 - Frontend:**
```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124\frontend"
ng serve
```

**Access the app:**
```
http://localhost:4200
```

---

## Detailed Understanding

### What is a 504 Gateway Timeout?

A 504 error means:
- ✅ The frontend server (4200) is responding
- ✅ The proxy is working
- ❌ The backend server (3000 or 8080) is NOT responding
- ❌ The proxy times out waiting for backend response

### Why Port 3000 vs Port 8080?

**Port 3000 (Test Mode):**
- Used when `NODE_ENV === "test"`
- Configured in proxy for `/test/*` URLs
- Set via: `$env:NODE_ENV="test"`

**Port 8080 (Development Mode):**
- Used by default
- Configured in proxy for `/api/*` URLs
- Set when NODE_ENV is NOT "test"

### The Proxy Flow

```
Frontend Request
    ↓
http://localhost:4200/test/addTeacher
    ↓
Proxy sees /test/* pattern
    ↓
Rewrites to http://localhost:3000/addTeacher
    ↓
Forwards to Backend
    ↓
Backend responds with JSON
    ↓
Response sent back to Frontend
```

**If backend is not running → timeout at step 4**

---

## Verification Checklist

### Before Using Frontend

- [ ] Terminal open in project root: `cd capstone-project-assignment-dilma124`
- [ ] Environment variable set (if using test mode): `$env:NODE_ENV="test"`
- [ ] Backend server started: `npm start`
- [ ] Backend shows correct port in console output
- [ ] Frontend server running: `cd frontend && ng serve`
- [ ] Frontend accessible: `http://localhost:4200`

### Testing Each Component

#### Backend Health Check
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing
```
Expected: Status 200

#### Proxy Working
```powershell
Invoke-WebRequest -Uri "http://localhost:4200/test/" -UseBasicParsing
```
Expected: Status 200 (proxied from 3000)

#### API Endpoint Working
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/listTeachers" -UseBasicParsing
```
Expected: Array of teachers in response

---

## Common Issues and Solutions

### Issue 1: "Cannot find module 'express'"

**Problem:** Dependencies not installed

**Solution:**
```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
npm install
```

### Issue 2: "Port already in use"

**Problem:** Another process is using port 3000 or 8080

**Solution:**
```powershell
# Find process using port 3000
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess
# Kill the process
Stop-Process -Id <PID> -Force
# Try again
npm start
```

### Issue 3: "Cannot GET /api/listTeachers"

**Problem:** Using wrong proxy path

**Solution:**
Check `app-service.service.ts` - ROOT_URL should match proxy config
- For port 3000: `this.ROOT_URL = 'test'`
- For port 8080: `this.ROOT_URL = 'api'`

### Issue 4: Database errors

**Problem:** Database not initialized

**Solution:**
```powershell
npm run migrate
npm run seed
```

---

## Environment Variables

### Setting NODE_ENV in PowerShell

```powershell
# For test environment (port 3000)
$env:NODE_ENV="test"
npm start

# For development environment (port 8080)
npm start

# Verify environment variable
$env:NODE_ENV
```

### Setting NODE_ENV for Current Session Only

The above commands only affect the current terminal. After closing the terminal, the environment variable is reset.

---

## Port Reference

| Service | Port | Environment | Start Command |
|---------|------|-------------|----------------|
| Backend | 3000 | Test | `$env:NODE_ENV="test"; npm start` |
| Backend | 8080 | Development | `npm start` |
| Frontend | 4200 | Development | `cd frontend && ng serve` |

---

## Step-by-Step Fix

### Step 1: Stop All Servers

If you have any servers running, close them:
- Close all terminal windows
- Or press `Ctrl+C` in each terminal

### Step 2: Open Fresh Terminal Window

```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124"
```

### Step 3: Ensure Database is Set Up

```powershell
npm run migrate
npm run seed
```

Expected output:
```
Using environment: development
Batch 1 run: 1 migrations
Ran 3 seed files
```

### Step 4: Start Backend Server

Choose ONE of these options:

**Option A: Test Mode (Port 3000)**
```powershell
$env:NODE_ENV="test"; npm start
```

**Option B: Development Mode (Port 8080)**
```powershell
npm start
```

Wait for console to show:
```
Capstone Project Backend is running on http://localhost:3000
```
or
```
Capstone Project Backend is running on http://localhost:8080
```

### Step 5: Open Second Terminal for Frontend

```powershell
cd "c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124\frontend"
ng serve
```

Wait for console to show:
```
✔ Compiled successfully.
✔ Application bundle generated successfully
```

### Step 6: Access Application

Open browser:
```
http://localhost:4200
```

You should now see the Teacher Management interface without 504 errors.

---

## Testing the Fix

### Test 1: Load Teachers Page

1. Navigate to `http://localhost:4200`
2. Should load Teachers table without errors
3. Check browser console (F12) for any errors

### Test 2: Add a Teacher

1. Click "Add New" button
2. Fill in form:
   - ID: `T999`
   - Name: `Test Teacher`
   - Age: `35`
3. Click "Create"
4. Should redirect to home and show new teacher in table
5. Should NOT show 504 error

### Test 3: Search Teachers

1. Type "test" in search field
2. Table should filter to show only "Test Teacher"
3. Clear search field
4. Full list should restore

### Test 4: Check Console

Open browser developer tools (F12):
- Go to Network tab
- Add a teacher
- Should see POST request to `/test/addTeacher`
- Status should be 200, not 504

---

## Summary

**The 504 error occurs because:**
- Backend server is not running
- Frontend proxy cannot reach backend
- Request times out

**To fix:**
1. Start backend: `$env:NODE_ENV="test"; npm start` (port 3000)
2. Keep frontend running: `cd frontend && ng serve` (port 4200)
3. Access: `http://localhost:4200`

**Result:** ✅ No more 504 errors

---

## Additional Resources

For more information about:
- Proxy configuration: See `frontend/proxy.conf.json`
- Backend setup: See `ENVIRONMENT_SETUP_GUIDE.md`
- Backend implementation: See `BACKEND_IMPLEMENTATION_GUIDE.md`
- Frontend implementation: See `FRONTEND_IMPLEMENTATION_GUIDE.md`

---

**Last Updated:** November 17, 2025  
**Status:** Troubleshooting Guide Complete
