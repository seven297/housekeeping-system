import { Menu } from "@mui/icons-material"
import { AppBar, Container, Toolbar } from "@mui/material"

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Menu sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <MenuOpen /> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header