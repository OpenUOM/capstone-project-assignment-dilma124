# Implementing the Backend

The backend implementation for the Student Management System can be divided into 3 parts:

1. Creating functions to interact with the Database
2. Creating the Backend server with APIs
3. Starting the server

## Database Initialization

Before implementing the database functions, the database is initialized using the configuration file provided.

```javascript
const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");
```

**Explanation:**
- The `sqlite.js` file provides the `dbConnection` module with `getDbConnection()` method
- This method initializes a database connection and assigns it to the `_db` variable
- The Knex module is a SQL Query Builder that establishes a connection to the database
- Configuration is provided via `db-config.js`

Since we successfully added the dummy data during the "Setting up the environment" section, the database is ready to use.

---

## Part 1: Creating Functions to Interact with the Database

CRUD operations refer to Create, Read, Update, and Delete operations of data.

### Database Functions for Teachers

#### 1.1 Create Teacher Function

```javascript
const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id,name,age) values (?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

**Explanation:**
- A Promise is returned when a teacher object is created
- A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- When a teacher is successfully added to the database, the `resolve` method returns a status message
- If any error occurs, the `reject` method returns the error details
- The SQLite `INSERT INTO` query adds data to the teacher table
- The Knex `raw()` method accepts a raw SQL query
- To prevent SQL injection, a parameterized query is used with Positional Bindings (`?`)
- The values passed as an array replace the Positional Bindings

#### 1.2 Read All Teachers Function

```javascript
const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

**Explanation:**
- All teacher information in the teacher table is retrieved
- The `resolve` method returns the database rows of the teacher table
- If any error occurs, the `reject` method returns the error details
- The SQLite `SELECT * FROM` query retrieves all data from a table
- The `*` retrieves data of all columns

#### 1.3 Read Single Teacher Function

```javascript
const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

**Explanation:**
- The `readTeacherInfo` method accepts an `id` parameter identifying the teacher
- The `id` parameter is used in the SQLite query with a WHERE clause to filter the specified teacher
- The WHERE clause filters data to return only the matching teacher
- If an error occurs, it is returned via the `reject` method
- If successful, the resulting rows are returned via the `resolve` method

#### 1.4 Update Teacher Function

```javascript
const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

**Explanation:**
- The `UPDATE` query modifies an existing record in the teacher table
- The `SET` clause specifies which columns to update with new values
- The `WHERE` clause identifies which row to update using the teacher's id
- After successful update, a success status message is returned

#### 1.5 Delete Teacher Function

```javascript
const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

**Explanation:**
- The `DELETE FROM` query removes a row from the teacher table
- The `WHERE` clause identifies which teacher to delete using the teacher's id
- The teacher object is permanently removed from the database
- A success status message is returned after deletion

### Database Functions for Students

Similar CRUD functions are implemented for the Student entity:

```javascript
const addStudent = async (id, name, age, hometown) => {
    const sql = `INSERT INTO student(id, name, age, hometown) values (?, ?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then(() => {
                resolve({ status: "Successfully inserted Student" });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, hometown, id) => {
    return new Promise((resolve, reject) => {
        knex_db('student')
            .where('id', id)
            .update({ name: name, age: age, hometown: hometown })
            .then(() => {
                resolve({ status: "Successfully updated Student" });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({ status: "Successfully deleted Student" });
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

### Exporting Database Functions

After implementing the database functions, they must be exported to allow other modules to access them:

```javascript
module.exports = {
    addTeacher,
    readTeachers,
    readTeacherInfo,
    updateTeacher,
    deleteTeacher,
    addStudent,
    readStudents,
    readStudentInfo,
    updateStudent,
    deleteStudent,
    initializeDatabase
};
```

---

## Part 2: Creating the Backend Server

### Importing Required Modules

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const {
    initializeDatabase,
    readTeachers,
    readTeacherInfo,
    addTeacher,
    deleteTeacher,
    readStudents,
    readStudentInfo,
    addStudent,
    deleteStudent,
    updateTeacher,
    updateStudent
} = require("./database.js");
```

**Explanation:**
- **Express**: A Node.js framework that provides facilities to run backend services and implement APIs
- **body-parser**: Middleware that parses incoming request bodies before they reach handlers, validates inputs, and converts request body into JavaScript datatypes
- **CORS**: Middleware that enables Cross-Origin Resource Sharing, allowing requests from different origins
- **Database functions**: Imported from `database.js` for use in API endpoints

### Middleware Configuration

```javascript
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

**Explanation:**
- `app.use()` instructs Express to use the specified middlewares
- `cors()` enables CORS for all routes
- `bodyParser.urlencoded()` parses urlencoded request bodies
- `bodyParser.json()` parses JSON request bodies

### HTTP Methods and CRUD Operations

Different HTTP methods are used to send requests to APIs:

| Method | Purpose | CRUD Operation |
|--------|---------|-----------------|
| GET | Retrieve data | Read |
| POST | Send/Create data | Create |
| PUT | Update existing data | Update |
| DELETE | Delete data | Delete |

### API Endpoints for Teachers

#### 1. API to List All Teachers (GET)

```javascript
app.get("/listTeachers", async function (req, res) {
    console.log("Request received to list teachers");
    try {
        let data = await readTeachers();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error listing teachers:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

**Explanation:**
- Accessed via GET method at endpoint `/listTeachers`
- The callback function receives `req` (request) and `res` (response) objects
- An `async` function is used to return a Promise
- `await` waits for the Promise returned by `readTeachers()` to resolve
- `res.setHeader()` sets response headers
- `res.end()` sends the response and ends the response process
- Try-catch block handles errors

**Usage Example:**
```
GET http://localhost:8080/listTeachers
```

#### 2. API to Get Single Teacher Info (POST)

```javascript
app.post("/getTeacherInfo", async function (req, res) {
    let reqBody = req.body;
    console.log("Request received to get Teacher Info");
    try {
        let data = await readTeacherInfo(reqBody.id);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error getting teacher info:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

**Explanation:**
- Accessed via POST method at endpoint `/getTeacherInfo`
- The teacher's id is passed in the request body as a JSON object
- The request body is captured via `req.body`
- The teacher with the specified id is returned

**Request Body Format:**
```json
{
  "id": "teacher_id"
}
```

**Usage Example:**
```
POST http://localhost:8080/getTeacherInfo
Content-Type: application/json

{
  "id": "T001"
}
```

#### 3. API to Add/Create a Teacher (POST)

```javascript
app.post("/addTeacher", async function (req, res) {
    let reqBody = req.body;
    console.log("Request received to add teacher. Req body: " + JSON.stringify(reqBody));
    try {
        let data = await addTeacher(reqBody.id, reqBody.name, reqBody.age);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error adding teacher:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

**Explanation:**
- Accessed via POST method at endpoint `/addTeacher`
- The teacher's details are passed in the request body
- A new teacher object is created in the database with the specified details

**Request Body Format:**
```json
{
  "id": "teacher_id",
  "name": "teacher_name",
  "age": "teacher_age"
}
```

**Usage Example:**
```
POST http://localhost:8080/addTeacher
Content-Type: application/json

{
  "id": "T002",
  "name": "John Doe",
  "age": 35
}
```

#### 4. API to Update a Teacher (POST)

```javascript
app.post("/editTeacher", async function (req, res) {
    let reqBody = req.body;
    try {
        let data = await updateTeacher(reqBody.name, reqBody.age, reqBody.id);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error updating teacher:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

**Explanation:**
- Accessed via POST method at endpoint `/editTeacher`
- The teacher's id is used to identify which teacher to update
- The specified teacher's details are updated in the database

**Request Body Format:**
```json
{
  "name": "teacher_name",
  "age": "teacher_age",
  "id": "teacher_id"
}
```

**Usage Example:**
```
POST http://localhost:8080/editTeacher
Content-Type: application/json

{
  "name": "Jane Smith",
  "age": 38,
  "id": "T001"
}
```

#### 5. API to Delete a Teacher (POST)

```javascript
app.post("/deleteTeacher", async function (req, res) {
    let reqBody = req.body;
    console.log("Request received to delete teacher. Req body: " + JSON.stringify(reqBody));
    try {
        let data = await deleteTeacher(reqBody.id);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error deleting teacher:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

**Explanation:**
- Accessed via POST method at endpoint `/deleteTeacher`
- The teacher's id is passed in the request body
- The teacher object with the specified id is permanently deleted from the database

**Request Body Format:**
```json
{
  "id": "teacher_id"
}
```

**Usage Example:**
```
POST http://localhost:8080/deleteTeacher
Content-Type: application/json

{
  "id": "T001"
}
```

### API Endpoints for Students

Similar API endpoints are implemented for Student operations:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/listStudents` | GET | Retrieve all students |
| `/getStudentInfo` | POST | Retrieve a specific student by id |
| `/addStudent` | POST | Create a new student |
| `/editStudent` | POST | Update student details |
| `/deleteStudent` | POST | Delete a student |

### Database Initialization Endpoint

```javascript
app.get("/dbinitialize", async function (req, res) {
    console.log("DB is getting initialized");
    try {
        let data = await initializeDatabase();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error("Error initializing database:", error);
        res.status(500).setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message }));
    }
});
```

### Health Check Endpoint

```javascript
app.get("/", async function (req, res) {
    console.log("Health check received");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "OK", message: "Backend server is running" }));
});
```

### Exporting the Express App

```javascript
module.exports = app;
```

---

## Part 3: Starting the Server

### Server Entry Point (index.js)

```javascript
const server = require("./server.js");

if(process.env.NODE_ENV === "test"){
    server.listen(3000, () => {
        console.log("Capstone Project Backend is running on http://localhost:3000");
    });
} else {
    server.listen(8080, () => {
        console.log("Capstone Project Backend is running on http://localhost:8080");
    });
}
```

**Explanation:**
- The server is imported from `server.js`
- `server.listen()` activates the Express server
- The first parameter is the port number (8080 for development, 3000 for testing)
- The callback function executes when the server is successfully started
- The server listens for incoming requests on the specified URL

### Starting the Backend Server

To run the Backend server, open a terminal in the project's root directory and execute:

```powershell
npm start
```

**Expected Output:**
```
Capstone Project Backend is running on http://localhost:8080
```

The backend server is now running and ready to accept requests.

---

## Summary

| Component | Location | Status |
|-----------|----------|--------|
| Database Functions | `backend/database.js` | ✅ Implemented |
| Teacher APIs | `backend/server.js` | ✅ Implemented |
| Student APIs | `backend/server.js` | ✅ Implemented |
| Server Entry Point | `backend/index.js` | ✅ Implemented |
| Port | 8080 (development), 3000 (test) | ✅ Configured |

---

## Quick Reference: API Endpoints

### Teachers
- `GET /listTeachers` - List all teachers
- `POST /getTeacherInfo` - Get single teacher
- `POST /addTeacher` - Create teacher
- `POST /editTeacher` - Update teacher
- `POST /deleteTeacher` - Delete teacher

### Students
- `GET /listStudents` - List all students
- `POST /getStudentInfo` - Get single student
- `POST /addStudent` - Create student
- `POST /editStudent` - Update student
- `POST /deleteStudent` - Delete student

### Utilities
- `GET /` - Health check
- `GET /dbinitialize` - Initialize database

---

**Backend Setup Date:** November 17, 2025  
**Status:** ✅ Backend Ready for Development
