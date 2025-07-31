import React from 'react';
import { Input, Badge } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import './admintopbar.scss'

function Navbar() {
  return (
    <div className="topbar">
      <Input.Search placeholder="search" style={{ width: 200 }} />
      <div className="icons">
        <Badge count={3}><BellOutlined /></Badge>
        <UserOutlined style={{ marginLeft: 16 }} />
      </div>
    </div>
  );
}

export default Navbar;
