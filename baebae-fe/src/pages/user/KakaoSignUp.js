import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

const KakaoSignUp = () => {
    const [state, setState] = useState({'data' : 'kakao'});

    const responseKaKao = (res) => {
        this.setState({
            data: res
        })
    }
    const responseFail = (err) => {
        console.log('에러')
        console.dir(err);
    }

    return(
        <KaKaoBtn
            jsKey={'43d4b15342b031da9fc9351e80a7b95b'}// 딜모아 key값
            buttonText="카카오톡 로그인"
            onSuccess={responseKaKao}
            onFailure={responseFail}
            getProfile={true}
        />
    )
}
    
const StKaKaoLogin = styled.div`
    cursor: pointer;
`;

const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default KakaoSignUp;