import EmployeeCard from "./EmployeeCard";
import "./employeeList.css";

export default function EmployeeList({ employees }) {
    return (

        <>
        <div className="employee-list-container">
           {employees.map((employee, id) => (
             <EmployeeCard
               key={id}
               name={employee.name}
               position={employee.position}
               department={employee.department}
               status={employee.status}
             />
           ))}
        </div>
        </>
    )
}