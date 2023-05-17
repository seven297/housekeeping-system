import {
	Form,
	Input,
	InputNumber,
	Layout,
	message,
	Modal,
	Select,
	Upload,
	Space,
	Avatar,
	DatePicker,
	Cascader,
	Button,
	Spin,
	Empty,
	Divider,
} from 'antd'
import type { DatePickerProps } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'
import UpdateWorkExperience from './UpdateWorkExperience'
import UpdateWorkSkill from './UpdateWorkSkill'
import './Worker.css'
import { PlusOutlined } from '@ant-design/icons'

/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateWorker({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) {
	const [messageApi] = message.useMessage()
	const [loading, setLoading] = useState<boolean>(false)

	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()
	
	const [workSkillOpen, setWorkSkillOpen] = useState<boolean>(false)
	const [workExperienceOpen, setWorkExperienceOpen] = useState<boolean>(false)

	const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString)
	}

	const toggleWorkSkillOpen = () => {
		setWorkSkillOpen(!workSkillOpen)
	}

	const toggleWorkExperienceOpen = () => {
		setWorkExperienceOpen(!workExperienceOpen)
	}

	// 表单渲染定义
	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'name',
			label: '姓名',
			formcomponent: <Input />,
			rules: [{ required: true, message: '请输入姓名' }],
			style: {margin: '10px'},
		},
		{
			field: 'sex',
			label: '性别',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[
						{ value: 'men', label: '男' },
						{ value: 'women', label: '女' },
					]}
				/>
			),
			rules: [{ required: true, message: '性别' }],
			style: {margin: '10px'},
		},
		{
			field: 'nation',
			label: '民族',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[
						{ value: '汉族', label: '汉族' },
						{ value: '蒙古族', label: '蒙古族' },
					]}
				/>
			),
			rules: [{ required: true, message: '民族' }],
			style: {margin: '10px'},
		},
		{
			field: 'birthday',
			label: '出生日期',
			formcomponent: <DatePicker onChange={onChangeDatePicker} />,
			rules: [{ required: true, message: '出生日期' }],
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
			field: 'workExperience',
			label: '工作经验',
			formcomponent: <Input />,
			style: {margin: '10px'},
		},
		{
			field: 'serviceType',
			label: '服务项目',
			formcomponent: (
				<>
					<Select
						placeholder="服务分类"
						defaultActiveFirstOption
						style={{ width: 100 }}
						onChange={(value: string) => console.log(`认证类型：${value}`)}
						options={[{ value: '项目1', label: '项目1' }]}
					/>
					<Select
						placeholder="服务方式"
						defaultActiveFirstOption
						style={{ width: 100 }}
						onChange={(value: string) => console.log(`认证类型：${value}`)}
						options={[{ value: '项目1', label: '项目1' }]}
					/>
					<Select
						placeholder="服务名称"
						defaultActiveFirstOption
						style={{ width: 100 }}
						onChange={(value: string) => console.log(`认证类型：${value}`)}
						options={[{ value: '项目1', label: '项目1' }]}
					/>
				</>
			),
			rules: [{ required: true, message: '服务分类' }],
			style: { width: '100%', margin: '10px'},
		},
		{
			field: 'area',
			label: '所在区域',
			formcomponent: (
				<Cascader
					options={[]}
					onChange={() => {}}
					style={{ width: '300px' }}
				/>
			),
			rules: [{ required: true, message: '所在区域' }],
			style: { width: '100%', margin: '10px' },
		},
		{
			field: 'idCard',
			label: '身份证号',
			formcomponent: <Input style={{ width: '300px' }} />,
			style: { width: '100%', margin: '10px' },
		},
		{
			field: 'certificatePhoto',
			label: '身份证',
			formcomponent: (
				<Upload
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
			style: { width: '100%', margin: '10px' },
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
				open={open}
				onOk={() => form.submit()}
				// confirmLoading={confirmLoading}
				onCancel={toggleOpen}
				okText="确认"
				cancelText="取消"
				width="50%"
				maskClosable={false}
				style={{ height: '60%' }}
			>
				<Spin spinning={loading} delay={500}>
					<>
						<Divider style={{ color: '#4096ff'}}>基本信息</Divider>
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
					</>
					<>
						<Divider style={{ color: '#4096ff'}}>职业技能</Divider>
						<Space
							direction="vertical"
							size="large"
							align="center"
							style={{ width: '100%' }}
						>
							<Empty
								image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
								imageStyle={{ height: 60 }}
								description={
									<Button
										type="dashed"
										size="small"
										style={{ color: "#ff7a45"}}
										onClick={toggleWorkSkillOpen}
									>添加职业技能</Button>
								}
							></Empty>
						</Space>
					</>
					<>
						<Divider style={{ color: '#4096ff'}}>工作经验</Divider>
						<Space
							direction="vertical"
							size="large"
							align="center"
							style={{ width: '100%' }}
						>
							<Empty
								image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
								imageStyle={{ height: 60 }}
								description={
									<Button
										type="dashed"
										size="small"
										style={{ color: "#ff7a45"}}
										onClick={toggleWorkExperienceOpen}
									>添加工作经验</Button>
								}
							></Empty>
							
						</Space>
					</>
				</Spin>
			</Modal>
			<UpdateWorkExperience open={workExperienceOpen} onClose={toggleWorkExperienceOpen} />
			<UpdateWorkSkill open={workSkillOpen} onClose={toggleWorkSkillOpen} />
		</>
	)
}

export default UpdateWorker
