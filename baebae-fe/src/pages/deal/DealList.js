import React, { useEffect, useState } from 'react';
import Paper from 'common/components/Paper';
import { DEALLIST_URL } from 'common/api';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import { Button, Grid, FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const listData1 = [
    { shop_name: '김밥 헤븐', menu_name: '수제돈까스', image_url: '/assets/image/food/pork.png', price: '8000', discount_rate: 7, discount_price: '7600', now_people: 3, limit_people: 10 },
    { shop_name: '김밥 헤븐', menu_name: '콩국수', image_url: '/assets/image/food/noodle.png', price: '7500', discount_rate: 4, discount_price: '7120', now_people: 3, limit_people: 10 },
];
const listData2 = [
    { shop_name: '대만 반점', menu_name: '짬뽕', image_url: '/assets/image/food/jjamppong.png', price: '7000', discount_rate: 8, discount_price: '6650', now_people: 3, limit_people: 10 },
    { shop_name: '대만 반점', menu_name: '짜장면', image_url: '/assets/image/food/jajangmyeon.png', price: '4000', discount_rate: 9, discount_price: '3500', now_people: 3, limit_people: 10 },
]

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    }
}));

const DealList = (props) => {
    const classes = useStyles();

    const [postUseFlag, setPostUseFlag] = useState(false);
    const [dealList, setDealList] = useState([]);
    const hname = props.match.params.hname;
    const [addrInfo, setAddrInfo] = useState({
        addressData: {
            hname: hname
        }
    });


    useEffect(() => {
        getDealList(hname);
    });

    const getDealList = (hname) => {
        axios({
            method: 'post',
            url: DEALLIST_URL,
            data: {
                hname
            }
        })
            .then((res) => {
                console.log('정상');
            })
            .catch((res) => {
                console.log('error!');
            });
    }

    const handleDealList = (storeData) => {
        props.history.push(`/dealinfo/`, storeData);
    }
    const handleOpenPost = () => {
        setPostUseFlag(true);
    }

    const handleComplete = (data) => {
        console.dir(data)
        setPostUseFlag(false);
        const addressData = {
            address: data.address,
            zonecode: data.zonecode,
            addressEnglish: data.addressEnglish,
            bname: data.bname,
            sido: data.sido,
            sigungu: data.sigungu,
            sigunguCode: data.sigunguCode,
            buildName: data.buildName,
            hname: data.bname,
            roadName: data.roadName,
            jibunAddress: data.jibunAddress
        }
        setAddrInfo({
            addressData: addressData
        })
        console.dir(addrInfo)
        //getDealList(data.hname);
    }

    return (
        <div>
            {/* {dealList && dealList.map(() => {
                <Paper key={idx} data={store} onClick={() => handleDealList(store.title)} />
            })} */}
            <Button variant="outlined" color="secondary" size="small" onClick={handleOpenPost} style={{ float: 'right' }}>주소변경</Button>

            {postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto' /> : null}
            <div>현재 주소 : {addrInfo.addressData.hname}</div>
            {/* <div>우편번호 : {addrInfo.zonecode}</div> */}
            <br />
            <hr />

            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <FormControl variant="outlined" className={classes.formControl} size="small" margin="dense">
                    <Select
                        // id="demo-simple-select-outlined"
                        value={"최신순"}
                    >
                        <MenuItem value={"최신순"}>최신순</MenuItem>
                        <MenuItem value={"거리순"}>거리순</MenuItem>
                        <MenuItem value={"인기순"}>인기순</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {!postUseFlag && addrInfo.addressData.hname === "대치1동" &&
                <>
                    {listData1.map((store, idx) => (
                        <Paper key={idx} data={store} onClick={() => handleDealList(store)} />
                    ))}
                </>
            }
            {!postUseFlag && addrInfo.addressData.hname !== "대치1동" &&
                <>
                    {listData2.map((store, idx) => (
                        <Paper key={idx} data={store} onClick={() => handleDealList(store)} />
                    ))}
                </>
            }
        </div>
    );
};

export default DealList;