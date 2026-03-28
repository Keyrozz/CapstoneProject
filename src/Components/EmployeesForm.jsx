import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3 className="employee-name">{employee.name}</h3>
      <p className="employee-info">Poste: {employee.position}</p>
      <p className="employee-info">Département: {employee.department}</p>
      <p className={`status ${employee.status}`}>
        {employee.status}
      </p>
    </div>
  );
}

export default EmployeeCard;