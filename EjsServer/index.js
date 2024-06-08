const express=require("express")
const {join}=require("path")

 const app=express()
 const ejs=require("ejs")

 app.set("view engine","ejs")
  
 app.use(express.static(join(__dirname,"views")))

 app.get("/",(req,res)=>{
    let user={name:"Vishwakant",age:24,address:"Bangalore",
        favFoods:["icecream","mango"]
       
    }
    res.render("Index",user)
 })

  app.get("/about",(req,res)=>{
    res.render("About",{message:"HELLO FROM SERVER"})
  })
  app.get("/contact",(req,res)=>{
    res.render("contact",{message:"Hello From contact page"})
  })
  app.get("/home",(req,res)=>{
    res.render("home",{message:"Hello From Home Page"})
  })
  app.get("/login",(req,res)=>{
    res.render("login",{message:"Hello From Login Page"})
  })


 app.listen(4000,"127.0.0.4",()=>{
    console.log(`server running at  http://127.0.0.4:4000`);
 })