import { useState } from "react";

import EmployeeCard from "./componnents/EmployeeCard";

import "./App.css";

function App() {
	const [employee, setEmployee] = useState(null);

	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.results[0]);
			});
	};

	return (
		<div className="App">
			{employee && <EmployeeCard employee={employee} />}
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
