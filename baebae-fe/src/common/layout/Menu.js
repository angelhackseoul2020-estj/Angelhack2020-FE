import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { menuList } from './menuList.json';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LayoutAction from 'store/modules/LayoutData';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Menu = (props) => {
    const { layoutData, layoutAction } = props;
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(layoutData.openMenu);
    }, [layoutData.openMenu]);

    const closeDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        layoutAction.setOpenMenu(false);
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={closeDrawer()}
            onKeyDown={closeDrawer()}
        >
            <List>
                {menuList.map((menuItem, idx) => (
                    <ListItem button key={idx} component={Link} to={menuItem.url}>
                        <ListItemText primary={menuItem.text} style={{ color: menuItem.color }} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Drawer open={open} onClose={closeDrawer()}>
            {list()}
        </Drawer>
    );
};

export default connect(
    (state) => ({
        layoutData: state.LayoutData,
    }),
    (dispatch) => ({
        layoutAction: bindActionCreators(LayoutAction, dispatch),
    })
)(Menu);