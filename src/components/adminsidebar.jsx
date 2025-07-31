import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, UserSwitchOutlined, ProjectTwoTone, FileTextTwoTone, EditTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './adminsidebar.scss';


function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Trackr</h2>
      <Menu mode="vertical" theme="light">
        <Menu.Item icon={<DashboardOutlined />}><Link to="/">Dashboard</Link></Menu.Item>
        <Menu.Item icon={<UserSwitchOutlined />}><Link to="/">Manage Users</Link></Menu.Item>
        <Menu.Item icon={<ProjectTwoTone twoToneColor="#52c41a" />}><Link to="/">View Projects</Link></Menu.Item>
        <Menu.Item icon={<FileTextTwoTone twoToneColor="#faad14" />}><Link to="/">Reports</Link></Menu.Item>
        <Menu.Item icon={<EditTwoTone twoToneColor="#eb2f96" />}><Link to="/">Create Projects</Link></Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
