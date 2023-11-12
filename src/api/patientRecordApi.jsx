import axios from 'axios'


export const addNewPrenatalRecord = async(data) =>{
    const response = await axios.post('http://127.0.0.1:8000/api/addNewPrenatal',data);
    return response.data
}
export const addNewImmunizationRecord = async(data) =>{
    try {
        console.log(data);
        const response = await axios.post('http://127.0.0.1:8000/api/addNewImmunization',data);
      
        return response.data;
       
    } catch (error) {
        console.log(error);
    }
}

export const getPrenatalRecordApi = async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/getPrenatalRecord');

        return response.data.data
    } catch (error) {
        console.log(error)
    }

}
export const getImmunizationRecordApi = async () =>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/getImmunizationRecord');

        return response.data.data
    } catch (error) {
        console.log(error)
    }
}