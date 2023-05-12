import { Button, Space, Table, Select, DatePicker } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { RangePicker } = DatePicker

function WorkDetail() {
	const navigate = useNavigate()

	const navBack = () => {
		navigate(-1)
	}

	const columns: ColumnsType<Record<string, unknown>> = [
		{ title: '变动时间', dataIndex: 'changeTime', key: 'ID' },
		{ title: '变动事由', dataIndex: 'changeReason', key: 'age' },
		{ title: '变动类型', dataIndex: 'changeType', key: 'address' },
		{ title: '变动值', dataIndex: 'changeValue', key: 'address' },
		{ title: '变动后金额', dataIndex: 'changMoney', key: 'address' },
	]

	const data: Record<string, unknown>[] = []

	const [open, setOpen] = useState<boolean>(false)

	const toggleOpen = () => {
		setOpen(!open)
	}

	return (
		<div>
			<Space style={{ width: '100%', marginBottom: 20 }} size={'large'}>
				<Space>
					变动时间：
					<RangePicker onChange={() => {}} />
				</Space>
				<Space>
					余额类型：
					<Select
						defaultValue="类型筛选"
						style={{ width: 120 }}
						onChange={() => {}}
						options={[{ value: '类型筛选', label: '类型筛选' }]}
					/>
				</Space>
				<Space>总计收入：¥68956.56</Space>
				<Space>已提取金额：¥6856.56</Space>
				<Space>可提取余额：¥68956.56</Space>
				<Button type="primary" onClick={navBack}>
					返回
				</Button>
			</Space>
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default WorkDetail
