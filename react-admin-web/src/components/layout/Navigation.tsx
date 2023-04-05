import { DomainVerification, Groups, ListAlt, ThumbUp, Work } from "@mui/icons-material"
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"

function Navigation() {
  return (
    // TODO 动态关联routes
    <MenuList>
      <MenuItem>后台管理系统</MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DomainVerification fontSize="small" />
        </ListItemIcon>
        <ListItemText>家政项目管理</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Work fontSize="small" />
        </ListItemIcon>
        <ListItemText>家政人员管理</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Groups fontSize="small" />
        </ListItemIcon>
        <ListItemText>客户管理</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ListAlt fontSize="small" />
        </ListItemIcon>
        <ListItemText>订单管理</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ThumbUp fontSize="small" />
        </ListItemIcon>
        <ListItemText>客户评价管理</ListItemText>
      </MenuItem>
    </MenuList>
  )
}

export default Navigation