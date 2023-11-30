import { Button, Table,Space } from "antd";
import FamilyProfileModal from "../components/Modals/addFamilyProfileModal";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";


const FamilyProfile = () =>{
  const queryClient =useQueryClient();
  const family_profile = queryClient.getQueryData(['family_profile']);
  console.log(family_profile);
   const [isModalOpen,setIsModalOpen] = useState(false);


   const onCancel = () =>{
    setIsModalOpen(false);
   }
   const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Household ID',
      dataIndex: 'household_id',
      key: 'household_id',
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: 'Family Status',
      dataIndex: 'family_status',
      key: 'family_status',
    },
    {
      title: 'type_of_feeding',
      dataIndex: 'type_of_feeding',
      key: 'type_of_feeding',
    },
    {
      title: 'Toilet Type',
      dataIndex: 'toilet_type',
      key: 'toilet_type',
    },
    {
        title: 'Water Source',
        dataIndex: 'water_source',
        key: 'water_source',
    },
    {
        title: 'Food Production Activity',
        dataIndex: 'food_prod_activity',
        key: 'food_prod_activity',
    },
    {
        title: 'Household using iodized',
        dataIndex: 'household_using_iodized',
        key: 'household_using_iodized',
    },
    {
        title: 'Household using IFR',
        dataIndex: 'household_using_ifr',
        key: 'household_using_ifr',
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
  
    return(
        <div className='space-y-4'>
          <h1 className='text-4xl'>Family Profile</h1>
            <Button type="primary" className='bg-blue-500' onClick={()=>setIsModalOpen(true)}>Add Record</Button>
            <Table columns={columns}  dataSource={family_profile.map(data => ({ ...data, key: data.id }))}/>
            <FamilyProfileModal isModalOpen={isModalOpen} onCancel={onCancel}/>
        </div>
        
    )
}
export default FamilyProfile;