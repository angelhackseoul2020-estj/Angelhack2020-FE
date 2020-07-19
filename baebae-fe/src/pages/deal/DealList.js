import React, {useEffect, useState} from 'react';
import Paper from 'common/components/Paper';
import { DEALLIST_URL } from 'common/api';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import { Button } from "@material-ui/core"
const listData = [
    { shop_name: '김밥 헤븐', menu_name : '수제돈까스', image_url : '/assets/image/food/pork.png', price: '8000', discount_rate: 5, discount_price : '7600', now_people: 3, limit_people: 10},
    { shop_name: '김밥 헤븐', menu_name : '콩국수', image_url : '/assets/image/food/noodle.png', price: '7500', discount_rate : 5, discount_price : '7120',now_people: 3, limit_people: 10},
    { shop_name: '대만 반점', menu_name : '짬뽕',  image_url : '/assets/image/food/jjamppong.png', price: '7000', discount_rate : 5, discount_price : '6650',now_people: 3, limit_people: 10},
    { shop_name: '대만 반점', menu_name : '짜장면',  image_url : '/assets/image/food/jajangmyeon.png', price: '6000', discount_rate : 5, discount_price : '5700',now_people: 3, limit_people: 10},
];

const DealList = (props) => {
    const [postUseFlag, setPostUseFlag] = useState(false);
    const [dealList, setDealList] = useState([]);
    const hname = props.match.params.hname;
    const [addrInfo, setAddrInfo] = useState({
        addressData: {
            hname:hname
        }
    });
    
    
    useEffect(() => {
        getDealList(hname);
    });

    const getDealList = (hname) =>{
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

    const handleDealList = (id) => {
        props.history.push(`/dealinfo/${id}`);
    }
    const handleOpenPost = () => {
        setPostUseFlag(true);
    }

    const handleComplete = (data) => {
        setPostUseFlag(false);
        console.log(data.hname);
        const addressData = {
            address: data.address,
            zonecode: data.zonecode,
            addressEnglish: data.addressEnglish,
            bname: data.bname,
            sido: data.sido,
            sigungu: data.sigungu,
            sigunguCode: data.sigunguCode,
            buildName:data.buildName,
            hname:data.hname,
            roadName:data.roadName,
            jibunAddress:data.jibunAddress
        }
        setAddrInfo({
            addressData: addressData
        })
        
        //getDealList(data.hname);
    }
    
    return (
        <div>
            {/* {dealList && dealList.map(() => {
                <Paper key={idx} data={store} onClick={() => handleDealList(store.title)} />
            })} */}
            <Button variant="outlined" color="secondary" size="small" onClick={handleOpenPost} style={{float:'right'}}>주소변경</Button>
            
            { postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto'/> : null}
            <div>현재 주소 : {addrInfo.addressData.hname}</div>
            {/* <div>우편번호 : {addrInfo.zonecode}</div> */}
            <br/>
            <hr/>

            {!postUseFlag && 
            <>
            딜 리스트 
            {listData.map((store, idx) => (
                <Paper key={idx} data={store} onClick={() => handleDealList(store)} />
            ))}
            </>
            }
        </div>
    );
};

export default DealList;