import { useEffect, useState } from "react";
import api from "../api/api";
import "./attendance.css";

const AttendanceTable = ({ refresh, employees }) => {
  const [records, setRecords] = useState([]);

  const employeeMap = {};
  employees.forEach((emp) => {
    employeeMap[emp.employeeId] = emp.fullName;
  });

  useEffect(() => {
    api.get("/attendance").then((res) => {
      setRecords(res.data);
    });
  }, [refresh]);

  return (
    <div className="card">
      <h3>Attendance Records</h3>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {records.map((rec) => (
            <tr key={`${rec.employeeId}-${rec.date}`}>
              <td>{employeeMap[rec.employeeId] || rec.employeeId}</td>
              <td className={rec.status.toLowerCase()}>{rec.status}</td>
              <td>{rec.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
