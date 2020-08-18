import React from 'react';
import Config from '../package.json';
import Home from './components/home/Index';
import Request from './components/request/Index';
import NotFound from './components/common/NotFound';

const Routes = [
    {
        path: '/' + Config.name,
        exact: true,
        content: () => <Home/>
    },
    {
        path: '/' + Config.name + '/request',
        exact: false,
        content: () => <Request/>
    },
    {
        path: '',
        exact: false,
        content: () => <NotFound/>
    }
]

export default Routes;