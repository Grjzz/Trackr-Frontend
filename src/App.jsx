
// import AdminLayout from './layout/adminlayout';
// import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/adminsidebar';
import Navbar from './components/adminNavbar';
import Dashboard from './Pages/Admindashboard';
import Manageusers from './Pages/manageusers';
import Projects from './Pages/projects';
import Reports from './Pages/reports';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout className="app" style={{ minHeight: "100vh" }}>
  <Sider collapsible>
    <Sidebar />
  </Sider>
  <Layout>
    <Header className="ant-layout-header">
      <Navbar />
    </Header>
    <Content className="ant-layout-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manageusers" element={<Manageusers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Content>
  </Layout>
</Layout>

    </Router>

  )
}

export default App

