import React from "react"
import {useState} from "react"
import {AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery} from "@mui/material"
import {Menu, AccountCircle, Brightness4, Brightness7} from "@mui/icons-material"
import {Link} from "react-router"
import {useTheme} from "@mui/styles"

import useStyles from "./styles"

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width: 600px)")
  const theme = useTheme()
  const isAuthenticated = true
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" style={{outline: "none"}} onClick={() => {}} className={classes.menuButton}>
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ml: 1}} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}} to="/auth">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{width: 30, height: 30}} alt="Profile" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}></nav>
        {isMobile ? <Drawer open={mobileOpen}></Drawer> : <Drawer></Drawer>}
      </div>
    </>
  )
}

export default NavBar
