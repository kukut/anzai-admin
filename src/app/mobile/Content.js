import React from 'react';
import {Outlet} from 'react-router-dom'


const Content = () => {
  return (
    <div style={{background: "#F0F2F5", maxHeight: 'calc(100vh - 50px)', minHeight: 'calc(100vh - 50px)', overflow: 'scroll'}}>
        <Outlet />
    </div>
  )
}

export default Content;