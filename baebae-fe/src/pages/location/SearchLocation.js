import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';

const SearchLocation = (props) => {
    const [addrInfo, setAddrInfo] = useState([]);
    
    const handleComplete = (data) => {
        setAddrInfo({
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
        });
    }
    
   
    // const handleConfirm = () => {
    //     const detailAddress = document.querySelector('#detailAddress').value;
    //     console.log(detailAddress);
    //     // address post 전송
    // }

    return (
        <div>
            { props.postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto'/> : null}
            
            <div>주소 : {addrInfo.address}</div>
            <div>우편번호 : {addrInfo.zonecode}</div>
            {/* <input type="text" id="detailAddress" value={addrInfo.detailAddress}/>
            <button onClick={handleConfirm}>확인</button> */}
        </div>               
    )
}

export default SearchLocation;