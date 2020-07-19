import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemIcon, Checkbox, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                {value}
                                <div style={{ float: 'right' }}>
                                    <button>-</button>
                                    {1}
                                    <button>+</button>
                                </div>
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