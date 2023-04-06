import { LikeFilled, PartitionOutlined, ProfileOutlined, ShoppingFilled, TeamOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function Navigation() {
  const navigate = useNavigate()

  const navTo = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    // TODO 动态关联routes
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['project']}
      onClick={navTo}
      items={[
        {
          key: 'project',
          icon: <PartitionOutlined />,
          label: '家政项目管理',
        },
        {
          key: 'worker',
          icon: <ShoppingFilled />,
          label: '家政人员管理 *',
        },
        {
          key: 'customer',
          icon: <TeamOutlined />,
          label: '客户管理*',
        },
        {
          key: 'order',
          icon: <ProfileOutlined />,
          label: '订单管理',
        },
        {
          key: 'comment',
          icon: <LikeFilled />,
          label: '客户评价管理*',
        },
      ]}
    />
  )
}

export default Navigation