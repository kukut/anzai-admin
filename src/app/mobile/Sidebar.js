import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Popup, List} from 'antd-mobile';
import {ApartmentOutlined, BranchesOutlined, CalculatorOutlined, ClearOutlined} from '@ant-design/icons';


const Sidebar = ({visible, setVisible}) => {
    
    const navigate = useNavigate(); 

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
            <List>
                <List.Item onClick={() => {
                    navigate("/menu-1")
                    setVisible(false)
                }}  prefix={<ApartmentOutlined />}>Menu 1</List.Item>
            </List>
            <List header="Grouped Menu">
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-2")
                    setVisible(false)
                }} prefix={<BranchesOutlined />}>Menu 2</List.Item>
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-3")
                    setVisible(false)
                }} prefix={<CalculatorOutlined />}>Menu 3</List.Item>
                <List.Item onClick={() => {
                    navigate("/group-menu/menu-4")
                    setVisible(false)
                }} prefix={<ClearOutlined />}>Menu 4</List.Item>
                
            </List>
            
        </Popup>
    )
}

export default Sidebar;