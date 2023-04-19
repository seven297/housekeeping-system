import { useNavigate } from 'react-router-dom'
import serverApi from '../../api'
import loginStore, { LoginActionType } from '../../store/login'
import './Login.css'

function Login() {
	const navigate = useNavigate()

	const loginConfirm = async () => {
		const result = await serverApi.post('/auth/login')
		console.log(result)
		// navigate('/project')
		// loginStore.dispatch({ type: LoginActionType.login })
	}

	return (
		<div style={{ height: '100%' }} className="flex-column-center-center">
			<div className="flex-column-center-space-around login-contain">
				<div>家政服务后台管理系统</div>
				<div className="login-input flex-center-center">
					<input type="text" name="" id="" placeholder="请输入账号" />
				</div>
				<div className="login-input flex-center-center">
					<input type="text" name="" id="" placeholder="请输入密码" />
				</div>
			</div>
			<div className="flex-center-center" style={{ marginTop: '50px' }}>
				<button className="login-input login" onClick={loginConfirm}>
					登录
				</button>
			</div>
		</div>
	)
}

export default Login
