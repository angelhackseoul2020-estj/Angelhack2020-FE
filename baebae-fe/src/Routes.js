import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Location from './pages/location/Location';
import Mypage from './pages/user/Mypage';
import KakaoSignUp from './pages/user/KakaoSignUp';
import SearchLocation from './pages/location/SearchLocation';

const Routes = () => {
    return (
        <Router>
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
            </Switch>
        </Router>
    );
};

export default Routes;