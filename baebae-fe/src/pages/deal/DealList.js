import React, {useEffect, useState} from 'react';
import Paper from 'common/components/Paper';
import { DEALLIST_URL } from 'common/api';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import { Button } from "@material-ui/core"

const listData = [
    { title: 'store1', body: '가게 정보1' }, 
    { title: 'store2', body: '~~' }
];

const DealList = (props) => {
    const [postUseFlag, setPostUseFlag] = useState(false);
    const [dealList, setDealList] = useState([]);
    const [addrInfo, setAddrInfo] = useState([]);
    const sigunguCode = props.match.params.sigunguCode;
    
    useEffect(() => {
        getDealList(sigunguCode);
    });

    const getDealList = (sigunguCode) =>{
        axios({
            method: 'post',
            url: DEALLIST_URL,
            data: {
                sigunguCode
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
        setAddrInfo(addressData);
        
        getDealList(data.sigunguCode);
    }
    
    return (
        <div>
            {/* {dealList && dealList.map(() => {
                <Paper key={idx} data={store} onClick={() => handleDealList(store.title)} />
            })} */}
            <Button variant="outlined" color="secondary" size="small" onClick={handleOpenPost} style={{float:'right'}}>주소변경</Button>
            
            { postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto'/> : null}
            <div>현재 주소 : {addrInfo.address}</div>
            {/* <div>우편번호 : {addrInfo.zonecode}</div> */}
            <br/>
            <hr/>

            {!postUseFlag && 
            <>
            딜 리스트 
            {listData.map((store, idx) => (
                <Paper key={idx} data={store} onClick={() => handleDealList(store.title)} />
            ))}
            </>
            }
        </div>
    );
};

export default DealList;