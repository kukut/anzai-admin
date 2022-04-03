import React, {useEffect} from 'react';
import {Layout, Menu, Drawer} from 'antd';
import {DashboardOutlined, ApartmentOutlined, RadarChartOutlined, BranchesOutlined, CalculatorOutlined, ClearOutlined} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setOpenDrawerSidebar} from '../../redux/setting'


const Sidebar = () => {
    const width = useSelector((state) => state.common.width);
    const {openDrawerSidebar, collapseSidebar} = useSelector(state => state.setting);

    const dispatch = useDispatch()
    const location = useLocation();
    const pathname = location.pathname.substr(1).split("/")

    const handleClose = () => {
        dispatch(setOpenDrawerSidebar(false))
    }

    let selectedSubmenu = [];
    let selectedMenu = []
    if(pathname.length >= 2){
        selectedSubmenu.push(`/${pathname[0]}`)
        selectedMenu.push(`/${pathname[0]}/${pathname[1]}`)
    }else {
        selectedMenu.push(`/${pathname[0]}`)
    }

    useEffect(() => {
 
    }, [collapseSidebar])

    const menu = (
        <Menu 
            theme='dark' mode='inline'
            defaultOpenKeys={selectedSubmenu} 
            selectedKeys={selectedMenu}

        >
            <Menu.Item key='/dashboard' icon={<DashboardOutlined />} onClick={handleClose}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key='/menu-1' icon={<ApartmentOutlined />} onClick={handleClose}>
                <Link to="/menu-1">Menu 1</Link>
            </Menu.Item>
            <Menu.SubMenu key='/group-menu' title='Grouped Menu' icon={<RadarChartOutlined />}>
                <Menu.Item key='/group-menu/menu-2' icon={<BranchesOutlined />} onClick={handleClose}>
                    <Link to="/group-menu/menu-2">Menu 2</Link>
                </Menu.Item>
                <Menu.Item key='/group-menu/menu-3' icon={<CalculatorOutlined />} onClick={handleClose}>
                    <Link to="/group-menu/menu-3">Menu 3</Link>
                </Menu.Item>
                <Menu.Item key='/group-menu/menu-4' icon={<ClearOutlined />} onClick={handleClose}>
                    <Link to="/group-menu/menu-4">Menu 4</Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
    
    return (
        <>

            {
                width > 768 ? (
                    <Layout.Sider
                        style={{
                            overflow: 'auto',
                            height: 'calc(100vh - 64px)',
                            position: 'fixed',
                            left: 0,
                            top: 64,
                            bottom: 0,
                            zIndex: 9,
                        }}
                        trigger={null}
                        collapsible
                        collapsed={collapseSidebar}
                    >
                    {menu}
                    </Layout.Sider>
                ) : (
                    <Drawer placement="left" 
                        closable={false} 
                        onClose={handleClose} 
                        visible={openDrawerSidebar}
                        className="drawer-sidebar"
                        // style={{backgroundColor: '#000'}}
                    >
                        
                        {menu}
                    </Drawer>
                )
            }
        </>
        
        
    
        
  )
}

export default Sidebar;