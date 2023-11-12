import { useQueryClient } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, List, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useAddImmunizationRecord, useAddPrenatalRecord } from "../../hooks/usePatient";

const PatientRecordModal = ({isModalOpen,onOk,onCancel}) => {
    const queryClient = useQueryClient();
    const residents = queryClient.getQueryData(['residents'])
    

    const [currentPatient,setCurrentPatient] = useState({
        id:"",
        first_name:"",
        last_name:"",
        age:"",
        address:"",
        contact_number:"",
        email:"",
        occupation:"",
        sex:"",
        appointmentType:null
    })
    const [prenatalData,setPrenatalData] = useState({});
    const [immunizationData,setImmunizationData] = useState({});

    const [openSearchModal,setOpenSearchModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const { mutate:mutataePrenatal } = useAddPrenatalRecord();
    const { mutate:mutateImmunization } = useAddImmunizationRecord();
    const handlePrenatalDataChange = (value,name) =>{
      

        setPrenatalData(prevState => {
            return { ...prevState, [name]: value };
          });
    }
    const handleImmunizationDataChange =  (value,name) =>{

        setImmunizationData(prevState => {
            return { ...prevState, [name]: value };
          });
    }
    const handleSearch = value => {
      const results = residents.filter(item =>
        item.first_name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchTerm(value);
      setSearchResults(results);
    };
    const cancelSearchModal = () =>{
        setOpenSearchModal(false);
    }
    /*const { mutate } = useAddHouseHold();*/
    
    const handleSelectOnChange = (value,{name}) =>{
        setCurrentPatient(prevState => {
          return { ...prevState, [name]: value };
        });
      }
    const setCurrentPatientFunction = (data) =>{
        setCurrentPatient(data);
        setOpenSearchModal(false);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        var request_data = {};
        if(currentPatient.appointmentType == "Pre-natal"){
             request_data = {

                patient_id:currentPatient.id,
                appointment_type:currentPatient.appointmentType,
                ...prenatalData

            }
            console.log(request_data)
            mutataePrenatal(request_data, {
                onSuccess: (data) => {
                  onCancel();
                  setCurrentPatient({
                    id:"",
                    first_name:"",
                    last_name:"",
                    age:"",
                    address:"",
                    contact_number:"",
                    email:"",
                    occupation:"",
                    sex:"",
                    appointmentType:null
                  })
                  setPrenatalData({});
                  // Handle success, "data" is the server response
            
                },
                onError: (error) => {
                  // Handle error
                  console.error('Error adding household:', error);
                },
              });

        }
        else if(currentPatient.appointmentType == "Immunization"){
             request_data = {

                patient_id:currentPatient.id,
                appointment_type:currentPatient.appointmentType,
                ...immunizationData
            }
            console.log(request_data)
            mutateImmunization(request_data, {
                onSuccess: (data) => {
                    onCancel();
                    setCurrentPatient({
                      id:"",
                      first_name:"",
                      last_name:"",
                      age:"",
                      address:"",
                      contact_number:"",
                      email:"",
                      occupation:"",
                      sex:"",
                      appointmentType:null
                    })
                    setImmunizationData({});
                  // Handle success, "data" is the server response
            
                },
                onError: (error) => {
                  // Handle error
                  console.error('Error adding household:', error);
                },
              });
              

        }
       
        
        
      };
    return ( 
        <>
            <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel} width={'50%'}>
      <Form
         
         layout="vertical"
        
         className='max-w-full items-center justify-center'
       >
        
        <div className='grid grid-cols-4 gap-4 w-full'>
          <div className='col-span-4 py-4 text-2xl'>
            <h1>Household Record Form</h1>
          </div>
          <div className="col-span-4">
        
          <Button onClick={()=>setOpenSearchModal(true)} className='bg-blue-500 text-white' >Search Patient</Button>
          </div>
         
          <Form.Item label="First Name" className='col-span-2'>
              <Input name="first_name" value={currentPatient.first_name} readOnly/>
            </Form.Item>
            <Form.Item label="Last name"className='col-span-2'>
              <Input name="last_name"  value={currentPatient.last_name} readOnly/>
            </Form.Item>
            <Form.Item label="Address" className='col-span-2'>
              <Input name="address"  value={currentPatient.address} readOnly/>
            </Form.Item>
            <Form.Item label="Contact Number" className='col-span-2'>
              <Input name="contact_number"  value={currentPatient.contact_number} readOnly/>
            </Form.Item>
            <Form.Item label="Email" >
              <Input name="email"  value={currentPatient.email} readOnly/>
            </Form.Item>
            <Form.Item label="occupation" >
                <Input name="occupation"  value={currentPatient.occupation} readOnly/>
            </Form.Item>
            <Form.Item label="Age">
                <Input name="age"  value={currentPatient.age} readOnly/>
            </Form.Item>
            <Form.Item label="sex">
                <Input name="sex"  value={currentPatient.sex} readOnly/>
            </Form.Item>
            <Form.Item label="Appointment Type" className='col-span-2'>
              <Select  name="appointmentType" onChange={(value) => handleSelectOnChange(value, { name: 'appointmentType' })}>
                <Select.Option value="Pre-natal">Pre-natal</Select.Option>
                <Select.Option value="Immunization">Immunization</Select.Option>
              </Select>
            </Form.Item>
            <div className="col-span-4">
                <h1>FORMS</h1>
            </div>
            {currentPatient.appointmentType ? currentPatient.appointmentType == "Pre-natal" ? <PrenatalForm onChange={handlePrenatalDataChange}/>:<ImmunizationForm onChange={handleImmunizationDataChange}/> : ""}
        </div>
          <Form.Item>
            <Button className='bg-blue-500 text-white' onClick={handleSubmit} >SAVE</Button>
          </Form.Item>

        </Form>
      </Modal>
        <Modal open={openSearchModal} onCancel={cancelSearchModal}>
            <Input.Search
                placeholder="Search"
                value={searchTerm}
                onChange={e => handleSearch(e.target.value)}
            />
            <List
                dataSource={searchResults}
                renderItem={item => <List.Item className="hover:bg-gray-100 " onClick={() => setCurrentPatientFunction(item)}>{item.first_name} {item.last_name}</List.Item>}
            />

        </Modal>
        </>
     );
}

const PrenatalForm = ({onChange})=>{

    const handleDateOnchangeVisit = (date,dateString) =>{
        const name = "date_of_visit";
        onChange(dateString,name);
      
    } 
    const handleDateOnchangeNext = (date,dateString) =>{
        const name = "next_appointment_date";
        onChange(dateString,name);
      
    } 
    const handleInputChange = (e)=>{
        const {value,name} = e.target

        onChange(value,name)
    }
    return(

       <>
            <Form.Item label="Date of visit" className='col-span-2'>
              <DatePicker name="date_of_visit" onChange={handleDateOnchangeVisit}/>
            </Form.Item>
            <Form.Item label="Next appointment date">
                <DatePicker name="next_appointment_date" onChange={handleDateOnchangeNext}/>
            </Form.Item>
            <Form.Item label="Doctor Name" className='col-span-2'>
              <Input name="doctor_name"  onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Gestational age" className='col-span-2'>
              <Input name="gestational_age"  onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Weight gain" className='col-span-2'>
              <Input name="weight_gain"  onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Current Weight" >
              <Input name="current_weight" onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Blood pressure" >
                <Input name="blood_pressure"  onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Ultrasound result">
                <TextArea name="ultrasound_results"   onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Laboratory test">
                <TextArea name="laboratory_tests"  onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Medications">
                <TextArea name="medications"  onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item label="Complications">
                <TextArea name="complications"  onChange={handleInputChange}/>
            </Form.Item>
           
            
       </>
        
          
      

    )



}
const ImmunizationForm = ({onChange})=>{

    const handleDateOnchangeVaccinaton = (date,dateString) =>{
        const name = "date_of_vaccination";
        onChange(dateString,name);
      
    } 
    const handleDateOnchangeNext = (date,dateString) =>{
        const name = "next_vaccination_date";
        onChange(dateString,name);
      
    } 
    const handleInputChange = (e)=>{
        const {value,name} = e.target

        onChange(value,name)
    }
        return (
            <>
            <Form.Item label="Date of vaccination" className='col-span-2'>
                  <DatePicker name="date_of_vaccination" onChange={handleDateOnchangeVaccinaton}/>
                </Form.Item>
                <Form.Item label="Next Vaccination Date" >
                    <DatePicker name="next_vaccination_date" onChange={handleDateOnchangeNext} />
                </Form.Item>
                <Form.Item label="Vaccine name"className='col-span-2'>
                  <Input name="vaccine_name" onChange={handleInputChange}  />
                </Form.Item>
                <Form.Item label="Vaccine Manufacturer" className='col-span-2'>
                  <Input name="vaccine_manufacturer" onChange={handleInputChange}  />
                </Form.Item>
                <Form.Item label="Vaccination Site" className='col-span-2'>
                  <Input name="vaccination_site" onChange={handleInputChange}  />
                </Form.Item>
              
                <Form.Item label="Vaccination Notes" className="col-span-4">
                    <TextArea rows={3}  name="vaccination_notes" onChange={handleInputChange}  />
                </Form.Item>
          </>  
              

        )
        
    
    }
export default PatientRecordModal;