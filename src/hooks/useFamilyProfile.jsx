import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addFamilyProfile, getFamilyProfile } from "../api/familyProfileApi"

export const useFamilyProfile = () => {
    return useQuery({queryKey:['family_profile'],queryFn:getFamilyProfile})
} 
export const useAddFamilyProfile = () =>{
    return useMutation({
        mutationFn:addFamilyProfile,
        onSuccess:(data)=>{
            console.log(data);
        },
        onError:(error)=>{
            console.error(error);
        },
    });
}
