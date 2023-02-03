import express from "express";
import products from "./data/Products.js"
const app=express();
app.get("/api/products", (req,res)=>{
    res.json(products);
})
app.get("/api/:category", (req,res)=>{
    const product= products.filter((p)=>p.category==req.params.category);
    res.json(product)
})

app.get("/", (req,res)=>{
    res.send('api is running...');
})




app.listen(5000,console.log('server running 6000....'))
