require("dotenv").config();
const express = require("express");

const app=express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/api", (req,res) => {
    res.send("To Do List");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});