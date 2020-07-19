import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { setOpenMenu } from 'store/modules/LayoutData';
import { useDispatch } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    background: '#fafafa',
    borderBottom: '0.5px solid #7C7977'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white'
  },
  logo: {
    width: '85px',
    height: '35px',
    paddingTop: '10px'
  },
  icon: {
    color: '#7C7977'
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [authInfo, setAutoInfo] = useState({
    login: false,
    info: null
  });
  const [addrInfo, setAddrInfo] = useState([]);
  const [postUseFlag, setPostUseFlag] = useState(false);

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(setOpenMenu(true));
  };

  if (window.location.pathname === "/") {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton, classes.icon}
            color="primary"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title} component={Link} to={'/'}>
            <img className={classes.logo} src={'/assets/image/dealmoa_korlogo.png'} />
          </Typography>
          {!authInfo['login'] && (
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              className={classes.icon}
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const AccountBtn = styled(KaKaoLogin)`
  border: transparent;
  box-sizing: inherit;
  background-color: transparent;
  margin-right: -20px;
  color: white;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;