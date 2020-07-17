import React from 'react';
import Accordion from "common/components/Accordion";

const list = () => {
    return (
        <div>
            딜 리스트
            <Accordion title="영업 정보" details={"영업 정보입니다."} />
        </div>
    );
};

export default list;