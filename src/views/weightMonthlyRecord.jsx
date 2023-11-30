import { useQueryClient } from "@tanstack/react-query";

const WeightMonthlyRecord = () => {
    const queryClient =useQueryClient();
    const immunizationData = queryClient.getQueryData(['immunizationData']);

    const infants = immunizationData.filter(person => person.resident.age_in_months <= 23);
    console.log(infants)
    return ( 
        <div>
           <table className="table " >
        <thead>
    <tr>
      <th className="th" rowSpan="2">HH No.</th>
      <th className="th" rowSpan="2">NAME OF CHILD</th>
      <th className="th" rowSpan="2">DATE OF BIRTH</th>
      <th className="th" colspan="3">Date of weighing</th>
      <th className="th" colspan="3">Date of weighing</th>
      <th className="th" colspan="3">Date of weighing</th>
      <th className="th" colspan="3">Date of weighing</th>
      <th className="th" colspan="3">Date of weighing</th>
      <th className="th" colspan="3">Date of weighing</th>
     
    </tr>
    <tr>
   
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    <th className="th" rowSpan="2">Age in months</th>
    <th className="th" rowSpan="2">Weight (Kgs.)</th>
    <th className="th" rowSpan="2">Weight Status</th>
    
     
    </tr>
   
  </thead>
        <tbody>
       
            <tr >
            </tr>
         
        </tbody>
      </table>
      
        </div>
     );
}
 
export default WeightMonthlyRecord;