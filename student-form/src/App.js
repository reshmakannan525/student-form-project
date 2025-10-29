import React, { useState } from "react";
import StudentForm from "./StudentForm";
import AdminLogin from "./adminLogin";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminClick = () => {
    setShowAdminLogin(true);
  };

  const handleLogin = (success) => {
    if (success) {
      setIsAdmin(true);
      setShowAdminLogin(false);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Admin button in the corner */}
      {!isAdmin && (
        <button
          onClick={handleAdminClick}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "10px 18px",
            borderRadius: "10px",
            background: "#1e3c72",
            color: "white",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          Admin
        </button>
      )}

      {/* Show Student Form if not admin */}
      {!isAdmin && !showAdminLogin && <StudentForm />}

      {/* Show Admin Login */}
      {showAdminLogin && !isAdmin && <AdminLogin onLogin={handleLogin} />}

      {/* Show Admin Dashboard if logged in */}
      {isAdmin && <AdminDashboard onLogout={handleLogout} />}
    </div>
  );
}

export default App;
