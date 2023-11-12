import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const UserImmunizationRecord = ({data}) => {
    return ( 
        <>
            <Form.Item label="Date of vaccination" className='col-span-2'>
                  <Input name="date_of_vaccination" value={data.date_of_vaccination} readOnly/>
                </Form.Item>
                <Form.Item label="Next Vaccination Date" >
                    <Input name="next_vaccination_date" value={data.next_vaccination_date} readOnly/>
                </Form.Item>
                <Form.Item label="Vaccine name"className='col-span-2'>
                  <Input name="vaccine_name"   value={data.vaccine_name}/>
                </Form.Item>
                <Form.Item label="Vaccine Manufacturer" className='col-span-2'>
                  <Input name="vaccine_manufacturer"  value={data.vaccine_manufacturer} readOnly/>
                </Form.Item>
                <Form.Item label="Vaccination Site" className='col-span-2'>
                  <Input name="vaccination_site"   value={data.vaccination_site} readOnly/>
                </Form.Item>
              
                <Form.Item label="Vaccination Notes" className="col-span-4">
                    <TextArea rows={3}  name="vaccination_notes"  value={data.vaccination_notes} readOnly/>
                </Form.Item>
        </>
     );
}
 
export default UserImmunizationRecord;