import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LayoutAction from 'store/modules/LayoutData';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Menu = ({ layoutData, layoutAction }) => {
    console.log(layoutData, layoutAction);
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
                {['오늘의 딜', '커뮤니티', '내 정보'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
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