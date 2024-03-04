import React,{useState,useEffect} from 'react'

function Header({onMonthChange}) {
    const months = [
    "Select Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth , setSelectedMonth] = useState(0);
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
    onMonthChange(parseInt(event.target.value));
  };
  return (
    <div>
        <h1 className='dispaly-1'>Selected Month : <span className='text-muted display-4'>{months[selectedMonth]}</span></h1>
        <nav className='navbar navbar-expand-lg bg-warning'>
            <div className='container-fluid'>
                <select className='form-select form-select-lg' aria-label=".form-select-lg example" name='Select Month' style={{width:"fit-content"}} value={selectedMonth} onChange={handleMonthChange}>
                    {months.map((month,index) => (
                        <option key={index} value={index}>{month}</option>
                    ))}
                </select>
            </div>
        </nav>
        
    </div>
  )
}

export default Header
