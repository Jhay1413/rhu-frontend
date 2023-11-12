import { Space, Table, Tag,Button, Select } from 'antd';
import PatientRecordModal from '../components/Modals/addPatientRecordModal';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import UserPrenatalRecord from '../components/Modals/userPrenatalRecord';
import UserInfoModal from '../components/Modals/userInfoModal';


const PatientRecord = () => {
  const queryClient =useQueryClient();
  const prenatalData = queryClient.getQueryData(['prenatalData']);
  const immunizationData = queryClient.getQueryData(['immunizationData']);

  const [tableState, setTableState] = useState("prenatal")
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [viewRecord,setViewRecord] = useState(false);
  const [selectedRecord,setSelectedRecord] = useState(null);

  const onCancel = () =>{
    setIsModalOpen(false);
}
const onClose = () =>{
    setIsModalOpen(false);
}
const onCloseViewRecord = ()=>{
  setViewRecord(false);
}
const handleSelectOnChange =(value)=>{
  setTableState(value);
}
const prenatal_columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'resident',
    key: 'resident.first_name',
    render:((resident) =>resident?.first_name)
  },
  {
    title: 'Appointment Type',
    dataIndex: 'appointment_type',
    key: 'appointment_type',
  },
  {
    title: 'Date of visit',
    key: 'date_of_visit',
    dataIndex: 'date_of_visit',
    
  },
  {
    title: 'Next appointment date',
    key: 'next_appointment_date',
    dataIndex: 'next_appointment_date',
  },

  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={()=>setViewRecordFunc(record)}>View Record</Button>
        <a>Delete</a>
      </Space>
    ),
  },
];

const immunizaion_columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'resident',
    key: 'resident.first_name',
    render:((resident) =>resident?.first_name)
  },
  {
    title: 'Appointment Type',
    dataIndex: 'appointment_type',
    key: 'appointment_type',
  },
  {
    title: 'Vaccination site',
    key: 'vaccination_sites',
    dataIndex: 'vaccination_site',
    
  },
  {
    title: 'Date of vaccination',
    key: 'date_of_vaccination',
    dataIndex: 'date_of_vaccination',
    
  },
  {
    title: 'next_vaccination_date',
    key: 'next_vaccination_date',
    dataIndex: 'next_vaccination_date',
  },

  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={()=>setViewRecordFunc(record)}>View Record</Button>
        <a>Delete</a>
      </Space>
    ),
  },
];

const setViewRecordFunc = (data) =>{
  setViewRecord(true);
  setSelectedRecord(data);
  console.log(data)
}
return ( 
    <>
    <div className='space-y-4 flex flex-col w-full'>
      <Select defaultValue="Select table" className='w-52' onChange={(value) => handleSelectOnChange(value)}>
        <Select.Option value="immunization">Immunization Table</Select.Option>
        <Select.Option value="prenatal">Pre-natal Table</Select.Option>
      </Select>
      {tableState == "prenatal" 
        ?
          <>  
            <h1 className='text-4xl'>Pre-natal Records</h1>
            <Button type="primary" className='bg-blue-500 w-52' onClick={()=>setIsModalOpen(!isModalOpen)}>Add Record</Button>
            <Table columns={prenatal_columns}  dataSource={prenatalData.map(data => ({ ...data, key: data.id }))} className='overflow-y-scroll'/>
          </>
        : 
          <>
            <h1 className='text-4xl'>Immunization Records</h1>
            <Button type="primary" className='bg-blue-500 w-52' onClick={()=>setIsModalOpen(!isModalOpen)}>Add Record</Button>
            <Table columns={immunizaion_columns} dataSource={immunizationData.map(data => ({ ...data, key: data.id }))}/>
          </>}
     
        <PatientRecordModal isModalOpen={isModalOpen} onOk={onClose} onCancel={onCancel}/>
        {selectedRecord ? <UserInfoModal isModalOpen={viewRecord} onCancel={onCloseViewRecord} data={selectedRecord}/> : ""}
        
    </div>
    
    </>
   
 );
}


 
export default PatientRecord;