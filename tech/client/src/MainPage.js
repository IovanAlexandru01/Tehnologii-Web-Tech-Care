import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Sidebar from './Sidebar.js';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Box from '@mui/material/Box';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';


const MainPage = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  

   const options = {
    responsive: false
   }

   const [medicineName, setMedicineName] = useState();
   const [medicineData, setMedicineData] = useState();

  useEffect(() => {
    Axios.get('http://localhost:5000/dashboard').then((response) => {
      setMedicineName(response.data.names);
      setMedicineData(response.data.values);
      console.log(medicineName);
    });
  }, []);

  const data = {
    labels: medicineName,
    datasets: [{
        label: '# of Medicines',
        data: medicineData,
        backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)'
        ] 
     }]
   };

  
  return (
    <Box sx={{flexGrow: 3, flexDirection:'column'}}>
        <Sidebar />
        <Grid2 container sx={{justifyContent:'center'}}>
          <Grid2 xs={12} md={12} xl={12} sx={{position:'relative',minHeight:'70vh', minWidth:'50vw', maxWidth:'50vw', maxHeight:'70vh'}}>
            <Bar data={data} style={{display:'flex'}} />
          </Grid2>
        </Grid2>
    </Box>
  )
}

export default MainPage