import React from 'react';
import {Breadcrumb, Card} from 'antd';
import {Link} from 'react-router-dom';


const Menu2 = () => {
  return (
    <div>
      <Breadcrumb separator=">" style={{marginBottom: 8}}>
        <Breadcrumb.Item><Link to='/dashboard'>Dashboard</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Group Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Menu 2</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <h1>Menu 2</h1>
      </Card>
    </div>
  )
}

export default Menu2;