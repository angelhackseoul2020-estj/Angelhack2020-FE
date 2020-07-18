import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';

const SearchLocation = () => {
    const [addrInfo, setAddrInfo] = useState([]);
    const [postUseFlag, setPostUseFlag] = useState(false);
    

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
    
    const handleOpenPost = () => {
        setPostUseFlag(true);
    }

    const handleConfirm = () => {
        const detailAddress = document.querySelector('#detailAddress').value;
        console.log(detailAddress);
        // address post 전송
    }

    return (
        <div>
            <button type="button" onClick={handleOpenPost}><span>우편번호 찾기</span></button>
            { postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto'/> : null}
            
            <div>주소 : {addrInfo.address}</div>
            <div>우편번호 : {addrInfo.zonecode}</div>
            
            
            <input type="text" id="detailAddress" value={addrInfo.detailAddress}/>
            <button onClick={handleConfirm}>확인</button>
        </div>               
    )

}
// const getCurrentLocation = () => {
//     if (navigator.geolocation) {
//         //위치 정보를 얻기
//         navigator.geolocation.getCurrentPosition (function(pos) {
//             console.log(pos.coords.latitude);     // 위도
//             console.log(pos.coords.longitude); // 경도
//         });
//     } else {
//         alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
//     }
    
//     var callback = function(result, status) {
        
//         if(status === window.kakao.maps.services.Status.OK) {
//             var locate = result[0].address_name;
//             console.log('locate: ' + locate)
//         }
//     }    
// }


export default SearchLocation;