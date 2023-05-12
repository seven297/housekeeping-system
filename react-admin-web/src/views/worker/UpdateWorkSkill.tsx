import { Form, Input, InputNumber, Layout, message, Modal, Select, Upload, DatePicker } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'
import type { DatePickerProps } from 'antd'

/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateWorkSkill({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [messageApi] = message.useMessage()
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()

	const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString)
	}

	// 表单渲染定义
	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'certificatePhoto',
			label: '技能图片',
			formcomponent: (
				<Upload
					name="avatar"
					listType="picture-card"
					className="avatar-uploader"
					showUploadList={false}
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				>
					{formData?.certificatePhoto ? (
						<img src={formData?.certificatePhoto} alt="avatar" style={{ width: '100%' }} />
					) : (
						<div style={{ marginTop: 8 }}>Upload</div>
					)}
				</Upload>
			),
		},
		{
			field: 'getTime',
			label: '获得时间',
			formcomponent: <DatePicker onChange={onChangeDatePicker} />,
			rules: [{ required: true, message: '获得时间' }],
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
		<Modal
			title="添加技能"
			open={open}
			onOk={() => form.submit()}
			// confirmLoading={confirmLoading}
			onCancel={onClose}
			okText="确认"
			cancelText="取消"
			width="40%"
			maskClosable={false}
			style={{ height: '40%' }}
		>
			<Layout style={{ width: '100%', height: '100%', padding: 10 }}>
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
		</Modal>
	)
}

export default UpdateWorkSkill
