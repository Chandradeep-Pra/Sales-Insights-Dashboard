import React from 'react'

function Stats({data, selectedMonth}) {
    console.log(data);
    //console.log(selectedMonth);
    let totalPriceSold = 0
    let totalItemSold = 0
    let totalItemUnslod = 0
    let totalAmount = 0
    let totalPriceUnsold = 0
    for(let i=0;i<data.length;i++){
        const dateString = data[i].dateOfSale
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        totalAmount = totalAmount + data[i].price
        if(month === selectedMonth  && data[i].sold === true){
            totalPriceSold = totalPriceSold + (data[i].price);
            totalItemSold = totalItemSold + 1
            
        }
     }
    totalItemUnslod = data.length - totalItemSold
    totalPriceUnsold = totalAmount - totalPriceSold
    

   
    //console.log(totalSales);
     // Adding 1 because getMonth() returns zero-based month index
    
    
  return (
    <div>
        <h1>Total number of unsold items : {totalItemUnslod}</h1>
        <h1>Total amount of unsold items : {totalPriceUnsold}</h1>
        <h1>Total sale amount : {totalPriceSold}</h1>
        <h1>Total item sold : {totalItemSold}</h1>
        <h1></h1>
    </div>
  )
}

export default Stats