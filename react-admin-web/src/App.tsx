import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className="App">
			<Routes>
					<Route path={'/'} element={<Navigate replace to="/login" />} />
			</Routes>
			<Outlet></Outlet>
		</div>
	)
}

export default App
