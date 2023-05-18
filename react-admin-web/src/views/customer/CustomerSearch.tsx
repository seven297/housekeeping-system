import React, { useState, useRef } from 'react'
import { Col, Row, Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'

const { RangePicker } = DatePicker

function CustomerSearch({
	searchConfirm,
	handleOpen,
	onClose,
}: {
	searchConfirm: () => void
	handleOpen: () => void
	onClose: () => void
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
				<Col span={7}>
					<Space>
						搜索：
						<Select
							placeholder="全部"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: 'id', label: '客户ID' },
								{ value: 'customerName', label: '客户名称' },
								{ value: 'name', label: '联系人' },
								{ value: 'phone', label: '联系电话' },
								{ value: 'serviceName', label: '服务名称' },
							]}
						/>
						<Input placeholder="请输入内容" onChange={() => {}} />
						<Button type="primary">搜索</Button>
					</Space>
				</Col>
				<Col span={5}>
					创建时间：
					<RangePicker onChange={() => {}} />
				</Col>
				<Col span={6}>
					<Space>
						<Select
							defaultValue="服务分类"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: '钟点工', label: '钟点工' },
								{ value: '保姆', label: '保姆' },
								{ value: '阿姨', label: '阿姨' },
							]}
						/>
						<Select
							defaultValue="服务方式"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: '钟点工', label: '钟点工' },
								{ value: '住家', label: '住家' },
								{ value: '不住家', label: '不住家' },
							]}
						/>
					</Space>
				</Col>
				<Col span={2}>
					<Button type="primary" onClick={handleOpen}>
						新增
					</Button>
				</Col>
			</Row>
			<Row style={{ marginBottom: 20 }}>
				<Col span={9}>
					<Space>
						<Select
							placeholder="客户类型"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: '', label: '全部' },
								{ value: 'personal', label: '个人' },
								{ value: 'company', label: '企业' },
							]}
						/>
						<Select
							placeholder="结算方式"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: '', label: '全部' },
								{ value: 'payNow', label: '即时结算' },
								{ value: 'payMonth', label: '按月结算' },
							]}
						/>
						<Select
							placeholder="客户来源"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[
								{ value: '', label: '全部' },
								{ value: 'payNow', label: '线下咨询' },
								{ value: 'payMonth', label: '老客户介绍' },
								{ value: 'payMonth', label: '第三方平台' },
							]}
						/>
						<Select
							placeholder="性别筛选"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[]}
						/>
						<Select
							placeholder="年龄筛选"
							style={{ width: 100 }}
							onChange={handleChange}
							options={[]}
						/>
					</Space>
				</Col>
				<Col span={4}>
					<Space>
						服务次数：<Input style={{ width: 60 }}></Input>至
						<Input style={{ width: 60 }}></Input>
					</Space>					
				</Col>
				<Col span={5}>
					<Space>
						交易金额：<Input style={{ width: 60 }}></Input>至
						<Input style={{ width: 60 }}></Input>元
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

export default CustomerSearch
