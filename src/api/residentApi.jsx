import axios from 'axios'


export const addResidentdApi = async(data) =>{
    const response = await axios.post('http://127.0.0.1:8000/api/addResident',data);
    return response.data
}
export const getResidentApi = async() =>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/getResidents');
      
        return response.data
    } catch (error) {
        
    }
}