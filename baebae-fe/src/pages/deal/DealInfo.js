import React from 'react';
import Accordion from "common/components/Accordion";

const DealInfo = (props) => {
    return (
        <div>
            딜 상세정보
            <Accordion title="영업 정보" details={"영업 정보입니다."} />
        </div>
    );
};

export default DealInfo;