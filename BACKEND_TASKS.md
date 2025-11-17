# Backend Tasks

This document provides guidance on implementing the backend functionality for the Student Management System. The primary task is to implement the Database Interaction Functions for the Student class.

---

## Task Overview

The backend implementation requires creating CRUD (Create, Read, Update, Delete) operations for the Student class, similar to the Teacher class implementation.

### Tasks to Complete

1. ✅ Update the `readStudents` function to read all student data
2. ✅ Update the `readStudentInfo` function to read the information of a specified student
3. ✅ Update the `addStudent` function to add a student
4. ✅ Update the `updateStudent` function to update details of a specific student
5. ✅ Update the `deleteStudent` function to delete a specified student

**Important:** Do not change function names. Differing names will cause to lose marks.

---

## Student Database Functions Implementation

### Task 1: readStudents Function

**Purpose:** Retrieve all student records from the database.

**Implementation:**

```typescript
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
```

**Status:** ✅ **IMPLEMENTED**

**Explanation:**

- **Function Name:** `readStudents` (Note: Plural form)
- **Parameters:** None
- **Return Type:** Promise (Observable when used in service)
- **SQL Query:** `SELECT * FROM student` - Retrieves all columns from all rows in the student table
- **Promise Resolution:**
  - Success: Returns array of all student objects
  - Failure: Returns error details

**How It Works:**

1. Constructs a raw SQL SELECT query
2. Executes the query using Knex.js
3. On success, resolves the promise with the student data array
4. On error, rejects the promise with error details

**Usage Example:**

```javascript
// In component or service
this.service.getStudentData().subscribe(
  (response) => {
    console.log('All students:', response);
    // Process the array of students
  },
  (error) => {
    console.error('Error loading students:', error);
  }
);
```

**Expected Response:**

```json
[
  {
    "id": "S001",
    "name": "Alice Johnson",
    "age": 20,
    "hometown": "New York"
  },
  {
    "id": "S002",
    "name": "Bob Smith",
    "age": 22,
    "hometown": "Los Angeles"
  }
]
```

---

### Task 2: readStudentInfo Function

**Purpose:** Retrieve information about a specific student identified by their ID.

**Implementation:**

```typescript
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
```

**Status:** ✅ **IMPLEMENTED**

**Explanation:**

- **Function Name:** `readStudentInfo` (Singular form - retrieves one student)
- **Parameters:**
  - `id` (string) - The student's unique identifier
- **Return Type:** Promise (Observable when used in service)
- **SQL Query:** `SELECT * FROM student WHERE id = ?` - Retrieves all columns for a student with matching ID
- **Parameterized Query:**
  - `?` - Positional binding for the id parameter
  - `[id]` - Array containing the actual id value to prevent SQL injection

**How It Works:**

1. Accepts a student id as parameter
2. Constructs a SELECT query with WHERE clause to filter by id
3. Uses parameterized query to prevent SQL injection
4. Executes the query using Knex.js
5. On success, resolves the promise with the student data
6. On error, rejects the promise with error details

**Usage Example:**

```javascript
// In component or service
const payload = {
  id: 'S001'
};
this.service.getOneStudentData(payload).subscribe(
  (response) => {
    console.log('Student info:', response);
    // response[0] contains the student object
    this.studentData = response[0];
  },
  (error) => {
    console.error('Error loading student info:', error);
  }
);
```

**Expected Response:**

```json
[
  {
    "id": "S001",
    "name": "Alice Johnson",
    "age": 20,
    "hometown": "New York"
  }
]
```

---

### Task 3: addStudent Function

**Purpose:** Add a new student record to the database.

**Implementation:**

```typescript
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
```

**Status:** ✅ **IMPLEMENTED**

**Explanation:**

- **Function Name:** `addStudent`
- **Parameters:**
  - `id` (string) - Unique student identifier
  - `name` (string) - Student's full name
  - `age` (number) - Student's age
  - `hometown` (string) - Student's hometown/city
- **Return Type:** Promise
- **SQL Query:** `INSERT INTO student(id, name, age, hometown) values (?, ?, ?, ?)`
- **Parameterized Query:** Values are bound using positional bindings (?)

**How It Works:**

1. Accepts four parameters for the new student
2. Constructs an INSERT query with all required columns
3. Uses parameterized query with array of values: `[id, name, age, hometown]`
4. Executes the query using Knex.js
5. On success, resolves with a success status message
6. On error, rejects with error details

**Usage Example:**

```javascript
// In component or service
const newStudent = {
  id: 'S003',
  name: 'Charlie Brown',
  age: 21,
  hometown: 'Chicago'
};
this.service.addStudent(newStudent).subscribe(
  (response) => {
    console.log('Student added:', response);
    // response.status === "Successfully inserted Student"
    alert('Student added successfully!');
  },
  (error) => {
    console.error('Error adding student:', error);
    alert('Error adding student');
  }
);
```

**Expected Response:**

```json
{
  "status": "Successfully inserted Student"
}
```

**Important Notes:**

- The `id` must be unique (primary key constraint)
- All parameters are required
- Age should be a valid number
- Hometown is required for students

---

### Task 4: updateStudent Function

**Purpose:** Update the details (name, age, hometown) of a specific student.

**Implementation:**

```typescript
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
```

**Status:** ✅ **IMPLEMENTED**

**Explanation:**

- **Function Name:** `updateStudent`
- **Parameters:**
  - `name` (string) - Updated student name
  - `age` (number) - Updated student age
  - `hometown` (string) - Updated student hometown
  - `id` (string) - Student's ID to identify which student to update
- **Return Type:** Promise
- **Knex Query Builder:** Uses Knex.js query builder syntax instead of raw SQL
- **Update Logic:**
  - `.where('id', id)` - Identifies which student to update
  - `.update({...})` - Specifies which fields to update

**How It Works:**

1. Accepts four parameters (note different order than addStudent)
2. Uses Knex query builder to construct update query
3. Filters by student id using WHERE clause
4. Updates name, age, and hometown fields
5. Executes the query
6. On success, resolves with a success status message
7. On error, rejects with error details

**Usage Example:**

```javascript
// In component or service
const updatedData = {
  id: 'S001',
  name: 'Alice Johnson Updated',
  age: 21,
  hometown: 'Boston'
};
this.service.editStudent(updatedData).subscribe(
  (response) => {
    console.log('Student updated:', response);
    // response.status === "Successfully updated Student"
    alert('Student updated successfully!');
    this.router.navigate(['student']); // Navigate back to student list
  },
  (error) => {
    console.error('Error updating student:', error);
    alert('Error updating student');
  }
);
```

**Expected Response:**

```json
{
  "status": "Successfully updated Student"
}
```

**Important Notes:**

- The `id` parameter identifies which student to update
- Note the parameter order: `(name, age, hometown, id)` - differs from addStudent
- Only name, age, and hometown are updated
- The id itself cannot be changed via this function

---

### Task 5: deleteStudent Function

**Purpose:** Delete a student record from the database.

**Implementation:**

```typescript
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

**Status:** ✅ **IMPLEMENTED**

**Explanation:**

- **Function Name:** `deleteStudent`
- **Parameters:**
  - `id` (string) - The student ID to delete
- **Return Type:** Promise
- **SQL Query:** `DELETE FROM student WHERE id = ?` - Deletes the row matching the id
- **Parameterized Query:** `[id]` - Safely binds the id value

**How It Works:**

1. Accepts a student id as parameter
2. Constructs a DELETE query with WHERE clause to identify the student
3. Uses parameterized query to prevent SQL injection
4. Executes the query using Knex.js
5. On success, resolves with a success status message
6. On error, rejects with error details

**Usage Example:**

```javascript
// In component or service
if (confirm('Are you sure you want to delete this student?')) {
  const deletePayload = {
    id: 'S001'
  };
  this.service.deleteStudent(deletePayload).subscribe(
    (response) => {
      console.log('Student deleted:', response);
      // response.status === "Successfully deleted Student"
      alert('Student deleted successfully!');
      this.getStudentData(); // Refresh the list
    },
    (error) => {
      console.error('Error deleting student:', error);
      alert('Error deleting student');
    }
  );
}
```

**Expected Response:**

```json
{
  "status": "Successfully deleted Student"
}
```

**Important Notes:**

- Deletion is permanent
- The student record is completely removed from the database
- A confirmation dialog should be shown before deletion
- After deletion, the student list should be refreshed

---

## Complete Student Database Functions Implementation

Here's the complete code block for all student functions as they should appear in `backend/database.js`:

```javascript
// ============== STUDENT DATABASE FUNCTIONS ==============

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

// Export all functions
module.exports = {
    initializeDatabase,
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
```

---

## Task Verification Checklist

| Task | Function Name | Status | Verified |
|------|---------------|--------|----------|
| 1 | `readStudents` | ✅ Implemented | ✅ |
| 2 | `readStudentInfo(id)` | ✅ Implemented | ✅ |
| 3 | `addStudent(id, name, age, hometown)` | ✅ Implemented | ✅ |
| 4 | `updateStudent(name, age, hometown, id)` | ✅ Implemented | ✅ |
| 5 | `deleteStudent(id)` | ✅ Implemented | ✅ |

---

## Comparison: Teacher vs Student Functions

| Operation | Teacher Function | Student Function | Difference |
|-----------|------------------|------------------|-----------|
| **Read All** | `readTeachers()` | `readStudents()` | Same structure |
| **Read One** | `readTeacherInfo(id)` | `readStudentInfo(id)` | Same structure |
| **Add** | `addTeacher(id, name, age)` | `addStudent(id, name, age, hometown)` | Student has extra `hometown` parameter |
| **Update** | `updateTeacher(name, age, id)` | `updateStudent(name, age, hometown, id)` | Student has extra `hometown` field |
| **Delete** | `deleteTeacher(id)` | `deleteStudent(id)` | Same structure |

---

## Database Schema Reference

### Student Table Structure

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| id | TEXT | PRIMARY KEY | Unique student identifier |
| name | TEXT | NOT NULL | Student's full name |
| age | INTEGER | NOT NULL | Student's age in years |
| hometown | TEXT | NOT NULL | Student's hometown/city |

### Example Student Records

```sql
INSERT INTO student VALUES ('S001', 'Alice Johnson', 20, 'New York');
INSERT INTO student VALUES ('S002', 'Bob Smith', 22, 'Los Angeles');
INSERT INTO student VALUES ('S003', 'Charlie Brown', 21, 'Chicago');
INSERT INTO student VALUES ('S004', 'Diana Prince', 23, 'Seattle');
```

---

## API Endpoints for Student Operations

These endpoints are automatically available when the student functions are properly exported and used in the backend server.

| Endpoint | Method | Purpose | Payload |
|----------|--------|---------|---------|
| `/listStudents` | GET | Get all students | None |
| `/getStudentInfo` | POST | Get single student | `{ "id": "S001" }` |
| `/addStudent` | POST | Create student | `{ "id": "S001", "name": "Name", "age": 20, "hometown": "City" }` |
| `/editStudent` | POST | Update student | `{ "id": "S001", "name": "Name", "age": 20, "hometown": "City" }` |
| `/deleteStudent` | POST | Delete student | `{ "id": "S001" }` |

---

## Testing the Backend Functions

### Using Postman or REST Client

**Test 1: Get All Students**
```
GET http://localhost:8080/listStudents
```

**Test 2: Get Single Student**
```
POST http://localhost:8080/getStudentInfo
Body: { "id": "S001" }
```

**Test 3: Add Student**
```
POST http://localhost:8080/addStudent
Body: { "id": "S005", "name": "Eve Davis", "age": 19, "hometown": "Boston" }
```

**Test 4: Update Student**
```
POST http://localhost:8080/editStudent
Body: { "id": "S001", "name": "Alice Updated", "age": 21, "hometown": "Boston" }
```

**Test 5: Delete Student**
```
POST http://localhost:8080/deleteStudent
Body: { "id": "S005" }
```

---

## Summary

All student database functions have been implemented following the same patterns as the teacher class functions. The key differences are:

1. **Student has additional field:** `hometown` (not in Teacher)
2. **Function names must be exact:** Using singular/plural forms correctly
3. **Parameter order matters:** Especially in `updateStudent` where id is last

All functions use Promises and are fully integrated with:
- Backend server endpoints in `server.js` ✅
- Service methods in the frontend `app-service.service.ts` ✅
- Student components in the frontend ✅

**Backend Tasks Status:** ✅ **COMPLETE**

---

**Backend Tasks Completion Date:** November 17, 2025  
**All Student Functions Status:** ✅ VERIFIED AND IMPLEMENTED
