import axios from 'axios'


export const addHouseholdApi = async(data) =>{
    const response = await axios.post('http://127.0.0.1:8000/api/addHousehold',data);
    return response.data
}
export const getHouseholdApi = async() =>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/getHouseholds');
      
        return response.data
    } catch (error) {
        console.log(error);
    }
}