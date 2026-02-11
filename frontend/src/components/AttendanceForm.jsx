import { useState } from "react";
import API from "../api/api";

export default function AttendanceForm({ employees = [], onSaved }) {
  const [employeeId, setEmployeeId] = useState("");
  const [status, setStatus] = useState("Present");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/attendance", {
        employeeId,
        status,
        date: new Date().toISOString().split("T")[0],
      });

      setEmployeeId("");
      onSaved?.();
    } catch (err) {
      console.error(err.response?.data);
      alert("Failed to mark attendance");
    }
  };

  return (
    <div className="card">
      <h3>Mark Attendance</h3>

      <form onSubmit={submit}>
        <select
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        >
          <option value="">Select Employee</option>

          {employees.length === 0 && (
            <option disabled>No employees found</option>
          )}

          {employees.map((emp) => (
            <option key={emp.employeeId} value={emp.employeeId}>
              {emp.fullName}
            </option>
          ))}
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}
