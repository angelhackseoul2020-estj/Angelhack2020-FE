import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
}));

export default ({ data }) => {
    const classes = useStyles();

    console.log(data);

    return (
        <Paper className={classes.root}>
            <Typography variant="h6" color="primary" gutterBottom>
                {data}
                </Typography>
            <Typography variant="body1">딜 정보</Typography>
        </Paper>
    );
}
