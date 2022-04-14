import React from 'react';
import {Layout, Dropdown, Menu, Row, Col, message, Button} from 'antd'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {logout} from '../../redux/auth';
import {setOpenDrawerSidebar, setCollapseSidebar} from '../../redux/setting'




const Topbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.auth.authUser);
  const width = useSelector(state => state.common.width);
  const collapseSidebar = useSelector(state => state.setting.collapseSidebar); 

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth-user");
    message.success("Logout Success", 1, () => {
      navigate("/login");
    });

  }

  const handleOpenDrawerSidebar = () => {
    dispatch(setOpenDrawerSidebar(true))
  }

  const handleOpenSidebar = () => {
    dispatch(setCollapseSidebar(!collapseSidebar))
  }


  const menu = (
    <Menu style={{width: 150}}>
      <Menu.Item key="profile" onClick={() => navigate("/profile")}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header style={{background: '#05595B', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10, padding: 0}}>
        <Row>
          <Col flex="260px">
            {width <= 768 && (
              <Button onClick={handleOpenDrawerSidebar} icon={<MenuFoldOutlined />} style={{marginLeft: 18, marginTop: 15, float: 'left', backgroundColor: '#7ed6df', color: '#000'}}></Button>
            )}
            <div 
              style={{height: 65, marginLeft: width > 768 ? 70 : 20, float: 'left'}
            }>
              <img alt="logo" src="/logo-sider.png" width="100px"/>
            </div>
            {width > 768 && (
              <Button onClick={handleOpenSidebar} icon={collapseSidebar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} style={{marginLeft: 30, marginTop: 15, backgroundColor: '#7ed6df', color: '#000'}}></Button>
            )}
          </Col>
          <Col flex="auto">
            <Row justify="end">
              <Col span={12}></Col>
              <Col span={12}>
                {authUser &&(
                  <Dropdown overlay={menu} arrow={true} placement="bottom">
                    <a className="ant-dropdown-link" style={{fontSize: 16, color: '#FFFFF1', position: 'relative', float: 'right', paddingRight: 20}} onClick={e => e.preventDefault()}>
                      {authUser}
                    </a>
                  </Dropdown>
                )}
                
              </Col>

            </Row>
            
          </Col>
        </Row>
        
        
    </Layout.Header>
  )
}

export default Topbar;