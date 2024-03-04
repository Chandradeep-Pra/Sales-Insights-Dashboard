import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Stats from './components/Stats'
import Table from './components/Table'
import BarChart from './components/BarChart';
import ProfilePic from './components/ProfilePic';
import PieChart from './components/PieChart';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

function App() {
  const [backendData,setBackendData] = useState([{}]);
  const [selectedMonth,setSelectedMonth] = useState(0);
  const fetchData = async () => {
    const response = await fetch('/get');
    const data = await response.json();
    setBackendData(data);
    console.log(backendData);
  }
useEffect(()=>{
  fetchData();
},[]);

const handleMonthChange = (value)=>{
  setSelectedMonth(value);
}
return (
  <div className='container-fluid p-0'>
     <Header onMonthChange={handleMonthChange}/>
     <div className='row g-2'>
      <div className='col-md-4'>
        <ProfilePic />
      </div>
      <div className='col-md-8'>
        <Stats data = {backendData} selectedMonth={selectedMonth}/>
      </div>
      </div>
      <div className="row g-2">
        <div className="col-md-6">
          <BarChart data={backendData} />
        </div>
        <div className="col-md-6">
          <PieChart data={backendData} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Table data={backendData} selectedMonth={selectedMonth} />
        </div>
      </div>
  </div>
)
}
  // useEffect(()=>{
  //   fetch("/").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // },[])
   /* {(typeof backendData.title === 'undefined') ? (
          <p>Loading ...</p>
        ):(
          backendData.transactions.map((transaction,i)=> (
            <p key={i}>{transaction}</p>
          ))
        )} */


export default App
