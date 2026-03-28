import EmployeeList from './components/EmployeeList';
import EmployeeForm from './Components/EmployeeForm';
import './App.css'

function App() {
  return (
    <>
    <div className="app-container">
      <div className="app-top">
        <h1 className="app-title">Employee Directory</h1>
        <span className="subtitle">All employees across departments</span>
      </div>
      <EmployeeList employees={[]} />
      <EmployeeForm />
    </div>
    </>
  )
}

export default App