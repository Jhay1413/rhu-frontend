
import { useState } from "react";
import AdminHeader from "../components/header";
import AdminSideBar from "../components/sideBar";
import AdminDashboard from "../views/dashboard";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    return ( 
      <div className="w-full">
          <Layout
        style={{
          minHeight: '100vh',
          minWidth:'100%'
        }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <AdminSideBar/>
          </Sider>
        <Layout>
            <Header
             style={{
                padding: 0,
                background: colorBgContainer,
              }}/>
               <Content
                    style={{
                        margin: '16px',
                    }}
                >
                    <div
                      className="p-4"
                    >
                        {children}
                    </div>
                   
                </Content>
                <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Rural Health Unit ©2023 Created by EVSU
        </Footer>
        </Layout>
        </Layout>
      </div>
        
     );
}
 
export default AdminLayout;