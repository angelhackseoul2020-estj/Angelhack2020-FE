import React, { useState, useEffect } from 'react';
import Accordion from "common/components/Accordion";
import Paper from "common/components/Paper";
import { Paper as MPaper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        background: '#F37421'
    },
    dealTitle: {
        color: 'white',
        fontWeight: 'bolder'
    }
}));

const DealInfo = (props) => {
    const classes = useStyles();

    const [detailData, setDetailData] = useState([]);

    useEffect(() => {
        setDetailData(props.history.location.state);
    }, []);

    const handleClickDeal = () => {
        props.history.push('/dealorder');
    }

    return (
        <div>
            <Paper data={detailData} />
            <MPaper className={classes.paper} onClick={handleClickDeal}>
                <Typography variant="h6" className={classes.dealTitle}>
                    딜 참여하기
                </Typography>
            </MPaper>
            <Accordion title="영업 정보" details={
                <dl>
                    <dt>운영시간</dt>
                    <dd>매일 오전 11:00 ~ 밤 12:00</dd>
                    <dt>전화번호</dt>
                    <dd>050-000-0000</dd>
                </dl>
            } />
            <Accordion title="사업자 정보" details={
                <dl>
                    <dt>대표자명</dt>
                    <dd>김아무개</dd>
                    <dt>상호명</dt>
                    <dd>이제스티제이 치킨</dd>
                </dl>
            } />
        </div>
    );
};

export default DealInfo;