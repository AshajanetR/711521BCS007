import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
app.use(bodyParser.json())

const port =3000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE0NTMxLCJpYXQiOjE3MTIyMTQyMzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE1YjA0ZGFlLThkZmQtNGI3YS04MjI5LTE4MTY4MzhkOTNjMCIsInN1YiI6ImtpdC4yNS4yMWJjczAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImE1YjA0ZGFlLThkZmQtNGI3YS04MjI5LTE4MTY4MzhkOTNjMCIsImNsaWVudFNlY3JldCI6IlpiaE9uQ1VYdnZZQU5mSEYiLCJvd25lck5hbWUiOiJBc2hhamFuZXQgUiIsIm93bmVyRW1haWwiOiJraXQuMjUuMjFiY3MwMDdAZ21haWwuY29tIiwicm9sbE5vIjoiNzExNTIxQkNTMDA3In0.AxnHP6YFPE_Jmv_Jf7Fr8jB4MxAJ8F-CoI5m0VWrLeE";
app.get("/",(req,res)=>{
    res.send("hellooo");
})
app.get("/data",(req,res)=>{
    axios
    .get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((response)=>{
        const j=response.data;
        res.json(j);
    })
    
})

app.listen(port,()=>{
    console.log(`running in port ${port}`);
})