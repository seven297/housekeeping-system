import React, { useState, useRef, useEffect } from 'react'
import { Input, Select, Space, Button, Table, Modal, Form } from 'antd'

function ConfirmDelete({
	open,
	toggleOpen,
	deleteProject,
}: {
	open: boolean
	toggleOpen: () => void
	deleteProject: () => void
}) {
	return (
		<Modal
			centered
			open={open}
			onOk={deleteProject}
			onCancel={toggleOpen}
			cancelText="取消"
			okText="确认"
		>
			<p>点击确定后将无法恢复，是否确认删除？</p>
		</Modal>
	)
}

export default ConfirmDelete
