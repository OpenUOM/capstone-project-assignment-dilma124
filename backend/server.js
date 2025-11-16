const express = require ("express");

const {
  readTeachers,
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
  readStudentInfo,
  readTeacherInfo,
  updateStudent,
  updateTeacher,
  initializeDatabase
} = require ("./database.js");

const app = express();
const bodyParser = require  ("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/dbinitialize", async function (req, res) {
  console.log("DB is getting initialized");
  try {
    let data = await initializeDatabase();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error initializing database:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to initialize database" }));
  }
});
// ============== Teacher Related endpoints ==============

app.get("/listTeachers", async function (req, res) {
  console.log("Request received to list teachers");
  try {
    let data = await readTeachers();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error listing teachers:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to list teachers" }));
  }
});

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
    res.end(JSON.stringify({ error: error.message || "Failed to get teacher info" }));
  }
});

app.post("/addTeacher", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to add teacher. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await addTeacher(reqBody.id, reqBody.name, reqBody.age);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to add teacher" }));
  }
});

app.post("/editTeacher", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to update teacher. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await updateTeacher(reqBody.name,reqBody.age,reqBody.id);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error updating teacher:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to update teacher" }));
  }
});

app.post("/deleteTeacher", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to delete teacher. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await deleteTeacher(reqBody.id);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to delete teacher" }));
  }
});

// ============== Student Related endpoints ==============

app.get("/listStudents", async function (req, res) {
  console.log("Request received to list students");
  try {
    let data = await readStudents();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error listing students:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to list students" }));
  }
});

app.post("/getStudentInfo", async function (req, res) {
  let reqBody = req.body;
  console.log("Request received to get Student Info");
  try {
    let data = await readStudentInfo(reqBody.id);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error getting student info:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to get student info" }));
  }
});

app.post("/addStudent", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to add student. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await addStudent(
      reqBody.id,
      reqBody.name,
      reqBody.age,
      reqBody.hometown
    );
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to add student" }));
  }
});

app.post("/deleteStudent", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to delete student. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await deleteStudent(reqBody.id);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to delete student" }));
  }
});

app.post("/editStudent", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to update Student. Req body: " + JSON.stringify(reqBody)
  );
  try {
    let data = await updateStudent(reqBody.name,reqBody.age,reqBody.hometown,reqBody.id);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to update student" }));
  }
});

// ============== Health check endpoint ==============
app.get("/", async function (req, res) {
  console.log("Health check received");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ status: "OK", message: "Backend server is running" }));
});

// ============== Error handling middleware ==============
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: err.message || "Internal Server Error" }));
});

module.exports = app;