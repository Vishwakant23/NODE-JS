const http=require("http")
const fs=require("fs")
const path=require("path")
const PORT=5000;
const hostName="127.0.0.5";

const app=http.createServer((req,res)=>{
    const{method,url}=req
    if(method=="GET"){
        if(url=="/"){
            let data=fs.readFileSync(path.join(__dirname,"public", "pages", "Home.html"), "utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/homecss"){
            let data=fs.readFileSync(path.join(__dirname,"public", "css", "Home.css"), "utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/wallpaper"){
            let data=fs.readFileSync(path.join(__dirname,"public","assets","img.avif"))
            res.write(data)
            res.end()
        }
        if (url =="/getuser"){
            let users= fs.readFileSync(path.join(__dirname, "user.json"), "utf-8")
            res.writeHead(200, {"content-type" : "application/json"})
            res.write(users)
            res.end()
        }
      
    }
    if(method=="POST"){
        if(url=="/user"){
            req.on("data", (data)=>{
                let user=JSON.parse(data.toString())
                // console.log(user);
                let users=JSON.parse(fs.readFileSync(path.join(__dirname, "user.json"), "utf-8"))
                users.push(user)
                fs.writeFileSync(path.join(__dirname, "user.json"), JSON.stringify(users))
                res.writeHead(201, {"content-type": "application/json"})
                res.write(JSON.stringify({message: "Data stored successfully"}))
                res.end()
            })
        }
    }

})

app.listen(PORT, hostName,()=>{
    console.log(`server started at http://${hostName}:${PORT}`);
})