const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Student schema and model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true }
});

const Student = mongoose.model("Student", studentSchema);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// GET all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new student
app.post("/students", async (req, res) => {
  const { name, email, course } = req.body;  // match frontend fields

  if (!name || !email || !course) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const student = new Student({ name, email, course });

  try {
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
