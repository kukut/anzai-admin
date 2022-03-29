import React, {useState} from 'react';
import {Button} from 'antd-mobile';
import {UnorderedListOutline} from 'antd-mobile-icons';


import Sidebar from './Sidebar';
import Bottombar from './Bottombar';
import Content from './Content';


import './index.css';

const App = () => {

    const [visibleMenu, setVisibleMenu] = useState(false)


    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Sidebar visible={visibleMenu} setVisible={setVisibleMenu} /> 
           
            <Content />
            <Button 
                style={{
                    borderRadius: '50%', position: 'fixed', 
                    bottom: 60, width: 50, height: 50, fontSize: 20, 
                    right: 15, backgroundColor: '#576574', color: '#f1f2f6'
                }}
                onClick={() => setVisibleMenu(true)}
            >
                <UnorderedListOutline />
            </Button>
            <Bottombar />
        </div>
    );
}

export default App;