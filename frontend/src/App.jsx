import { useState } from "react";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("employees");

  return (
    <div className="app-container">
      <h1 className="app-title">HRMS Lite</h1>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "employees" ? "active" : ""}
          onClick={() => setActiveTab("employees")}
        >
          Employee Management
        </button>

        <button
          className={activeTab === "attendance" ? "active" : ""}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance Management
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "employees" && <Employees />}
        {activeTab === "attendance" && <Attendance />}
      </div>
    </div>
  );
}
