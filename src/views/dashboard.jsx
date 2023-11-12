import { CategoryScale } from "chart.js";
import PopulationChart from "../components/charts/populationChart";
import { Chart } from "chart.js/auto";
import { Card, Col, Row } from 'antd';
import IllnessChart from "../components/charts/illnessChart";
import { useQueryClient } from "@tanstack/react-query";
Chart.register(CategoryScale);

const AdminDashboard = () => {

  const queryClient =useQueryClient();
    const residents = queryClient.getQueryData(['residents']);

    const households = queryClient.getQueryData(['households'])
    const population = residents.length;
    const family = households.length;
  const chartData= [
    { labels: '2010', value: 500000 },
     { labels: '2011', value: 1200000 },
     { labels: '2012', value: 800000 },
     { labels: '2013', value: 500000 },
     { labels: '2014', value: 200000 },
     { labels: '2015', value: 400000 },
     { labels: '2016', value: 500000 },
     { labels: '2017', value: 300000 },
     { labels: '2018', value: 500000 },
     { labels: '2019', value: 600000 },
     { labels: '2020', value: 700000 },
     { labels: '2021', value: 900000 },
     { labels: '2022', value: 800000 },

  ]
   
  const IllnessData = [
    { labels: 'Covid', value: 2000 },
    { labels: 'High Blood', value: 4000 },
    { labels: 'Dengue', value: 1500 },
    
    
  ]
  

    return ( 
        <>
          <div className="flex flex-col">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Population" className="text-4xl " bordered={false}>
                  {population}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="No. of family" className="text-4xl" bordered={false}>
                  {family}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Pre-school children population" className="text-4xl" bordered={false}>
                  10,000
                </Card>
              </Col>
            </Row>
            
            <div className="items-center justify-center bg-white mt-4 p-4">
                <PopulationChart data= {chartData}/>            
            </div>
          
          </div>
         
          
      
      
        </>
          
     );
}
 
export default AdminDashboard;