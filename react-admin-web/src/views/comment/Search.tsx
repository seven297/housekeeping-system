import React, { useState, useRef } from 'react'
import { Col, Row, Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'

const { RangePicker } = DatePicker

function Search({ searchConfirm }: { searchConfirm: () => void }) {
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [result, setResult] = useState('')
	const [worker, setWorker] = useState('')

	const handleChange = (value: string) => {
		setResult(value)
	}

	const workerNameChange = (value: string) => {
		setWorker(value)
	}

	const datePickerChange = (dates: Array<Date>, dateStrings: Array<string>) => {
		setStartTime(dates[0])
		setEndTime(dates[1])
	}

	return (
		<div>
			<Row style={{ marginBottom: '20px' }}>
				<Col span={8}>
					评价时间：
					<RangePicker onChange={datePickerChange} />
				</Col>
				<Col span={4}>
					评价结果：
					<Select
						defaultValue="lucy"
						style={{ width: 120 }}
						onChange={handleChange}
						options={[
							{ value: 'jack', label: 'Jack' },
							{ value: 'lucy', label: 'Lucy' },
							{ value: 'Yiminghe', label: 'yiminghe' },
						]}
					/>
				</Col>
				<Col span={8}>
					<Space>
						服务人员：
						<Input placeholder="请输入内容" onChange={workerNameChange} />
						<Button type="primary" onClick={searchConfirm}>
							搜索
						</Button>
					</Space>
				</Col>
				<Col span={4}>
					<Space>
						<Button type="primary">批量导出</Button>
						<Button type="primary" danger>
							批量删除
						</Button>
					</Space>
				</Col>
			</Row>
		</div>
	)
}

export default Search
