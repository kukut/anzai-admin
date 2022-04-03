import React from 'react';
import {Breadcrumb, Card, Form, Input} from 'antd';
import {Link} from 'react-router-dom'

const formItemLayout = {
  labelCol: {sm: {span: 4}, xs: {span: 24}},
  wrapperCol: {sm: {span: 12}, xs: {span: 24}}
}

const Profile = () => {
  return (
    <div>
      <Breadcrumb separator=">" style={{marginBottom: 8}}>
        <Breadcrumb.Item><Link to='/dashboard'>Dashboard</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{borderRadius: 10}}>
        <h1>Profile</h1>
        <Form initialValues={{username: "user_demo", password: "1234"}}>
          <Form.Item name="username" label="Username" {...formItemLayout}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" {...formItemLayout}>
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Profile;