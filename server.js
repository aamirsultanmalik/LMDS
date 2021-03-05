const express= require("express");
const app= express();

app.get('/',(req,res)=>{
    res.send("Hello Aamir");
})
app.listen(3000);