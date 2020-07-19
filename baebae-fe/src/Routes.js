import React from 'react';
import { Route, Switch } from 'react-router-dom';
// routes
import Main from './pages/main/Main';
import Mypage from './pages/user/Mypage';
import SearchLocation from './pages/location/SearchLocation';
import DealList from './pages/deal/DealList';
import DealInfo from './pages/deal/DealInfo';
import OrderComplete from './pages/order/OrderComplete';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path={"/"}
                component={Main}
            />
            <Route
                exact
                path={"/search/location"}
                component={SearchLocation}
            />
            <Route
                exact
                path={"/user/mypage"}
                component={Mypage}
            />
            <Route
                exact
                path={"/deallist/:sigunguCode"}
                component={DealList}
            />
            <Route
                exact
                path={"/dealinfo/:id"}
                component={DealInfo}
            />
            <Route
                exact
                path={"/order/complete"}
                component={OrderComplete}
            />
        </Switch>
    );
};

export default Routes;