import { Space, Table, Tag,Button } from 'antd';
import { useState } from 'react';
import HouseHoldForm from '../components/Modals/addRecordModal';
import { useHouseHolds } from '../hooks/useHouseHolds';
import { useQueryClient } from '@tanstack/react-query';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>HR-{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Income',
    dataIndex: 'income',
    key: 'income',
  },
  {
    title: 'Contact',
    dataIndex: 'contact_number',
    key: 'contact_number',
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


const HouseHoldRecord = () => {
  const queryClient = useQueryClient();
  const [isModalOpen,setIsModalOpen] = useState(false);
  const households = queryClient.getQueryData(['households'])
    const onCancel = () =>{
        setIsModalOpen(false);
    }
    const onClose = () =>{
        setIsModalOpen(false);
    }

    return ( 
        <>
        <div className='space-y-4'>
          <h1 className='text-4xl'>Household Records</h1>
            <Button type="primary" className='bg-blue-500' onClick={()=>setIsModalOpen(!isModalOpen)}>Add Record</Button>
            <Table columns={columns}   dataSource={households?.map(data => ({ ...data, key: data.id }))} />

            <HouseHoldForm isModalOpen={isModalOpen} onOk={onClose} onCancel={onCancel}/>
        </div>
        
        </>
       
     );
}
 
export default HouseHoldRecord;