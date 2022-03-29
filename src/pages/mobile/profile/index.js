import React from 'react';
import {NavBar, Form, Input, Card, Button, Toast} from 'antd-mobile';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {logout} from '../../../redux/auth'

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth-user");
    Toast.show({
      icon: 'success',
      content: 'Logout Success',
      duration: 1000,
      afterClose: () => {
        navigate("/login", {replace: true});
      }
    })
    // message.success("Logout Success", 1, () => {
    //   navigate("/login");
    // });
  }

  const right = (
    <Button onClick={handleLogout} size='mini' color='danger'>Logout</Button>
  )
  return (
    <div style={{width:"100vw"}}>
      <NavBar
        back={null}
        right={right}
        style={{background: "#fff"}}
      >
        User
      </NavBar>
      <Card style={{margin: '25px 8px 0px'}}>
        <Form>
          <Form.Header>Profile</Form.Header>
          <Form.Item label="Username">
            <Input value="user_demo" />
          </Form.Item>
          <Form.Item label="Password">
            <Input value="1234" />
          </Form.Item>
        </Form>
      </Card>
      
    </div>
  )
}

export default Profile;