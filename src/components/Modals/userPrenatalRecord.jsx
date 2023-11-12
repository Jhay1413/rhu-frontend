import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const UserPrenatalRecord = ({data}) => {
    return ( 
        <>
          <Form.Item label="Date of visit" className='col-span-2'>
              <Input name="date_of_visit" value={data.date_of_visit} readOnly/>
            </Form.Item>
            <Form.Item label="Next appointment date">
                <Input name="next_appointment_date" value={data.next_appointment_date} readOnly/>
            </Form.Item>
            <Form.Item label="Doctor Name" className='col-span-2'>
              <Input name="doctor_name"  value={data.doctor_name} readOnly/>
            </Form.Item>
            <Form.Item label="Gestational age" className='col-span-2'>
              <Input name="gestational_age" value={data.gestational_age} readOnly/>
            </Form.Item>
            <Form.Item label="Weight gain" className='col-span-2'>
              <Input name="weight_gain" value={data.weight_gain}  readOnly/>
            </Form.Item>
            <Form.Item label="Current Weight" >
              <Input name="current_weight" value = {data.current_weight} readOnly/>
            </Form.Item>
            <Form.Item label="Blood pressure" >
                <Input name="blood_pressure" value={data.blood_pressure}/>
            </Form.Item>
            <Form.Item label="Ultrasound result">
                <TextArea name="ultrasound_results" value={data.ultrasound_results} readOnly />
            </Form.Item>
            <Form.Item label="Laboratory test">
                <TextArea name="laboratory_tests" value={data.laboratory_tests}readOnly />
            </Form.Item>
            <Form.Item label="Medications">
                <TextArea name="medications" value={data.medications} readOnly/>
            </Form.Item>
            <Form.Item label="Complications">
                <TextArea name="complications" value={data.complications}readOnly/>
            </Form.Item>
           
        </>
        
     );
}
 
export default UserPrenatalRecord;