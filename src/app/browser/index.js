import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {useDispatch} from 'react-redux';

import {setWidth} from '../../redux/common';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Content from './Content';

import './index.css';

const App = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        window.addEventListener('resize', () => {
            dispatch(setWidth(window.innerWidth));
        })
    }, [dispatch]);

    return (
        <Layout>
            <Topbar />
            <Sidebar />
            <Content />
        </Layout>
    );
}

export default App;