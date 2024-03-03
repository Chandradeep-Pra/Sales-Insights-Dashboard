import React, {useState} from 'react'

function Table({data,selectedMonth}) {
    let totalMonthData = []
    for(let i=0;i<data.length;i++){
        const dateString = data[i].dateOfSale
        const date = new Date(dateString);
        const month = date.getMonth();
        if(month === selectedMonth){
            totalMonthData.push(data[i])
        }
     }

     
  return (
    <div>
        
        <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Date of Sale</th>
            <th scope="col">Image</th>
            </tr>
        </thead>
        
        <tbody>
            {totalMonthData.map((transaction) => (
                <tr>
                    <th scope="row">{transaction.id}</th>
                    <td>{transaction.title}</td>
                    <td>{transaction.price}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.dateOfSale}</td>
                    <td><img src = {transaction.image} style={{width:'50px',height:'50px'}}/></td>
                </tr>
            ))}
        </tbody>
</table>
        
    </div>
  )
}

export default Table;



