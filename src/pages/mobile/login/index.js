import React from 'react';
import {Card, Form, Input, Button, Toast} from 'antd-mobile';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Navigate} from 'react-router-dom';
import {login} from '../../../redux/auth'



const Login = () => {

  const authUser = useSelector(state => state.auth.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = (values) => {
    
    const {username, password} = values;
    if(username !== "user_demo"){
      return Toast.show({
        icon: 'fail',
        content: 'User Not Found!',
    
      });
    } else if(password !== "1234"){
      return Toast.show({
        icon: 'fail',
        content: 'Incorrect Password!',
    
      });
    } else {
      localStorage.setItem("auth-user", username);
      dispatch(login(username));
      
      Toast.show({
        icon: 'success',
        content: 'Login Success',
        duration: 1000,
        afterClose: () => {
          navigate("/dashboard", {replace: true});
        }
      })
      // notification.success({
      //   message: 'Login Success!',
      //   description:
      //     'Welcome to Anzai Admin!',
      // })
    }
    
  }

  if(authUser){
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', background: "#F0F2F5", height: "100vh", width: "100vw"}}>
      <Card style={{margin: '60px 8px 0px'}}>
        <img alt="logo" src="/logo-login.png" width="150px" style={{display: 'block', margin: '0px auto 15px'}}/>
        <Form 
          onFinish={handleLogin}
          footer={
            <Button block type='submit' color='primary' size='middle'>
              Login
            </Button>
          }
        >
          <Form.Item name="username" label="Username" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{required: true, message: 'Please input your password!'}]}>
            <Input type="password" />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login;