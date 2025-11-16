@echo off
REM Start Backend Server on Port 3000
cd /d c:\Users\Dilma\Downloads\capstone-project-assignment-dilma124
set NODE_ENV=test
echo Starting Backend on Port 3000 (TEST Environment)...
echo.
node backend/index.js
pause
