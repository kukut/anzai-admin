import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import {TabBar} from 'antd-mobile';
import {UserCircleOutline, AppstoreOutline} from 'antd-mobile-icons';


const Bottombar = () => {
  const [activeKey, setActiveKey] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (value) => {
    if(value === "dashboard"){
      navigate("/dashboard")
    }else if(value === "user"){
      navigate("/profile")
    }else {
      navigate("/")
    }
  }

  useEffect(() => {
    if(location.pathname === "/dashboard"){
      setActiveKey("dashboard")
    } else if(location.pathname === "/profile"){
      setActiveKey("user")
    } else {
      setActiveKey("")
    }
  }, [location])

  
  return (
    <div style={{background: '#05595B', position: 'fixed', bottom: 0, width: '100vw'}}>
      <TabBar onChange={handleChange} activeKey={activeKey}>
        <TabBar.Item key="dashboard" icon={<AppstoreOutline />} title="Dashboard" />
        <TabBar.Item key="user" icon={<UserCircleOutline />} title="User" />
      </TabBar>
    </div>
    )
}

export default Bottombar;