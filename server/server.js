import express from 'express';

const app = express()

async function getData(){
    const response = await fetch("https://roxiler-interviews.s3.amazonaws.com/product_transaction.json");
    return await response.json();
    //console.log(response);
}
//getData();

app.get('/get',async (req,res)=>{
    const data = await getData();
    if(data){
        console.log("Request processed");
        res.json(data);
        console.log(data);
    }else{
        res.status(404).send("Data not found")
        console.log("Req not processed")
    }
    
})

app.listen(5000, ()=> { console.log("Server Started on Port 5000") })