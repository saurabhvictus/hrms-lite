import { useEffect, useState } from "react";
import API from "../api/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeesList";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <EmployeeForm refresh={loadEmployees} />
      <EmployeeList employees={employees} refresh={loadEmployees} />
    </>
  );
}
