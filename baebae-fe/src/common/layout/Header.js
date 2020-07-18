import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { setOpenMenu } from 'store/modules/LayoutData';
import { useDispatch, useStore } from 'react-redux';
import { NavLink as Link } from "react-router-dom";
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import axios from 'axios';
import {LOGIN_URL, USER_LOCATION_URL} from 'common/api';
import DaumPostcode from 'react-daum-postcode';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: '#04BF8A'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white'
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [authInfo, setAutoInfo] = useState({
        login: false,
        info: null
    });
    const [addrInfo, setAddrInfo] = useState([]);
    const [postUseFlag, setPostUseFlag] = useState(false);
    

    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(
            setOpenMenu(true)
        )
    };

    const responseKaKao = (res) => {
        const userInfo = {
             "id": res.profile.id,
             "connected_at": res.profile.id,
             "properties": res.profile.properties,
             "kakao_account": res.kakao_account,
         }
         
         axios({
             method: 'post',
             url: LOGIN_URL,
             data: {
                 kakaoLoginParam : userInfo
             }
         })
         .then( res => {
             console.log('정상');
             checkUserLocation(res);
         })
         .catch( res => { 
             console.log('error!') 
         });
     }
     
     const checkUserLocation = (userInfo) => {
         if(userInfo.addr) {
             moveDealPage();
         } else {// 유저 최초로그인
             console.log('addr 없음');
             getUserLocation(userInfo);
         }
     }
 
     const getUserLocation = (userInfo) => {
         setPostUseFlag(true);
         setUserLocation(userInfo.id);
         /*
         if (navigator.geolocation) {
             //위치 정보를 얻기
             navigator.geolocation.getCurrentPosition (function(pos) {
                 console.log(pos.coords.latitude);     // 위도
                 console.log(pos.coords.longitude); // 경도
             });
         } else {
             alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
         }*/
     }
 
     const setUserLocation = (id) => {
         axios({
             method: 'post',
             url: USER_LOCATION_URL,
             data: {
                 id,
                 param: addrInfo
             }
         })
         .then( res => {
             moveDealPage();
         })
         .catch( res => { 
             console.log('error!') 
         });
     }
 
     const moveDealPage = () => {
 
     }
     const responseFail = (err) => {
         console.log('에러')
         console.dir(err);
     }
     
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
     
    return (
        <div className={classes.root}>
            { postUseFlag ? <DaumPostcode onComplete={handleComplete} autoClose width='100%' height='auto'/> : null}
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} component={Link} to={"/"}>
                        딜모아
                    </Typography>
                    {!authInfo['login'] && (
                        <AccountBtn
                            jsKey={'43d4b15342b031da9fc9351e80a7b95b'}// 딜모아 key값
                            onSuccess={responseKaKao}
                            onFailure={responseFail}
                            getProfile={true}
                        >
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </AccountBtn>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
const AccountBtn = styled(KaKaoLogin)`
border: transparent;
box-sizing: inherit;
background-color: transparent;
margin-right: -20px;
color: white;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`
