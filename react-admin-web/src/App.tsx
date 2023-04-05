import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './views/login/Login'
import Home from './views/home/Home'
import Project from './views/project/Project'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/project" element={<Project />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
