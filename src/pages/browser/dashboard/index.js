import React from 'react';
import {Breadcrumb, Card} from 'antd';


const Dashboard = () => {

  
  return (
    <div>
      <Breadcrumb separator=">" style={{marginBottom: 8}}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{borderRadius: 10}}>
        <h1>Dashboard</h1>
      </Card>
    </div>
  )
}

export default Dashboard;