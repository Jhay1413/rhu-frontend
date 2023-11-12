
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addResidentdApi, getResidentApi } from "../api/residentApi";


export const useResident = () => {
    try {
        return useQuery({queryKey:['residents'],queryFn:getResidentApi});
        /*return useQuery({queryKey:['residents'],queryFn:getResidentApi})*/
    } catch (error) {
        console.log(error)
    }
  
}   
export const useAddResident = () =>{
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addResidentdApi,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({ queryKey: ['residents'] });
            queryClient.setQueryData(['residents'], (oldQueryData) => {
                return [...oldQueryData, data.data];
              });
        },
        onError: (error) => {
            console.error(error);
          },
    });
}
