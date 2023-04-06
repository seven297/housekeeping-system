import { DomainVerification, Groups, ListAlt, ThumbUp, Work } from "@mui/icons-material"
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Navigation() {
  const navigate = useNavigate()

  const navTo = (path: string) => {
    navigate(path)
  }

  return (
    // TODO 动态关联routes
    <MenuList>
      <MenuItem>后台管理系统</MenuItem>
      <MenuItem onClick={() => navTo('project')}>
        <ListItemIcon>
          <DomainVerification fontSize="small" />
        </ListItemIcon>
        <ListItemText>家政项目管理</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navTo('worker')}>
        <ListItemIcon>
          <Work fontSize="small" />
        </ListItemIcon>
        <ListItemText>家政人员管理*</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navTo('customer')}>
        <ListItemIcon>
          <Groups fontSize="small" />
        </ListItemIcon>
        <ListItemText>客户管理*</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navTo('order')}>
        <ListItemIcon>
          <ListAlt fontSize="small" />
        </ListItemIcon>
        <ListItemText>订单管理</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navTo('comment')}>
        <ListItemIcon>
          <ThumbUp fontSize="small" />
        </ListItemIcon>
        <ListItemText>客户评价管理*</ListItemText>
      </MenuItem>
    </MenuList>
  )
}

export default Navigation