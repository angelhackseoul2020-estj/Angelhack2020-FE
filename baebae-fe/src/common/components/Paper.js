import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
}));

export default ({ data, onClick }) => {
    const classes = useStyles();
    if(!data){
        return <></>;
    }
    const { title, body } = data;
    return (
        <Paper className={classes.root} onClick={onClick}>
            <Typography variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1">{body}</Typography>
        </Paper>
    );
}
