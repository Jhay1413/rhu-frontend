import { Space, Table, Tag,Button } from 'antd';
import { useState } from 'react';

import { useResident } from '../hooks/useResident';
import ResidentsProfileForm from '../components/Modals/addResidenceRecord';
import { useQueryClient } from '@tanstack/react-query';
const columns = [
  {
    title: 'First name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <a>{text}</a>,
  },
  
  {
    title: 'Last name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Contact',
    dataIndex: 'contact_number',
    key: 'contact_number',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Occupation',
    dataIndex: 'occupation',
    key: 'occupation',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Household Type',
    dataIndex: 'household_type',
    key: 'household_type',
  },
  {
    title: 'Household ID',
    dataIndex: 'household_id',
    key: 'household_id',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite </a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const ResidenceRecord = () => {
  const queryClient = useQueryClient();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const residents = queryClient.getQueryData(['residents'])
    console.log(residents)
    const onCancel = () =>{
        setIsModalOpen(false);
    }
    const onClose = () =>{
        setIsModalOpen(false);
    }
    return ( 
        <>
        <div className='space-y-4 w-full'>
          <h1 className='text-4xl w-full '>Residents Records</h1>
            <Button type="primary" className='bg-blue-500' onClick={()=>setIsModalOpen(!isModalOpen)}>Add Record</Button>
            <Table columns={columns}   dataSource={residents?.map(data => ({ ...data, key: data.id }))} />

            <ResidentsProfileForm isModalOpen={isModalOpen} onOk={onClose} onCancel={onCancel}/>
        </div>
        
        </>
       
     );
}
 
export default ResidenceRecord;