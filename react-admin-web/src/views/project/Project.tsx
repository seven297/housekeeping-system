import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import './Project.css'
import { borderRadius, fontSize, maxWidth, style } from '@mui/system'

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'classification',
		headerName: '服务分类',
		width: 150,
	},
	{
		field: 'mode',
		headerName: '服务方式',
		width: 150,
	},
	{
		field: 'name',
		headerName: '服务名称',
		width: 110,
	},
	{
		field: 'status',
		headerName: '状态',
		width: 110,
	},
	{
		field: 'remark',
		headerName: '备注',
		width: 110,
	},
	{
		field: 'operate',
		headerName: '操作',
		width: 110,
	},
]

const rows = [
	{
		id: 1,
		age: 35,
		operate: '',
		remark: '备注',
		status: '状态',
		name: '服务名称',
		mode: '服务方式',
		classification: '服务分类',
	},
]

function Project() {
	const [age, setAge] = React.useState('')
	const [open, setOpen] = React.useState(false)
	const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false)
	const [fullWidth, setFullWidth] = React.useState(true)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickOpenDeleteDialog = () => {
		setOpenDeleteDialog(true)
	}

	const handleCloseDeleteDialog = () => {
		setOpenDeleteDialog(false)
	}

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<div style={{ padding: 10 }}>
			<Box>
				<div className="flex-center">
					<div style={{ width: '50%' }} className="flex-center">
						<div className="m-r-10">搜索：</div>
						<TextField
							style={{ marginRight: 10 }}
							size="small"
							id="outlined-basic"
							variant="outlined"
							placeholder="请输入内容"
						/>
						<FormControl style={{ minWidth: 200, marginRight: 10 }}>
							<Select size="small" id="demo-simple-select" value={age} onChange={handleChange}>
								<MenuItem value={10}>全部</MenuItem>
							</Select>
						</FormControl>
						<Button variant="contained">搜索</Button>
					</div>
					<div>
						<Button style={{ marginRight: 10 }} variant="contained" onClick={handleClickOpen}>
							新增
						</Button>
						<Button variant="contained" color="error" onClick={handleClickOpenDeleteDialog}>
							批量删除
						</Button>
					</div>
				</div>
				<DataGrid
					style={{ marginTop: 30 }}
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
				<Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={fullWidth}>
					<DialogTitle>新增/修改家政项目</DialogTitle>
					<DialogContent>
						<div className="flex-center">
							<div className="dialog-content-label">一级服务分类:</div>
							<TextField
								autoFocus
								margin="dense"
								size="small"
								id="name"
								variant="outlined"
								placeholder="请输入内容"
							/>
						</div>
						<div className="flex-center">
							<div className="dialog-content-label">二级服务分类:</div>
							<TextField
								autoFocus
								margin="dense"
								size="small"
								id="name"
								variant="outlined"
								placeholder="请输入内容"
							/>
						</div>
						<div className="flex-center">
							<div className="dialog-content-label">服务名称:</div>
							<TextField
								autoFocus
								margin="dense"
								size="small"
								id="name"
								variant="outlined"
								placeholder="请输入内容"
							/>
						</div>
						<div className="flex-center">
							<div className="dialog-content-label">服务状态:</div>
							<TextField
								autoFocus
								margin="dense"
								size="small"
								id="name"
								variant="outlined"
								placeholder="请输入内容"
							/>
						</div>
						<div className="flex-center" style={{ marginTop: '10px' }}>
							<div className="dialog-content-label" style={{ alignSelf: 'flex-start' }}>
								备注:
							</div>
							<TextareaAutosize className="textarea" minRows="5" placeholder="请输入内容" />
						</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>取消</Button>
						<Button onClick={handleClose}>确认</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					open={openDeleteDialog}
					onClose={handleCloseDeleteDialog}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					maxWidth="md"
					fullWidth={fullWidth}
				>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							点击确定后将无法恢复，是否确认删除？
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseDeleteDialog}>取消</Button>
						<Button onClick={handleCloseDeleteDialog}>确认</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</div>
	)
}

function FormDialog() {
	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open form dialog
			</Button>
		</div>
	)
}

export default Project
