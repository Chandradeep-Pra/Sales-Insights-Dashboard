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
    <div className="row g-3 justify-content-center">
      <div className="col-md-3 col-sm-6 text-center">
        <div className="card p-3 stats-box d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="fs-3 mb-0">{totalItemUnslod}</p>
            <p className="text-muted">Unsold Items</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="card p-3 stats-box d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="fs-3 mb-0">{totalPriceUnsold.toFixed(2)}</p>
            <p className="text-muted">Unsold Amount</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="card p-3 stats-box d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="fs-3 mb-0">{totalPriceSold.toFixed(2)}</p>
            <p className="text-muted">Total Sales</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
        <div className="card p-3 stats-box d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="fs-3 mb-0">{totalItemSold}</p>
            <p className="text-muted">Items Sold</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
