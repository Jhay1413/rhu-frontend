import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Individual Treatment', 'sub1', <UserOutlined />, [
    getItem('Patient Record', '3'),
    getItem('Household records', '4'),
    getItem('Residence Record', '5'),
  ]),
  getItem('Events', 'sub2', <TeamOutlined />, [
    getItem('Event Records', '6'), 
    getItem('Event Paticipants', '7'),
    getItem('SMS', '8')]),
  getItem('Accounts', 'sub3', <FileOutlined />,[
    getItem('User Account','9'),
  ]),
  getItem('Settings', 'sub4', <TeamOutlined />, [
    getItem('Archieve', '10'), 
    getItem('Documents', '11'),
  ])
];
const AdminSideBar = () => {
  const navigate = useNavigate();
    const handleOnClickMenu = (e) =>{
        if(e.key === '1'){
          navigate('/')
        }
       
        else if(e.key === '3'){
          navigate('/patientRecord')
        }
        else if(e.key === '4'){
          navigate('/householdRecord')
        }
        else if(e.key === '5'){
          navigate('/residenceRecord')
        }
        
    }
    return ( 
      <>
        <div className='w-full flex items-center text-white bg-black justify-center p-4'>
          <h1>RHU</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleOnClickMenu}/>

      </>
        
     
     );
}
 
export default AdminSideBar;