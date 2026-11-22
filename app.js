const express = require('express');
const app = express();

app.set("view engine","ejs")

app.get("/",(req,resp)=>{
    resp.render("home")
})

app.get("/add",(req,resp)=>{
    const data = 10+20
    resp.render("add")
})

app.get("/emp",(req,resp)=>{
const data = [
    {email:"tom@gmail.com",age:22,username:"Tom",password:"tom@123"},
    {email:"jerry@gmail.com",age:32,username:"Jerry",password:"jerry@123"},
    {email:"jack@gmail.com",age:24,username:"Jack",password:"jack@123"},
    {email:"heinry@gmail.com",age:30,username:"Heinry",password:"heinry@123"},
    {email:"tim@gmail.com",age:28,username:"Tim",password:"tim@123"},
  ]  
  resp.render("emp")
})

app.listen(4000,()=>{
    console.log("running...");
})