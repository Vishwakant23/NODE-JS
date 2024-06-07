const express = require("express")
const path =require("path")

const app = express()

app.get("/",(req,res) =>{
    // res.send("<h1>hello</h2>")
    res.sendFile(path.join(__dirname,"public","pages","Home.html"))

})
app.get("/about",(req,res) =>{
    // res.send("<h1>hey</h2>")
    res.sendFile(path.join(__dirname,"public","pages","About.html"))
})
app.get("/navcss",(req,res) =>{
    // res.send("<h1>hey</h2>")
    res.sendFile(path.join(__dirname,"public","css","Navbar.css"))
})


app.listen(2000,"127.0.0.2",()=>{
    console.log("server running at http://127.0.0.2:2000");
})