import React from 'react';
import Paper from 'common/components/Paper';

const DealList = (props) => {
    const handleDealList = (id) => {
        console.log(id);
        props.history.push(`/dealinfo/${id}`);
    }

    return (
        <div>
            딜 리스트
            {['store1', 'store2', 'store3'].map((store, idx) => (
                <Paper key={idx} data={store} onClick={() => handleDealList(store)} />
            ))}
        </div>
    );
};

export default DealList;