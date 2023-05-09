import React, { useState, useRef, useEffect } from 'react'
import { Input, Select, Space, Button, Table, Modal, Form } from 'antd'
import serverApi from '../../api'
const { TextArea } = Input

interface DataType {
	key: React.Key
	name: string
	age: number
	address: string
}

const dataSource = [
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
		key: 'action',
		render: (_: any, record: any) => (
			<Space size="middle">
				<Button type="primary">修改</Button>
				<Button type="primary" danger>
					禁用
				</Button>
			</Space>
		),
	},
]

function Project() {
	const [open, setOpen] = useState(false)
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

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

	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys)
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}

	// 提交表单
	const submit = async (values: any) => {
		// const result = await axios.post('/add/customer', values)
		// messageApi.success('提交成功')
		// if (result) {
		//   onClose()
		// }
	}

	const getProjectData = () => {
		serverApi({ url: '/project/query', method: 'get', params: { filter: '1', type: 'ceshi' } })
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => getProjectData())

	const formConfig = useRef([
		{ field: 'firstLevel', label: '一级服务分类', value: '', required: true, size: 4 },
		{ field: 'secondLevel', label: '二级服务分类', value: '', required: true, size: 4 },
		{ field: 'name', label: '服务名称', value: '', required: true, size: 4 },
		{ field: 'status', label: '服务状态', value: '', required: true, size: 6 },
		{ field: 'remark', label: '备注', value: '', required: false, size: 6 },
	])

	return (
		<div>
			<div className="flex-center" style={{ marginBottom: 20 }}>
				<Space style={{ width: '50%' }} className="flex-center">
					<div className="m-r-10">搜索：</div>
					<Input style={{ marginRight: 10 }} id="outlined-basic" placeholder="请输入内容" />
					<Select
						defaultValue="全部"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[{ value: 'all', label: '全部' }]}
					/>
					<Button type="primary">搜索</Button>
				</Space>
				<Space>
					<Button style={{ marginRight: 10 }} type="primary" onClick={handleClickOpen}>
						新增
					</Button>
					<Button type="primary" danger onClick={handleClickOpenDeleteDialog}>
						批量删除
					</Button>
				</Space>
			</div>
			<Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
			<Modal
				title="新增/修改家政项目"
				open={open}
				onOk={handleClickOpen}
				onCancel={handleClose}
				cancelText="取消"
				okText="确认"
				centered
			>
				<Form name="customer-form" onFinish={submit}>
					{formConfig.current.map((formItem) => (
						<Form.Item
							name={formItem.field}
							label={formItem.label}
							rules={[{ required: formItem.required }]}
						>
							<Input />
						</Form.Item>
					))}
				</Form>
			</Modal>
			<Modal
				centered
				open={openDeleteDialog}
				onOk={handleClickOpenDeleteDialog}
				onCancel={handleCloseDeleteDialog}
				cancelText="取消"
				okText="确认"
			>
				<p>点击确定后将无法恢复，是否确认删除？</p>
			</Modal>
		</div>
	)
}

export default Project
