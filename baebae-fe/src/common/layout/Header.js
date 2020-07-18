import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { setOpenMenu } from 'store/modules/LayoutData';
import { useDispatch, useStore } from 'react-redux';
import { NavLink as Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: window.DEFAULT_COLOR
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white'
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = useState(true);

    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(
            setOpenMenu(true)
        )
    };

    const handleAccount = () => {
        // 계정 정보, go to page
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} component={Link} to={"/"}>
                        딜모아
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleAccount}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
