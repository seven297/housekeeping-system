// function Order() {
//   return (<div>订单管理</div>)
// }

// export default Order

import React, { useState, useRef } from 'react'
import { Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'
const { TextArea } = Input
const { RangePicker } = DatePicker

import orderAddForm from './orderAdd.json'

interface DataType {
	key: React.Key
	name: string
	age: number
	address: string
}

const dataSource = [
	{
		id: 1,
		customerName: '客户名称',
		time: '时长',
		wokerCount: '用工人数',
		status: '订单状态',
		payStatus: '支付状态',
		payMoney: '支付金额',
		payTime: '下单时间',
		completeTime: '完成时间',
	},
]

const columns = [
	{
		title: '订单ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: '客户名称',
		dataIndex: 'customerName',
		key: 'customerName',
	},
	{
		title: '服务项目',
		dataIndex: 'project',
		key: 'project',
	},
	{
		title: '时长',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: '用工人数',
		dataIndex: 'wokerCount',
		key: 'wokerCount',
	},
	{
		title: '订单状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '支付状态',
		dataIndex: 'payStatus',
		key: 'payStatus',
	},
	{
		title: '支付金额',
		dataIndex: 'payMoney',
		key: 'payMoney',
	},
	{
		title: '下单时间',
		dataIndex: 'payTime',
		key: 'payTime',
	},
	{
		title: '完成时间',
		dataIndex: 'completeTime',
		key: 'completeTime',
	},
	{
		title: '操作',
		key: 'action',
		render: (_: any, _record: any) => (
			<Space size="middle">
				<Button type="primary">修改</Button>
				<Button type="primary" danger>
					禁用
				</Button>
			</Space>
		),
	},
]

function Order() {
	const [open, setOpen] = useState(false)
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
	const [fullWidth, setFullWidth] = useState(true)

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
	const submit = async (_values: any) => {
		// const result = await axios.post('/add/customer', values)
		// messageApi.success('提交成功')
		// if (result) {
		//   onClose()
		// }
	}

	const formConfig = useRef(orderAddForm)

	return (
		<div>
			<div className="flex-center-space-around" style={{ marginBottom: 20 }}>
				<Space style={{ width: '35%' }} className="flex-center">
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
				<Space style={{ width: '30%' }}>
					完成日期:
					<RangePicker />
				</Space>
				<Space style={{ width: '30%' }}>
					下单日期:
					<RangePicker />
				</Space>
			</div>
			<div className="flex-center-space-around" style={{ marginBottom: 20 }}>
				<Space style={{ width: '40%' }} className="flex-center">
					<Select
						defaultValue="服务分类"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[{ value: 'all', label: '全部' }]}
					/>
					<Select
						defaultValue="服务方式"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[{ value: 'all', label: '全部' }]}
					/>
					<Select
						defaultValue="订单状态"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[{ value: 'all', label: '全部' }]}
					/>
					<Select
						defaultValue="支付状态"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[{ value: 'all', label: '全部' }]}
					/>
				</Space>
				<Space style={{ width: '40%' }}>
					交易金额: <Input style={{ marginRight: 10 }} id="outlined-basic" placeholder="请输入" />至
					<Input style={{ marginRight: 10 }} id="outlined-basic" placeholder="请输入" />元
				</Space>
				<Space style={{ width: '15%' }}>
					<Button style={{ marginRight: 10 }} type="primary">
						批量导出
					</Button>
					<Button type="primary" onClick={handleClickOpen}>
						新增
					</Button>
				</Space>
			</div>
			<Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
			<Modal
				title="创建/修改订单"
				open={open}
				onOk={handleClickOpen}
				onCancel={handleClose}
				cancelText="取消"
				okText="确认"
				centered
				width={1000}
			>
				<Form name="customer-form" onFinish={submit}>
					{formConfig.current.map((_formItem) => (
						<Form.Item
							name={_formItem.field}
							label={_formItem.label}
							rules={[{ required: _formItem.required }]}
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

export default Order
