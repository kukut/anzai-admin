import React from 'react';
import {Breadcrumb, Card} from 'antd';
import {Link} from 'react-router-dom'


const Menu4 = () => {
  return (
    <div>
      <Breadcrumb separator=">" style={{marginBottom: 8}}>
        <Breadcrumb.Item><Link to='/dashboard'>Dashboard</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Group Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Menu 4</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{borderRadius: 10}}>
        <h1>Menu 4</h1>
      </Card>
    </div>
  )
}

export default Menu4;