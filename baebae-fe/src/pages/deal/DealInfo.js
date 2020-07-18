import React from 'react';
import Accordion from "common/components/Accordion";
import Paper from "common/components/Paper";

const detailData = {
    title: '딜 정보',
    body: '딜 상세 내용'
}

const DealInfo = () => {
    return (
        <div>
            딜 상세정보
            <Paper data={detailData}/>
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