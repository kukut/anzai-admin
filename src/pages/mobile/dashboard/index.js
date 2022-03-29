import React from 'react';
import {NavBar} from 'antd-mobile';


const Dashboard = () => {

  return (
    <div style={{width:"100vw"}}>
      <NavBar
        back={null}
        style={{background: "#fff"}}
      >
        Dashboard
      </NavBar>
    </div>
  )
}

export default Dashboard;