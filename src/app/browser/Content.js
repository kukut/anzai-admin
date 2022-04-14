import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom'



const Content = () => {

  const width = useSelector((state) => state.common.width);
  const collapseSidebar = useSelector(state => state.setting.collapseSidebar); 

  useEffect(() => {

    let dom = document.querySelector("#main-content");
    if(collapseSidebar){
      dom.setAttribute("class", "ant-layout-content content-sider-collapse")
    }else {
      dom.setAttribute("class", "ant-layout-content")
    }

  }, [collapseSidebar])

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