import { Button, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import Search from './Search'

function Comment() {
	const columns: ColumnsType<Record<string, unknown>> = [
		{ title: '评价ID', dataIndex: 'commentId', key: 'ID' },
		{ title: '订单ID', dataIndex: 'orderId', key: 'age' },
		{ title: '评价人', dataIndex: 'customer', key: 'address' },
		{ title: '服务项目', dataIndex: 'serviceProject', key: 'address' },
		{ title: '服务人员', dataIndex: 'serviceCustomer', key: 'address' },
		{ title: '评价结果', dataIndex: 'commentResult', key: 'address' },
		{ title: '评价时间', dataIndex: 'commentTime', key: 'address' },
		{
			title: '操作',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button size="small">详情</Button>
					<Button danger size="small">
						删除
					</Button>
				</Space>
			),
		},
	]

	const data: Record<string, unknown>[] = []

	return (
		<div>
			客户评价管理
			<Search searchConfirm={function (): void {}} />
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default Comment
