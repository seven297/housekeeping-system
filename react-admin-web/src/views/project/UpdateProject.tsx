import { Form, Input, InputNumber, Layout, message, Modal, Select, DatePicker } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'
const { TextArea } = Input

/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateProject({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) {
	const [messageApi] = message.useMessage()
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()

	// 表单渲染定义
	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'levelOneServiceType',
			label: '一级服务分类',
			formcomponent: <Input />,
			rules: [{ required: true, message: '一级服务分类' }],
		},
		{
			field: 'levelTwoServiceType',
			label: '二级服务分类',
			formcomponent: <Input />,
			rules: [{ required: true, message: '二级服务分类' }],
		},
		{
			field: 'serviceName',
			label: '服务名称',
			formcomponent: <Input />,
			rules: [{ required: true, message: '服务名称' }],
		},
		{
			field: 'serviceState',
			label: '服务状态',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`服务状态：${value}`)}
					options={[
						{ value: '启用', label: '启用' },
						{ value: '禁用', label: '禁用' },
					]}
				/>
			),
			rules: [{ required: true, message: '服务状态' }],
		},
		{
			field: 'remark',
			label: '备注',
			formcomponent: <TextArea />,
		},
	])

	// 编辑/详情初始赋值
	useEffect(() => {
		// const result = await axios.post('/list/order', values)
		// setFormData(result.data)
	})

	// 提交表单
	const submit = () => {
		// const result = await axios.post('/add/customer', values)
		console.log(formData)
		messageApi.success('提交成功')
		// if (result) {
		//   onClose()
		// }
	}

	return (
		<>
			<Modal
				title="新增/修改家政项目"
				open={open}
				onOk={() => form.submit()}
				// confirmLoading={confirmLoading}
				onCancel={toggleOpen}
				okText="确认"
				cancelText="取消"
				width="50%"
				maskClosable={false}
				style={{ height: '50%' }}
			>
				{/* <Space align="start" style={{ width: '100%', height: '100%' }}> */}
				<Layout style={{ width: 'inherit', height: '100%', flexGrow: 1, padding: 10 }}>
					<div style={{ textAlign: 'center', padding: 10 }}>基本信息</div>
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
				</Layout>

				{/* </Space> */}
			</Modal>
		</>
	)
}

export default UpdateProject
