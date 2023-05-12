import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import useStorage, { StorageKey } from '../hooks/useStorage'
import Comment from '../views/comment/Comment'
import Customer from '../views/customer/Customer'
import Login from '../views/login/Login'
import Order from '../views/order/Order'
import Project from '../views/project/Project'
import Worker from '../views/worker/Worker'
import WorkDetail from '../views/worker/WorkDetail'

// eslint-disable-next-line react-hooks/rules-of-hooks
const loginStorage = useStorage(StorageKey.login)
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: loginStorage.get<boolean>() ? <Project /> : <Login />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/project',
				element: <Project />,
			},
			{
				path: '/customer',
				element: <Customer />,
			},
			{
				path: '/worker',
				element: <Worker />,
			},
			{
				path: '/workerDetail',
				element: <WorkDetail />,
			},
			{
				path: '/order',
				element: <Order />,
			},
			{
				path: '/comment',
				element: <Comment />,
			},
		],
	},
])

export default router
