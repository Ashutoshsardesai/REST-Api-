const express=require("express")
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
const todoRoutes=require('./routes/POroutes.js')
app.use('/api/PO',todoRoutes)

app.get('/',(req,res)=>
{
    res.send("GET")
})



app.listen(5000,()=>
{
    console.log("Server started on port 5000")
})