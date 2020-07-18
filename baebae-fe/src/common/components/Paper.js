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
    return (
        <Paper className={classes.root} onClick={onClick}>
            <Typography variant="h6" color="primary" gutterBottom>
                {data}
                </Typography>
            <Typography variant="body1">딜 정보</Typography>
        </Paper>
    );
}
