import { useHouseHolds } from "../hooks/useHouseHolds";
import { useImmunization, usePatientPrenatal } from "../hooks/usePatient";
import { useResident } from "../hooks/useResident";

const QueryDataProvider = ({children}) => {
    
    const residents = useResident();
    const households = useHouseHolds();
    const prenatalData = usePatientPrenatal();
    const immunizationData = useImmunization();
    const dataSources = [
        residents,
        households,
        prenatalData,
        immunizationData
      ];
        
      const isLoading = dataSources.some((source) => source.isLoading);
      const isError = dataSources.some((source) => source.isError);
      const Error = dataSources.some((source) => source.error);
        
        
      if (isLoading){
        return null
      }
      else if(isError){
        console.log(Error)
      }
    
    return <>{children}</>
}
 
export default QueryDataProvider;