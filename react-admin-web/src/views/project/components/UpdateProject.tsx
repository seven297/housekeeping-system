import { Button, Divider, Form, Input, message, Modal, Radio, RadioChangeEvent, Select, Space, Spin } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../../components/form/AppForm'

import { FormItemConfig } from '../../../components/form/Form'
import { Detail, useProjectCRUD } from '../hook/CRUD'
import { PlusOutlined } from '@ant-design/icons'


/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateProject({ id, open, toggleOpen }: { id?: number; open: boolean; toggleOpen: () => void }) {
	const [messageApi] = message.useMessage()
	const [loading, setLoading] = useState<boolean>(false)

	const CRUD = useProjectCRUD()

	const [form] = Form.useForm()
	const [formData, setFormData] = useState<Detail>()

	const [category, setCategory] = useState<string>('')

	// 表单渲染定义
	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'levelOneServiceType',
			label: '一级服务分类',
			formcomponent: (
				<Select
					dropdownRender={(menu) => (
						<>
							{menu}
							<Divider style={{ margin: '8px 0' }} />
							<Space style={{ padding: '0 8px 4px' }}>
								<Input
									placeholder="请输入服务分类名称"
									value={category}
									onChange={onCategoryChange}
								/>
								<Button type="text" icon={<PlusOutlined />} onClick={addCategory}>
									添加
								</Button>
							</Space>
						</>
					)}
					options={getOptions(0)}
				/>
			),
			rules: [{ required: true, message: '一级服务分类' }],
			wrapperCol: { span: 8 },
		},
		{
			field: 'levelTwoServiceType',
			label: '二级服务方式',
			formcomponent: <Input />,
			rules: [{ required: true, message: '二级服务方式' }],
			wrapperCol: { span: 8 },
		},
		{
			field: 'name',
			label: '服务名称',
			formcomponent: <Input />,
			rules: [{ required: true, message: '服务名称' }],
			wrapperCol: { span: 8 },
		},
		{
			field: 'serviceState',
			label: '服务状态',
			formcomponent: (
				<Radio.Group
					name="serviceState"
					onChange={(e: RadioChangeEvent) => console.log(`服务状态：${e.target.value}`)}
				>
					<Radio checked value={'1'}>启用</Radio>
					<Radio value={'0'}>禁用</Radio>
				</Radio.Group>
			),
			rules: [{ required: true, message: '服务状态' }],
			wrapperCol: { span: 8 },
		},
		{
			field: 'remark',
			label: '备注',
			formcomponent: <Input.TextArea />,
		},
	])

	// 编辑/详情初始赋值
	useEffect(() => {
		if (id) {
			const detail = CRUD.getDetail(id)
			console.log(detail)
			// setFormData(detail)
		}
	})

	// 提交表单
	const submit = () => {
		console.log(formData)
		setLoading(true)
		setTimeout(() => {
			messageApi.success('提交成功')
			setLoading(false)
			toggleOpen()
		}, 500)
	}

	// 获取下拉列表
	function getOptions(pid: number) {
		return CRUD.getRows()
			.filter(e => e.pid === pid)
			.map((item) => ({ label: item.name, value: item.id }))
	}

	function onCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		setCategory(event.target.value)
	}

	// 添加一级服务分类
	function addCategory(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
		e.preventDefault()
		const row: Detail = {
			d: CRUD.getRows().length + 1,
			pid: 0, 
			name: category,
			state: 1,
		}
		CRUD.insertRow(row)
	}

	// 添加二级服务方式

	return (
		<>
			<Modal
				title="新增/修改家政项目"
				open={open}
				onOk={() => form.submit()}
				confirmLoading={loading}
				onCancel={toggleOpen}
				okText="确认"
				cancelText="取消"
				width="50%"
				maskClosable={false}
				style={{ height: '50%' }}
			>
				<Spin spinning={loading} delay={500}>
					<AppForm
						form={form}
						formConfig={formConfig.current}
						formData={formData}
						submit={submit}
						formProps={{
							labelCol: { span: 6 },
							onValuesChange: (changedVal, allVal) => setFormData(allVal),
						}}
					/>
				</Spin>
			</Modal>
		</>
	)
}

export default UpdateProject
