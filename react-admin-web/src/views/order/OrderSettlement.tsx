import { Input, Select, Space, Button, Table, Modal, Form, Radio } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'

function OrderDetail({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()
	const [settlementType, setSettlementType] = useState<any>()
	const [dispatchFormData, setDispatchFormData] = useState<any>()

	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'settlementType',
			label: '结算方式',
			formcomponent: (
				<Radio.Group onChange={() => {}} value={settlementType}>
					<Radio value={'及时结算'}>及时结算</Radio>
					<Radio value={'按月结算'}>按月结算</Radio>
				</Radio.Group>
			),
		},
		{
			field: 'payType',
			label: '支付方式',
			formcomponent: (
				<Select
					defaultActiveFirstOption
					style={{ width: 100 }}
					onChange={(value: string) => console.log(`认证类型：${value}`)}
					options={[
						{ value: 'weixin', label: '微信支付' },
						{ value: 'bank', label: '银行卡' },
						{ value: 'zhifub', label: '支付宝' },
						{ value: 'money', label: '现金' },
					]}
				/>
			),
		},
		{
			field: 'payMoney',
			label: '结算金额',
			formcomponent: <Input readOnly suffix="元" />,
		},
		{
			field: 'orderMoney',
			label: '订单金额',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'notPayMoney',
			label: '未结费用',
			formcomponent: <Input bordered={false} readOnly />,
		},
	])

	const submit = () => {}

	return (
		<>
			<Modal
				title="订单结算"
				open={open}
				onOk={onClose}
				onCancel={onClose}
				cancelText="取消"
				okText="确认"
				centered
				width={1000}
			>
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
			</Modal>
		</>
	)
}

export default OrderDetail
