import React, { useState, useRef, useEffect } from 'react'
import { Space, Button, Table } from 'antd'
// import serverApi from '../../api'
import UpdateProject from './components/UpdateProject'
import ProjectSearch from './components/ProjectSearch'
import ConfirmDelete from './components/ConfirmDelete'

interface DataType {
	key: React.Key
	name: string
	age: number
	address: string
}

const dataSource = [
	{
		id: 1,
		remark: '备注',
		status: '状态',
		name: '服务名称',
		mode: '服务方式',
		classification: '服务分类',
	},
]

function Project() {
	const [openDialog, setOpen] = useState(false)
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

	const toggleOpen = () => {
		setOpen(!openDialog)
	}

	const toggleDeleteDialog = () => {
		setOpenDeleteDialog(!openDeleteDialog)
	}

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys)
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: '服务分类',
			dataIndex: 'classification',
			key: 'classification',
		},
		{
			title: '服务方式',
			dataIndex: 'mode',
			key: 'mode',
		},
		{
			title: '服务名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '状态',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: '备注',
			dataIndex: 'remark',
			key: 'remark',
		},
		{
			title: '操作',
			dataIndex: 'action',
			// key: 'action',
			render: (_: any, record: any) => (
				<Space size="middle">
					<Button type="primary" onClick={toggleOpen}>
						修改
					</Button>
					<Button type="primary" danger>
						禁用
					</Button>
				</Space>
			),
		},
	]

	// 提交表单
	const submit = async (values: any) => {
		// const result = await axios.post('/add/customer', values)
		// messageApi.success('提交成功')
		// if (result) {
		//   onClose()
		// }
	}

	const deleteProject = () => {}

	const getProjectData = () => {
		
	}

	useEffect(() => getProjectData())

	return (
		<div>
			<ProjectSearch
				toggleOpen={toggleOpen}
				searchConfirm={getProjectData}
				toggleDelete={toggleDeleteDialog}
			/>
			<Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} rowKey="id"/>

			{/* 表单弹窗 */}
			{ openDialog && <UpdateProject open={openDialog} toggleOpen={toggleOpen} /> }
			{/* 删除确认框 */}
			{
				openDeleteDialog 
					&& <ConfirmDelete
							open={openDeleteDialog}
							toggleOpen={toggleDeleteDialog}
							deleteProject={deleteProject}
						/>
			}
		</div>
	)
}

export default Project
