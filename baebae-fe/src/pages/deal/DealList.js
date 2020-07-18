import React from 'react';
import Paper from 'common/components/Paper';

const listData = [
    { title: 'store1', body: '가게 정보1' }, 
    { title: 'store2', body: '~~' }
];

const DealList = (props) => {
    const handleDealList = (id) => {
        props.history.push(`/dealinfo/${id}`);
    }

    return (
        <div>
            딜 리스트
            {listData.map((store, idx) => (
                <Paper key={idx} data={store} onClick={() => handleDealList(store.title)} />
            ))}
        </div>
    );
};

export default DealList;