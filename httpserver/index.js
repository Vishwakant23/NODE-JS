 let http = require("http")
 let fs = require("fs")

 let server = http.createServer((req, res) =>{
    console.log(req.url, req.mathod);
    if (req.url == "/"){
        let data = fs.readFileSync ("./pages/Navbar.html", "utf-8")
        res.write(data)
        // res.write("<h1>Hello from node js server</h1>")
        res.end()
    }
    if(req.url == "/about"){
        res.write("<h1><marquee> About page</marquee></h1>")
        res.end()
    }
    if (req.url == "/css/Home.css"){
        let data = fs.readFileSync("./pages/css/Home.css", "utf-8")
        res.write(data)
        res.end()
    }
    if (req.url == "/pages/Nvabar.html"){
        let data = fs.readFileSync("./pages/Navbar.html", "utf-8")
        res.write(data)
        res.end()
    }


   


 })

 server.listen(8000, "127.0.0.8", () =>{
    console.log("server started at http://127.0.0.8:8000");
 })