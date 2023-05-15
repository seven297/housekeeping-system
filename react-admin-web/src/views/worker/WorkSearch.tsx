import React, { useState, useRef } from 'react'
import { Col, Row, Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'

const { RangePicker } = DatePicker

function WorkSearch({
	searchConfirm,
	toggleOpen,
}: {
	searchConfirm: () => void
	toggleOpen: () => void
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
		<div>
			<Row style={{ marginBottom: '20px' }}>
				<Col span={8}>
					<Space>
						搜索：
						<Select
							defaultValue="智能搜索"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[
								{ value: '智能搜索', label: '智能搜索' },
								{ value: 'id', label: 'ID' },
								{ value: 'name', label: '姓名' },
								{ value: 'phone', label: '联系电话' },
								{ value: 'serviceName', label: '服务名称' },
							]}
						/>
						<Input placeholder="请输入内容" onChange={() => {}} />
					</Space>
				</Col>
				{/* <Col span={8}>
					注册时间：
					<RangePicker onChange={() => {}} />
				</Col> */}
				<Col span={7}>
					<Space>
						服务筛选：
						<Select
							defaultValue="服务分类"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[
								{ value: '钟点工', label: '钟点工' },
								{ value: '保姆', label: '保姆' },
								{ value: '阿姨', label: '阿姨' },
							]}
						/>
						<Select
							defaultValue="服务方式"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[
								{ value: '钟点工', label: '钟点工' },
								{ value: '住家', label: '住家' },
								{ value: '不住家', label: '不住家' },
							]}
						/>
					</Space>
				</Col>
				<Col span={1}>
					<Button type="primary" onClick={toggleOpen}>
						新增
					</Button>
				</Col>
			</Row>
			<Row style={{ marginBottom: 20 }}>
				<Col span={20}>
					<Space>
						区域筛选：
						<Select
							placeholder="请选择省份"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[]}
						/>
						<Select
							placeholder="请选择城市"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[]}
						/>
						<Select
							placeholder="请选择区县"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[]}
						/>
						<Select
							placeholder="性别筛选"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[]}
						/>
						<Select
							placeholder="年龄筛选"
							style={{ width: 120 }}
							onChange={handleChange}
							options={[]}
						/>
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

export default WorkSearch
