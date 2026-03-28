import { useState } from 'react';
import EmployeeList from './Components/EmployeeList';
import EmployeeForm from './Components/EmployeeForm';
import './App.css'

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now() + Math.floor(Math.random() * 1000),
      status: employee.status || 'Active',
    };

    // add new employee to the top of the list
    setEmployees((prev) => [newEmployee, ...prev]);
  };

  return (
    <div className="app-container">
      <div className="app-top">
        <h1 className="app-title">Employee Directory</h1>
        <span className="subtitle">All employees across departments</span>
      </div>

      <EmployeeList employees={employees} />
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App