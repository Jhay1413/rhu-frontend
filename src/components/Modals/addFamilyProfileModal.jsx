import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Modal, Select } from "antd";
import { useState } from "react";
import { useAddFamilyProfile } from "../../hooks/useFamilyProfile";


const FamilyProfileModal = ({isModalOpen,onOk,onCancel}) =>{

    const queryClient =useQueryClient();
  const currentHousehold = queryClient.getQueryData(['households'])
    const {mutate} = useAddFamilyProfile();
    const [familiyData,setFamilyData] = useState({
        household_id : "",
        family_status: "",
        type_of_feeding: "",
        toilet_type:"",
        water_source:"",
        food_prod_activity:"",	
        household_using_iodized:"",
        household_using_ifr	:""
    })
    const handleSelectOnChange = (value,{name}) =>{
        setFamilyData(prevState =>{ 
            return {...prevState,[name]:value}
        });
    }
    const submit = async (e) =>{
        e.preventDefault();
        console.log(familiyData)
        mutate(familiyData,{
            onSuccess:(data)=>{
                setFamilyData({
                    household_id : "",
                    family_status: "",
                    type_of_feeding: "",
                    toilet_type:"",
                    water_source:"",
                    food_prod_activity:"",	
                    household_using_iodized:"",
                    household_using_ifr	:""
                });
                onCancel();
            },
            onError:(error)=>{
                console.error('Error adding family profile: ',error);
            },
        });
    };

    return (
        <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel} width={'50%'} footer={false}>
            <Form layout="vertical" className='max-w-full items-center justify-center'>
            <div className='grid grid-cols-4 gap-4 w-full'>
                <div className='col-span-4 py-4 text-2xl'>
                    <h1>Household Record Form</h1>
                </div>
                <Form.Item label="Select Household">
                    <Select  name="household_id"  onChange={(value) => handleSelectOnChange(value, { name: 'household_id' })}>
                    {currentHousehold?.map((data) => (
                    <Select.Option key={data.id} value={data.id}>
                        {data.name}
                    </Select.Option>
                    ))}
                </Select>
                </Form.Item>
                <Form.Item label="Family Status">
                    <Select name="family_status"  onChange={(value) => handleSelectOnChange(value, { name: 'family_status' })}>
                        <Select.Option value="Mother Pregnant">Mother Pregnant</Select.Option>
                        <Select.Option value="Family Planning">Family Planning</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Type of Feeding">
                    <Select name="type_of_feeding"  onChange={(value) => handleSelectOnChange(value, { name: 'type_of_feeding' })}>
                        <Select.Option value="EBF">EBF</Select.Option>
                        <Select.Option value="Mixed Feeding">Mixed Feeding</Select.Option>
                        <Select.Option value="Bottle-fed">Bottle-fed</Select.Option>
                        <Select.Option value="Others">Others</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Toilet Type">
                    <Select name="toilet_type" onChange={(value) => handleSelectOnChange(value, { name: 'toilet_type' })}>
                        <Select.Option value="WS">Water sealed</Select.Option>
                        <Select.Option value="OP">Open pit</Select.Option>
                        <Select.Option value="O">Others</Select.Option>
                        <Select.Option value="N">None</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Water Source">
                    <Select name="water_source" onChange={(value) => handleSelectOnChange(value, { name: 'water_source' })}>
                        <Select.Option value="P">Pipe</Select.Option>
                        <Select.Option value="W">Well</Select.Option>
                        <Select.Option value="S">Spring</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Food Production Activity">
                    <Select name="food_prod_activity" onChange={(value) => handleSelectOnChange(value, { name: 'food_prod_activity' })}>
                        <Select.Option value="VG">Vegetable garden</Select.Option>
                        <Select.Option value="P/L">Poultry/Livestock</Select.Option>
                        <Select.Option value="FP">Fishpond</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Household using Iodized">
                    <Select name="household_using_iodized" onChange={(value) => handleSelectOnChange(value, { name: 'household_using_iodized' })}>
                        <Select.Option value="Yes">Yes</Select.Option>
                        <Select.Option value="No">No</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Household using IFR">
                    <Select name="household_using_ifr" onChange={(value) => handleSelectOnChange(value, { name: 'household_using_ifr' })}>
                        <Select.Option value="Yes">Yes</Select.Option>
                        <Select.Option value="No">No</Select.Option>
                    </Select>
                </Form.Item>
            </div>
          <Form.Item>
            <Button className='bg-blue-500 text-white' onClick={submit}>SAVE</Button>
          </Form.Item>

            </Form>
        </Modal>
    )

}
export default FamilyProfileModal;