import React from 'react';
import { Route, Switch } from 'react-router-dom';
// routes
import Main from './pages/main/Main';
import Location from './pages/location/Location';
import Mypage from './pages/user/Mypage';
import KakaoSignUp from './pages/user/KakaoSignUp';
import SearchLocation from './pages/location/SearchLocation';
import DealList from './pages/deal/List';

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
                path={"/user/login"}
                component={KakaoSignUp}
            />
            <Route
                exact
                path={"/deallist"}
                component={DealList}
            />
        </Switch>
    );
};

export default Routes;