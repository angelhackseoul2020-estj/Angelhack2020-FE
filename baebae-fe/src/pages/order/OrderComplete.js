import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  section1: {
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1),
    padding: theme.spacing(0),
    background: '#eeeeee'
  },
}));

const OrderComplete = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Typography gutterBottom variant="h4">
          주문 완료
          <Typography color="textSecondary" variant="h6">
            총 주문 금액 3,500원
          </Typography>
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          매장정보
        </Typography>
        <ListItem>
          <ListItemText primary={"매장명"} secondary={"김밥헤븐"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"수령시간"} secondary={"준비완료 후 수령 가능"} />
        </ListItem>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          주문내역
        </Typography>
        <ListItem>
          <ListItemText primary={"참치김밥"} secondary={"3,500 원"} />
        </ListItem>
      </div>
      <div className={classes.section3}>
        <Button color="primary">결제정보</Button>
        <List dense={true}>
          <ListItem>
            <b>승인일시&nbsp;</b>20200603
          </ListItem>
          <ListItem>
            <b>승인번호&nbsp;</b>123456789
          </ListItem>
          <ListItem>
            <b>결제수단&nbsp;</b>신용카드
          </ListItem>
        </List>
      </div>
    </div>
  );
};
export default OrderComplete;
