import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import {Popup, List} from 'antd-mobile';
import {useDispatch} from 'react-redux'
import {ApartmentOutlined, BranchesOutlined, CalculatorOutlined, ClearOutlined} from '@ant-design/icons';


const Sidebar = ({visible, setVisible}) => {
    
    const navigate = useNavigate(); 
    // const dispatch = useDispatch()
    const location = useLocation();
    const pathname = location.pathname.substr(1).split("/")

    
    let selectedMenu = ''
    if(pathname.length >= 2){
        selectedMenu = `/${pathname[0]}/${pathname[1]}`
    }else {
        selectedMenu = `/${pathname[0]}`
    }

    console.log({selectedMenu})

    return (
        <Popup
            visible={visible}
            onMaskClick={() => setVisible(false)}
            position='left'
            bodyStyle={{ width: '80vw', background: '#38AEA9', padding: 10, overflow: 'auto' }}
            className="menu-sidebar"
        >
            <div style={{height: 65, marginLeft: 5, marginTop: 15}}>
                <img alt="logo" src="/logo-sider.png" width="150px"/>
            </div>
            <List style={{"--active-background-color": "#E4EFC1"}}>
                <List.Item onClick={() => {
                    navigate("/menu-1")
                    setVisible(false)
                }} prefix={<ApartmentOutlined />}
                    arrow={selectedMenu !== '/menu-1' }
                    className={selectedMenu === '/menu-1' ? 'adm-list-item-active' : null}
                >Menu 1</List.Item>
            </List>
            <List header="Grouped Menu"  style={{"--active-background-color": "#E4EFC1"}}>
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-2")
                    setVisible(false)
                }} prefix={<BranchesOutlined />}
                    arrow={selectedMenu !== '/group-menu/menu-2' }
                    className={selectedMenu === '/group-menu/menu-2' ? 'adm-list-item-active' : null}
                >Menu 2</List.Item>
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-3")
                    setVisible(false)
                }} prefix={<CalculatorOutlined />}
                    arrow={selectedMenu !== '/group-menu/menu-3' }
                    className={selectedMenu === '/group-menu/menu-3' ? 'adm-list-item-active' : null}
                >Menu 3</List.Item>
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-4")
                    setVisible(false)
                }} prefix={<ClearOutlined />}
                    arrow={selectedMenu !== '/group-menu/menu-4' }
                    className={selectedMenu === '/group-menu/menu-4' ? 'adm-list-item-active' : null}
                >Menu 4</List.Item>
                
            </List>
            
        </Popup>
    )
}

export default Sidebar;