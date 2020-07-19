import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import axios from 'axios';
import { LOGIN_URL, USER_LOCATION_URL } from 'common/api';
import DaumPostcode from 'react-daum-postcode';
import KakaoLogin from 'react-kakao-login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)'
    },
    centerImage: {
        width: '70%',
    },
    loginButton: {
        margin: theme.spacing(2),
        background: '#F1BB1B',
    }
}));

const Main = () => {
    const classes = useStyles();

    const [authInfo, setAutoInfo] = useState({
        login: false,
        info: null
    });
    const [addrInfo, setAddrInfo] = useState([]);
    const [postUseFlag, setPostUseFlag] = useState(false);

    const responseKaKao = (res) => {
        const userInfo = {
            id: res.profile.id,
            connected_at: res.profile.id,
            properties: res.profile.properties,
            kakao_account: res.kakao_account
        };

        axios({
            method: 'post',
            url: LOGIN_URL,
            data: {
                kakaoLoginParam: userInfo
            }
        }).then((res) => {
            console.log('정상');
            checkUserLocation(res);
        }).catch((res) => {
            console.log('error!');
            moveDealPage('대치 1동');
        });
    };

    /*
     const checkUserLocation = (userInfo) => {
         if(userInfo.addr) {
            moveDealPage(userInfo.addr.sigunguCode);
         } else {// 유저 최초로그인
             console.log('addr 없음');
             getUserLocation(userInfo);
         }
     }
  
    const getUserLocation = (userInfo) => {
      setPostUseFlag(true);
      setUserLocation(userInfo.id);
      if (navigator.geolocation) {
        //위치 정보를 얻기
        navigator.geolocation.getCurrentPosition(function (pos) {
          console.log(pos.coords.latitude); // 위도
          console.log(pos.coords.longitude); // 경도
        });
      } else {
        alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
      }
    };
  
    const setUserLocation = (id) => {
      axios({
        method: 'post',
        url: USER_LOCATION_URL,
        data: {
          id,
          param: addrInfo
        }
      })
        .then((res) => {
          moveDealPage(addrInfo.sigunguCode);
        })
        .catch((res) => {
          console.log('error!');
        });
    };
    */

    const checkUserLocation = (userInfo) => {
        if (userInfo.addr) {
            moveDealPage(userInfo.addr.sigunguCode);
        }
    };


    const moveDealPage = (sigunguCode) => {
        document.location.href = '/deallist/' + sigunguCode;
    };

    const responseFail = (err) => {
        console.log('에러');
        console.dir(err);
    };

    const handleComplete = (data) => {
        setAddrInfo({
            address: data.address,
            zonecode: data.zonecode,
            addressEnglish: data.addressEnglish,
            bname: data.bname,
            sido: data.sido,
            sigungu: data.sigungu,
            sigunguCode: data.sigunguCode,
            buildName: data.buildName,
            hname: data.hname,
            roadName: data.roadName,
            jibunAddress: data.jibunAddress
        });
    };

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <img className={classes.centerImage} src="assets/image/dealmoa_korlogo.png" />
                <KaKaoBtn
                    jsKey={'43d4b15342b031da9fc9351e80a7b95b'} // 딜모아 key값
                    onSuccess={responseKaKao}
                    onFailure={responseFail}
                    getProfile={true}
                >
                    <Button className={classes.loginButton}>
                        카카오톡 로그인
                    </Button>
                </KaKaoBtn>
            </Grid>
        </div>
    );
};

const KaKaoBtn = styled(KaKaoLogin)`
    all: initial;
`

export default Main;