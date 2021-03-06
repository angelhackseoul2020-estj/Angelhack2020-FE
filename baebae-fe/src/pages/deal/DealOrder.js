import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemIcon, Checkbox, Typography, IconButton } from "@material-ui/core";
import { AddIcon, AddCircle, RemoveCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
    },
    order: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        background: '#F37421'
    },
    dealTitle: {
        color: 'white',
        fontWeight: 'bolder'
    },
    addIcon: {
        marginRight: theme.spacing(2)
    }
}));

const DealOrder = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleOrder = () => {
        props.history.push("/order/complete");
    }

    return (
        <div>
            추가 주문
            <Paper variant="outlined" className={classes.paper}>
                <List className={classes.root}>
                    {['간짜장', '짜장면', '짬뽕', '볶음밥', '탕수육', '깐풍기', '군만두'].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={value} style={{ display: 'inline-block' }} role={undefined} dense button onClick={handleToggle(value)}>
                                <Typography>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    {value}
                                    <div style={{ float: 'right', marginTop: '10px' }} >
                                        <RemoveCircle />
                                        {1}
                                        <AddCircle />
                                    </div>
                                </Typography>
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>

            <Paper className={classes.order} onClick={handleOrder}>
                <Typography variant="h6" className={classes.dealTitle}>
                    주문하기
                </Typography>
            </Paper>
        </div>
    );
};

export default DealOrder;