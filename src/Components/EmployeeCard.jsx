import "./employeeCard.css";

export default function EmployeeCard({ name, position, department, status }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-wrap">
          <div className="c-top">
            <div className="c-logo">{getInitials(name)}</div>
            <div className="status-dot" />
          </div>
          <div className="c-info">
            <span className="c-emp-name">{name}</span>
            <span className="c-emp-position">{position}</span>

            <div className="dividing-line" />

            <div className="c-bottom">
              <div className="emp-depart">
                <span>Departement</span>
                <span>{department}</span>
              </div>
              <div className="emp-status">
                <span>Status</span>
                <span className="emp-status-value" >{status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
