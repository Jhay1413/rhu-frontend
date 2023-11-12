import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addHouseholdApi, getHouseholdApi } from "../api/houseHoldRecordApi"

export const useHouseHolds = () => {
    return useQuery({queryKey:['households'],queryFn:getHouseholdApi})
}   
export const useAddHouseHold = () =>{
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addHouseholdApi,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({ queryKey: ['households'] });
            queryClient.setQueryData(['households'], (oldQueryData) => {
                return [...oldQueryData, data.data];
              });
        },
        onError: (error) => {
            console.error(error);
          },
    });
}
