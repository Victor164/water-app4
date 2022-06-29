import React, { useState } from "react"
import './Menu.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import VVP from "./vvp/VVP";


const pages = ['Схема ВВП', 'Уведомления для судоводителей','Данные о фарватере','Гидротехнические сооружения'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Menu1 () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };  
  const [example, setExample] = useState("primary");

  return (
    <AppBar position="static">
      {/* <Container maxWidth="xl"> */}
      <Container maxWidth="100%">
        <Toolbar disableGutters>
           <Avatar href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src="/char2.png" />
          {/* <AdbIcon   /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            РИС РБ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            {/* <IconButton color="inherit" href='/vvp' >
            Схема ВВП
          </IconButton> */}
          <IconButton color="inherit" href='/table'>
           Уведомления для судоводителей
          </IconButton>
          <IconButton color="inherit" href='/gabarit'>
           Сроки навигации
          </IconButton>
          <IconButton color="inherit" href='/gidroteh'>
          Гидротехнические сооружения
          </IconButton>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Avatar  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} src="/char2.png" />
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            РИС РБ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* <IconButton color="inherit" href='/vvp' >
            Схема ВВП
          </IconButton> */}
          <IconButton color="inherit" href='/table'>
           Уведомления для судоводителей
          </IconButton>
          <IconButton color="inherit" href='/gabarit'>
            Сроки навигации
          </IconButton>
          <IconButton color="inherit" href='/gidroteh'>
          Гидротехнические сооружения
          </IconButton>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Войти">
              <IconButton href='/login' sx={{ p: 0 }}>
                <Avatar label="Войти"  src="/static/images/avatar/char2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Menu1;

// function Menu () {
    
// return ( <div>
// <div className="header">
//      <a href="/vvp">Схема ВВП</a>
//      <a href="/table">Уведомления для судоводителей</a>
//      <a href="/material">Данные о фарватере</a>
//      <a href="/gidroteh">Гидротехнические сооружения</a>
//      <a href="/login">Вход</a>
// </div>
// <div className="h">
//     <div className="im">
//     <a href="/"><img src="char2.png" alt="logo1" ></img></a>
//     </div>
// <details>
//     <summary>   
//         <span data-css-icon="down" className="m">Меню</span>
//     </summary>
//     <div id="open" className="dropdown-contentt">
//      <a href="/">Главная</a>
//      <a href="/vvp">Схема ВВП</a>
//      <a href="/table">Уведомления для судоводителей</a>
//      <a href="/material">Данные о фарватере</a>
//      <a href="/gidroteh">Гидротехнические сооружения</a>
//      <a href="/login">Вход</a>
//      </div>
//      </details>
// </div>
// </div>

// )
// }

// export default Menu;