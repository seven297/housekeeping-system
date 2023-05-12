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
} from 'antd'
import type { DatePickerProps } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'
import UpdateWorkExperience from './UpdateWorkExperience'
import UpdateWorkSkill from './UpdateWorkSkill'
import './Worker.css'

/**
 * [简单的表单组件使用]
 * TODO fix数据联动
 */
function UpdateWorker({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) {
	const [messageApi] = message.useMessage()
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
			rules: [{ required: true, message: '性别' }],
		},
		{
			field: 'birthday',
			label: '出生日期',
			formcomponent: <DatePicker onChange={onChangeDatePicker} />,
			rules: [{ required: true, message: '性别' }],
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
		},
		{
			field: 'workExperience',
			label: '工作经验',
			formcomponent: <Input />,
		},
		{
			field: 'serviceProject',
			label: '服务项目',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[{ value: '项目1', label: '项目1' }]}
				/>
			),
			rules: [{ required: true, message: '性别' }],
		},
		{
			field: 'serviceType',
			label: '服务分类',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[{ value: '项目1', label: '项目1' }]}
				/>
			),
			rules: [{ required: true, message: '性别' }],
		},
		{
			field: 'serviceName',
			label: '服务名称',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[{ value: '项目1', label: '项目1' }]}
				/>
			),
			rules: [{ required: true, message: '性别' }],
		},
		{
			field: 'serviceProject',
			label: '服务项目',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[{ value: '项目1', label: '项目1' }]}
				/>
			),
			rules: [{ required: true, message: '性别' }],
		},
		{
			field: 'area',
			label: '所在区域',
			formcomponent: <Cascader options={[]} onChange={() => {}} placeholder="Please select" />,
			rules: [{ required: true, message: '所在区域' }],
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
		},
		{
			field: 'balance',
			label: '账户余额',
			formcomponent: <Input />,
		},
		{
			field: 'orderCount',
			label: '累积接单',
			formcomponent: <Input />,
		},
		{
			field: 'idCard',
			label: '身份证号',
			formcomponent: <Input />,
		},
		{
			field: 'certificatePhoto',
			label: '身份证',
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
				// title="修改客户资料"
				open={open}
				onOk={() => form.submit()}
				// confirmLoading={confirmLoading}
				onCancel={toggleOpen}
				okText="确认"
				cancelText="取消"
				width="90%"
				maskClosable={false}
				style={{ height: '60%' }}
			>
				{/* <Space align="start" style={{ width: '100%', height: '100%' }}> */}
				<div style={{ display: 'flex', padding: 10 }}>
					<div style={{ width: 100, height: '100%', flexBasis: 100 }}>
						<Avatar size={64}>U</Avatar>
						<div>注册时间：2022-04-30 14:30</div>
					</div>
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
						<div style={{ textAlign: 'center', padding: 10 }}>
							职业技能{' '}
							<span className="add-skill-button" onClick={toggleWorkSkillOpen}>
								+添加技能
							</span>
						</div>
						<Space align="center" style={{ justifyContent: 'center' }}>
							<div style={{ textAlign: 'center' }}>
								<img style={{ height: 40, width: 80 }} src="../../assets/react.svg" alt="" />
								<div>2019-05-23获取</div>
							</div>
						</Space>
						<div style={{ textAlign: 'center', padding: 10 }}>
							工作经验
							<span className="add-skill-button" onClick={toggleWorkExperienceOpen}>
								+添加经验
							</span>
						</div>
						<div style={{ textAlign: 'center' }}>
							<Space>
								<span>2018.03~2020.04</span>
								<span>北京好运家政公司</span>
								<span>保姆/不住家/照顾老人</span>
								<Space>
									<Button onClick={toggleWorkExperienceOpen}>修改</Button>
									<Button>删除</Button>
								</Space>
							</Space>
						</div>
					</Layout>
				</div>

				{/* </Space> */}
			</Modal>
			<UpdateWorkExperience open={workExperienceOpen} onClose={toggleWorkExperienceOpen} />
			<UpdateWorkSkill open={workSkillOpen} onClose={toggleWorkSkillOpen} />
		</>
	)
}

export default UpdateWorker
