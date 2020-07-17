import React from 'react';
import Paper from 'common/components/Paper';

const DealList = (props) => {
    console.log(props);

    return (
        <div>
            딜 리스트
            {['store1', 'store2', 'store3'].map(store => (
                <Paper data={store} onClick={() => ''}/>
            ))}
        </div>
    );
};

export default DealList;