import API from "../api/api";

export default function EmployeeList({ employees, refresh }) {
  const handleDelete = async (employeeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    try {
      await API.delete(`/employees/${employeeId}`);
      window.dispatchEvent(new Event("employees-updated"));
      refresh();
    } catch (err) {
      alert(
        err.response?.data?.detail ||
        "Unable to delete employee"
      );
    }
  };

  if (employees.length === 0) {
    return <p className="empty">No employees found</p>;
  }

  return (
    <div className="card">
      <h3>Employees</h3>

      <div className="employee-list">
        {employees.length === 0 ? (
          <p className="empty">No employees found</p>
        ) : (
          employees.map((emp) => (
            <div className="employee-card" key={emp.employeeId}>
              <p><strong>ID:</strong> {emp.employeeId}</p>
              <p><strong>Name:</strong> {emp.fullName}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <button className="danger" onClick={() => handleDelete(emp.employeeId)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
