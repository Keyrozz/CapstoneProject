import EmployeeList from './Components/EmployeeList.jsx';
import { initialEmployees } from "./Data/Data.js"
import './App.css'

function App() {
  return (
    <>
    <EmployeeList employees={initialEmployees} />
    </>
  )
}

export default App
