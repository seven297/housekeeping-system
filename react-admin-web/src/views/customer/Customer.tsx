import { Button, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import UpdateCustomer from './UpdateCustomer'
import CustomerSearch from './CustomerSearch'

function Customer() {
	/** table */
	const columns: ColumnsType<Record<string, unknown>> = [
		{ title: 'ID', dataIndex: 'id', key: 'ID' },
		{ title: '客户名称', dataIndex: 'name', key: 'age' },
		{ title: '结算方式', dataIndex: 'accountsMethod', key: 'address' },
		{ title: '联系人', dataIndex: 'contacts', key: 'address' },
		{ title: '联系电话', dataIndex: 'phone', key: 'address' },
		{ title: '服务次数', dataIndex: 'address', key: 'address' },
		{ title: '客户来源', dataIndex: 'customerSource', key: 'address' },
		{ title: '客户类型', dataIndex: 'certificationType', key: 'address' },
		{ title: '累计交易金额', dataIndex: 'address', key: 'address' },
		{
			title: '操作',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button size="small">详情</Button>
					<Button size="small">修改</Button>
					<Button danger size="small">
						删除
					</Button>
				</Space>
			),
		},
	]
	const data: Record<string, unknown>[] = []

	/** dialog */
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = (res?: unknown) => {
		setOpen(false)
	}

	return (
		<div>
			{/* <Button onClick={handleOpen}>新增</Button> */}
			<CustomerSearch
				searchConfirm={function (): void {
					throw new Error('Function not implemented.')
				}}
				handleOpen={handleOpen}
				onClose={handleClose}
			/>
			<UpdateCustomer open={open} onClose={handleClose} />
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default Customer
