import React, { useState, useRef } from 'react'
import { Col, Row, Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'

const { RangePicker } = DatePicker

function ProjectSearch({
	searchConfirm,
	toggleOpen,
  toggleDelete
}: {
	searchConfirm: () => void
	toggleOpen: () => void,
	toggleDelete: () => void
}) {
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [result, setResult] = useState('')
	const [worker, setWorker] = useState('')
	const [searchType, setSearchType] = useState('')
	const [registerTime, setRegisterTime] = useState('')

	const handleChange = (value: any) => {
		setResult(value)
	}

	const workerNameChange = (value: Event) => {
		console.log(value)
		// setWorker(value)
	}

	const datePickerChange = (dates: Array<Date>, dateStrings: Array<string>) => {
		setStartTime(dates[0])
		setEndTime(dates[1])
	}

	return (
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
				<Button type="primary" onClick={searchConfirm}>搜索</Button>
			</Space>
			<Space>
				<Button style={{ marginRight: 10 }} type="primary" onClick={toggleOpen}>
					新增
				</Button>
				<Button type="primary" danger onClick={toggleDelete}>
					批量删除
				</Button>
			</Space>
		</div>
	)
}

export default ProjectSearch
