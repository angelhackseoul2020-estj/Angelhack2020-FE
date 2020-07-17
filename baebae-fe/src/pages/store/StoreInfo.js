import React from 'react';
import Accordion from "common/components/Accordion";

const StoreInfo = ({ storeNo }) => {
    console.log(storeNo);
    
    return (
        <div>
            <Accordion title="영업 정보" details={"영업 정보입니다."} />
        </div>
    );
};

export default StoreInfo;