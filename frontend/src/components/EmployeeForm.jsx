import { useState } from "react";
import API from "../api/api";

export default function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employees", form);
      window.dispatchEvent(new Event("employees-updated"));

      refresh();

      setForm({
        employeeId: "",
        fullName: "",
        email: "",
        department: "",
      });
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to add employee");
    }
  };

  return (
    <div className="card">
      <h3>Add Employee</h3>

      <form onSubmit={submit}>
        <div className="form-row">
          <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange} required />
          <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
        </div>

        <button>Add Employee</button>
      </form>
    </div>
  );
}
