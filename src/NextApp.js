import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import {useMediaQuery, } from 'react-responsive';

import store from './redux/store';


// Import App and Pages in Browser Version
import BrowserApp from './app/browser/index';
import BrowserLogin from './pages/browser/login';
import BrowserDashboard from './pages/browser/dashboard';
import BrowserProfile from './pages/browser/profile';
import BrowserMenu1 from './pages/browser/menu1';
import BrowserMenu2 from './pages/browser/menu2';
import BrowserMenu3 from './pages/browser/menu3';
import BrowserMenu4 from './pages/browser/menu4';


// Import App and Pages in Browser Version
import MobileApp from './app/mobile/index';
import MobileLogin from './pages/mobile/login';
import MobileDashboard from './pages/mobile/dashboard';
import MobileProfile from './pages/mobile/profile';
import MobileMenu1 from './pages/mobile/menu1';
import MobileMenu2 from './pages/mobile/menu2';
import MobileMenu3 from './pages/mobile/menu3';
import MobileMenu4 from './pages/mobile/menu4';


const ProtectedRoute = ({children}) => {
    const authUser = useSelector((state) => state.auth.authUser)
    if(!authUser) {
        return <Navigate to="/login" replace />
    }
    return children;
}

const NextApp = () => {

    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 481});
        return isDesktop && children;
    }
    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 480});
        return isMobile && children;
    }

    return (
        <Provider store={store}>
            <Desktop>
                <Routes>
                    <Route path='/login' element={<BrowserLogin />} />
                    <Route path='/' element={<ProtectedRoute><BrowserApp /></ProtectedRoute>}>
                        <Route index element={<BrowserDashboard />} />
                        <Route path='/dashboard' element={<BrowserDashboard />} />
                        <Route path='/profile' element={<BrowserProfile />} />
                        <Route path='/menu-1' element={<BrowserMenu1 />} />
                        <Route path='/group-menu/menu-2' element={<BrowserMenu2 />} />
                        <Route path='/group-menu/menu-3' element={<BrowserMenu3 />} />
                        <Route path='/group-menu/menu-4' element={<BrowserMenu4 />} />
                    </Route>
                </Routes>
            </Desktop>
            <Mobile>
                <Routes>
                    <Route path='/login' element={<MobileLogin />} />
                    <Route path='/' element={<ProtectedRoute><MobileApp /></ProtectedRoute>}>
                        <Route index element={<MobileDashboard />} />
                        <Route path='/dashboard' element={<MobileDashboard />} />
                        <Route path='/profile' element={<MobileProfile />} />
                        <Route path='/menu-1' element={<MobileMenu1 />} />
                        <Route path='/group-menu/menu-2' element={<MobileMenu2 />} />
                        <Route path='/group-menu/menu-3' element={<MobileMenu3 />} />
                        <Route path='/group-menu/menu-4' element={<MobileMenu4 />} />
                    </Route>
                </Routes>
            </Mobile>
          
        </Provider>
    )
}


export default NextApp;