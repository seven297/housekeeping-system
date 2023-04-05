import {  Container, Divider, Grid, Paper } from '@mui/material'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';

function App() {
	return (
		<div className="App">
			<Paper elevation={0} className="pager" >
				<Grid container className="container">
					{/* navigation */}
					<Grid item xs={2}>
						<Navigation />
					</Grid>
					<Divider orientation="vertical" />
					<Grid item xs>
						{/* header */}
						<Header />
						{/* children router view */}
						<Routes>
								<Route path={'/'} element={<Navigate replace to="/login" />} />
						</Routes>
						<Container maxWidth="sm">
							<Outlet></Outlet>
						</Container>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}

export default App
