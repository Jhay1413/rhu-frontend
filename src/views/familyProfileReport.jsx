import { useQueryClient } from '@tanstack/react-query';
import '../components/css/style.css'

const FamilyProfileReport = () => {
    const queryClient =useQueryClient();
    const householdWithRelation =queryClient.getQueryData(['householdsWithRelation']);

        console.log(householdWithRelation);
    return ( 
      
        <table className="table" >
        <thead>
    <tr>
      <th className="th" rowSpan="3">HH No.</th>
      <th className="th" rowSpan="3">No. of HH Members</th>
      <th className="th" colSpan="4">No. of Children</th>
      <th className="th" rowSpan="3">Name of Household Head/Spouse</th>
      <th className="th" rowSpan="3">Occupation</th>
      <th className="th" rowSpan="3">Educational Attainment</th>
      <th className="th" colSpan="2">Check if:</th>
      <th className="th" colSpan="4">Check if:</th>
      <th className="th" colSpan="3">Fill in :</th>
      <th className="th" colSpan="2">Check if: </th>
    </tr>
    <tr>
    <th className="th" rowSpan="2">0- 6 mos.old</th>
    <th className="th" rowSpan="2">6-23 mos.old</th>
    <th className="th"  rowSpan="2"> 24-59 mos.old</th>
       <th className="th"  rowSpan="2">greater than 60 mos.old</th>
       <th className="th" rowSpan="2">Mother pregnant</th>
       <th className="th" rowSpan="2">Couple Practice Family Planning</th>
       <th className="th" colSpan="4">nursing less 6 mos.child</th>
       <th className="th" rowSpan="2">Toilet type (WS, OP, O, N)</th>
       <th className="th" rowSpan="2">Water Source (P, W, S)</th>
       <th className="th" rowSpan="2">Food Production Activity (VG, P/L, FP) </th>
       <th className="th" rowSpan="2">HH using iodized salt</th>
       <th className="th" rowSpan="2">HH using IFR</th>
    </tr>
    <tr>
       <th className="th">EBF</th>
       <th className="th">Mixed Feeding</th>
       <th className="th">Bottle-fed</th>
       <th className="th">Others</th>
     
    </tr>
  </thead>
        <tbody>
        {householdWithRelation.map(data => (
            <tr key={data?.id}>
                <td className="td">{data?.id}</td>
                 <td className="td">{data?.resident?.length}</td>
                 <td className="td">{data?.resident?.filter(resident => resident.age_in_months <= 6 ).length}</td>
                 <td className="td">{data?.resident?.filter(resident => resident.age_in_months >= 6 &&  resident.age_in_months <=23 ).length}</td>
                 <td className="td">{data?.resident?.filter(resident => resident.age_in_months >= 24 &&  resident.age_in_months <=59 ).length}</td>
                 <td className="td">{data?.resident?.filter(resident => resident.age_in_months >= 60 ).length}</td>
                 <td className="td">
                {data?.resident.map(resident => (
                    (resident.household_type === "mother" || resident.household_type === "father") && (
                    <span key={resident.id}>
                        <br/>{resident.first_name} {resident.last_name}
                    </span>
                    )
                ))}
                </td>
               
                 <td className="td">
                {data?.resident.map(resident => (
                    (resident.household_type === "mother" || resident.household_type === "father") && (
                    <span key={resident.id}>
                        <br/>{resident.occupation}
                    </span>
                    )
                ))}
                </td>
                 <td className="td">data? C1</td>
                 <td className="td">{data?.family_profile?.family_status == "Mother Pregnant" ?"/" : ""}</td>
                 <td className="td">{data?.family_profile?.family_status == "Family Planning" ?"/" : ""}</td>
                 <td className="td">{data?.family_profile?.type_of_feeding == "EBF" ? "/" : ""}</td>
                 <td className="td">{data?.family_profile?.type_of_feeding == "Mixed Feeding" ? "/" : ""}</td>
                 <td className="td">{data?.family_profile?.type_of_feeding == "Bottle-fed" ? "/" : ""}</td>
                 <td className="td">{data?.family_profile?.type_of_feeding == "Others" ? "/" : ""}</td>
                 <td className="td">{data?.family_profile?.toilet_type }</td>
                 <td className="td">{data?.family_profile?.water_source }</td>
                 <td className="td">{data?.family_profile?.food_prod_activity }</td>
                 <td className="td">{data?.family_profile?.household_using_iodized}</td>
                 <td className="td">{data?.family_profile?.household_using_ifr}</td>
            </tr>
        ))}
         
         
        </tbody>
      </table>
      
     );
}
 
export default FamilyProfileReport;