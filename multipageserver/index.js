let http = require("http")
let fs = require("fs")
let path = require("path")

let server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.method == "GET") {
        if (req.url === "/") {
            let data = fs.readFileSync(path.join(__dirname, "public", "pages", "Home.html"), "utf-8")
            res.writeHead(200, {"content-type" : "text-html", "message": "Hello developer"})
            res.write(data)
            res.end()
        }
        if (req.url === "/about") {
            let data = fs.readFileSync(path.join(__dirname, "public", "pages", "About.html"), "utf-8")
            res.write(data)
            res.end()
        }
        if (req.url === "/signup") {
            let data = fs.readFileSync(path.join(__dirname, "public", "pages", "Signup.html"), "utf-8")
            res.write(data)
            res.end()
        }
        if (req.url == "/navbarcss") {
            let data = fs.readFileSync(path.join(__dirname, "public", "css", "Navbar.css"), "utf-8")
            res.write(data)
            res.end()
        }
        if (req.url == "/student") {
            let students = fs.readFileSync(path.join(__dirname, "student.json"), "utf-8")
            res.write(students)
            res.end()
        }
    }
    if (req.method == "POST") {
        if (req.url == "/postuser") {
            req.on("data", (data) => {
                let user = JSON.parse(data.toString())
                console.log(user);
                if (user) {
                    res.writeHead(202 , {"content-type" : "application/json"})
                    res.write(JSON.stringify({ msg: "Data received" }))
                    res.end()
                }
            })
        }
    }
})

server.listen(7000, "127.0.0.7", () => {
    console.log("server running in http://127.0.0.7:7000");
})
