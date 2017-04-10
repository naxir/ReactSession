import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import UsersLogs from '../components/Dashboard';

const Routes = () => {
    return (
        <Provider store={createStore(reducer,applyMiddleware(thunk))}>
            <Router history={browserHistory}>
                <Route  path="/" component={LoginForm} />
                    <Route path="/Login" component={LoginForm} />
                    <Route path="/Register" component={RegisterForm} />
                    <Route path="/Dashboard" component={UsersLogs} />
            </Router>
        </Provider>
    );
}

export default Routes; 
 