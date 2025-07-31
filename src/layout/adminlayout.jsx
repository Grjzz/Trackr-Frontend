import React from 'react';
import { Layout } from 'antd';
import AdminSidebar from '../components/adminsidebar';

const { Content } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout>
      <AdminSidebar />
      <Layout>
        <Content style={{ padding: '24px', minHeight: '100vh' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
