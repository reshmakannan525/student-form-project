import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAdminClick }) {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.course) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          course: form.course,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSuccess("Student details submitted successfully!");
      setForm({ name: "", email: "", course: "" });
    } catch (err) {
      setError("Failed to submit details. Make sure backend is running!");
    }
  };

  return (
    <div className="student-container">
      

      <h1>Student Registration</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <select name="course" value={form.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
