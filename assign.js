const express=require("express");
const app=express();
const path=require("path");
app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"u.html"));
})
app.listen(300n8 ,()=>{
    console.log("server is running");
})