import { Form, Input, InputNumber, Layout, message, Modal, Select, Upload } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'
import { PlusOutlined } from '@ant-design/icons';

/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateCustomer({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [messageApi] = message.useMessage()
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()

	// 表单渲染定义
	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'id',
			label: 'id',
			formcomponent: <Input bordered={false} readOnly />,
			hidden: !formData?.id,
			style: {margin: '10px'},
		},
		{
			field: 'name',
			label: '客户姓名',
			formcomponent: <Input />,
			rules: [{ required: true, message: '请输入客户名称' }],
			style: {margin: '10px'},
		},
		{
			field: 'certificationType',
			label: '认证类型',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[
						{ value: 'personal', label: '个人' },
						{ value: 'business', label: '企业' },
					]}
				/>
			),
			rules: [{ required: true, message: '请选择认证类型' }],
			style: {margin: '10px'},
		},
		{
			field: 'contacts',
			label: '联系人',
			formcomponent: <Input />,
			style: {margin: '10px'},
		},
		{
			field: 'phone',
			label: '联系电话',
			formcomponent: <InputNumber />,
			rules: [
				{ required: true, message: '请输入联系电话' },
				{
					pattern: new RegExp(
						/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
					),
					message: '请输入手机号正确格式',
				},
			],
			style: {margin: '10px'},
		},
		{
			field: 'accountsMethod',
			label: '结算方式',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`结算方式：${value}`)}
					options={[
						{ value: 'personal', label: '即时结算' },
						{ value: 'business', label: '按月结算' },
					]}
				/>
			),
			rules: [{ required: true, message: '请选择结算方式' }],
			style: {margin: '10px'},
		},
		{
			field: 'customerSource',
			label: '客户来源',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`客户来源：${value}`)}
					options={[
						{ value: 'offline', label: '线下咨询' },
						{ value: 'nonparty', label: '第三方平台' },
						{ value: 'introduce', label: '老顾客介绍' },
					]}
				/>
			),
			rules: [{ required: true, message: '请选择客户来源' }],
			style: {margin: '10px'},
		},
		{
			field: 'address',
			label: '客户地址',
			formcomponent: <Input style={{ width: '300px' }} />,
			rules: [{ required: true, message: '请输入客户地址' }],
			style: { width: '100%', margin: '10px'},
		},
		{
			field: 'certificateNo',
			label: formData?.certificationType === 'personal' ? '身份证号' : '营业执照号',
			formcomponent: <Input style={{ width: '300px' }} />,
			rules: [
				{
					validator: (_, val: string) => {
						if (formData?.certificationType === 'personal') {
							if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)) {
								return Promise.resolve()
							}
							return Promise.reject(new Error('请输入正确的身份证号'))
						}
						return Promise.resolve()
					},
					// message: '请输入正确的身份证号'
				},
			],
			style: { width: '100%', margin: '10px'},
		},
		{
			field: 'certificatePhoto',
			label: formData?.certificationType === 'personal' ? '身份证照片' : '营业执照照片',
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
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>上传照片</div>
						</div>
					)}
				</Upload>
			),
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
			title="修改客户资料"
			open={open}
			onOk={() => form.submit()}
			// confirmLoading={confirmLoading}
			onCancel={onClose}
			okText="确认"
			cancelText="取消"
			width="60%"
			maskClosable={false}
			style={{ height: '60%' }}
		>
			<AppForm
				form={form}
				formConfig={formConfig.current}
				formData={formData}
				submit={submit}
				formProps={{
					layout: 'inline',
					onValuesChange: (changedVal, allVal) => setFormData(allVal),
				}}
			/>
		</Modal>
	)
}

export default UpdateCustomer
