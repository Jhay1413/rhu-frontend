import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AdminLayout from './layout/adminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './views/dashboard'
import PatientRecord from './views/patientRecord'
import HouseHoldRecord from './views/houseHoldRecord'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ResidenceRecord from './views/residenceRecord'
import QueryDataProvider from './Queryprovider/QueryProvider'

function App() {
  const queryClient = new QueryClient()
  const [count, setCount] = useState(0)

  return (
    <>
     <QueryClientProvider client={queryClient}>
      <AdminLayout>
        <QueryDataProvider>
          <Routes>
              <Route path="/" element={<AdminDashboard/>}/>
              <Route path="/patientRecord" element={<PatientRecord/>}/>
              <Route path="/householdRecord" element={<HouseHoldRecord/>}/>
              <Route path="/residenceRecord" element={<ResidenceRecord/>}/>
            </Routes>
        </QueryDataProvider>
        </AdminLayout>
     </QueryClientProvider>
      
    
   
     
   
    
    </>
  )
}

export default App
