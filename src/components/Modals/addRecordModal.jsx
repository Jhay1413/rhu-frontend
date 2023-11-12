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
import { addHouseholdApi } from '../../api/houseHoldRecordApi';
import { useAddHouseHold } from '../../hooks/useHouseHolds';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const HouseHoldForm = ({isModalOpen,onOk,onCancel}) => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [householdData,setHouseHoldData] = useState({
        name:'',
        address:'',
        income:'',
        contact_number:''
    });
    const { mutate } = useAddHouseHold();
    const handleOnChange = (e) =>{
        const {value,name} = e.target;

        setHouseHoldData(prevState => {
            return { ...prevState, [name]: value };
          });
    }
    const handleSave = async(e) =>{
        e.preventDefault();
        mutate(householdData, {
          onSuccess: (data) => {
            console.log(data);
            // Handle success, "data" is the server response
            setHouseHoldData({
              name:'',
              address:'',
              income:'',
              contact_number:''
              // reset other fields
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
      <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel} width={'50%'}>
      <Form
         
         layout="horizontal"
        
         className='max-w-full items-center justify-center'
       >
        
        <div className='grid grid-cols-4 gap-4 w-full'>
          <div className='col-span-4 py-4 text-2xl'>
            <h1>Household Record Form</h1>
          </div>
          <Form.Item label="Household name" className='col-span-2'>
            <Input name="name" value={householdData.name} onChange={handleOnChange}/>
          </Form.Item>
          <Form.Item label="Address" className='col-span-2'>
            <Input name="address"  value={householdData.address} onChange={handleOnChange}/>
          </Form.Item>
          <Form.Item label="Contact Number" className='col-span-2'>
            <Input name="contact_number"  value={householdData.contact_number} onChange={handleOnChange}/>
          </Form.Item>
          <Form.Item label="Income" className='col-span-2'> 
            <Input name="income"  value={householdData.income} onChange={handleOnChange}/>
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
 
export default HouseHoldForm;