import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { dividerClasses } from '@mui/material'

function Project() {
	const [age, setAge] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Box sx={{ minWidth: 120 }} className="flex-center">
			<div>搜索</div>
			<TextField size="small" id="outlined-basic" variant="outlined" placeholder="请输入内容" />
			<FormControl style={{ minWidth: 200 }}>
				<Select size="small" id="demo-simple-select" value={age} onChange={handleChange}>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>

		// <List
		// 	style={{ width: '100%', maxWidth: 200 }}
		// 	component="nav"
		// 	aria-labelledby="nested-list-subheader"
		// 	subheader={
		// 		<ListSubheader component="div" id="nested-list-subheader">
		// 			后台管理系统
		// 		</ListSubheader>
		// 	}
		// >
		// 	<ListItemButton sx={{ pl: 4 }}>
		// 		<ListItemText primary="家政项目管理" />
		// 	</ListItemButton>
		// 	<ListItemButton sx={{ pl: 4 }}>
		// 		<ListItemText primary="客户管理" />
		// 	</ListItemButton>
		// 	<ListItemButton sx={{ pl: 4 }}>
		// 		<ListItemText primary="家政人员管理" />
		// 	</ListItemButton>
		// 	<ListItemButton sx={{ pl: 4 }}>
		// 		<ListItemText primary="订单管理" />
		// 	</ListItemButton>
		// 	<ListItemButton sx={{ pl: 4 }}>
		// 		<ListItemText primary="客户评价管理" />
		// 	</ListItemButton>
		// </List>
	)
}

// function Project() {
//   return (<div>家政项目管理</div>)
// }

export default Project
