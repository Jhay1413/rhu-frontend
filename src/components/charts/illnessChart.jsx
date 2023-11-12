import { Pie,Line } from 'react-chartjs-2';

const IllnessChart = ({data}) => {
    const dataForPieChart = {
        labels: data.map(item => item.labels),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: [
            '#FF6384', // City A
            '#36A2EB', // City B
            '#FFCE56', // City C
            // ...add more colors for additional data
          ],
          // ...additional dataset properties
        }],
      };
    return ( 
        <>
       <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Illness Distribution</h2>
      <Pie
        data={dataForPieChart}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Illness Chart"
            }
          }
        }}
      />
    </div>
    </>
     );
}
 
export default IllnessChart;