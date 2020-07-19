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
    const { shop_name, menu_name, image_url, price, discount_rate, discount_price, now_people, limit_people} = data;
    return (
        <Paper className={classes.root} onClick={onClick}>
            <Typography variant="h6" color="primary" gutterBottom>
                {shop_name}
            </Typography>
        <Typography variant="body1">{menu_name}
            <span style={{float: 'right', color:'red', fontWeight:'900', fontSize:'18px', lineHeight:'18px'}}>
                {discount_price}
                <span style={{float: 'right', color:'#808080', fontSize:'15px',fontWeight:'400', textDecoration:'line-through',lineHeight:'18px'}}>({price})</span>
            </span>
            </Typography>
            <Typography variant="body2" style={{float:'right'}}><span>인원 : {now_people} / {limit_people}</span></Typography>
            <br/>
        </Paper>
    );
}
