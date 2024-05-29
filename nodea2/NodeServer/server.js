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
    }
})

app.listen(PORT, hostName,()=>{
    console.log(`server started at http://${hostName}:${PORT}`);
})