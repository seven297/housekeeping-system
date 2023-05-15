import { Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'

function OrderComment({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()
	const [dispatchFormData, setDispatchFormData] = useState<any>()

	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'worker',
			label: '服务人员',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'phone',
			label: '联系电话',
			formcomponent: <Input bordered={false} readOnly />,
		},

		{
			field: 'serviceProject',
			label: '服务项目',
			formcomponent: <Input bordered={false} readOnly />,
		},
	])

	const dispatchFormConfig = useRef<FormItemConfig[]>([
		{
			field: 'commenter',
			label: '评价人',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'commentResult',
			label: '评价结果',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'commentContent',
			label: '评价内容',
			formcomponent: <Input bordered={false} readOnly />,
		},
	])

	const submit = () => {}

	return (
		<>
			<Modal
				title=""
				open={open}
				onOk={onClose}
				onCancel={onClose}
				cancelText="取消"
				okText="确认"
				centered
				width={1000}
			>
				<div style={{ textAlign: 'center', width: '100%' }}>评价详情</div>
				<AppForm
					form={form}
					formConfig={formConfig.current}
					formData={formData}
					submit={submit}
					formProps={{
						labelAlign: 'left',
						onValuesChange: (changedVal, allVal) => setFormData(allVal),
					}}
				/>
				<div style={{ textAlign: 'center', width: '100%' }}>评价内容</div>
				<AppForm
					form={form}
					formConfig={dispatchFormConfig.current}
					formData={dispatchFormData}
					submit={submit}
					formProps={{
						labelAlign: 'left',
						onValuesChange: (changedVal, allVal) => setFormData(allVal),
					}}
				/>
			</Modal>
		</>
	)
}

export default OrderComment
