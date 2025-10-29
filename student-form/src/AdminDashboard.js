import React, { useEffect, useState } from "react";
import { getStudents } from "./api";
import "./AdminDashboard.css";


function AdminDashboard({ onLogout }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => { fetchStudents(); }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`admin-container ${darkMode ? "dark" : ""}`}>
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="admin-student-list">
        {filteredStudents.map((s) => (
          <div key={s._id} className="admin-student-card">
            <p><strong>Name:</strong> {s.name}</p>
            <p><strong>Email:</strong> {s.email}</p>
            <p><strong>Course:</strong> {s.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
