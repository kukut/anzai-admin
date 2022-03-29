import React from 'react';
import {Layout} from 'antd';
import {useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom'



const Content = () => {

  const width = useSelector((state) => state.common.width);

  return (
    <Layout.Content id="main-content" 
      style={{ 
        marginLeft: width <= 768 ? 0 : null, 
        marginTop: 64, 
        overflow: 'initial', minHeight: 'calc(100vh - 64px)',
        padding: 25
      }}
    >
        <Outlet />
    </Layout.Content>
  )
}

export default Content;