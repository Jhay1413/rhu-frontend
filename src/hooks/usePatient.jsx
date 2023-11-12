import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewImmunizationRecord, addNewPrenatalRecord, getImmunizationRecordApi, getPrenatalRecordApi } from "../api/patientRecordApi";



export const useAddImmunizationRecord = () =>{
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewImmunizationRecord,
        onSuccess:(data)=>{
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
          },
    });
}
export const useAddPrenatalRecord = () =>{
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewPrenatalRecord,
        onSuccess:(data)=>{
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
          },
    });
}

export const usePatientPrenatal = () => {
    try {
        return useQuery({queryKey:['prenatalData'],queryFn:getPrenatalRecordApi});
        /*return useQuery({queryKey:['residents'],queryFn:getResidentApi})*/
    } catch (error) {
        console.log(error)
    }
  
}  
export const useImmunization = () =>{
    try {
        return useQuery({queryKey:['immunizationData'],queryFn:getImmunizationRecordApi});
        /*return useQuery({queryKey:['residents'],queryFn:getResidentApi})*/
    } catch (error) {
        console.log(error)
    }
}