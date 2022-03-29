import React from 'react';
import {Row, Col, Form, Input, Button, Card, message, notification} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Navigate} from 'react-router-dom';
import {login} from '../../../redux/auth'

const formItemLayout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16}
}


const Login = () => {

  const authUser = useSelector(state => state.auth.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = (values) => {
    
    const {username, password} = values;
    if(username !== "user_demo"){
      return message.error("User Not Found!");
    } else if(password !== "1234"){
      return message.error("Incorrect Password!");
    } else {
      localStorage.setItem("auth-user", username);
      dispatch(login(username));
      navigate("/dashboard", {replace: true})
      notification.success({
        message: 'Login Success!',
        description:
          'Welcome to Anzai Admin!',
      })
    }
    
  }

  if(authUser){
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div>
      <Row justify="center" style={{marginTop: 150}}>
        <Col xs={20} sm={8}>
          <Card style={{border: '#4b4b4b solid 2px'}}>
            <img alt="logo" src="/logo-login.png" width="150px" style={{display: 'block', margin: '0 auto'}}/>
            <Form style={{marginTop: 20}} onFinish={handleLogin}>
              <Form.Item {...formItemLayout} label="Username" name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}  
              >
                <Input />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Password" name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Login;