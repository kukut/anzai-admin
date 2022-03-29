import React from 'react';
import {Outlet} from 'react-router-dom'


const Content = () => {
  return (
    <div style={{flex: 1, display: 'flex', background: "#F0F2F5"}}>
        <Outlet />
    </div>
  )
}

export default Content;