import axios from 'axios'


export const addFamilyProfile = async(data) =>{
    const response = await axios.post('http://127.0.0.1:8000/api/addFamilyProfile',data);
    return response.data
}
export const getFamilyProfile = async ()=>{

    const response = await axios.get('http://127.0.0.1:8000/api/getFamilyProfile');
    return response.data
}