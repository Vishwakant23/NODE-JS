const express = require("express")
const { join } =require("path")

const app = express()

//middleware
app.use(express.static(join(__dirname,"public")))//to create a static folder
app.use(express.urlencoded({ extended:true }))//to get the url data
app.use(express.json())//to get the json data as request


app.get("/",(req,res) =>{
    // res.send("this is express server")
    res.sendFile(join(__dirname,"public","index.html"))
})

app.post("/login", (req,res) =>{
    console.log(req.body);
    res.sendFile(join(__dirname,"public","index.html"))
})

app.post("/poststudent",(req,res) =>{
    console.log(req.body);
    res.status(201).send({ msg:"Data received" })
})

app.get("/getstudent", (req,res) =>{
    let student = { name:"xyz",email:"x@g.com",mobile:7658493 }
    res.status(200).json(student)

})

// app.get("/css/index.css",(req,res) =>{
//     res.sendFile(join(__dirname,"public","css","index.css"))
// })



app.listen(7000,"127.0.0.7", () =>{
    console.log(`server running at http://127.0.0.7:7000`);
})