import { useEffect, useState } from "react";
import API from "../api/api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const loadEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    // initial load
    loadEmployees();

    const handler = () => {
      loadEmployees();
    };

    window.addEventListener("employees-updated", handler);

    // cleanup
    return () => {
      window.removeEventListener("employees-updated", handler);
    };
  }, []);

  return (
    <>
      <AttendanceForm
        employees={employees}
        onSaved={() => setRefresh((r) => r + 1)}
      />

      <AttendanceTable
        refresh={refresh}
        employees={employees}
      />
    </>
  );
}
