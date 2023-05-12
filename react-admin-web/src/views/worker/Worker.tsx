import { Button, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkSearch from './WorkSearch'
import UpdateWorker from './UpdateWorker'

function Worker() {
	const navigate = useNavigate()

	const navToWorkerDetail = () => {
		navigate('/workerDetail')
	}

	const columns: ColumnsType<Record<string, unknown>> = [
		{ title: 'ID', dataIndex: 'id', key: 'ID' },
		{ title: '姓名', dataIndex: 'name', key: 'age' },
		{ title: '联系电话', dataIndex: 'phone', key: 'address' },
		{ title: '年龄', dataIndex: 'age', key: 'address' },
		{ title: '性别', dataIndex: 'sex', key: 'address' },
		{ title: '工作经验', dataIndex: 'workExperience', key: 'address' },
		{ title: '区域', dataIndex: 'area', key: 'address' },
		{ title: '服务项目', dataIndex: 'serviceProject', key: 'address' },
		{ title: '注册时间', dataIndex: 'createTime', key: 'address' },
		{ title: '当前状态', dataIndex: 'currentState', key: 'address' },
		{
			title: '操作',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button size="small" onClick={navToWorkerDetail}>
						详情
					</Button>
					<Button size="small" onClick={toggleOpen}>
						修改
					</Button>
					<Button danger size="small">
						删除
					</Button>
				</Space>
			),
		},
	]

	const data: Record<string, unknown>[] = [
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

	const [open, setOpen] = useState<boolean>(false)

	const toggleOpen = () => {
		setOpen(!open)
	}

	return (
		<div>
			家政人员管理
			<WorkSearch searchConfirm={() => {}} toggleOpen={toggleOpen} />
			<UpdateWorker open={open} toggleOpen={toggleOpen} />
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default Worker
