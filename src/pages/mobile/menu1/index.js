import React from 'react';
import {NavBar} from 'antd-mobile';


const Menu1 = () => {
  return (
    <div style={{width:"100vw"}}>
      <NavBar
        back={null}
        style={{background: "#fff", position: 'fixed', top: 0, height: 45, width: '100vw'}}
      >
        Menu 1
      </NavBar>
      <div style={{marginTop: 45, padding: '10px 10px 50px'}}>
        <p>Content First</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content Last</p>
      </div>
      
    </div>
  )
}

export default Menu1;