import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Stats from './components/Stats'
import Table from './components/Table'
import BarChart from './components/BarChart';

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
  <div>
     <Header onMonthChange={handleMonthChange}/>
     <Stats data = {backendData} selectedMonth={selectedMonth}/>
     <Table data = {backendData} selectedMonth={selectedMonth}/>
     <BarChart data = {backendData}/>
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