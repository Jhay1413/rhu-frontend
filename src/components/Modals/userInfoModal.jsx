import { Button, Form, Input, Modal, Select } from "antd";
import UserPrenatalRecord from "./userPrenatalRecord";
import UserImmunizationRecord from "./userImmunizationRecord";

const UserInfoModal = ({isModalOpen,onOk,onCancel,data}) => {
    console.log(data);
    return (
            <>
                <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel} width={'50%'} footer={false}>
                    <Form
         
                    layout="vertical"
                    
                    className='max-w-full items-center justify-center'
                    >
                    
                        <div className='grid grid-cols-4 gap-4 w-full'>
                            <div className='col-span-4 py-4 text-2xl'>
                                <h1>{data.resident.first_name} Pre-natal Record</h1>
                            </div>
                
                            <Form.Item label="First Name" className='col-span-2'>
                                <Input name="first_name"  value= {data.resident.first_name}readOnly/>
                                </Form.Item>
                                <Form.Item label="Last name"className='col-span-2'>
                                <Input name="last_name" value= {data.resident.last_name} readOnly/>
                                </Form.Item>
                                <Form.Item label="Address" className='col-span-2'>
                                <Input name="address"  value= {data.resident.address}readOnly/>
                                </Form.Item>
                                <Form.Item label="Contact Number" className='col-span-2'>
                                <Input name="contact_number"  value= {data.resident.contact_number} readOnly/>
                                </Form.Item>
                                <Form.Item label="Email" >
                                <Input name="email"  value= {data.resident.email} readOnly/>
                                </Form.Item>
                                <Form.Item label="occupation" >
                                    <Input name="occupation"  value= {data.resident.occupation} readOnly/>
                                </Form.Item>
                                <Form.Item label="Age">
                                    <Input name="age"  value= {data.resident.age} readOnly/>
                                </Form.Item>
                                <Form.Item label="sex">
                                    <Input name="sex"  value= {data.resident.sex}readOnly/>
                                </Form.Item>
                                {data.appointment_type == "Pre-natal" ? <UserPrenatalRecord data={data}/> : <UserImmunizationRecord data={data}/>}
                        </div>
                    </Form>

                </Modal>
        
            </> 
        );
}
 
export default UserInfoModal;