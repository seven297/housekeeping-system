import { Input, Select, Space, Button, Table, Modal, Form, DatePicker } from 'antd'
import { useEffect, useRef, useState } from 'react'
import AppForm from '../../components/form/AppForm'
import { FormItemConfig } from '../../components/form/Form'

function OrderDetail({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [form] = Form.useForm()
	const [formData, setFormData] = useState<any>()
	const [dispatchFormData, setDispatchFormData] = useState<any>()

	const formConfig = useRef<FormItemConfig[]>([
		{
			field: 'orderId',
			label: '订单ID',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'payState',
			label: '支付状态',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'orderState',
			label: '订单状态',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'serviceProject',
			label: '服务项目',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'customerName',
			label: '客户名称',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'person',
			label: '联系人',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'phone',
			label: '联系方式',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'address',
			label: '所在区域',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'workerCount',
			label: '用工人数',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'workerTime',
			label: '用工工时',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'workerMoney',
			label: '用工工时费',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'payType',
			label: '结算方式',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'orderMoney',
			label: '订单金额',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'payMoney',
			label: '已支付',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'notPayMoney',
			label: '未结费用',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'remark',
			label: '备注内容',
			formcomponent: <Input bordered={false} readOnly />,
		},
	])

	const dispatchFormConfig = useRef<FormItemConfig[]>([
		{
			field: 'receiver',
			label: '接单人',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'receiverPhone',
			label: '联系电话',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'serviceProject',
			label: '服务项目',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'totalReceive',
			label: '累积接单',
			formcomponent: <Input bordered={false} readOnly />,
		},
		{
			field: 'customerName',
			label: '客户名称',
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
				<div style={{ textAlign: 'center', width: '100%' }}>订单详情</div>
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
				<div style={{ textAlign: 'center', width: '100%' }}>派单详情</div>
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

export default OrderDetail
