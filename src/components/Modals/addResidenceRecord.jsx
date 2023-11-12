import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

import { useAddResident } from '../../hooks/useResident';
import { useQueryClient } from '@tanstack/react-query';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const ResidentsProfileForm = ({isModalOpen,onOk,onCancel}) => {
  const queryClient = useQueryClient();
  const currentHousehold = queryClient.getQueryData(['households'])
 
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [residentData,setResidentData] = useState({
        first_name:"",
        last_name:"",
        age:"",
        address:"",
        contact_number:"",
        email:"",
        occupation:"",
        sex:"",
        household_type:"",
        household_id:"",

    });
    const { mutate } = useAddResident();
    const handleOnChange = (e) => {

      const {name,value} = e.target
      setResidentData(prevState => {
        return { ...prevState, [name]: value };
      });
      console.log(e.value)
    };
    const handleSelectOnChange = (value,{name}) =>{
      setResidentData(prevState => {
        return { ...prevState, [name]: value };
      });
    }
    const handleSave = async(e) =>{
      e.preventDefault();
      mutate(residentData, {
        onSuccess: (data) => {
          console.log(data);
          // Handle success, "data" is the server response
          setResidentData({
            first_name:"",
            last_name:"",
            age:"",
            address:"",
            contact_number:"",
            email:"",
            occupation:"",
            sex:"",
            household_type:"",
            household_id:"",
          });
          onCancel();

        },
        onError: (error) => {
          // Handle error
          console.error('Error adding household:', error);
        },
      });
    };
    return (
      <>
      <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel} width={'50%'} footer={false}>
        <Form
         
          layout="horizontal"
         
          className='max-w-full items-center justify-center'
        >
         
          <div className='grid grid-cols-4 gap-4 w-full'>
            <div className='col-span-4 py-4 text-2xl'>
              <h1>Household Record Form</h1>
              </div>
            <Form.Item label="First Name" className='col-span-2'>
              <Input name="first_name" value={residentData.first_name} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="Last name"className='col-span-2'>
              <Input name="last_name"  value={residentData.last_name} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="Address" className='col-span-2'>
              <Input name="address"  value={residentData.address} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="Contact Number" className='col-span-2'>
              <Input name="contact_number"  value={residentData.contact_number} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="Email" >
              <Input name="email"  value={residentData.email} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="occupation" >
              <Select name="occupation" onChange={(value) => handleSelectOnChange(value, { name: 'occupation' })}>
                <Select.Option value="employed">Employed</Select.Option>
                <Select.Option value="unemployed">Unemployed</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Age">
              <Input name="age"  value={residentData.age} onChange={handleOnChange}/>
            </Form.Item>
            <Form.Item label="sex">
              <Select  name="sex" onChange={(value) => handleSelectOnChange(value, { name: 'sex' })}>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Houshold Type" className='col-span-2'>
              <Select  name="household_type" onChange={(value) => handleSelectOnChange(value, { name: 'household_type' })}>
                <Select.Option value="father">Father</Select.Option>
                <Select.Option value="mother">Mother</Select.Option>
                <Select.Option value="son">Son</Select.Option>
                <Select.Option value="daughter">Daughter</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Household name" className='col-span-2'>
              <Select  name="household_id"  onChange={(value) => handleSelectOnChange(value, { name: 'household_id' })}>
                {currentHousehold?.map((data) => (
                  <Select.Option key={data.id} value={data.id}>
                    {data.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item>
            <Button className='bg-blue-500 text-white' onClick={handleSave}>SAVE</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
 
export default ResidentsProfileForm;